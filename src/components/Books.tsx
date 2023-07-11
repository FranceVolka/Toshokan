import React, { Fragment, useContext, useEffect, useState } from 'react'
import { BookData } from './Datas/BookData'
import Image from 'next/image';
import BookModal from './Modal/BookModal';
import ThemeContext from './Service/ThemeContext';
import Link from 'next/link';
import { useGlobalContext } from './Service/ApiData';
import LatestManga from './Modal/LatestManga';

const Instagram = () => {  
  const { darkMode }:any = useContext(ThemeContext)
  const { manga, chapter, popular_manga } = useGlobalContext();
  
  const mergeData:any = []
  manga.map((manga_item) => {
    chapter.map((chapter_item) => {
      if (manga_item.id === chapter_item.relationships[1].id) {
        let data = {chapter: chapter_item, manga: manga_item};
        mergeData.push(data)
      }
    })
  })


  return (
    <div className='w-full mx-auto text-center '>
      <div id='fantasy' className={`my-5 rounded-md shadow-lg ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <p className={`relative flex justify-between align-baseline border-b-2 text-2xl font-bold text-left p-4 ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'}`}>Popular Today</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 pt-4 px-3'>
          {popular_manga.slice(0, 4).map((item:any , index:any) => {            
            if (popular_manga.length >= 3) {                          
              return <BookModal item={item} key={index} />;
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div id='fantasy' className={`my-5 rounded-md shadow-lg ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <p className={`relative flex justify-between align-baseline border-b-2 text-2xl font-bold text-left p-4 ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'}`}>Latest Update</p>               
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {manga.map((item:any, index:any) => {
            return (
              <LatestManga item={item} key={index}></LatestManga>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Instagram