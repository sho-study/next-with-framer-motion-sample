import type { NextPageWithLayout } from '../types/page';
import Head from 'next/head';
import { Layout, Motion, Heading } from '../components';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  return (
    <Motion>
      <Head>Home | Framer Motion Sample</Head>
      <Heading>Home</Heading>
      <p style={{ marginBottom: 20 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
        voluptatibus cumque! Nihil sint eligendi, expedita iure necessitatibus
        repudiandae nobis similique aut. Est accusamus enim officia nihil ad,
        aperiam rem a?
      </p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Motion>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
