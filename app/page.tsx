import React from "react";
import styles from "./page.module.css";


// for Components
import { MainBg } from "./Components/MainBg/MainBg";
import Wrapper from "./Components/Wrapper/Wrapper";
import { Custom } from "./Components/Custom/Custom";
import { Aboutus } from "./Components/Aboutus/Aboutus";
import { WhoWeAre } from "./Components/WhoWeAre/WhoWeAre";
import { WhatWeDo } from "./Components/WhatWeDo/WhatWeDo";

export const metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <>
      <MainBg />




      <Wrapper>
        <Aboutus />


        {/* For Custom */}
        <Custom />
        <WhoWeAre />
        <WhatWeDo />


      </Wrapper>

    </>
  );
}
