import type { Config } from 'tailwindcss'

const {defaultColors } = require("tailwindcss/defaultTheme")
const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(259, 100%, 65%)",
      "200" : "hsl(0, 100%, 67%)",
      "300" : "hsl(0, 0%, 94%)",
      "400" : "hsl(0, 0%, 86%)",
      "500" : "hsl(0, 1%, 44%)",
      "600" : "hsl(0, 0%, 8%)"
    }
  } 
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors
    },
  },
  plugins: [],
}
export default config
