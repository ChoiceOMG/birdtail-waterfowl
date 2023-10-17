import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LandingPage from "./landingPage";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <LandingPage />
    </>
  );
}
