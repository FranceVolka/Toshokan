import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { BookData } from './Datas/BookData'
import ThemeContext from './Service/ThemeContext';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('weekly');
  const { darkMode }:any = useContext(ThemeContext)

  const handleClick = (item: any) => {
    setSelectedItem(item);
  };


  return (
    <div className='relative'>
      <div className={`m-0 lg:ml-4 mb-[18px] shadow-lg rounded-md ${darkMode ? 'dark-secondary' : 'light-secondary'}`}>
        <div className={`relative flex justify-between align-baseline py-2 px-4 border-b-2 ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'}`}>
          <h3 className='font-bold'>Popular</h3>
        </div>
        <div className='relative'>
          <ul className='m-[10px] p-[6px] overflow-hidden rounded text-black bg-[#f1f1f1]'>
            <li 
              className={`float-left w-1/3 text-center rounded cursor-pointer ${
              selectedItem === 'weekly' ? 'bg-neutral-900 text-white hover:text-white' : 'hover:text-neutral-400'
              }`}
              onClick={() => handleClick('weekly')}
            >
              <a className='text-[12px]'>
                Weekly
              </a>
            </li>
            <li
              className={`float-left w-1/3 text-center rounded cursor-pointer ${
                selectedItem === 'monthly' ? 'bg-neutral-900 text-white hover:text-white' : 'hover:text-neutral-400'
              }`}
              onClick={() => handleClick('monthly')}
            >
              <a className='text-[12px]'>
                Monthly
              </a>
            </li>
            <li
              className={`float-left w-1/3 text-center rounded cursor-pointer ${
                selectedItem === 'all' ? 'bg-neutral-900 text-white hover:text-white' : 'hover:text-neutral-400'
              }`}
              onClick={() => handleClick('all')}
            >
              <a className='text-[12px]'>
                All
              </a>
            </li>
          </ul>
        </div>
        <div className='relative'>
          <div className='overflow-hidden'>
            <ul>
              {BookData.map((item, index) => {                
                return (
                  <li key={index} className={`relative px-[15px] py-[12px] white whitespace-normal overflow-hidden ${index === BookData.length - 1 ? '' : 'border-b-2'} ${darkMode ? 'border-[#312f40]' : 'border-[#e7e7e7]'} text-sm`}>
                    <div className={`absolute w-[25px] h-[25px] text-center leading-6 text-base top-[30px] left-[15px] border-[0.5px] rounded ${darkMode ? 'border-white' : 'border-neutral-900'}`}>
                      {item.id}
                    </div>
                    <div className='float-left overflow-hidden ml-[37px] w-[58px] max-h-[90px] mr-[10px] rounded'>
                      <a className=''>
                        <Image
                          src={item.linkImg}
                          alt={item.title}
                          width={1000}
                          height={1000}
                          quality={100}
                          className='w-full h-auto cursor-pointer'
                        />
                      </a>
                    </div>
                    <div className='overflow-hidden'>
                      <h2 className='text-[.98em] font-[600] mb-1 leading-[1.4em]'>
                        {item.title}
                      </h2>
                      <span className='font-[.9em] text-[#888] mb-[5px] overflow-hidden text-ellipsis'>
                        Genres: 
                        <a className={`hover:text-neutral-400 cursor-pointer ${darkMode ? 'text-white' : 'text-[#333]'}`}>
                          {item.category}
                        </a>
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar