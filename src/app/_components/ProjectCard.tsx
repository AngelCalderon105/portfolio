import { StaticImageData } from "next/image";
import Image from "next/image";
import TextButton from "./TextButton";
// React
import * as motion from "framer-motion/client"

interface ProjectCardProps {
  projectName: string;
  tools: string[];
  projectImage: StaticImageData;
  description: string;
  githubLink: string;
}

export default function ProjectCard({projectName, tools, projectImage, description, githubLink} : ProjectCardProps ) {
  return (
    <motion.div className='card my-5 p-0 overflow-hidden group '
    initial={{ y: 100, opacity: 0  }}
    whileInView={{ y: 0, opacity:1}}
      transition={{delay:.1,
        ease: "linear",
         duration: 2.5,
         type:"spring"
      }}
      viewport={{ once: true }} 

    >
        <div className="flex justify-start gap-2 overflow-hidden">
      <a href={githubLink} target="_blank" className="block">
          <Image 
            src={projectImage} 
            alt="Company Logo"
            className="rounded-t-3xl transform transition-transform duration-700 group-hover:scale-105"  
            />
            </a>
        </div>
      
        <div className="p-5">
          <p className="text-white text-xl mb-2 md:text-4xl">{projectName}</p>
          <p className="my-4 md:text-lg">{description}</p>
          <div className="flex flex-wrap gap-2 md:text-lg ">
            {tools.map(tool => (
              <TextButton key={tool} text={tool} textSize="text-md"/>
            ))}
          </div>
        </div>
    </motion.div>
  );
}

