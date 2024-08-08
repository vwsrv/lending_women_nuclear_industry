import Image from 'next/image'
import { partnersProps } from './types'

export const Partners: React.FC<partnersProps> = ({ partners, info }) => {
  return (
    <section className="p-20 flex flex-col">
      <h3 className="text-[#2D2458] font-bold text-6xl">{partners.title}</h3>
      <div className="pt-24 flex flex-wrap justify-between">
        {partners.images &&
          partners.images.map((img, index) => (
            <Image key={index} src={img} alt="" placeholder="blur" />
          ))}
      </div>
      <h3 className="pt-40 text-[#2D2458] font-bold text-6xl">{info.title}</h3>
      <div className="pt-24 flex flex-wrap justify-between">
        {info.images &&
          info.images.map((img, index) => (
            <Image key={index} src={img} alt="" placeholder="blur" />
          ))}
      </div>
    </section>
  )
}
