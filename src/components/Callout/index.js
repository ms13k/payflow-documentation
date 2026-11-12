import React from 'react';
import styles from './styles.module.css';

/** Usage in MDX: <Callout title="Heads up" tone="info">Text</Callout>  (tone: info | warn) */
export default function Callout({title, tone = 'info', children}) {
  return (
    <aside className={`${styles.callout} ${styles[tone] || styles.info}`}>
      {title ? <strong className={styles.title}>{title}</strong> : null}
      <div>{children}</div>
    </aside>
  );
}
