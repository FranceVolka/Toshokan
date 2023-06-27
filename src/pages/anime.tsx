import React, { useContext } from 'react'
import ThemeContext from '@/components/Service/ThemeContext'
import Head from 'next/head'
import Banner from '@/components/Banner'

const anime = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { darkMode }:any = useContext(ThemeContext)


  return (    
    <div className={`${darkMode ? 'dark' : 'light'}`}>
     <Head>
      <title>Anime Page</title>
    </Head>
    <Banner />
    </div>
  )
}

export default anime