import React from "react";
import styles from "./page.module.css";


// for Components
import { MainBg } from "./Components/MainBg/MainBg";
import { FutureExperience } from "./Components/FutureExperience/FutureExperience";
import Wrapper from "./Components/Wrapper/Wrapper";
import { Features } from "./Components/Features/Features";
import { Custom } from "./Components/Custom/Custom";
import { VideoSection } from "./Components/VideoSection/VideoSection";

export const metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <>
      <MainBg />

      <div className={styles.CustomMainBg}>
        <img src="/assets/mainImg.png" alt="" />
      </div>


      <Wrapper>
        <FutureExperience />
        <Features />

        {/* For Custom */}
        <Custom />

        {/* For Video Section */}
        <VideoSection />
      </Wrapper>

    </>
  );
}
