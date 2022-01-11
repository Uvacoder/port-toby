import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import React, {useEffect} from "react";
import { useKBar } from 'kbar';
import { KbarPortal } from './_app.js';
import { CommandBar } from "./_app.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toby B Development</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/peep (3).png" />
      </Head>
      <ChakraProvider>

          <div className={styles.popupDiv}>
            <button className={styles.popupButton} onClick={CommandBar}>⌘</button>
          </div>

          <h1 className={styles.opentext}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>
          <h1 className={styles.info}>13 y/o full stack web dev & designer.</h1>

          <div className={styles.mediv}>
              <Image className={styles.me} src="/me.svg" alt="Toby" height="700" width="700" />
          </div>

        </ChakraProvider>
        </div>
  );
}

const handleKeyDown = () => {
  console.log("keydown");
}