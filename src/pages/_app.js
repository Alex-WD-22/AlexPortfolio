import '@/styles/globals.css'
import Layout from 'components/Layout/Layout'
import { ThemeProvider } from 'next-themes'
import '@/styles/theme.css'

export default function App({ Component, pageProps }) {
 
  return (
    <ThemeProvider>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  )
}
