"use client";
import React, { useEffect } from "react";
import { getSingleCategory, getCategories } from "@/services/movie";
import usePopularMovieCategoryStore from "@/store/popularMovieCategory";
import usePaginationStore from "@/store/pagination";
import MoviesSection from "@/src/components/movies-section";
import Categories from "@/src/components/categories/index";

const Category = ({ params }) => {
  const { selectedCategory, setSelectedCategory, setGenres, genres } =
    usePopularMovieCategoryStore();
  const { page, setPage, setTotalPages } = usePaginationStore();

  const fetchCategories = async () => {
    try {
      const { genres: categories } = await getCategories();
      setGenres(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      if (params?.category?.length > 0) {
        const {
          results,
          page: fetchedPage,
          total_pages,
        } = await getSingleCategory(params?.category, page);
        setPage(fetchedPage);
        setTotalPages(total_pages);
        setSelectedCategory({ id: params?.category, movies: results });
      }
    };

    fetchCategory();
  }, [params?.category, page]);

  return (
    <div>
      <Categories categories={genres} />
      {selectedCategory?.movies?.length > 0 && (
        <MoviesSection
          title={
            genres.find((category) => category.id == selectedCategory.id)?.name
          }
          movies={selectedCategory.movies}
        />
      )}
    </div>
  );
};

export default Category;
