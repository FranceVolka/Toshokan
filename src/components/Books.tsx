import React, { Fragment, useContext, useState } from 'react'
import { BookData } from './Datas/BookData'
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import BookModal from './Modal/BookModal';
import ThemeContext from './Service/ThemeContext';

const Instagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode }:any = useContext(ThemeContext)
  
  return (
    <div className='w-full mx-auto text-center '>
      <div id='fantasy' className={`my-5 rounded-md shadow-lg ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <p className='relative flex justify-between align-baseline border-b-2 border-[#e7e7e7] text-2xl font-bold text-left p-4'>Popular Today</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 pt-4 px-3'>
          {BookData.map((item, index) => {
            if (item.category === 'Fantasy') {                          
              return <BookModal item={item} key={index} />;
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div id='fantasy' className={`my-5 rounded-md shadow-lg ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <p className='relative flex justify-between align-baseline border-b-2 border-[#e7e7e7] text-2xl font-bold text-left p-4'>Latest Update</p>               
        <div className='grid grid-cols-2'>
          {BookData.map((item, index) => {
            return (
              <div key={item.id} className='relative flex flex-row p-4 border-b-[1px] border-[#e7e7e7] w-full'>
                <div className='relative h-[200px] mr-[10px]'>
                  <Image 
                    src={item.linkImg}
                    alt={item.title}
                    quality={100}
                    width={1000}
                    height={1000}
                    className={`w-full h-full object-cover`}
                  />
                </div>
                <div className='flex flex-col text-start'>
                  <a className='hover:text-gray-600 w-full text-base font-bold leading-[1.5] cursor-pointer'>
                    <h4>{item.title}</h4>
                  </a>
                  <ul className='mt-[10px] pl-[15px] list-disc'>
                    <li className='text-base mb-[10px] text-[#9d4942]'>
                      <a className={`text-[#999] font-medium cursor-pointer float-left overflow-hidden text-ellipsis whitespace-nowrap ${darkMode ? 'hover:text-white transition hover:duration-300 ease-in-out' : ''}`}>
                        Chapter 69
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