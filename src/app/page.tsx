import Image from "next/image";
import Card from "./_components/card";
import TextButton from "./_components/textbutton";
import SocialButton from "./_components/socialbutton";
import avatarThumbsUp from "../../public/avatar/thumbsup.png"
import twitterLogo from "../../public/socialmedia/twitter-logo.svg"
import tiktokLogo from "../../public/socialmedia/tiktok-logo.svg"
export default function Home() {
  return (
    <main className="bg-background h-screen text-text py-5 ">
      
      
      <div className='bg-ui p-5 mx-5 border-1 border-white border-opacity-10 rounded-2rem'>
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
          <div className="flex justify-start gap-2">
            <SocialButton imageSrc={tiktokLogo} altText="Tiktok Logo" url = "tiktok.com"/>
            <SocialButton imageSrc = {twitterLogo}  altText="Twitter Logo" url = "x.com"/>
            <TextButton text = "Get In Touch"/>
          </div>
        </div>
        <p className="text-heading text-2xl">Pushing Ideas to their Absolute Potential Through code.</p>
        <p className="">Hey there, I'm Angel, I'm in love with the creative process. I excel in both front-end and back-end, delivering robust and elegant software.</p>
      </div>
      </main>
    );
}
