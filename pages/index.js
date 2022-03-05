import { useState } from 'react';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='./logo.ico' />
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Intro</h2>
        <p>
          {' '}
          Welcome to my blog. This website is built with Next.js. If you are
          interested in my other project, please visit my{' '}
          <a href='https://stella-lee.com '>portfolio website</a>.
        </p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, intro }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <p>{intro}</p>
            </li>
          ))}
        </ul>

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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
