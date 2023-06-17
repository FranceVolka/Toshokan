import React, { Fragment, useState } from 'react'
import { BookData } from './Datas/BookData'
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import BookModal from './Modal/BookModal';

const Instagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <div className='w-full mx-auto text-center '>
      <div id='fantasy' className='my-5 bg-white rounded-md shadow-lg'>
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