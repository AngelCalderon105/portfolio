
export default function Card({heading, text} : {heading: string, text: string}) {
  return (
    <div className='bg-ui w-full p-5 '>
    <p className="text-heading text-2xl">{heading}</p>
    <p className="text-text">{text}</p>
    </div>
  )
}
