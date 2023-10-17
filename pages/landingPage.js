import React, { useState } from "react";
import { Typography, Paper, Grid, Link } from "@mui/material";
import ctaList from "@/components/cta/cta";
import styles from "@/styles/landingPage.module.css";
import carousel, { carouselItems } from "@/components/carousel/carousel";

const LandingPage = () => {
  const handleVideoClick = (videoElement) => {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };
  return (
    <div>
      {ctaList.map((section, index) => (
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
                onClick={(e) => handleVideoClick(e.target)}
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
      <carousel />
    </div>
  );
};

export default LandingPage;
