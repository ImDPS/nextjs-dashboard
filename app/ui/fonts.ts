// import { Inter } from 'next/font/google';
 
// export const inter = Inter({ subsets: ['latin'] });

import { Poppins, Lusitana } from 'next/font/google';
 
export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})