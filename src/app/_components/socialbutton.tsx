import React from 'react'
import Image from 'next/image'

export default function Socialbutton( {imageSrc, url, altText}:{imageSrc: string, url: string, altText: string} ) {
  return (
    <div className='w-12 border-2 p-2 rounded-xl border-text border-opacity-10'>
        <Image src= {imageSrc} alt = {altText}>
        </Image>    
    </div>
  )
}
