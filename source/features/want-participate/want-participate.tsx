import Image from "next/image";
import { Button } from "@/source/shared/ui/button";
import { wantParticipateTexts } from "./wantParticipateTexts";
import colba from "@/shared/images/for-want-participate/colba.svg";
import clouds from "@/shared/images/for-want-participate/clouds.svg";

export const WantParticipate: React.FC = () => {
  return (
    <section className="bg-indigo pl-20 pt-[32px] pb-[21px] pr-[73px] flex justify-between">
      <div>
        <h3 className="font-bold text-h3 text-white uppercase">{wantParticipateTexts.title}</h3>
        <div className="flex gap-[73px] mt-[30px]">
          <div>
            <p className="uppercase text-[32px] text-white font-normal">{wantParticipateTexts.forum.title}</p>
            <Button
              variant="blue"
              className="w-[335px] h-[97px] bg-blue rounded-xl text-white text-[24px] font-bold mt-[11px]"
            >
              Зарегистрироваться
            </Button>
          </div>
          <div>
            <p className="uppercase text-[32px] text-white font-normal ">{wantParticipateTexts.award.title}</p>
            <Button
              variant="blue"
              className="w-[335px] h-[97px] bg-violet rounded-xl text-white text-[24px] font-bold mt-[11px]"
            >
              {wantParticipateTexts.award.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Image
          className="translate-y-[10px] translate-x-[-12px]"
          src={colba.src}
          alt="Логотип колба"
          width={colba.width}
          height={colba.height}
        />
        <Image
          className="translate-y-8"
          src={clouds.src}
          alt="Облака"
          width={clouds.width}
          height={clouds.height}
        />
      </div>
    </section>
  )
}