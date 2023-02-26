import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { cachedFetch } from "utils/cachedFetch";
import { PokeCard } from "@/components/PokeCard";
import pokemonData from "utils/pokemon";
import { Button } from "jm-component-library";
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  // const pokemon = await cachedFetch(
  //   "https://pokedex-api.azurewebsites.net/api/pokemons/0/9"
  // );

  const pokemon = pokemonData;

  return {
    props: {
      pokemon,
    }, // will be passed to the page component as props
  };
}

export default function Home({ pokemon }: any) {
  const router = useRouter()

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
      <Button color="secondary" variant="outlined" onClick={() => { router.push('/login')  }}>Go To Login Page</Button>
      <main className={styles.main}>
        {pokemon?.data.map((item: any, index: any) => {
          return <PokeCard key={index} pokemon={item} />;
        })}
      </main>
    </>
  );
}
