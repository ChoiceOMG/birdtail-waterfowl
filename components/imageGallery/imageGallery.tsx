import { Box, ImageList, ImageListItem, Link, Tooltip } from "@mui/material";
import React from "react";
import Image from "next/image";

const itemData = [
  { img: "/imageGallery/img.jpg", title: "Embracing the Wild" },
  {
    img: "/imageGallery/img.jpg",
    title: "It’s Time! Waterfowl Season Now Open in Manitoba",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "What to know about the upcoming fall waterfowl season",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "Why Manitoba is one of the world’s best hunting destinations",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "What the duck? Manitoba’s new licensing regulations in effect",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "What to pack for your hunting retreat",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "Spring is a great time to get yourself a gobbler",
  },
  { img: "/imageGallery/img.jpg", title: "March Update and a Wolf Hunt" },
  {
    img: "/imageGallery/img.jpg",
    title: "Keeping the hunt safe: tips for waterfowling",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "A brief history of waterfowl hunting",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "Guided Waterfowl Hunts ARE NOT Created Equal (Take Our Advice)",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "Why I’m booking a hunting package this year",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "Plug into nature: hunting offers opportunities to connect.",
  },
  { img: "/imageGallery/img.jpg", title: "Covid Update and a Flintlock Lynx" },
  {
    img: "/imageGallery/img.jpg",
    title: "January 2022 Covid Update with an announcement",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "Birdtail Waterfowl and Dave Smith Decoys",
  },
  {
    img: "/imageGallery/img.jpg",
    title:
      "November 5th, 2021 Update – New Travel Environment for Canadian Hunting Trips",
  },
  {
    img: "/imageGallery/img.jpg",
    title: "Next level waterfowl – Thank you Canada Customs Agents",
  },

  // Add more image items here...
];

export default function ImageGallery() {
  return (
    <Box
      sx={{
        backgroundColor: "#3E6B44",
        minHeight: "50vh",
        padding: "20px",
        marginBottom: "24px",
      }}
    >
      {" "}
      {/* This covers the entire section */}
      <ImageList
        sx={{
          width: "100%",
          height: "auto",
          margin: 0,
        }}
        cols={6}
        gap={8}
      >
        {itemData.slice(0, 18).map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              width: "100%", // Allow each item to fill its space within the column
              height: "auto",
              "& img": {
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <Tooltip title={item.title} placement="bottom">
              <Box>
                <Link href="/your-link-here" underline="none">
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x 328w, ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x 656w`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format 164w, ${item.img}?w=164&h=164&fit=crop&auto=format 328w`}
                    alt={item.title}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%", // Makes images take up the full space
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </Link>
              </Box>
            </Tooltip>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
