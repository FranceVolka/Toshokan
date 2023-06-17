import React from 'react'
import Head from 'next/head'
import Landing from '@/components/Landing'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/Datas/SliderData'
import Books from '@/components/Books'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

const Home = () => { 

  return (
    <div className='bg-[#eef0f2] text-black'>
      <Head>
        <title>Home Page</title>
      </Head>
      <Landing heading='Welcome to Library' message={`"A book is a garden, an orchard, a storehouse, a party, <br>a company by the way, a counselor, a multitude of counselors." <br><br>– Charles Baudelaire`}/>
      <div className='relative mx-auto max-w-[1240px] overflow-hidden'>
        <div className='float-left w-full lg:w-[70%]'>
          <Slider slides={SliderData}/>
          <Books />
        </div>
        <div className='float-right w-full lg:w-[30%] overflow-visible box-border'>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home