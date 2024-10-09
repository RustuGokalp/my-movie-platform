"use client";
import React, { useEffect } from "react";
import { getSingleSerieCategory, getTVCategories } from "@/services/movie";
import usePopularSeriesCategoryStore from "@/store/popularSerieCategory";
import usePaginationStore from "@/store/pagination";
import SeriesSection from "@/src/components/series-section";
import Categories from "@/src/components/categories/index";

const Category = ({ params }) => {
  const { selectedCategory, setSelectedCategory, setTvGenres, tvGenres } =
    usePopularSeriesCategoryStore();
  const { page, setPage, setTotalPages } = usePaginationStore();

  const fetchCategories = async () => {
    try {
      const { genres: categories } = await getTVCategories();
      setTvGenres(categories);
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
        } = await getSingleSerieCategory(params?.category, page);
        setPage(fetchedPage);
        setTotalPages(total_pages);
        setSelectedCategory({ id: params?.category, movies: results });
      }
    };

    fetchCategory();
  }, [params?.category, page]);

  return (
    <div>
      <Categories categories={tvGenres} />
      {selectedCategory?.movies?.length > 0 && (
        <SeriesSection
          title={
            tvGenres.find((category) => category.id == selectedCategory.id)
              ?.name
          }
          series={selectedCategory?.movies}
        />
      )}
    </div>
  );
};

export default Category;
