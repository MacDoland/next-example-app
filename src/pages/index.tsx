import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HelloWorld, Button } from "jm-component-library";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Example NextJs Component Lib Integration</title>
        <meta
          name="description"
          content="Example NextJs Component Lib Integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HelloWorld />
        <Button>Hello!</Button>
      </main>
    </>
  );
}
