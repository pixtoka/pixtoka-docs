import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <div align="center">
          <img src="https://raw.githubusercontent.com/Pixtoka/.github/main/profile/Pixtoka_Banner_Rounded.png" width="95%" alt="Pixtoka Banner"></img>
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttonDiv}>
          <Link
            className={clsx('button button--primary button--lg', styles.buttons)}
            to="/getting-started">
            Getting Started
          </Link>
          <Link
            className={clsx('button button--primary button--lg', styles.buttons)}
            to="/commands">
            All Commands
          </Link>
        </div>
        <div className={styles.buttonDiv}>
          <Link
            className={clsx('button button--secondary button--lg', styles.buttons)}
            to="https://pixtoka.xyz/">
            Pixtoka Website
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Pixtoka, a Discord bot.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
