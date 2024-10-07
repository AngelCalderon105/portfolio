import Image from "next/image";
import { StaticImageData } from "next/image";
import ShootingStars from "./_components/ShootingStars";
import ExperienceCard from "./_components/ExperienceCard";
import ProjectCard from "./_components/ProjectCard";
import TextButton from "./_components/TextButton";
import SocialButton from "./_components/SocialButton";
import avatarThumbsUp from "../../public/avatar/thumbsup.png"
import avatarThinking from "../../public/avatar/thinking.png"
import avatarGreeting from "../../public/avatar/greeting.png"
import altitudLogo from "../../public/images/altitudlogo.png"
import sparkybulldogs from "../../public/images/sparkybulldogs.png"
import gpp from "../../public/images/gpp.png"
import cbulldogs from "../../public/images/cbulldogs.png"
import gppLogo from "../../public/images/gpplogo.png"
import altitudTeam from "../../public/images/altitudteam.png"
import gppteam1 from "../../public/images/gppteam1.jpg"
import gppteam2 from "../../public/images/gppteam2.png"

import tiktokLogo from "../../public/socialmedia/tiktok-logo.svg"
import linkedInLogo from "../../public/socialmedia/linkedin-logo.svg"
import githubLogo from "../../public/socialmedia/github-logo.svg"
import rightArrow from "../../public/symbols/right-arrow.svg"
import TechCousel from "./_components/TechCarousel";

import expressLogo from "../../public/techImages/express.png";
import javascriptLogo from "../../public/techImages/javascript.png";
import mongodbLogo from "../../public/techImages/mongodb.png";
import nextLogo from "../../public/techImages/next.png";
import nodeLogo from "../../public/techImages/node.png";
import postgresqlLogo from "../../public/techImages/postgresql.png";
import prismaLogo from "../../public/techImages/prisma.png";
import pythonLogo from "../../public/techImages/python.png";
import tailwindLogo from "../../public/techImages/tailwind.png";
import typescriptLogo from "../../public/techImages/typescript.png";

// React
import * as motion from "framer-motion/client"


