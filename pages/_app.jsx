import '@/styles/globals.sass'
import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Layout from '../components/Layout'
import Head from 'next/head'
import { FocusContext, init, useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { useEffect } from 'react'

init({
  debug: false,
  visualDebug: false
});

const INIT_FOCUS_KEY = 'MENU'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  const { ref, setFocus, focusKey } = useFocusable()

  useEffect(() => {
    setFocus(INIT_FOCUS_KEY)
  }, [setFocus])

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className='app'>
        <Layout>
          <Head>
            <title>Claro Video</title>
          </Head>
          <style jsx global>{`
            html {
              font-family: ${roboto.style.fontFamily};
            }
          `}
          </style>
          <Component {...pageProps} />
        </Layout>
      </div>
    </FocusContext.Provider>
  )
}