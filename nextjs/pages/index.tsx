import Head from 'next/head';
import { auth } from '../config/firebase.config';
import BaseLayout from '../layouts/BaseLayout';
import { NextPageWithLayout } from '../nextjsTypeExtensions/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  const { currentUser } = auth;

  return (
    <>
      <Head>
        <title>Igoto Travel Planner</title>
        <meta name="description" content="Igoto Travel Planner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Home /</main>
    </>
  );
};

Home.PageLayout = BaseLayout;

export default Home;
