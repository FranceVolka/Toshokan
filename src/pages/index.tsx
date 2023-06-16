import React from 'react'
import Head from 'next/head'
import Landing from '@/components/Landing'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/Datas/SliderData'
import Books from '@/components/Books'
import Footer from '@/components/Footer'

const Home = () => { 

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Landing heading='Welcome to Library' message={`"A book is a garden, an orchard, a storehouse, a party, <br>a company by the way, a counselor, a multitude of counselors." <br><br>– Charles Baudelaire`}/>
      <Slider slides={SliderData}/>
      <Books />
      <Footer />
    </div>
  )
}

export default Home