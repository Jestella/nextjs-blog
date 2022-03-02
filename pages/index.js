import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle} My First Next.js App</title>
        <link rel='icon' href='./logo.ico' />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Stella 👩🏻‍💻</p>

        <h3>
          Read{' '}
          <Link href={'/posts/post-1'}>
            <a>this page</a>
          </Link>
        </h3>

        <Image
          src='/images/logo4.png'
          height={400}
          width={400}
          alt='sample logo'
        />
        <div>
          <button onClick={handleClick}>Like ({likes})</button>
        </div>
      </section>
    </Layout>
  );
}
