import NextHead from 'next/head';

const Head = ({ title = 'main title', children }) => (
  <NextHead>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#00000" />
    {children}
  </NextHead>
);
export default Head;
