import React from "react";
import Navbar from "../../components/navbar/navbar";
import Category from "../../components/blog/category";
import SectionWithDescription from "../../components/blog/sideBarArticles";
import BlogItem from "../../components/blog/blogItem";
import { items } from "../../components/blog/blogItem";
import Footer from "../../components/footer/footer";
import { AppBar, Toolbar, Typography, Box, Pagination } from "@mui/material";

const Blog = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalItems = items.length; // This should be the total number of items you have (you can fetch this number dynamically if needed)
  const totalPages = Math.ceil(totalItems / 12); // Assuming 12 items per page

  const handlePageChange = (
    event: any,
    value: React.SetStateAction<number>
  ) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Navbar />
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="white">
            Waterfowl Hunting Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box flex={1} ml={16} mb={3} mt={6}>
        <Category />
      </Box>

      <Box display="flex">
        <Box flex={1} ml={16}>
          <SectionWithDescription />
        </Box>
        <Box flex={3} mr={16}>
          <BlogItem currentPage={currentPage} />
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" my={3}>
        <Pagination
          count={totalPages}
          page={currentPage}
          color="primary"
          onChange={handlePageChange}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default Blog;
