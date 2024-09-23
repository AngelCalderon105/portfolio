import { StaticImageData } from "next/image";
import Image from "next/image";
import TextButton from "./TextButton";
// React
import * as motion from "framer-motion/client"

interface ExperienceCardProps {
  companyLogo: StaticImageData;
  companyName: string;
  position: string;
  text: string;
  date : string;
  experienceImage: StaticImageData;
  technicalSkills: string[];
  softSkills: string[];
}

export default function ExperienceCard({
  companyLogo, 
  companyName, 
  position,
  date,
  text,
  experienceImage,
  technicalSkills,
  softSkills } :ExperienceCardProps ) {
    return (
      <motion.div className='card mt-10 lg:px-14'
      initial={{ y: 100, opacity: 0  }}
      whileInView={{ y: 0, opacity:1}}
        transition={{delay:.1,
          ease: "linear",
           duration: 2.5,
           type:"spring"
        }}
        viewport={{ once: true }}
     
      >
      <div className="lg:flex lg:justify-between mb-5">
      <div className=" flex justify-start gap-2">
        <Image 
        src = {companyLogo} 
        alt = "Company Logo"
        width={70}  
        height={70}
        className="rounded-2xl"  
        ></Image>
        <p className="heading ">{companyName}</p>
      </div>
      <div className="flex flex-col justify-center lg:text-lg">
        <p className="hidden lg:block">{date}</p>
      </div>
        </div>
      <div className="lg:flex lg:justify-between  ">
        <div className="">

        <p className="heading my-0 ">{position}</p>
        <p className="my-5 lg:hidden">{date}</p>
        <p className="my-5 lg:my-9 lg:w-9/12  md:text-lg lg:text-2xl">{text}</p>
    <div>
      <h1 className="text-white text-2xl mb-4">Technical Skills</h1>
      <div className="flex flex-wrap gap-2 ">
      {technicalSkills.map(skill => (
        <TextButton key={skill} text={skill} textSize="text-md"/>
      ))}
      </div>
    </div>
        </div>
        <div className="mt-10 lg:my-0">
        <Image
        src = {experienceImage} 
        alt = "Company Logo"
        className="  rounded-2xl lg:max-w-sm ">

        </Image>

          </div>
    </div>
    {/* <div className="mt-10">
      <h1 className="text-white text-2xl my-4">Soft Skills</h1>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
      {softSkills.map(skill => (
          <TextButton key={skill} text={skill} textSize="text-md"/>
        ))}
      </div>
    </div> */}
    </motion.div>
  )
}
