import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

/** デフォルトスタイル */
export const defaultStyle = `
    ${inter.className}
    text-slate-800
    antialiased
    list-none
    flex
    min-h-screen
    flex-col
`;
