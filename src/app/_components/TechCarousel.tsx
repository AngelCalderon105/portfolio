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
  >
  <CarouselContent>

     {
       techImages.map(imageSrc =>(
         <CarouselItem className="">
         <Image 
         src = {imageSrc} 
         width={100}
         height={100}
        alt = "Company Logo"
        className=""  
        ></Image>
    </CarouselItem>
      ))
     }
    
    
  </CarouselContent>
</Carousel>
  )
}