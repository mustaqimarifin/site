import type { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { Kotta_One, Public_Sans, Roboto_Flex } from "next/font/google"
import localFont from "next/font/local"

const Mono = localFont({
	src: "./assets/fonts/soehne-mono.woff2",
	variable: "--mono",
})

const RFlex = Public_Sans({
	subsets: ["latin"],
	variable: "--sans",
})

const KOne = Kotta_One({
	subsets: ["latin"],
	weight: "400",
	variable: "--itl",
})

const Quad: NextFontWithVariable = localFont({
	src: "./assets/fonts/qbc.woff2",
	weight: "700",
	style: "italic",
	variable: "--quad",
})
const Imp = localFont({
	src: "./assets/fonts/imperial-500.woff2",
	variable: "--imp",
})

export { Mono, RFlex, Quad, Imp, KOne }

/* const GT: NextFontWithVariable = localFont({
  src: [
    { path: './assets/fonts/7.woff2', weight: '400', style: 'normal' },
    { path: './assets/fonts/gtwm.woff2', weight: '500', style: 'normal' },
    { path: './assets/fonts/gtwb.woff2', weight: '700', style: 'normal' },
    { path: './assets/fonts/gtwbb.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-gt',
})
 */
