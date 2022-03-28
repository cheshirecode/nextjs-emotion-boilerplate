import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import sprite from 'svg-sprite-loader/runtime/sprite.build';
import { extractCritical } from '@emotion/server';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    const spriteContent = sprite.stringify();
    return { ...page, ...styles, spriteContent };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
