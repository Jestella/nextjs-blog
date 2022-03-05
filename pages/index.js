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
        <link rel='icon' href='./logos/logo.ico' />
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Hello :)</h2>
        <p>
          {' '}
          Blog. is built with Next.js. <br />
          Please visit my{' '}
          <a href='https://stella-lee.com' target='_blank'>
            portfolio website
          </a>{' '}
          for more projects.
        </p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, preview }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />
              <small className={utilStyles.dateText}>
                <Date dateString={date} />
              </small>
              <p>{preview}...</p>
            </li>
          ))}
        </ul>

        <Image
          src='/images/logo4.png'
          height={540}
          width={540}
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
