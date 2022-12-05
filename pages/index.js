import Head from 'next/head';
import DocsSection from '../components/DocsSection';
import Header from '../components/Header';
import NewDoc from '../components/NewDoc';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <section className='bg-[#f8f9fa] pb-10 px-10'>
        <NewDoc />
      </section>
      <section className='px-10 md:px-0'>
        <DocsSection />
      </section>
    </div>
  );
}
