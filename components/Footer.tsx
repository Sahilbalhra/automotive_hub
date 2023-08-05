import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex justify-start items-start gap-6">
          <div className='flex justify-center items-center'>
            <Image src="/logo.svg" alt="logo" width={118} height={18} className='object-contain'></Image>
            <h3 className="text-[20px] font-extrabold -ml-[80px] text-slate-800">Automotive Hub</h3>
          </div>
          {/* <p className='text-base text-gray-700'>Automotive Hub 2023 <br /> All rights reserved &copy;</p> */}
        </div>
        <div className='footer__links'>

          {
            footerLinks.map((link) => (<div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {
                link.links.map(item => (<Link key={item.title} href={item.url} className='text-gray-500'>{item.title}</Link>))
              }
            </div>))
          }
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Automotive Hub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className='text-gray-500'>Privacy Policy</Link>
          <Link href="/" className='text-gray-500'>Terms of Use</Link>

        </div>


      </div> </footer>
  )
}

export default Footer