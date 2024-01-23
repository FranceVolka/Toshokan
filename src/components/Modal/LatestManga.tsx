import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import ThemeContext from '../Service/ThemeContext';
import { useGlobalContext } from '../Service/ApiData';

const LatestManga = ({ item, index }: any) => {
  const { darkMode }:any = useContext(ThemeContext)
  const { manga, getChapters, chapter }:any = useGlobalContext();

  const coverArt = item?.relationships
  let cover_image = coverArt?.find((item: any) => item?.type === 'cover_art')


  const handleTitleClick = (id: any) => {
    getChapters(id);
  };

  useEffect(() => {
    // Call handleTitleClick when the component is mounted
    handleTitleClick(item.id);
  }, []);

  console.log(chapter, 'GET_CHAPTER');
  
  
  return (
    <div key={item.id} className={`relative flex flex-row p-4 w-full ${index === manga.length - 1 ? '' : 'border-b-[1px]'} ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'} ${index >= manga.length - 2 ? 'lg:border-b-0' : ''} ${index === manga.length - 1 ? 'sm:border-b-0' : ''}`}>
      <div className='relative h-[200px] mr-[10px] w-[50%]'>
        <Link href={`/manga/${item.slug}`}>
          <Image
            src={`https://uploads.mangadex.org/covers/${item?.id}/${cover_image.attributes.fileName}`}
            alt={item?.attributes?.title?.en}
            quality={100}
            width={1000}
            height={1000}
            className={`w-full h-full object-cover`}
          />
        </Link>
      </div>
      <div className='flex flex-col text-start w-full'>
        <a className='hover:text-gray-600 w-full text-base font-bold leading-[1.5] cursor-pointer text-ellipsis'>
          <h4>{item?.attributes?.title?.en ?? item?.attributes?.title?.ja}</h4>
        </a>
        <ul className='mt-[10px] pl-[15px] list-disc'>
          <li className=' text-base mb-[10px] text-[#9d4942]'>
            <a className={`text-[#999] font-medium cursor-pointer float-left overflow-hidden text-ellipsis whitespace-nowrap ${darkMode ? 'hover:text-white transition hover:duration-300 ease-in-out' : ''}`}>
              Chapter 69
            </a>
            <span className='float-right text-xs text-[#555]'>15 Hours ago</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LatestManga