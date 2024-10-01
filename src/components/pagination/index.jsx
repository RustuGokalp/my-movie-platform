"use client";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePaginationStore from "@/store/pagination";

export default function PaginationButtons() {
  const { page, setPage, totalPages } = usePaginationStore();

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Pagination
        count={totalPages > 500 ? 500 : totalPages}
        page={page}
        showFirstButton
        showLastButton
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "primary.main",
            color: "white",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      />
    </Stack>
  );
}
