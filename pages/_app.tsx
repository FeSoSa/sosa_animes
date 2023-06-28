import type { AppProps } from 'next/app';
import '../styles/globals.css'
import { ContextProvider } from '../contexts/ContextProvider';
import Layout from '../components/Nav/Layout';


 
export default function MyApp({ Component, pageProps }: AppProps) {

  return (
      <main className='bg-principal'>
        <ContextProvider >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </main>
    )
}