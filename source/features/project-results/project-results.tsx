import Image from 'next/image'
import { projectResultsProps } from './types'

export const ProjectResults: React.FC<projectResultsProps> = ({
  title,
  subtitle,
  items,
  img
}) => {
  return (
    <section className="relative p-20 bg-[#2e2559] text-[#F7F7F7] flex flex-col">
      <h3 className="pb-5 text-6xl font-bold">{title}</h3>
      <h5 className="pb-20 text-4xl font-bold">{subtitle}</h5>
      <div className="w-full px-24 flex justify-center flex-wrap gap-24">
        {items &&
          items.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <span className="text-5xl font-bold">{item.number}</span>
              <p className="text-4xl font-normal">{item.text}</p>
            </div>
          ))}
      </div>
      <Image className="absolute top-16 right-20 w-52 h-48" src={img} alt="" />
    </section>
  )
}
