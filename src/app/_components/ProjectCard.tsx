import { StaticImageData } from "next/image";
import Image from "next/image";
import TextButton from "./TextButton";

interface ProjectCardProps {
  projectName: string;
  tools: string[];
  projectImage: StaticImageData;
  description: string;
}

export default function ProjectCard({projectName, tools, projectImage, description} :ProjectCardProps ) {
  return (
    <div className='card my-5 p-0 '>
      <div className=" flex justify-start gap-2">
        <Image 
        src = {projectImage} 
        alt = "Company Logo"
        className="rounded-t-3xl"  
        ></Image>
      </div>
      
      <div className="p-5">
        <p className="text-white text-xl  mb-2">{projectName}</p>
          <p className="my-4">{description}</p>
        <div className="flex flex-wrap gap-2 ">
        {tools.map(tool => (
            <TextButton key={tool} text={tool} textSize="text-md"/>
            ))}
        </div>
        </div>
    
      </div>
  )
}
