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
  const { manga, popular_manga, loading } = useGlobalContext();
  
  console.log(popular_manga, manga);

  console.log('locading', loading);
  
  

  return (
    <div className='w-full mx-auto text-center '>
      <div id='fantasy' className={`my-5 rounded-md shadow-lg ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <p className={`relative flex justify-between align-baseline border-b-2 text-2xl font-bold text-left p-4 ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'}`}>Popular Today</p>               
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 py-4 px-3'>
          {popular_manga.slice(0, 4).map((item:any , index:any) => (
            <>
              {loading ? (
              <>
                test
              </>
              ) : (
              <>
                {popular_manga.length > 0 ? (
                  <>
                  <BookModal item={item} key={index} />
                  </>
                ) : (
                  <>
                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                          <div className="h-2 bg-slate-700 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                          </div>
                          <div className="h-2 bg-slate-700 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                          </div>
                          <div className="h-2 bg-slate-700 rounded"></div>
                          <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
              )}
            </>
          ))}
        </div>
      </div>
      <div id='fantasy' className={`my-5 rounded-md shadow-lg ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <p className={`relative flex justify-between align-baseline border-b-2 text-2xl font-bold text-left p-4 ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'}`}>Latest Update</p>               
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {manga.map((item:any, index:any) => (
            <>
              {manga.length != 0 ? (
                <>
                  <LatestManga item={item} key={index}></LatestManga>
                </>
              ):(
                <>
                  <div className='flex justify-center items-center'>
                    <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  ) 
}

export default Instagram