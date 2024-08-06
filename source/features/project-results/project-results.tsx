import Image from "next/image"
import { projectResultsProps } from "./types"

export const ProjectResults: React.FC<projectResultsProps> = ({ title, subtitle, items, img }) => {
  return (
    <section className="relative pt-[79px] pb-[87px] px-[80px] bg-[#2e2559] text-[#F7F7F7] flex flex-col">
      <h3 className="pb-[18px] text-[55px] leading-[66.56px] font-bold">{title}</h3>
      <h5 className="pb-[74px] text-[40px] leading-[60px] font-bold">{subtitle}</h5>
      <div className="w-full px-[94px] flex justify-center flex-wrap gap-[100px]">
        {items && items.map((item, index) => (
          <div className="flex flex-col items-center " key={index}>
            <span className="text-[53px] leading-[60px] font-bold">{item.number}</span>
            <p className="text-[40px] leading-[60px] font-normal">{item.text}</p>
          </div>
        ))}
      </div>
      <Image className="absolute top-[61px] right-[78px] w-[205px] h-[199px]" src={img} alt='' />
    </section>
  )
}
