import React from 'react'

export const CardHeader = ({ img, name }) => {
  return (
    <div className='flex items-center gap-x-4 mb-4'>
      <img src={img} className='rounded-full w-9 h-9' alt='Avatar image' />
      <figcaption>
        <h3>{name}</h3>
        <p className='opacity-70'>Verified Graduate</p>
      </figcaption>
    </div>
  )
}

export const CardText = ({ text }) => {
  return <p className='font-semibold text-xl mb-4'>{text}</p>
}

export const CardTestimonial = ({ testimonial }) => {
  return (
    <blockquote>
      <p className='opacity-80'>{testimonial}</p>
    </blockquote>
  )
}