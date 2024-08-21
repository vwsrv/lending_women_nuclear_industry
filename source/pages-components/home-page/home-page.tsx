import { Button } from '@/source/shared/ui/button'
import { Header } from '@/source/widgets/header/header'
import { Nominations } from '@/source/widgets/nominations'
import { MissionAndTasks } from '@/source/widgets/missionAndTasks'
import { WantParticipate } from '@/source/features/want-participate'
import { Partners } from '@/source/features/partners'
import { ProjectResults } from '@/source/features/project-results'
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

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* <Button className="bg-[#D3CAFF] rounded-2xl px-6 py-8 text-[#2E2559] bold text-2xl hover:opacity-75 transition-opacity">
        Зарегистрироваться
      </Button> */}
      <Header
        description={
          'Хотите стать участником самого крупного женского научного сообщества в России, партнером/инфопартнером, волонтером, колумнистом блога, меценатом оставьте заявку ниже или поддержите проект'
        }
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
