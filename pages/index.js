import React from 'react';
import Link from 'next/link';
import Navbar from '../src/components/Navbar';
import styles from '../styles/Home.module.css';


const HomePage = () => (
  <div>
    <h1 className={styles.title}>Welcome to My Portfolio</h1>
    <Navbar />
    <nav>
      <Link href="/about">About</Link> | 
      <Link href="/projects">Projects</Link> | 
      <Link href="/contact">Contact</Link>
    </nav>
  </div>
);

export default HomePage;
