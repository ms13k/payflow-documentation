import React from 'react';
import Footer from '@theme-original/Footer';

/*
 * Swizzle "wrap" example. Created with:
 *   npm run swizzle @docusaurus/theme-classic Footer -- --wrap
 * Wrapping keeps the original component and survives upgrades better than --eject.
 */
export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
    </>
  );
}
