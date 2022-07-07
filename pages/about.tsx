import type { NextPageWithLayout } from '../types/page';
import Head from 'next/head';
import { Layout, Motion, Heading } from '../components';
import Link from 'next/link';

const About: NextPageWithLayout = () => {
  return (
    <Motion>
      <Head>About | Framer Motion Sample</Head>
      <Heading>About</Heading>
      <p style={{ marginBottom: 20 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat
        ex incidunt eius expedita consequuntur exercitationem alias voluptatem
        necessitatibus dolores. Voluptatem molestiae quam et iusto, consectetur
        impedit fuga fugiat voluptas.
      </p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Motion>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
