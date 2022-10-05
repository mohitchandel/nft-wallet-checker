import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { NftCollection } from '../components/NftCollection';
import { WorldCoinId } from '../components/worldcoinId';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navigation />
      {/* <WorldCoinId /> */}
      <Hero heading={'Search For NFTs Collections'} />
      <NftCollection />
      <Footer />
    </>
  );
}
