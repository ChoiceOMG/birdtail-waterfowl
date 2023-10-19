import { ImageList, ImageListItem, Link } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const itemData = [
  { img: '/imageGallery/img.jpg', title: 'Image 1' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  { img: '/imageGallery/img.jpg', title: 'Image 2' },
  
  
  // Add more image items here...
];
export default function ImageGallery() {
  return (
<ImageList sx={{ width: '100%', height: 'auto' }} cols={6} gap={8}>
  {itemData.slice(0, 18).map((item) => (
    <ImageListItem
      key={item.img}
      sx={{ width: '16.6666%' }}
    >
      <Link href="/your-link-here">
        <img
          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x 328w, ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x 656w`}
          src={`${item.img}?w=164&h=164&fit=crop&auto=format 164w, ${item.img}?w=164&h=164&fit=crop&auto=format 328w`}
          alt={item.title}
          loading="lazy"
          style={{ width: '100%' }}
        />
      </Link>
    </ImageListItem>
  ))}
</ImageList>

  )}