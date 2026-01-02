import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StartRating from './StartRating'
import '../Hotel.css'


function Testimonial() {
  
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-10 md:pt-20 pb-30'>
      <Title title="What our guests say" subTitle="Discover why Discerning travelers continuously Chose QuickStay for their exclusive and luxurious and exciting accommodational around the world."/>
    
      <div className=" flex flex-wrap items-center gap-6 mt-20">
            <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
            {/* Gradient Overlays (Optional for a "fading" effect at edges) */}
            <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-linear-to-r from-white to-transparent hidden md:block"></div>
            <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-linear-to-l from-white to-transparent hidden md:block"></div>

            {/* Slider Wrapper */}
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-6 scroll-smooth" >
              {testimonials.map((testimonial) => (
                <div
              key={testimonial.id} 
              className="marquee-inner marquee-reverse  bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 w-80 shrink-0 snap-center border border-gray-100"
            >
              {/* User Info Header */}
              <div className="flex items-center gap-3">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                />
          <div className="flex flex-col">
            <p className="font-playfair text-xl font-semibold">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.address}</p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mt-4 text-orange-400">
          <StartRating />
        </div>

            {/* Review Text */}
            <p className="text-gray-600 mt-4 leading-relaxed italic">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

    </div>
  )
}

export default Testimonial
