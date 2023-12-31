import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
        rowdies: ['Rowdies', 'cursive'],
      },
      colors: {
        fundoPrincipal: '#141414',
        textosClaros: '#e0e0e0',
        vermelhoPrincipal: '#990000',
        begeSecundario: '#ffa783',
        cinzaSecundario: '#3a3a3a',
        horasTrabalhadas: '#77B6EA', //#00A537
        horasPossiveis: '#FF4646',
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
