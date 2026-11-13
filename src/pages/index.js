import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    title: 'Easy API Integration',
    text: 'Follow step-by-step instructions to integrate Payflow APIs into your applications.',
  },
  {
    title: 'Secure Payments',
    text: 'Learn how to authenticate API requests and manage payment transactions securely.',
  },
  {
    title: 'Developer Resources',
    text: 'Explore API references, integration guides, payment statuses, and troubleshooting tips.',
  },
];
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Docs as code starter">
      <header className={clsx('hero', styles.hero)}>
        <div className="container">
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <Link className="button button--lg" style={{background: 'var(--acme-accent)', color: '#1f1740'}} to="/docs/introduction">
             Let's Start
          </Link>
        </div>
      </header>
      <main className="container">
        <section className={styles.features}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
