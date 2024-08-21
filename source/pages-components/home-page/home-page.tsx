import { Button } from '@/source/shared/ui/button'
import { Header } from '@/source/widgets/header/header'
import { Nominations } from '@/source/widgets/nominations'
import { MissionAndTasks } from '@/source/widgets/missionAndTasks'
import { WantParticipate } from '@/source/features/want-participate'
import { Stages } from '@/source/features/stages'
import { Experts } from '@/source/features/experts'
import { Trustees } from '@/source/features/trustees'

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
    </main>
  )
}
