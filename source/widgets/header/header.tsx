'use client'

import React from 'react'
import Image from 'next/image'
import { headerProps } from './types'

export const Header: React.FC<headerProps> = ({
  titleImage,
  cloudMoleculeImage,
  womenImage,
  description,
  colbaImage
}) => {
  return (
    <header className="box-border relative h-[801px]">
      <div className="pl-20 pr-20">
        <div className="pt-24 relative z-50">
          <Image
            src={titleImage.src}
            width={titleImage.width}
            height={titleImage.height}
            alt="Женщины в науке и технологиях"
          />
          <p className="max-w-[743px] text-xl leading-6 m-0 mt-10">
            {description}
          </p>
          <div className="h-[60px] mt-[32px]"></div>
          <div className="h-[97px] mt-[14px] mb-[48px]"></div>
        </div>
        <Image
          className="absolute right-[75px] bottom-[72px] z-20"
          src={cloudMoleculeImage.src}
          width={cloudMoleculeImage.width}
          height={cloudMoleculeImage.height}
          alt=""
        />
        <Image
          className="absolute right-[208px] bottom-[84px] z-40"
          src={womenImage.src}
          alt="Женщины в науке и технологиях"
          width={womenImage.width}
          height={womenImage.height}
        />
      </div>
      <div className="h-[128px] bg-[#2D2458] relative z-30 flex justify-between">
        <Image
          className="box-content self-center pl-[100px]"
          src={colbaImage.src}
          alt="Логотип колба"
          width={colbaImage.width}
          height={colbaImage.height}
        />
        <p className="self-center text-[45px] font-bold text-white w-[814px] mt-[17px] text-center">
          форум и премия
        </p>
      </div>
    </header>
  )
}
