import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './.storybook/preview.tsx'],
  theme: {
    extend: {
      aspectRatio: {
        cinema: '12 / 5'
      }
    }
  },
  plugins: []
};

export default config;
