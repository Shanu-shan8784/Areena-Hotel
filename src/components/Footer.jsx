import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='bg-[#001F3F] text-gray-500/80  px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src="/src/assets/logo3.png" alt="logo" className='mb-4 h-32 rounded-full shadow-2xl text-gray-700 backdrop-blur-xl opacity-80 border-brand-gold'/>
                    <p className='text-sm text-white'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <a href="#">
                        <i className="fa-brands fa-instagram text-white font-bold text-3xl"></i>
                        </a>
                        {/* Facebook */}
                        <a href="#">
                        <i className="fa-brands fa-facebook text-white font-bold text-3xl"></i>
                        </a>
                        {/* WhatsApp */}
                        <a href="#">
                        <i className="fa-brands fa-whatsapp text-white font-bold text-3xl"></i>
                        </a>
                        {/* LinkedIn */}
                        <a href="#">
                        <i className="fa-brands fa-linkedin text-white font-bold text-3xl"></i>
                        </a>
                    </div>
                </div>

                <div className='mt-10'>
                    <p className='font-playfair text-lg text-white'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm text-white'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div className='mt-10'>
                    <p className='font-playfair text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm text-white'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80 mt-10'>
                    <p className='font-playfair text-lg text-white'>STAY UPDATED</p>
                    <p className='mt-3 text-sm text-white'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert'/>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p className='text-white'>© {new Date().getFullYear()} <a href="https://prebuiltui.com" className='text-yellow-600'>AREENA HOTEL</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4 text-white'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
