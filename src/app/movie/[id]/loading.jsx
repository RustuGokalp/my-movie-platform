import React from "react";
import Loading from "@/src/components/loading/index";

const MovieLoading = () => {
  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </div>
  );
};

export default MovieLoading;
