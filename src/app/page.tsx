import Image from "next/image";
import ExperienceCard from "./_components/experiencecard";
import TextButton from "./_components/TextButton";
import SocialButton from "./_components/SocialButton";
import avatarThumbsUp from "../../public/avatar/thumbsup.png"
import avatarThinking from "../../public/avatar/thinking.png"
import avatarGreeting from "../../public/avatar/greeting.png"
import altitudLogo from "../../public/images/altitudlogo.png"
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
            <TextButton text = "Get In Touch" />
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
          <TextButton text = "Browse My Work" symbol={rightArrow}/>
          <TextButton text = "View Experience" symbol={rightArrow}/>        
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
      
      </div>
      </main>
    );
}
