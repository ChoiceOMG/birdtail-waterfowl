import React from "react";
import { Box, Typography, Link, Container, Paper, Grid } from "@mui/material";

type BlogItemProps = {
  currentPage: number;
};

interface ItemProps {
  link: string;
  image: string;
  title: string;
  description: string;
}
//articles
export const items = [
  {
    title: "Item 1",
    description: "This is a short description of Item 1. Read more...",
    image: "/path-to-image1.jpg",
    link: "/item1-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },

  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
  {
    title: "Item 2",
    description: "This is a short description of Item 2. Read more...",
    image: "/path-to-image2.jpg",
    link: "/item2-link",
  },
];

const ITEMS_PER_PAGE = 12;

const BlogItem: React.FC<BlogItemProps> = ({ currentPage }) => {
  // Determine the start and end indices for the current pageconst
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  // Slice the items array to get only the items for the current page
  const itemsToShow = items.slice(startIndex, endIndex);

  return (
    <Container>
      <Grid container spacing={3}>
        {itemsToShow.map((item: ItemProps, index: number) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box mt={2}>
              <Paper elevation={3}>
                <Link href={item.link}>
                  <img src={item.image} alt={item.title} width="100%" />
                </Link>
                <Typography variant="h6">
                  <Link href={item.link}>{item.title}</Link>
                </Typography>
                <Typography variant="body1">
                  {item.description} <Link href={item.link}>Read more</Link>
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogItem;
