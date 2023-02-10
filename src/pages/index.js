
import { Inter } from '@next/font/google'
import { Bottle } from '../components/Bottle'
import { Fire } from '../components/Fire'
import { Footer } from '../components/Footer'
import { FourImage } from '../components/FourImage'
import Navbar from '../components/Navbar'
import { Road } from '../components/Road'
import { Stone } from '../components/Stone'
import { Waste } from '../components/Waste'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

   

  return (
    <>
      <Navbar/>
      <Waste/>
      <Fire/>
      <Stone/>
      <Bottle/>
      <Road/>
      <FourImage  />
      <Footer/>
    </>
  )
}
