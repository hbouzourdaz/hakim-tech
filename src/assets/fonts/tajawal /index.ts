import { Tajawal } from 'next/font/google'

export const tajawal = Tajawal({
  weight: ['900'], // Specify the weights you need
  style: ['normal'], // Use only 'normal' since 'italic' is not supported
  subsets: ['latin', 'arabic'], // Include Arabic subset for RTL support
})
