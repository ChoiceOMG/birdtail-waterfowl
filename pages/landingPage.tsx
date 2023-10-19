import React, { useState } from "react";
import { Typography, Paper, Grid, Link } from "@mui/material";
import ctaList from "../components/cta/cta";
import Carousel from "../components/carousel/carousel";
import ImageGallery from "../components/imageGallery/imageGallery";
import "../styles/landingPage.module.css"
import Footer from "../components/footer/footer";

interface CtaItem {
  link: string;
  title: string;
  content: string;
  videoUrl: string;
}

const LandingPage: React.FC = () => {
  const handleVideoClick = (videoElement: HTMLVideoElement) => {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  return (
    <div>
      {ctaList.map((section: CtaItem, index: number) => (
        <div key={index} className="section-container">
          <Grid key={index} container spacing={2}>
            <Grid item xs={6} className="content-column">
              {/* Left column for content */}
              <Link href={section.link}>
                <Typography variant="h5" className="section-title">
                  {section.title}
                </Typography>
              </Link>
              <Paper className="content-paper">
                <Typography variant="body1">{section.content}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} className="video-column">
              {/* Right column for the video */}
              <video
                onClick={(e) => handleVideoClick(e.target as HTMLVideoElement)}
                controls
                width="100%"
                height="auto"
                className="section-video"
              >
                <source src={section.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
          </Grid>
        </div>
      ))}
      <Carousel />
      <ImageGallery /> 
      <Footer />
    </div>
  );
};

export default LandingPage;
