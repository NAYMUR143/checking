import Head from "next/head";
import dynamic from "next/dynamic";
const Stamp = dynamic(() => import("../components/Stamp/Stamp"));

export default function Home() {
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
      <Stamp />
    </>
  );
}
