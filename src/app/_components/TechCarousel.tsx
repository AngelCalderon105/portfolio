'use client'; 
import {Carousel,CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image"
import AutoScroll from 'embla-carousel-auto-scroll'

  export default function TechCousel({techImages}:{techImages : StaticImageData[]}) {
    
    return (
  <Carousel
  plugins={[
    
    AutoScroll({
      speed: .5,
    }),
  ]}
  className=""
  >
  <CarouselContent>

  {
  techImages.map((imageSrc, index) => (
    <CarouselItem key={index} className="">
      <Image 
        src={imageSrc} 
        alt="Company Logo"
        className="w-16 lg:w-18"  
      />
    </CarouselItem>
  ))
}
    
  </CarouselContent>
</Carousel>
  )
}