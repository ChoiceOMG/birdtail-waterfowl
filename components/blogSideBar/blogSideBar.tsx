import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const sections = [
  {
    title: 'Embracing the Wild',
    description: 'Manitoba’s fall hunting season is an incredible display of nature’s transformation. This area comes alive with colour as the leaves change and the temperatures drop. ',
    link: '/section1-link',
  },
  {
    title: 'It’s Time! Waterfowl Season Now Open in Manitoba',
    description: 'Let’s go. Summer’s warmth is giving way to crisp autumn air, and that means that avid waterfowl hunters in Western Canada are ready for the',
    link: '/section2-link',
  },
  {
    title: 'What to know about the upcoming fall waterfowl season',
    description: 'Starting in September, it’s open season for most of Manitoba’s waterfowl. The birds have finished raising their young and are ready to migrate. This means',
    link: '/section3-link',
  },
  {
    title: 'Why Manitoba is one of the world’s best hunting destinations',
    description: 'Canada—and Manitoba in particular—is a world-class hunting destination. Keep reading to find out why we think this is where you should book your next hunting ',
    link: '/section4-link',
  },
  {
    title: 'What the duck? Manitoba’s new licensing regulations in effect',
    description: 'Apple just announced that there will be fewer ‘ducks’ in our texts, with their latest update to the autocorrect feature that will finally let us',
    link: '/section5-link',
  },
];

const SectionWithDescription = () => {
  return (
    <div>
      {sections.map((section, index) => (
        <Box key={index} my={2}>
          <Typography variant="h5">
            <Link href={section.link}>{section.title}</Link>
          </Typography>
          <Typography variant="body1">
            {section.description}
            <Link href={section.link}>Read more</Link>
          </Typography>
        </Box>
      ))}
    </div>
  );
};

export default SectionWithDescription;
