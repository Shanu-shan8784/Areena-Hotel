import React from 'react'

function Title({title, subTitle, align, font}) {
  // Determine alignment classes based on the 'align' prop
  const alignmentClasses = align === "left" 
    ? "items-start text-left" 
    : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignmentClasses}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || 'font-playfair'}`}>
        {title}
      </h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174px'>
        {subTitle}
      </p>
    </div>
  )
}

export default Title
