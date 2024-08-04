'use client';

import { Button } from '@/source/shared/ui/button';
import { Header } from '@/source/widgets/header/header';
import { useState } from 'react';
import headerTitle from '@/public/for-header/header__title.svg';
import moleculeCloudsBgd from '@/public/for-header/molecule-clouds.svg';
import womenBgd from '@/public/for-header/women.svg';
import colbaImage from '@/public/for-header/colba.svg'

export const HomePage: React.FC = () => {

  const [headerDescription, setHeaderDescription] = useState<string>('Хотите стать участником самого крупного женского научного сообщества в России, партнером/инфопартнером, волонтером, колумнистом блога, меценатом оставьте заявку ниже или поддержите проект');

  return (
    <main className='max-w-[1444px] min-w-[320px] mx-auto'>
      {/* <Button className="bg-[#D3CAFF] rounded-2xl px-6 py-8 text-[#2E2559] bold text-2xl hover:opacity-75 transition-opacity">
        Зарегистрироваться
      </Button> */}
      <Header
        titleImage={headerTitle}
        cloudMoleculeImage={moleculeCloudsBgd}
        womenImage={womenBgd}
        description={headerDescription}
        colbaImage={colbaImage}
      />
    </main>
  )
}
