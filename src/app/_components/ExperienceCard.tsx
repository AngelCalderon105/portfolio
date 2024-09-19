import { StaticImageData } from "next/image";
import Image from "next/image";
import TextButton from "./TextButton";

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
    <div className='card my-5'>
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
    <p className="heading ">{position}</p>
    <p className="my-4">{date}</p>
        <Image
        src = {experienceImage} 
        alt = "Company Logo"
        className="rounded-2xl">

        </Image>
    <p className="my-4">{text}</p>
    <div>
      <h1 className="text-white text-2xl my-4">Technical</h1>
      <div className="flex flex-wrap gap-2 ">
      {technicalSkills.map(skill => (
        <TextButton key={skill} text={skill} textSize="text-md"/>
      ))}
      </div>
    </div>
    <div className="mt-10">
      <h1 className="text-white text-2xl my-4">Soft Skills</h1>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
      {softSkills.map(skill => (
          <TextButton key={skill} text={skill} textSize="text-md"/>
        ))}
      </div>
    </div>
    </div>
  )
}
