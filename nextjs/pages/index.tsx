import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import { NextPageWithLayout } from '../nextjsTypeExtensions/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  return (
    <Head>
      <title>Igoto Travel Planner</title>
      <meta name="description" content="Igoto Travel Planner" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Home.PageLayout = BaseLayout;

export default Home;
