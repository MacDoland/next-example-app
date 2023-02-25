import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { cachedFetch } from "utils/cachedFetch";
import { PokeCard } from "@/components/PokeCard";

export async function getServerSideProps(context) {
  const pokemon = await cachedFetch(
    "https://pokedex-api.azurewebsites.net/api/pokemons/0/50"
  );

  return {
    props: {
      pokemon,
    }, // will be passed to the page component as props
  };
}

export default function Home({ pokemon }) {

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
        {pokemon.data.map((item) => {
          return <PokeCard pokemon={item} />;
        })}
      </main>
    </>
  );
}
