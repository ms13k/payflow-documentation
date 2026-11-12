import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {title: 'Write in Markdown', text: 'Plain text files, versioned in Git, edited in any editor.'},
  {title: 'Review like code', text: 'Pull requests, code owners, and automated checks on every change.'},
  {title: 'Publish on merge', text: 'GitHub Actions builds and deploys the site automatically.'},
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Docs as code starter">
      <header className={clsx('hero', styles.hero)}>
        <div className="container">
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <Link className="button button--lg" style={{background: 'var(--acme-accent)', color: '#1f1740'}} to="/docs/intro">
            Start reading
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
