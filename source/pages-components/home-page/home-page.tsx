import { Button } from '@/source/shared/ui/button'
import { Nominations } from '@/source/widgets/nominations'

export const HomePage: React.FC = () => {
  return (
    <main>
      <Button className="bg-[#D3CAFF] rounded-2xl px-6 py-8 text-[#2E2559] bold text-2xl hover:opacity-75 transition-opacity">
        Зарегистрироваться
      </Button>
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
