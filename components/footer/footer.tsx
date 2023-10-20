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
    <footer  style={{ backgroundColor: '#081526', color: 'white' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} style={{ backgroundColor: '#081526' ,color: 'white'}}>
              <div style={{ textAlign: 'center' }}>
                <Link href="/"> 
                  <img src="/your-image.png" alt="Home" style={{ width: '80px', height: '80px' }} />
                </Link>
              </div>
              <Typography variant="body2" paragraph>
              When talking about waterfowl hunting in Manitoba the
               conversation always swings in the
               direction of the opportunities we have,
                which leaves us looking spoiled, which we are.
                Manitoba is the Canadian hunting destination.
              </Typography>
              
              <Link href="/contact"> {/* Link to the contact page */}
                <Button variant="outlined" style={{ backgroundColor: '#3E6B44', color: 'white' }}>Contact Us</Button>
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
              
              </div>
              <Typography variant="body2" paragraph>
              Birdtail Waterfowl Inc.
               Write to:
               28 Turcotte Cove
              Winnipeg, Manitoba R3R 3V9 Canada
              </Typography>
             
              <Typography variant="body2" paragraph>
              A Canadian Duck Hunting Lodge and Outfitter.
              </Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} style={{ backgroundColor: '#081526', color: 'white' }}>
              <Typography variant="h6">Industry Involvement</Typography>
              <p>Past President the Manitoba Lodges and Outfitters Association</p>
              <p>Manitoba Lodges and Outfitters Association waterfowl committee chair</p>
              <p>Licensing Advisory Committee board of appeal</p>
              <p>Past board member of Travel Manitoba</p>
              <p>Past member of the Provincial Tourism Strategy Steering Committee</p>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Paper elevation={0} style={{ backgroundColor: '#081526', color: 'white' }}>
              <Typography variant="h6">Column 3</Typography>
              <p><Link href="/section1">Manitoba Lodges and Outfitters Association</Link></p>
              <p><Link href="/section2">Nature Enhancement Fund</Link></p>
              <p><Link href="/section3">Ducks Unlimited</Link></p>
              <p><Link href="/section4">Delta Waterfowl</Link></p>
              <p><Link href="/section5">Manitoba Conservation Officers Association</Link></p>
              <p><Link href="/section6">Manitoba Gun Dog Association</Link></p>
              <p><Link href="/section7">Safari Club International</Link></p>
              <p>Become a<Link href="/section8">Manitoba Master8</Link></p>
              <Link href="/logo-link"><img src="logo.png" alt="Logo" /></Link>
            </Paper>
          </Grid>
        </Grid>
        <Divider style={{ ...fullLineWidth, backgroundColor: 'white' }} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p>&copy; 2019 Birdtail Waterfowl Inc. All rights reserved. <Link href="/privacy-policy"  style={{ color: 'white' }}>Privacy Policy</Link>.</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>Made by <Link href="/choice-omg" style={{ color: 'white' }}>ChoiceOMG</Link></p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
