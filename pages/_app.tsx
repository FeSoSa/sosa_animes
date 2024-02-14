import type { AppProps } from 'next/app';
import '../styles/globals.css'
import { ContextProvider } from '../contexts/ContextProvider';
import Layout from '../components/Nav/Layout';
import { colors } from '../constants/colors';


 
export default function MyApp({ Component, pageProps }: AppProps) {

  return (
      <main className={`bg-[#000]`}>
        <ContextProvider >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </main>
    )
}