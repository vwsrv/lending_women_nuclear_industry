import { stagesProps } from './types'
import Image from 'next/image'
import { stagesTexts } from './stagesTexts'
import stagesImage from '@/public/stages.svg'

export const Stages: React.FC<stagesProps> = (
  {
    // stagesImage
  }
) => {
  return (
    <section className="p-20 pt-11 pb-32 bg-gray text-indigo bg-logo-white bg-no-repeat bg-top-logo-white-1 bg-[length:218px_61px]">
      <h2 className="uppercase text-6xl/tight font-bold mb-12">
        {stagesTexts.title}
      </h2>
      <div className="bg-[url('/polygon-medium.svg')] bg-no-repeat bg-[right_-4rem_top]">
        <Image
          src={stagesImage.src}
          alt={stagesTexts.title}
          height={stagesImage.height}
          width={stagesImage.width}
        />
      </div>
    </section>
  )
}
