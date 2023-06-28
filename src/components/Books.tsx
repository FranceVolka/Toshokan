import React, { Fragment, useContext, useEffect, useState } from 'react'
import { BookData } from './Datas/BookData'
import Image from 'next/image';
import BookModal from './Modal/BookModal';
import ThemeContext from './Service/ThemeContext';
import Link from 'next/link';
import { useGlobalContext } from './Service/ApiData';

const Instagram = () => {  
  const { darkMode }:any = useContext(ThemeContext)
  const { manga } = useGlobalContext();
  const { popular_manga } = useGlobalContext();

  console.log(popular_manga);
  return (
    <div className='w-full mx-auto text-center '>
      <div id='fantasy' className={`my-5 rounded-md shadow-lg ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <p className={`relative flex justify-between align-baseline border-b-2 text-2xl font-bold text-left p-4 ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'}`}>Popular Today</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 pt-4 px-3'>
          {popular_manga.map((item, index) => {
            console.log(item);
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
          {manga.map((item, index) => {
            const coverArt = item.relationships
            let cover_image = coverArt.find((item:any) => item.type === 'cover_art')
            return (
              <div key={item.id} className={`relative flex flex-row p-4 w-full ${index === BookData.length - 1 ? '' : 'border-b-[1px]'} ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'} ${index >= BookData.length - 2 ? 'lg:border-b-0' : ''} ${index === BookData.length - 1 ? 'sm:border-b-0' : ''}`}>
                <div className='relative h-[200px] mr-[10px] w-[50%]'>
                  <Link href={`/manga/${item.slug}`}>
                      <Image 
                      src={`https://uploads.mangadex.org/covers/${item.id}/${cover_image.attributes.fileName}`}
                      alt={item.attributes.title.en}
                      quality={100}
                      width={1000}
                      height={1000}
                      className={`w-full h-full object-cover`}
                    />
                  </Link>
                </div>
                <div className='flex flex-col text-start w-full'>
                  <a className='hover:text-gray-600 w-full text-base font-bold leading-[1.5] cursor-pointer text-ellipsis'>
                    <h4>{item.attributes.title.en ?? item.attributes.title.ja}</h4>
                  </a>
                  <ul className='mt-[10px] pl-[15px] list-disc'>
                    <li className=' text-base mb-[10px] text-[#9d4942]'>
                      <a className={`text-[#999] font-medium cursor-pointer float-left overflow-hidden text-ellipsis whitespace-nowrap ${darkMode ? 'hover:text-white transition hover:duration-300 ease-in-out' : ''}`}>
                        Chapter 69
                      </a>
                      <span className='float-right text-xs text-[#555]'>15 Hours ago</span>
                    </li>
                    <li className=' text-base mb-[10px] text-[#9d4942]'>
                      <a className={`text-[#999] font-medium cursor-pointer float-left overflow-hidden text-ellipsis whitespace-nowrap ${darkMode ? 'hover:text-white transition hover:duration-300 ease-in-out' : ''}`}>
                        Chapter 68
                      </a>
                      <span className='float-right text-xs text-[#555]'>15 Hours ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div id='science-fiction'>
        <p className='text-2xl font-bold text-left p-4'>Science-Fiction</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4'>
          {BookData.map((item, index) => {            
            if (item.category === 'Science-Fiction') {
              return <BookModal item={item} key={index} />;
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div id='horror'>
        <p className='text-2xl font-bold text-left p-4'>Horror</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4'>
          {BookData.map((item, index) => {            
            if (item.category === 'Horror') {
              return <BookModal item={item} key={index} />;
            } else {
              return null
            }
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Instagram