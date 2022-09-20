import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components/Hero";
import { NftCollection } from "../components/NftCollection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <NftCollection />
    </>
  );
}
