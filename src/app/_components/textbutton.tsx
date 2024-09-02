import Image from "next/image"
export default function textButton({text, symbol} : { text: string, symbol?: string}) {
    return (
      <span className='bg-ui border-2 py-1 px-4 text-lg border-text border-opacity-10 rounded-xl  inline-flex items-center  whitespace-nowrap'>
              
              <span className="text-white">
              {text}
              </span>
              
              
              {symbol && <Image src={symbol} alt="Icon" className="w-7 inline ml-4" />} 
              
      </span>
    )
  }
  