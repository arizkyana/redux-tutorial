import Head from 'next/head';
import HomeContainer from '@/containers/home-container';

export default function Home() {
  return (
    <>
      <Head>
        <title>Belajar Redux - Bootcamp FE 2021</title>
      </Head>
      <HomeContainer />
    </>
  );
}
