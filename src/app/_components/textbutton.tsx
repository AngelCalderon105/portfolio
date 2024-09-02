
export default function textButton({text} : { text: string}) {
    return (
      <span className='bg-ui border-2 px-4 border-text border-opacity-10 rounded-xl flex items-center whitespace-nowrap'>
              <p className="text-white">{text}</p>
      </span>
    )
  }
  