import React from "react";

const LoadingSkeleton = ({ postsPerPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
      <div className="space-y-6">
        {[...Array(postsPerPage)].map((_, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-lg shadow-2xl animate-pulse"
          >
            <div className="h-6 bg-blue-500 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-blue-500 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
