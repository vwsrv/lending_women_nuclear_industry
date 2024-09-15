import { Header } from '@/source/widgets/header/header'
import { Nominations } from '@/source/widgets/nominations'
import { MissionAndTasks } from '@/source/widgets/missionAndTasks'
import { WantParticipate } from '@/source/features/want-participate'
import { Partners } from '@/source/features/partners'
import { ProjectResults } from '@/source/features/project-results'
import { Stages } from '@/source/features/stages'
import { Experts } from '@/source/features/experts'
import { Trustees } from '@/source/features/trustees'
import evrasii from '@/shared/images/for-partners/assambleya-evrazii.png'
import vciom from '@/shared/images/for-partners/vciom.png'
import tvoi from '@/shared/images/for-partners/tvoi-hod.png'
import slava from '@/shared/images/for-partners/slava.png'
import ecodao from '@/shared/images/for-partners/ecodao.png'
import mm from '@/shared/images/for-partners/mm.png'
import vestnik from '@/shared/images/for-partners/vestnik.png'
import designers from '@/shared/images/for-partners/designers.png'
import global from '@/shared/images/for-partners/global.png'
import rounds from '@/shared/images/for-project-results/rounds.svg'
import headerTitle from '@/public/for-header/header__title.svg'
import moleculeCloudsBgd from '@/public/for-header/molecule-clouds.svg'
import womenBgd from '@/public/for-header/women.svg'
import colbaImage from '@/public/for-header/colba.svg'

export const HomePage: React.FC = () => {
  return (
    <main>
      <Header
        description={
          'Хотите стать участником самого крупного женского научного сообщества в России, партнером/инфопартнером, волонтером, колумнистом блога, меценатом оставьте заявку ниже или поддержите проект'
        }
        titleImage={headerTitle}
        cloudMoleculeImage={moleculeCloudsBgd}
        womenImage={womenBgd}
        colbaImage={colbaImage}
      />
      <MissionAndTasks
        missions={[
          'популяризация науки',
          'формирование ролевых моделей для будущих женщин- ученых',
          'сохранение интеллектуального капитала',
          'создание кадрового резерва в стране',
          'укрепление карьерных позиций для женщин-ученых'
        ]}
        tasks={[
          'создание крепкого комьюнити для женщин-ученых',
          'образовательная и просветительская поддержка',
          'обмен опытом и знаниями',
          'карьерная поддержка и наставничество',
          'медиа-поддержка'
        ]}
      />
      <WantParticipate />
      <Stages />
      <Experts />
      <Trustees />
      <Nominations
        nominations={[
          'ФИЗИКА',
          'БИОЛОГИЯ',
          'СОЦИОЛОГИЯ',
          'МИРОВАЯ НАУКА',
          'ЮРИСПРУДЕНЦИЯ',
          'ЯДЕРНАЯ МЕДИЦИНА',
          'НАУНАЯ ЖУРНАЛИСТИКА',
          'ПОПУЛЯРИЗАТОРЫ В НАУКЕ',
          'ГОСУДАРСТВЕННОЕ И МУНИЦИПАЛЬНОЕ УПРАВЛЕНИЕ',
          'КРЕАТИВНОЕ ПРЕДПРИНИМАТЕЛЬСТВО',
          'ХИМИЯ И НАНОТЕХНОЛОГИИ',
          'ЭКОНОМИКА И ФИНАНСЫ',
          'ПРОМЫШЛЕННОСТЬ',
          'ЮРИСПРУДЕНЦИЯ',
          'ТЕХНОЛОГИИ И IT',
          'ОБРАЗОВАНИЕ',
          'МЕДИЦИНЫ'
        ]}
        specNomination="СПЕЦНОМИНАЦИЯ: ЖЕНЩИНЫ-УЧЕНЫЕ АРКТИКИ"
      />
      <Partners
        partners={{
          title: 'ПАРТНЁРЫ ПРОЕКТА',
          images: [evrasii, vciom, tvoi, slava, ecodao]
        }}
        info={{
          title: 'ИНФОРМАЦИОННЫЕ ПАРТНЁРЫ',
          images: [mm, vestnik, designers, global]
        }}
      />
      <ProjectResults
        title="РЕЗУЛЬТАТЫ ПРОЕКТА"
        subtitle="Нам 1 год"
        items={[
          { number: '304', text: 'заявок на премию' },
          { number: '89', text: 'номинантов' },
          { number: '> 54', text: 'лауреатов' },
          { number: '1', text: 'альманах' },
          { number: '2', text: 'форума' }
        ]}
        img={rounds}
      />
    </main>
  )
}
