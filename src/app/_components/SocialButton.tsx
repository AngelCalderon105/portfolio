import React from 'react'
import Image from 'next/image'

export default function SocialButton( {imageSrc, url, altText}:{imageSrc: string, url: string, altText: string} ) {
  return (
    <a className='w-12 border-2 p-2 rounded-xl border-text border-opacity-10 flex justify-center items-center' href={url}>
        <Image src= {imageSrc} alt = {altText}>
        </Image>    
    </a>
  )
}
