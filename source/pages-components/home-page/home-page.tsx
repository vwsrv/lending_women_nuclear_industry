import { Button } from '@/source/shared/ui/button'
import { Stages } from '@/source/shared/widgets/stages'

export const HomePage: React.FC = () => {
  return (
    <main>
      <Button className="bg-[#D3CAFF] rounded-2xl px-6 py-8 text-[#2E2559] bold text-2xl hover:opacity-75 transition-opacity">
        Зарегистрироваться
      </Button>
      <Stages />
    </main>
  )
}
