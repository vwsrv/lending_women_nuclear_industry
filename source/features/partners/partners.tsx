import Image from 'next/image'
import { partnersProps } from './types'

export const Partners: React.FC<partnersProps> = ({ partners, info }) => {
  return (
    <section className="py-[82px] px-[80px] flex flex-col">
      <h3 className="text-[#2D2458] font-bold text-[55px] leading-[66.56px]">
        {partners.title}
      </h3>
      <div className="pt-[90px] flex flex-wrap justify-between">
        {partners.images &&
          partners.images.map((img, index) => (
            <Image key={index} src={img} alt="" placeholder="blur" />
          ))}
      </div>
      <h3 className="pt-[168px] text-[#2D2458] font-bold text-[55px] leading-[66.56px]">
        {info.title}
      </h3>
      <div className="pt-[90px] flex flex-wrap justify-between">
        {info.images &&
          info.images.map((img, index) => (
            <Image key={index} src={img} alt="" placeholder="blur" />
          ))}
      </div>
    </section>
  )
}
