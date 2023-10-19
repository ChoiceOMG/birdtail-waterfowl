import React from 'react';
import { Container, Grid, Paper, Typography, Link, Button, Divider } from '@mui/material';

const fullLineWidth = {
    width: '100%',
    background: '#000', 
    height: '1px',
    margin: '0'
  };

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0}>
              <div style={{ textAlign: 'center' }}>
                <Link href="/"> {/* Link to the home page */}
                  <img src="/your-image.png" alt="Home" style={{ width: '80px', height: '80px' }} />
                </Link>
              </div>
              <Typography variant="body2" paragraph>
                This is the content for the first column of the footer.
              </Typography>
              <Typography variant="body2" paragraph>
                This is another line of description.
              </Typography>
              <Typography variant="body2" paragraph>
                And one more line of description.
              </Typography>
              <Typography variant="body2" paragraph>
                Here's another description line.
              </Typography>
              <Typography variant="body2" paragraph>
                The final line of description.
              </Typography>
              <Link href="/contact"> {/* Link to the contact page */}
                <Button variant="outlined">Contact Us</Button>
              </Link>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://facebook.com">
                  <img src="/facebook-logo.png" alt="Facebook" style={{ width: '30px', height: '30px', margin: '10px' }} />
                </Link>
                <Link href="https://twitter.com">
                  <img src="/twitter-logo.png" alt="Twitter" style={{ width: '30px', height: '30px', margin: '10px' }} />
                </Link>
                <Link href="https://twitter.com">
                  <img src="/twitter-logo.png" alt="Twitter" style={{ width: '30px', height: '30px', margin: '10px' }} />
                </Link>
                <Link href="https://twitter.com">
                  <img src="/twitter-logo.png" alt="Twitter" style={{ width: '30px', height: '30px', margin: '10px' }} />
                </Link>
                {/* Add more social media links and logos here */}
              </div>
              <Typography variant="body2" paragraph>
                More description here.
              </Typography>
              <Typography variant="body2" paragraph>
                Additional details.
              </Typography>
              <Typography variant="body2" paragraph>
                Extra content.
              </Typography>
              <Typography variant="body2">
                Last line of description.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0}>
              <Typography variant="h6">Column 2</Typography>
              <p>Section 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Section 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Section 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <p>Section 4: Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
              <p>Section 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Paper elevation={0}>
              <Typography variant="h6">Column 3</Typography>
              <p><Link href="/section1">Section 1: Link to Section 1</Link></p>
              <p><Link href="/section2">Section 2: Link to Section 2</Link></p>
              <p><Link href="/section3">Section 3: Link to Section 3</Link></p>
              <p><Link href="/section4">Section 4: Link to Section 4</Link></p>
              <p><Link href="/section5">Section 5: Link to Section 5</Link></p>
              <p><Link href="/section6">Section 6: Link to Section 6</Link></p>
              <p><Link href="/section7">Section 7: Link to Section 7</Link></p>
              <p><Link href="/section8">Section 8: Link to Section 8</Link></p>
              <Link href="/logo-link"><img src="logo.png" alt="Logo" /></Link>
            </Paper>
          </Grid>
        </Grid>
        <Divider style={fullLineWidth} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p>&copy; 2019 Birdtail Waterfowl Inc. All rights reserved. <Link href="/privacy-policy">Privacy Policy</Link>.</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>Made by <Link href="/choice-omg">ChoiceOMG</Link></p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
