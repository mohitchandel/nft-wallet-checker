import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { WalletConnection } from '../components/WalletConnection';
import { WorldCoinId } from '../components/worldcoinId';
import styles from '../styles/Home.module.css';

export default function Wallet() {
  return (
    <>
      <Navigation />
      {/* <WorldCoinId /> */}
      <Hero heading={' Get wallet NFT'} />
      <WalletConnection />
      <Footer />
    </>
  );
}
