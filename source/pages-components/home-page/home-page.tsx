import { Button } from '@/source/shared/ui/button'
import { MissionAndTasks } from '@/source/widgets/missionAndTasks'

export const HomePage: React.FC = () => {
  return (
    <main>
      <Button className="bg-[#D3CAFF] rounded-2xl px-6 py-8 text-[#2E2559] bold text-2xl hover:opacity-75 transition-opacity">
        Зарегистрироваться
      </Button>
      <MissionAndTasks
        missions={[
          'sss',
          'формирование ролевых моделей для будущих женщин- ученых',
          'sss',
          'sss',
          'sss',
          'sss',
          'sss'
        ]}
        tasks={['формирование ролевых моделей для будущих женщин- ученых']}
      />
    </main>
  )
}
