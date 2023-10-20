import React from 'react';
import Navbar from '../components/navbar/navbar';
import Dropdown from '../components/dropdown/dropdown';
import BlogSidebar from '../components/blogSideBar/blogSideBar';
import BlogItem from '../components/blogItem/blogItem';
import { items } from '../components/blogItem/blogItem';
import Footer from '../components/footer/footer';
import { AppBar, Toolbar, Typography, Box, Pagination } from '@mui/material';

const Blog = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalItems = items.length; // This should be the total number of items you have (you can fetch this number dynamically if needed)
  const totalPages = Math.ceil(totalItems / 12); // Assuming 12 items per page

    const handlePageChange = (event: any, value: React.SetStateAction<number>) => {
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
    <Dropdown />
  </Box>
        
        <Box display="flex">
  <Box flex={1} ml={16}>
    <BlogSidebar />
  </Box>
  <Box flex={3} mr={16}>
    <BlogItem  currentPage={currentPage}/>
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