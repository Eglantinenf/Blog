import React from "react";
import { motion } from "framer-motion";

const Pagination = ({ totalPosts, postsPerPage, currentPage, onPaginate }) => {
  const paginationVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#2563EB",
      color: "#FFF",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <div className="flex justify-center mt-12">
      {Array.from({ length: Math.ceil(totalPosts / postsPerPage) }, (_, i) => (
        <motion.button
          key={i + 1}
          variants={paginationVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => onPaginate(i + 1)}
          className={`mx-2 px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-200 ${
            currentPage === i + 1
              ? "bg-blue-500 text-white"
              : "bg-blue-800 text-blue-100 hover:bg-blue-700"
          }`}
        >
          {i + 1}
        </motion.button>
      ))}
    </div>
  );
};

export default Pagination;
