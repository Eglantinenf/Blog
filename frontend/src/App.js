import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSkeleton from "./components/LoadingSkeleton";
import PostCard from "./components/PostCard";
import Pagination from "./components/Pagination";
import "./App.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/blog/posts/");
        setPosts(response.data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleToggleExpand = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  if (isLoading) {
    return <LoadingSkeleton postsPerPage={postsPerPage} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">
          Blog Posts
        </h1>

        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {currentPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                isExpanded={expandedPostId === post.id}
                onToggleExpand={() => handleToggleExpand(post.id)}
              />
            ))}
          </AnimatePresence>
        </div>

        <Pagination
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          onPaginate={handlePaginate}
        />
      </div>
    </div>
  );
};

export default Blog;
