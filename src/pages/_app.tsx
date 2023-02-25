import '@/styles/globals.css'
import { theme, ThemeProvider } from 'jm-component-library'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
