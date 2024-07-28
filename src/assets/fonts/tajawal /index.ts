import { Tajawal } from 'next/font/google'

export const tajawal = Tajawal({
  weight: ['400', '700', '900'], // Choose the weights you need
  style: ['normal', 'italic'],  // Choose the styles you need
  subsets: ['latin', 'arabic'], // Include Arabic subset for RTL support
})
