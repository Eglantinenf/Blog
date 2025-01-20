import React from "react";
import { motion } from "framer-motion";

const PostCard = ({ post, isExpanded, onToggleExpand }) => {
  const postVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={postVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 rounded-2xl shadow-2xl cursor-pointer"
      onClick={onToggleExpand}
    >
      <h2 className="text-3xl font-bold mb-4 text-white">{post.title}</h2>
      <p className="text-blue-100">
        {isExpanded
          ? post.description
          : `${post.description.split(" ").slice(0, 10).join(" ")}...`}
      </p>
      {isExpanded && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-sm text-blue-300 mt-4"
        >
          By {post.author} | Published on{" "}
          {new Date(post.publish).toLocaleDateString()}
        </motion.p>
      )}
    </motion.div>
  );
};

export default PostCard;
