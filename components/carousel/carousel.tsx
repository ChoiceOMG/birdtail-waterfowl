import { Paper, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useTheme } from '@mui/material/styles'; // Import useTheme

interface ItemContentProps {
  title: string;
  imageSrc: string;
  description: string;
  linkTo: string;
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width : '25%'
}));

const ItemContent: React.FC<ItemContentProps> = ({ 
  title, 
  imageSrc, 
  description, 
  linkTo 
}: ItemContentProps) => {
  const theme = useTheme();  

  return (
    <div>
      <Link href={linkTo} underline="none">
        <img src={imageSrc} alt={title} style={{ width: '100%', cursor: 'pointer' }}/>
      </Link>
      <Typography variant="h6" style={{ ...theme.typography.body2, fontWeight: 'bold',marginTop: theme.spacing(2) }}>
        <Link href={linkTo} underline="always" style={{ color: theme.palette.text.primary, cursor: 'pointer' }}>
          {title}
        </Link>
      </Typography>
      <Typography style={{ ...theme.typography.body2,marginTop: theme.spacing(2) }}>
        {description}
      </Typography>
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
            title="About Us"
            imageSrc="/imageGallery/img.jpg"
            description="Guiding for waterfowl in one of the most concentrated flyways in Canada has provided me with a great waterfowl education. Working in a professional environment has taught a great deal about running a successful waterfowl operation."
            linkTo="/link1"
          />
        </Item>
        <Item>
          <ItemContent
            title="Lodging and Amenities"
            imageSrc="/imageGallery/img.jpg"
            description="6 Private cabins that accommodate 2-4 hunters

            Full Bath with Plumbing | Bunk Beds | Wifi | Bar Fridge | Electric Heat | Cedar Interior | Cozy Northern Experience"
            linkTo="/link2"
          />
        </Item>
        <Item>
          <ItemContent
            title="The Manitoba Hunting Experience"
            imageSrc="/imageGallery/img.jpg"
            description="Our goal is to deliver you the ultimate hunting or fishing experience with first class lodging at a price you can afford. Book your waterfowl hunt of a lifetime now through Birdtail Waterfowl, the best hunting outfitter in Canada!"
            linkTo="/link3"
          />
        </Item>
        <Item>
          <ItemContent
            title="Duck Hunting"
            imageSrc="/imageGallery/img.jpg"
            description="Few things in life compare to the thrill of a heart pounding duck hunt. Birdtail Waterfowl knows how to show our guests the fast paced almost frantic waves of ducks buzzing decoy spreads."
            linkTo="/link3"
          />
        </Item>
      </Stack>
    </div>
  );
}
