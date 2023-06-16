import React, { Fragment, useState } from 'react'
import { BookData } from './Datas/BookData'
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import BookModal from './Modal/BookModal';

const Instagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24:'>
      <h1 className='text-2xl font-bold text-center p-4'>Categories</h1>   
      <div id='fantasy' className='max-w-[1240px] mx-auto'>
        <p className='text-2xl font-bold text-left p-4'>Fantasy</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4'>
          {BookData.map((item, index) => {
            if (item.category === 'Fantasy') {                          
              return <BookModal item={item} key={index} />;
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div id='science-fiction'>
        <p className='text-2xl font-bold text-left p-4'>Science-Fiction</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4'>
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
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 p-4'>
          {BookData.map((item, index) => {            
            if (item.category === 'Horror') {
              return <BookModal item={item} key={index} />;
            } else {
              return null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Instagram