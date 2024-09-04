import Image from "next/image";
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
import twitterLogo from "../../public/socialmedia/twitter-logo.svg"
import tiktokLogo from "../../public/socialmedia/tiktok-logo.svg"
import rightArrow from "../../public/symbols/right-arrow.svg"

export default function Home() {
  return (
    <main className="bg-background  text-text py-5 ">
      <div className='card'>
        <div className="  ">
          <div className="flex items-center">
            <div className=" w-20">
              <Image src={avatarThumbsUp} alt="Thumbs Up Avatar"></Image>
            </div>
            <div>
              <div className="text-white text-lg ">Hey, Im Angel</div>
              <div>Software Engineer</div>
            </div>
          </div>
          <div className="flex justify-start gap-2 my-2">
            <SocialButton imageSrc={tiktokLogo} altText="Tiktok Logo" url = "tiktok.com"/>
            <SocialButton imageSrc = {twitterLogo}  altText="Twitter Logo" url = "x.com"/>
            <TextButton text = "Get In Touch" textSize="text-md"/>
          </div>
        </div>
        <p className="heading">Pushing Ideas to the <i className="font-instrument_italic">Absolute</i> Potential Through code.</p>
        <p className="my-4">Hey there, I&apos;m Angel, I&apos;m in love with the creative process. I excel in both <i>front-end</i> and <i>back-end</i>, delivering robust and elegant software.</p>
      </div>
      
      {/* Star Greeting */}
      <div className="card my-4">
        <Image src={avatarGreeting} alt="Greeting Avatar"></Image>
      </div>
     
      {/* What Sets Me Apart */}
      <div className="card">
        <Image src={avatarThinking} alt="Thinking Avatar"></Image>
        <p className="heading">What sets me <i className="font-instrument_italic">apart?</i></p>
        <p className="my-4">My determination knows no bounds. I am exceptionally proactive in my work ethic; more often than not, going <i>above and beyond</i> to achieve remarkable results. My involvement in your team guarantees that expectations are not just met but consistently exceeded,</p>
        <div className="inline-flex flex-col gap-4 my-4">
          <TextButton text = "Browse My Work" symbol={rightArrow} textSize="text-md"/>
          <TextButton text = "View Experience" symbol={rightArrow} textSize="text-md"/>        
        </div>
      </div>
      {/* Experience */}
      <div>
        <p className="heading mx-5">Experience</p>
      
        <ExperienceCard 
        companyLogo = {altitudLogo}
        companyName="Altitud" 
        position="Founder/Full Stack Engineer" 
        text="Lead Developer of a team of 8 engineers, managing all operations including sprint meetings, client relations and the design and implementation of full stack architecture utilizing MongoDB, Express, React, and Node.js." 
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
        image="" />
        <ExperienceCard 
        companyLogo = {gppLogo}
        companyName="GPP" 
        position="Front End Developer Intern" 
        text="Lead Developer of a team of 8 engineers, managing all operations including sprint meetings, client relations and the design and implementation of full stack architecture utilizing MongoDB, Express, React, and Node.js." 
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
        image="" />
      
      </div>
      {/* Projects */}
      <div>
        <ProjectCard 
        projectName = "Calderon Bulldogs"
        projectImage = {cbulldogs}
        tools = {["Next.js","React.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Prisma", "AWS S3"]}
        description = "A Full Stack website fo Local Puppy Business"
        />
                <ProjectCard 
        projectName = "Green Portfolio"
        projectImage = {gpp}
        tools = {["Next.js","React.js", "Tailwind CSS", "TypeScript", "MongoDB"]}
        description = "A Landing page for a Business Organization designed to help students"
        />
                <ProjectCard 
        projectName = "Sparky's Puppies"
        projectImage = {sparkybulldogs}
        tools = {["HTML","JavaScript", "Tailwind CSS", "Firebase"]}
        description = "A Full Stack website fo Local Puppy Business"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-instrument_italic mt-4 text-text text-4xl">Calderon</h1>
        <p className="mx-4 mt-2 mb-4  text-white text-center">Actively Looking For Software Engineering Positions</p>
      </div>
      <div className="flex justify-center gap-x-4 ">
        <SocialButton imageSrc={tiktokLogo} altText="Tiktok Logo" url = "tiktok.com"/>
        <SocialButton imageSrc={twitterLogo} altText="Twitter Logo" url = "twitter.com"/>
      </div>
      <p className=" text-center text-sm p-10  ">© Copyright 2024 Angel Calderon. All rights reserved.</p>

      </main>
    );
}
