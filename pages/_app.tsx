import type { AppProps } from 'next/app'
import '../styles/index.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Oswald, Montserrat, Source_Serif_4 } from 'next/font/google'

const oswald = Oswald({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-oswald',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${oswald.variable} ${montserrat.variable} ${sourceSerif.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
