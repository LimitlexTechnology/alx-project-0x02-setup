// pages/_app.tsx
import '../styles/globals.css'; // default global styles
import type { AppProps } from 'next/app';
// import your header (correct path)
import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />       {/* This will appear on every page */}
      <Component {...pageProps} /> {/* This renders the current page */}
    </>
  );
}

export default MyApp;

