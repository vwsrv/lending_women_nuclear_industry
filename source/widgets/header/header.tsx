'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/source/shared/ui/button'
import { headerProps } from './types'
import headerTitle from '@/shared/images/for-header/header__title.svg'
import moleculeCloudsBgd from '@/shared/images/for-header/molecule-clouds.svg'
import womenBgd from '@/shared/images/for-header/women.svg'
import colbaImage from '@/shared/images/for-header/colba.svg'

export const Header: React.FC<headerProps> = ({ description }) => {
  return (
    <header className="box-border relative">
      <div className="pl-20 pr-20">
        <div className="pt-24 relative z-50">
          <Image
            src={headerTitle.src}
            width={headerTitle.width}
            height={headerTitle.height}
            alt="Женщины в науке и технологиях"
          />
          <p className="max-w-[743px] text-2xl/[40px] m-0 mt-[23px]">
            {description}
          </p>
          <div className="h-[60px] mt-[26px]"></div>
          <div className="h-[97px] mb-[113px]"><Button
            variant="blue"
            className="w-[335px] h-[97px] bg-blue rounded-xl text-white text-[24px] font-bold mt-[11px]"
          >
            Поддержать проект
          </Button></div>
        </div>
        <Image
          className="absolute right-[75px] bottom-[67px] z-20"
          src={moleculeCloudsBgd.src}
          width={moleculeCloudsBgd.width}
          height={moleculeCloudsBgd.height}
          alt=""
        />
        <Image
          className="absolute right-[208px] bottom-[76px] z-40"
          src={womenBgd.src}
          alt="Женщины в науке и технологиях"
          width={womenBgd.width}
          height={womenBgd.height}
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
