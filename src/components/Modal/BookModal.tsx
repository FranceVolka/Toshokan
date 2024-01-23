import React, { PureComponent, useState, Fragment, useContext, useEffect } from 'react'
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { AiOutlinePlus } from 'react-icons/ai'
import ThemeContext from '../Service/ThemeContext';
import { useGlobalContext } from '../Service/ApiData';

const max_description = 550

const BookModal = ({ item }: any) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { darkMode }:any = useContext(ThemeContext)

  const showlessDesc = typeof item?.attributes?.description?.en === 'string'
  ? item?.attributes?.description?.en.slice(0, max_description)
  : '';

  const showAllDesc = typeof item?.attributes?.description?.en === 'string'
  ? item?.attributes?.description?.en.slice(max_description)
  : '';


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const coverArt = item?.relationships
  let cover_image = coverArt?.find((item:any) => item?.type === 'cover_art')

  
  return (
    <>
      <div
        key={item.id}
        className='relative mx-[7px] my-[10px] overflow-hidden cursor-pointer'
        onClick={() => setIsModalOpen(true)}
      >
        
        <div className='relative h-[286px]'>
          <div className='absolute w-full z-[1] h-full top-0 rounded hover:bg-[rgba(0,0,0,.51)]'>
          </div>
          <Image
            src={`https://uploads.mangadex.org/covers/${item?.id}/${cover_image?.attributes.fileName}`}
            alt={item?.attributes?.title?.en}
            width={1000}
            height={1000}
            className='w-full h-full object-cover rounded'
            quality={100}
          />
        </div>
        
        <div className='h-auto'>
          <div className='font-bold text-base mb-2 mt-2 text-left text-ellipsis overflow-hidden whitespace-nowrap'>{item?.attributes?.title?.en ?? item?.attributes?.title['ja-ro']}</div>
          <p className={`text-sm text-left ${darkMode ? 'text-white' : 'text-gray-700'}`}>{item?.attributes?.status}</p>
        </div>
      </div>
      <Transition show={isModalOpen} as={Fragment}>
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-25 backdrop-blur-[2px] overflow-x-hidden overflow-y-auto'>          
          <div className='relative bg-white p-8 mx-4 rounded-lg shadow-xl w-full max-w-4xl max-h-full'>
            <button
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>            
            <div className='flex flex-col w-full justify-between p-4 mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='max-h-full'>
                  {/* <img src={item.linkImg} alt="Image" className="max-w-full h-auto"/> */}                  
                  <Image
                    src={`https://uploads.mangadex.org/covers/${item?.id}/${cover_image?.attributes?.fileName}`}
                    alt='/'
                    width={1000}
                    height={1000}
                    className='w-full object-cover rounded-lg'
                    quality={100}
                  />                  
                </div>
                <div className='relative w-full h-auto flex flex-col text-center align-middle'>
                  <div className='text-2xl font-bold'>
                    {item?.attributes?.title?.en ?? item?.attributes?.title['ja-ro']}
                  </div>
                  <div className='text-xs'>
                    {item.sub_title}
                  </div>
                  <div className='text-[16px]'>
                    {item.category}
                  </div>
                  <div className='text-base text-end py-2'>
                    Author: {item?.relationships[0]?.attributes?.name}
                  </div>
                  <div className='text-left p-4 overflow-hidden text-ellipsis'>
                    <span className='text-base'>Summary: </span>
                    <p className='whitespace-pre-line'>
                      {isExpanded ? item?.attributes?.description?.en : showlessDesc}
                      {item?.attributes?.description?.en?.length > max_description && (
                        <span className='text-gray-500'>
                          {isExpanded ? '' : '... '}
                          <button
                            className={`text-black hover:text-blue-500 focus:outline-none ${isExpanded ? 'ml-2' : ''}`}
                            onClick={toggleExpand}
                          >
                            {isExpanded ? 'Read less' : 'Read more'}
                          </button>
                        </span>
                      )}
                    </p>
                  </div>
                  <div className='flex flex-col md:flex-row w-full justify-center md:space-x-5 px-4 py-10'>
                    <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Read</button>
                    <button type='button' className='flex justify-center align-middle text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-base px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'><AiOutlinePlus size={20} className='mr-1'/>Add to Favorites</button>
                  </div>
                </div>
              </div>                      
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default BookModal