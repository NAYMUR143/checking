import { useEffect, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Stamp from "../components/Stamp/Stamp";

// import DynamicHome from "../components/DynamicHome";
const DynamicHome = dynamic(() => import("../components/DynamicHome"));



export default function Home() {

  // const pages = [<Swissh />, <Stamp />, <Win95 />]
  // const random = Math.floor(Math.random() * 3)

  // const homePage = pages[random];

  return (
    <>
      <Head>
        <title>mdla</title>
        <meta
          name="description"
          content="MDLA is building a new image search engine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* { homePage } */}
      <DynamicHome />
    </>
  );
}
