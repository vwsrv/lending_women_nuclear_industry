import Image from 'next/image'
import { womenScienceTechnologyProps } from './types'

export const WomenScienceTechnology: React.FC<womenScienceTechnologyProps> = ({
  title,
  subtitle,
  paragraph,
  img
}) => {
  return (
    <section className="relative flex flex-col py-20 px-20 text-[#2D2458]">
      <h3 className="pb-7 text-6xl font-bold">{title}</h3>
      <h5 className="pb-4 text-4xl font-bold">{subtitle}</h5>
      <p className="max-w-4xl text-xl font-normal">{paragraph}</p>
      <Image
        className="absolute bottom-20 right-20"
        src={img}
        alt=""
        placeholder="blur"
      />
    </section>
  )
}
