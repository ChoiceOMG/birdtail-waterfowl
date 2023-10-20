import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const pageUrls: string[] = ['/Home', '/The Birdtail Experience', '/About Us', '/What We Hunt', '/Plan Your Guided Waterfowl Hunt', '/Duck Hunting Lodges and Amenities', '/Other Activities', '/Blog', '/Contact Us'];

const Navbar: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:960px)');

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2b2b2b' }}>
      <Container maxWidth="xl">
        <Toolbar>
          {isSmallScreen ? (
            <Box sx={{ flexGrow: 1 }}>
              {/* Placeholder for logo or other elements on the left */}
            </Box>
          ) : (
            <>
              {[<TwitterIcon />, <FacebookIcon />, <LinkedInIcon />, <InstagramIcon />].map((icon, index) => (
                <Link href="#" passHref key={index}>  {/* You can replace # with your actual link */}
                  <IconButton color="inherit" sx={{ ml: 1 }}>
                    {icon}
                  </IconButton>
                </Link>
              ))}
            </>
          )}
          {isSmallScreen ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="User Profile">
                  <IconButton sx={{ ml: 2, p: 0 }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </Box>
              {pageUrls.map((page) => (
                <Link key={page} href={page} passHref>
                  <Button component="a" sx={{ mx: 1, color: 'white' }}>
                    {page.replace('/', '')}
                  </Button>
                </Link>
              ))}
            </Box>
          ) : (
            <>
              <Box mt={1} sx={{ flexGrow: 1 }}>
                {pageUrls.map((page) => (
                  <Link key={page} href={page} passHref>
                    <Button component="a" sx={{ mx: 1, color: 'white' }}>
                      {page.replace('/', '')}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Tooltip title="User Profile">
                <IconButton sx={{ ml: 2, p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
