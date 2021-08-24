// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
          <meta property="og:title" content="Dripping Wet Disposables | E-Commerce and Wholesale" />
          <meta property="og:image" content="https://cdn.chec.io/email/assets/marketing/demo-preview.png" />
          <meta property="og:description" content="Tired of disposables not lasting long? Upgrade to a Dripping Wet Extreme disposable vape which has 2000 puffs per device. The design is slim and surprisingly is still very compact for 2000 puffs disposable. This is for sure the luxury of disposables! Sporting a 1200 mAh battery that delivers consistent excellent flavor each puff. The Extreme disposables are pre-filled with 5.% salt nicotine level rather than regular disposable which have only 5% salt nicotine strength. This device is slightly harsher if you are looking for a stronger buzz!" />
          <meta property="og:url" content="https://commercejs-demo-store.netlify.app" />
          <meta property="twitter:title" content="Dripping Wet Disposables | E-Commerce and Wholesale" />
          <meta name="twitter:creator" content="@artificialaddy" />
          <meta property="twitter:image" content="https://cdn.chec.io/email/assets/marketing/demo-preview.png" />
          <meta property="twitter:description" content="Tired of disposables not lasting long? Upgrade to a Dripping Wet Extreme disposable vape which has 2000 puffs per device. The design is slim and surprisingly is still very compact for 2000 puffs disposable. This is for sure the luxury of disposables! Sporting a 1200 mAh battery that delivers consistent excellent flavor each puff. The Extreme disposables are pre-filled with 5.% salt nicotine level rather than regular disposable which have only 5% salt nicotine strength. This device is slightly harsher if you are looking for a stronger buzz!" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
