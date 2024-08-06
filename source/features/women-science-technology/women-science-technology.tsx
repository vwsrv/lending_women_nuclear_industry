import Image from 'next/image'
import { womenScienceTechnologyProps } from './types'

export const WomenScienceTechnology: React.FC<womenScienceTechnologyProps> = ({
  title,
  subtitle,
  paragraph,
  img
}) => {
  return (
    <section className="relative flex flex-col py-[76px] px-[80px] text-[#2D2458]">
      <h3 className="pb-[28px] text-[55px] font-bold leading-[66.56px]">
        {title}
      </h3>
      <h5 className="pb-[15px] text-[36px] font-bold leading-[43.57px]">
        {subtitle}
      </h5>
      <p className="max-w-[884px] text-[20px] font-normal leading-loose">
        {paragraph}
      </p>
      <Image
        className="absolute bottom-[80px] right-[80px]"
        src={img}
        alt=""
        placeholder="blur"
      />
    </section>
  )
}
