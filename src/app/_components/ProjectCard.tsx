import { StaticImageData } from "next/image";
import Image from "next/image";
import TextButton from "./TextButton";

interface ProjectCardProps {
  projectName: string;
  tools: string[];
  projectImage: StaticImageData;
  description: string;
  githubLink: string;
}

export default function ProjectCard({projectName, tools, projectImage, description, githubLink} : ProjectCardProps ) {
  return (
    <div className='card my-5 p-0 overflow-hidden group'>
      <a href={githubLink} className="">
        <div className="flex justify-start gap-2 overflow-hidden">
          <Image 
            src={projectImage} 
            alt="Company Logo"
            className="rounded-t-3xl transform transition-transform duration-700 group-hover:scale-105"  
          />
        </div>
      
        <div className="p-5">
          <p className="text-white text-xl mb-2">{projectName}</p>
          <p className="my-4">{description}</p>
          <div className="flex flex-wrap gap-2 ">
            {tools.map(tool => (
              <TextButton key={tool} text={tool} textSize="text-md"/>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

