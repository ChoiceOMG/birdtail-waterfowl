import React, { useState } from "react";
import { Typography, Paper, Grid, Link } from "@mui/material";
import ctaList from "../components/cta/cta";
import Carousel from "../components/carousel/carousel";
import ImageGallery from "../components/imageGallery/imageGallery";
import "../styles/landingPage.module.css";
import Footer from "../components/footer/footer";

interface CtaItem {
  link?: string;
  title?: string;
  content?: string;
  videoUrl: string;
}

const getBackgroundColor = (index: number) => {
  return index % 2 === 0 ? "#081526" : "#6c757d";
};

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
          <Grid key={index} container spacing={0}>
            {index === 0 && !section.title && !section.content ? (
              // Special styling for the first item if it lacks title and content
              <Grid
                item
                xs={12}
                style={{
                  backgroundColor: "#2b2b2b",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh", // Or choose a specific height you want
                }}
              >
                <video
                  onClick={(e) =>
                    handleVideoClick(e.target as HTMLVideoElement)
                  }
                  controls
                  width="80%" // Making the video bigger by setting width to 80%
                  height="auto"
                  className="section-video"
                  style={{ display: "block" }}
                >
                  <source src={section.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Grid>
            ) : (
              <>
                <Grid
                  item
                  xs={6}
                  className="content-column"
                  style={{
                    backgroundColor: getBackgroundColor(index),
                    padding: "20px", // Add padding from the edge
                  }}
                >
                  {/* Left column for content */}
                  <Link href={section.link} underline="always">
                    <Typography
                      variant="h2"
                      className="section-title"
                      style={{ color: "white" }}
                    >
                      {section.title}
                    </Typography>
                  </Link>
                  <Typography variant="body1" style={{ color: "white" }}>
                    {section.content}
                  </Typography>
                </Grid>
                <Grid item xs={6} className="video-column">
                  {/* Right column for the video */}
                  <video
                    onClick={(e) =>
                      handleVideoClick(e.target as HTMLVideoElement)
                    }
                    controls
                    width="100%"
                    height="auto"
                    className="section-video"
                    style={{ display: "block" }}
                  >
                    <source src={section.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Grid>
              </>
            )}
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
