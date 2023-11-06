import Hero from "../components/hero";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/styles.module.css";
import Services from "../components/services";
import Portals from "../components/Important_portal";
import Studying from "../components/Studying_section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Collezian</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="dark:bg-gray-100">
        <Hero />
        <Portals/>
        {/* <Services/> */}
        <Studying/>
      </main>
    </>
  );
}
