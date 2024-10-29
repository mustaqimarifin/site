import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./blog/**/*.mdx"],
	theme: {
		extend: {
			colors: {
				orange: {
					50: "#fff1f2",
					100: "#fee3e7",
					200: "#fdc6ce",
					300: "#fdaab6",
					400: "#fc8d9d",
					500: "#fb7185",
					600: "#c95a6a",
					700: "#974450",
					800: "#642d35",
					900: "#32171b",
					950: "#4c0519",
				},
			},
			fontFamily: {
				sans: ["var(--sans)"],
				itl: ["var(--itl)"],
				quad: ["var(--quad)"],
				mono: ["var(--mono)"],
				imp: ["var(--imp)"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			typography: (theme: (path: string) => string) => ({
				DEFAULT: {
					css: {
						color: theme("colors.neutral.600"),
						letterSpacing: "-0.01em",
						a: {
							color: theme("colors.orange.500"),
							transition: "color 0.2s ease",
							"&:hover": {
								color: theme("colors.orange.600"),
							},
						},
						"h1, h2, h3, h4, h5, h6": {
							fontWeight: theme("fontWeight.semibold"),
							letterSpacing: "-0.02em",
						},
						pre: {
							padding: theme("spacing.6"),
							backgroundColor: "inherit",
							borderWidth: 1,
							borderColor: "inherit",
							borderRadius: theme("borderRadius.lg"),
						},
					},
				},
				invert: {
					css: {
						color: theme("colors.neutral.400"),
					},
				},
			}),
			animation: {
				wave: "wave-animation 2.5s infinite",
			},
			keyframes: {
				"wave-animation": {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14.0deg)" },
					"20%": { transform: "rotate(-8.0deg)" },
					"30%": { transform: "rotate(14.0deg)" },
					"40%": { transform: "rotate(-4.0deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
			},
		},
	},
	plugins: [typography],
}

export default config
