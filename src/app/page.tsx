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
    <main className="bg-background text-text py-5 lg:flex lg:justify-center scroll-smooth ">
      <div className="lg:max-w-7xl ">
      <div className="lg:flex lg:flex-none lg:justify-center pt-10 ">

      <div className='card lg:max-w-3xl'>
        <div className="md:flex md:justify-between  ">
          <div className="flex items-center">
            <div className=" w-20">
              <Image src={avatarThumbsUp} alt="Thumbs Up Avatar"></Image>
            </div>
            <div>
              <div className="text-white text-lg md:text-xl  ">Hey, Im Angel</div>
              <div className="md:text-lg"> California, United States</div>
            </div>
          </div>
          <div className="flex justify-start gap-2 my-2 ">
            <SocialButton imageSrc={linkedInLogo} altText="LinkedIn Logo" url = "https://www.linkedin.com/in/angel-calderon-74036b195/"/>
            <SocialButton imageSrc = {githubLogo}  altText="Twitter Logo" url = "https://github.com/AngelCalderon105"/>
            {/* <SocialButton imageSrc = {tiktokLogo}  altText="Twitter Logo" url = "https://www.tiktok.com/@reflexcode.io"/> */}
            <TextButton text = "Get In Touch" textSize="md:text-lg" navigation="#contact"/>
          </div>
        </div>
        <p className="heading mt-5 md:text-4xl">Pushing Ideas to their <i className="font-instrument_italic">Absolute</i> Potential Through code.</p>
        <p className="my-4 md:text-lg lg:text-2xl">Hey there, I&apos;m Angel, I&apos;m in love with the creative process. I excel in both <i>front-end</i> and <i>back-end</i>, delivering robust and elegant software.</p>
      </div>
      
        {/* Star Greeting */}
        <div className="card relative my-10 z-0 overflow-hidden border-b-0.5 lg:m-0  lg:mr-10 lg:p-0 lg:flex lg:flex-none ">
          {/* The image container with a higher z-index */}
          <div className="flex justify-center  ">

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
        </div>


      </div>



    

      {/* Tech Carousel */}
      <div className="my-10 mx-10 relative ">
          <div className="absolute inset-0  z-10">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent"></div>
          </div>
          <p className="text-center my-5">Tools I&apos;ve Mastered!</p>
          <div className=" ">
          <div className="">

          <TechCousel techImages={techImages}/>
          </div>
          </div>
      </div>
     
      {/* What Sets Me Apart */}
<div className="card border-b-0.5 lg:flex lg:flex-none max-w-7xl">
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
</div>

      {/* Experience */}
      <div id = "experience" className="py-5">
        <p className="heading mx-5">Experience</p>
      
        <ExperienceCard 
        companyLogo = {altitudLogo}
        companyName="Altitud" 
        position="Founder/Full Stack Engineer" 
        date = "March 2024 - Present"
        text="Lead Developer of a team of 10, including software engineers and UI/UX designers, directing all operations." 
        technicalSkills={[ 
          "Next.js",
          "React.js",
          "Tailwind CSS",
          "TypeScript",
          "PostgreSQL",
          "Prisma"
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
        text="Contributed to key milestones while learning and supporting full development cycles for over 2,000 users." 
        date = "June 2024 - Present"
        technicalSkills={[ 
          "Next.js",
          "React.js",
          "Tailwind CSS",
          "TypeScript",
          "PostgreSQL",
          "Prisma"
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
        <p className="heading mx-5 ">Projects</p>
        <ProjectCard 
        projectName = "Calderon Bulldogs"
        projectImage = {cbulldogs}
        githubLink="https://github.com/altitud-initiative/calderon-bulldogs"
        tools = {["Next.js","React.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Prisma", "AWS S3"]}
        description = "A Full Stack website fo Local Puppy Business"
        />
                <ProjectCard 
        projectName = "Green Portfolio"
        projectImage = {gpp}
        githubLink="https://github.com/gpproject06/green-portfolio-website"
        tools = {["Next.js","React.js", "Tailwind CSS", "TypeScript", "MongoDB"]}
        description = "A Landing page for a Business Organization designed to help students"
        />
        <ProjectCard 
        projectName = "Sparky's Puppies"
        projectImage = {sparkybulldogs}
        githubLink="https://github.com/AngelCalderon105/Sparkies-Puppies"
        tools = {["HTML","JavaScript", "Tailwind CSS", "Firebase"]}
        description = "A Full Stack website fo Local Puppy Business"
        />
      </div>
      <div className="flex flex-col items-center justify-center" id="contact">
        <h1 className="font-instrument_italic mt-4 text-text text-4xl">Calderon</h1>
        <p className="mx-4 mt-2 mb-4  text-white text-center">Actively Looking For Software Engineering Positions</p>
      </div>
      <div className="flex justify-center gap-x-4 ">
           <SocialButton imageSrc={linkedInLogo} altText="LinkedIn Logo" url = "https://www.linkedin.com/in/angel-calderon-74036b195/"/>
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
