import '@/styles/globals.sass'
import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Layout from '../components/Layout'
import Script from 'next/script'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Claro Video</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
        :focus {
          outline: 3px solid white;
        }
      `}</style>
      <Script 
        src="https://luke-chang.github.io/js-spatial-navigation/spatial_navigation.js" 
        strategy="lazyOnload"
        onLoad={() => {
          console.log('spatial_navigation.js')
          SpatialNavigation.init();
          SpatialNavigation.add({
            selector: 'a, .focusable'
          });
          SpatialNavigation.makeFocusable();
          SpatialNavigation.focus();
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}