export default function Home() {
  const techImages: StaticImageData[] = [
    expressLogo,
    javascriptLogo,
    mongodbLogo,
    nextLogo,
    nodeLogo,
    postgresqlLogo,
    prismaLogo,
    pythonLogo,
    tailwindLogo,
    typescriptLogo
  ];
    return (
    <main className="bg-background text-text py-5 flex justify-center scroll-smooth ">
      <div className="max-w-3xl lg:max-w-7xl ">
      <div className="lg:grid lg:grid-cols-3  pt-10">

      <motion.div className='card lg:max-w-3xl col-span-2 '
      initial={{ y: '100vw', opacity: 0  }}
      animate={{y: 0, opacity:1}}
      transition={{delay:.1,
        ease: "linear",
         duration: 2.5,
         type:"spring"
      }}
        >
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex items-center">
            <div className=" w-20">
              <Image src={avatarThumbsUp} alt="Thumbs Up Avatar"></Image>
            </div>
            <div>
              <div className="text-white text-lg  ">Hey, Im Angel</div>
              <div className=""> United States</div>
            </div>
          </div>
          <div className="flex justify-start gap-1 my-2 ">
            <SocialButton imageSrc={linkedInLogo} altText="LinkedIn Logo" url = "https://www.linkedin.com/in/angel-calderon-dev/"/>
            <SocialButton imageSrc = {githubLogo}  altText="Twitter Logo" url = "https://github.com/AngelCalderon105"/>
            {/* <SocialButton imageSrc = {tiktokLogo}  altText="Twitter Logo" url = "https://www.tiktok.com/@reflexcode.io"/> */}
            <TextButton text = "Get In Touch" textSize="" navigation="#contact"/>
          </div>
        </div>
        <p className="heading mt-5 md:text-4xl">Pushing Ideas to their <i className="font-instrument_italic">Absolute</i> Potential Through Code. </p>
        <p className="my-4 md:text-lg lg:text-2xl">Hey there, I&apos;m Angel, I&apos;m in <i>love</i> with the <i>creative process</i>. I excel in both <i>front-end</i> and <i>back-end</i>, delivering robust and elegant software.</p>
      </motion.div>
      
        {/* Star Greeting */}
        <motion.div className="card items-end relative my-10 z-0 overflow-hidden border-b-0.5 lg:m-0  lg:mr-10 lg:p-2 grid-cols-1 "
          initial={{ y: '100vw'  }}
          animate={{y: 0}}
          transition={{delay:.2,
            ease: "linear",
             duration: 2.5,
             type:"spring"
          }}>
          {/* The image container with a higher z-index */}
          <div className="flex justify-center lg:items-end lg:h-full ">

          <Image src={avatarGreeting} alt="Greeting Avatar" className="relative z-30" />
          </div>

          {/* Existing Shooting stars animation with a lower z-index */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <ShootingStars />
          </div>

          {/* CSS-based shooting stars placed on top */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="shooting-star-container">
              <div className="shooting-star"></div>
              <div className="shooting-star"></div>
              <div className="shooting-star"></div>
              <div className="shooting-star"></div>
              <div className="shooting-star"></div>
              <div className="shooting-star"></div>
            </div>
          </div>

          {/* Fade effect including the bottom border */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-100 z-40 pointer-events-none rounded-b-xl"></div>
        </motion.div>


      </div>



    

      {/* Tech Carousel */}
      <motion.div className="flex justify-center"
       whileInView={{ opacity: 1 }}
       initial={{ y: '100vw', opacity: 0  }}
       animate={{y: 0}}
       transition={{delay:.5,
         ease: "linear",
          duration: 1,
       }}
       viewport={{ once: true }} 
      >
      <div className="my-10 mx-10 relative lg:w-8/12  ">
          <div className="absolute inset-0  z-10">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent"></div>
          </div>
          <p className="text-center mb-10">Tools I&apos;ve Mastered!</p>
          <TechCousel techImages={techImages}/>
         
      </div>
      </motion.div>
        
     
      {/* What Sets Me Apart */}
<motion.div className="card border-b-0.5 lg:flex lg:flex-none max-w-7xl"
   whileInView={{ opacity: 1 }}
   initial={{ y: '100vw', opacity: 0  }}
   animate={{y: 0}}
   transition={{delay:.5,
     ease: "linear",
      duration: 1,
   }}
   viewport={{ once: true }} 
  >
  <div className="relative  overflow-hidden flex justify-center lg:flex-none lg:w-72">
    <Image src={avatarThinking} alt="Thinking Avatar" className="relative z-20" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-100 z-30 pointer-events-none rounded-b-xl"></div>
  </div>

  {/* Text content */}
  <div className="">

    <p className="heading md:text-4xl">What sets me <i className="font-instrument_italic">apart?</i></p>
    <p className="my-4 md:text-lg lg:text-2xl">
      My determination knows no bounds. I am exceptionally proactive in my work ethic; more often than not, going <i>above and beyond</i> to achieve remarkable results. My involvement in your team guarantees that <i>expectations</i> are not just met but <i>consistently exceeded</i>.
    </p>

    {/* Buttons */}
    <div className="inline-flex flex-col md:flex-row gap-4 my-4">
      <TextButton text="View Experience" symbol={rightArrow} textSize="md:text-lg" navigation="#experience"/>        
      <TextButton text="Browse My Work" symbol={rightArrow} textSize="text-md md:text-lg" navigation="#projects"/>
    </div>
  </div>
</motion.div>

      {/* Experience */}
      <div id = "experience" className="py-5">
        <motion.p className="heading text-5xl m-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} 
        >Experience</motion.p>
      
        <ExperienceCard 
        companyLogo = {altitudLogo}
        companyName="Altitud" 
        position="Founder/Full Stack Engineer" 
        date = "March 2024 - Present"
        text="Lead Developer of a team of 10 developers and UI/UX designers, directing all operations. Focused on making community impact with software. " 
        technicalSkills={[ 
          "Next.js",
          "TypeScript",
          "AWS",
          "TRPC",
          "Prisma",
          "PostgreSQL",
          
        ]} 
        softSkills={[
          "Leadership",
          "Team Collaboration",
          "Project Management",
          "Agile",
          "Communication"
        ]} 
        experienceImage={altitudTeam} />
        <ExperienceCard 
        companyLogo = {gppLogo}
        companyName="GPP" 
        position="Front End Developer Intern" 
        text="At the forefront of key milestones, supporting development cycles for a platform of 2,000+ users." 
        date = "June 2024 - Present"
        technicalSkills={[ 
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "Docker"
        ]} 
        softSkills={[
          "Leadership",
          "Team Collaboration",
          "Project Management",
          "Agile",
          "Communication"
        ]} 
        experienceImage={gppteam2} />
      
      </div>
      {/* Projects */}
      <div id="projects"  className="py-5">
        <motion.p className="heading text-5xl m-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} 
        >Projects</motion.p>
        <div className="lg:grid lg:grid-cols-2 ">

        <ProjectCard 
        projectName = "Calderon Bulldogs"
        projectImage = {cbulldogs}
        githubLink="https://github.com/altitud-initiative/calderon-bulldogs"
        tools = {["Next.js","React.js", "TypeScript", "Tailwind CSS",  "AWS S3", "Prisma", "PostgreSQL"]}
        description = "Full-Stack E-commerce CMS for a Local Business"
        />
                <ProjectCard 
        projectName = "Green Portfolio"
        projectImage = {gpp}
        githubLink="https://github.com/gpproject06/green-portfolio-website"
        tools = {["Next.js","React.js", "TypeScript", "Tailwind CSS",  "SQL", "Docker"]}
        description = "An educational platform designed to support business students"
        />
        
        <ProjectCard 
        projectName = "Sparky's Puppies"
        projectImage = {sparkybulldogs}
        githubLink="https://github.com/AngelCalderon105/Sparkies-Puppies"
        tools = {["HTML","JavaScript", "Tailwind CSS", "Firebase"]}
        description = "Front-end site increasing profit and customers for business."
        />
        
        </div>
      </div>
      <div className="flex flex-col items-center justify-center" id="contact">
        <h1 className="font-instrument_italic mt-4 text-text text-4xl">Calderon</h1>
        <p className="mx-4 mt-2 mb-4  text-white text-center">Actively Looking For Software Engineering Positions</p>
      </div>
      <div className="flex justify-center gap-x-4 ">
           <SocialButton imageSrc={linkedInLogo} altText="LinkedIn Logo" url = "https://www.linkedin.com/in/angel-calderon-dev/"/>
           <SocialButton imageSrc = {githubLogo}  altText="Twitter Logo" url = "https://github.com/AngelCalderon105"/>
            {/* <SocialButton imageSrc = {tiktokLogo}  altText="Twitter Logo" url = "https://www.tiktok.com/@reflexcode.io"/> */}      </div>
        <div className="flex flex-col items-center py-5 gap-2">
        <a href="mailto:angelcalderon105@gmail.com">angelcalderon105@gmail.com</a>
        <a href="tel:+714-482-5071">714-482-5071</a>

        </div>
      <p className=" text-center text-sm p-8  ">© Copyright 2024 Angel Calderon. All rights reserved.</p>

        </div>
      </main>
    );
}
