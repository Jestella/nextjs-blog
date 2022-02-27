import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My First Next.js App</title>
        <link rel='icon' href='./logo.ico' />
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Post 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo. Pellentesque habitant morbi tristique senectus et netus
        et malesuada. Consequat ac felis donec et odio pellentesque diam. Non
        curabitur gravida arcu ac tortor dignissim convallis aenean et. Vitae
        turpis massa sed elementum tempus egestas sed sed. Purus semper eget
        duis at tellus. Quis auctor elit sed vulputate. Vel facilisis volutpat
        est velit egestas dui id ornare. Non quam lacus suspendisse faucibus
        interdum posuere lorem ipsum dolor. Facilisis leo vel fringilla est
        ullamcorper eget nulla facilisi etiam. Id nibh tortor id aliquet lectus
        proin nibh nisl. Euismod in pellentesque massa placerat. Phasellus
        vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Urna
        duis convallis convallis tellus id interdum. Sed risus pretium quam
        vulputate dignissim suspendisse. Ut diam quam nulla porttitor massa id.
        Morbi tristique senectus et netus et malesuada fames ac turpis.
      </p>
    </Layout>
  );
}
