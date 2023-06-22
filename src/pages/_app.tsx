import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import { ThemeProvider } from './../components/Service/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <ThemeProvider> 
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>    
  </>
  );
}
