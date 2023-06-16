import React, {useEffect, useRef, useState,} from 'react'
import Link from 'next/link'
import classNames from 'classnames';
import { AiOutlineMenu , AiOutlineClose, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineSearch,} from 'react-icons/ai'
import { MdOutlineBookmark, MdOutlineAccountCircle } from 'react-icons/md'
import { GenreData } from './Datas/GenreData'

 
function Navbar() {
  const [nav, setNav] = useState(false)  
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')
  const [dropdown, setDropdown] = useState(false);  

  const handleNav = () => {
    setNav(!nav)
  };

  const dropDown = () => {
    setDropdown(!dropdown)
  }
  
  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)    
  }, [])
  

  return (
    <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex items-center pt-4 px-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-3xl px-4'>Library</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link 
              href='/'>
                Home
            </Link>
          </li>
          
          <button
            className={`flex items-center border-none px-4 ${dropdown ? 'bg-neutral-900 text-white' : ''}`}
            onClick={dropDown}
          >              
            Browse
            {!dropdown ? 
              <AiOutlineCaretDown className={`h-6 ml-2 transition-transform duration-300 ${dropdown ? 'rotate-180' : ''}`} /> : 
              <AiOutlineCaretUp className={`h-6 ml-2 transition-transform duration-300 ${dropdown ? 'rotate-0' : ''}`} />}
          </button>
          <div
            
            className={classNames(
              'absolute top-full left-0 w-screen shadow-lg overflow-hidden transition-all duration-300',
              { 'max-h-0': !dropdown, 'max-h-screen bg-neutral-900 text-white': dropdown }
            )}
          >
            {/* <ul style={{ color: `${textColor}` }}>
              <li>
                <Link
                  scroll={false}
                  href="#fantasy"
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 ${dropdown ? 'text-white' : ''}`}
                >
                  Fantasy
                </Link>
              </li>                
            </ul> */}
            <div className='flex flex-col md:flex-row mx-[30rem] px-[40px] pt-[35px] pb-[20px]'>
              <div className='flex flex-col pr-10 flex-[0_0_15rem]'>
                <ul>
                  <li className='text-sm w-full py-3 px-5 hover:bg-[#23252b] cursor-pointer'>
                    <Link href=''>
                      Popular
                    </Link>
                  </li>
                  <li className='text-sm w-full py-3 px-5 hover:bg-[#23252b] cursor-pointer'>
                    <Link href=''>
                      New
                    </Link>
                  </li>
                  <li className='text-sm w-full py-3 px-5 hover:bg-[#23252b] cursor-pointer'>
                    <Link href=''>
                      Alpabethical
                    </Link>
                  </li>
                  <li className='text-sm w-full py-3 px-5 hover:bg-[#23252b] '>
                    <Link href=''>
                      Release Calendar
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col flex-auto w-full pl-10 border-l-[3px] border-neutral-800'>
                <div className='text-xs py-3 px-5 w-full'>
                  Genre
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                  {GenreData.sort((a, b) => a.genre.localeCompare(b.genre)).map((item, index) => {
                    console.log(item);
                    return(
                      <div className='w-full py-3 px-5 text-sm hover:bg-[#23252b] cursor-pointer' key={index}>
                        <Link href=''>
                          { item.genre }
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <li className='p-4'>
            <Link href='/#gallery' scroll={false} >Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='hidden sm:flex sm:ml-auto' style={{ color: `${textColor}` }}>
          <Link href='/' className='py-4 px-3'>
            <AiOutlineSearch size={25}></AiOutlineSearch>
          </Link>
          <Link href='/' className='py-4 px-3'>
            <MdOutlineBookmark size={25}></MdOutlineBookmark>
          </Link>
          <div className='py-4 px-3 cursor-pointer'>
            <MdOutlineAccountCircle size={25}></MdOutlineAccountCircle>
          </div>
        </div>
        


        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden ml-auto z-10'>
          {nav ? <AiOutlineClose  size={20} style={{ color: `white` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
        </div>
        {/* Mobile Menu */}
        <div className={nav 
        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar