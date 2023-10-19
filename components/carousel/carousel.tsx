import { Paper, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width : '25%'
}));

const ItemContent = ({ title, imageSrc, description, linkTo }) => {
  const theme = useTheme(); // Get the theme using useTheme

  return (
    <div>
      <img src={imageSrc} alt={title} style={{ width: '100%' }}/>
      <Typography variant="h6" style={{ ...theme.typography.body2 }}>{title}</Typography>
      <Typography style={{ ...theme.typography.body2 }}>{description}</Typography>
      <Link href={linkTo}>Learn More</Link>
    </div>
  );
};

export default function ResponsiveStack() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
          <ItemContent
            title="Item 1"
            imageSrc="/imageGallery/img.jpg"
            description="Description for Item 1."
            linkTo="/link1"
          />
        </Item>
        <Item>
          <ItemContent
            title="Item 2"
            imageSrc="/imageGallery/img.jpg"
            description="Description for Item 2."
            linkTo="/link2"
          />
        </Item>
        <Item>
          <ItemContent
            title="Item 3"
            imageSrc="/imageGallery/img.jpg"
            description="Description for Item 3."
            linkTo="/link3"
          />
        </Item>
        <Item>
          <ItemContent
            title="Item 3"
            imageSrc="/imageGallery/img.jpg"
            description="Description for Item 3."
            linkTo="/link3"
          />
        </Item>
      </Stack>
    </div>
  );
}
