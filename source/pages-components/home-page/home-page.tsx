import { Button } from '@/source/shared/ui/button'
import { Trustees } from '@/source/shared/widgets/trustees'

import img001 from '@/shared/ui/person-list/person-02.png'

const data = [
  {
    photo: img001,
    name: 'Юлия Рузанкина',
    info: 'Ph.D международной докторской программы в науки KU Leuven (Бельгия) и Università Cattolica del Sacro Cuore (Италия)'
  },
  {
    photo: img001,
    name: 'Ирина Шрайбер',
    info: 'кандидат физико-математических науки, учёный, исследователь, ментор, лектор, в разные годы научный сотрудник ЦЕНРН, Женева​'
  },
  {
    photo: img001,
    name: 'Екатерина Иваниловская-Абдурахманова',
    info: 'официальный представитель, советник- председателя Международного Проектного Конгресса, Председатель Пермского Молодежного Центра'
  },
  {
    photo: img001,
    name: 'Юлия Рузанкина',
    info: 'Ph.D международной докторской программы в науки KU Leuven (Бельгия) и Università Cattolica del Sacro Cuore (Италия)'
  },
  {
    photo: img001,
    name: 'Ирина Шрайбер',
    info: 'кандидат физико-математических науки, учёный, исследователь, ментор, лектор, в разные годы научный сотрудник ЦЕНРН, Женева​'
  },
  {
    photo: img001,
    name: 'Ирина Шрайбер',
    info: 'кандидат физико-математических науки, учёный, исследователь, ментор, лектор, в разные годы научный сотрудник ЦЕНРН, Женева​'
  },
  {
    photo: img001,
    name: 'Екатерина Иваниловская-Абдурахманова',
    info: 'официальный представитель, советник- председателя Международного Проектного Конгресса, Председатель Пермского Молодежного Центра'
  }
]

export const HomePage: React.FC = () => {
  return (
    <main>
      <Button className="bg-[#D3CAFF] rounded-2xl px-6 py-8 text-[#2E2559] bold text-2xl hover:opacity-75 transition-opacity">
        Зарегистрироваться
      </Button>
      <Trustees trusteesList={data} />
    </main>
  )
}
