import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import { ThemeProvider } from './../components/Service/ThemeContext';
import { GlobalContextProvider } from '@/components/Service/ApiData';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <ThemeProvider> 
    <GlobalContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </GlobalContextProvider>
  </ThemeProvider>    
  </>
  );
}
