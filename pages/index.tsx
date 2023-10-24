import Navbar from "components/navbar/navbar";
import "../styles/Home.module.css";
import Blog from "./blog";
import LandingPage from "./landingPage";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
};

export default Home;
