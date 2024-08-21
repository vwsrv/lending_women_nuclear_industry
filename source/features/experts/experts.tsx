import { expertsProps } from './types'
import { PersonList } from '@/source/shared/ui/person-list/person-list'

export const Experts: React.FC<expertsProps> = ({ expertList }) => {
  return (
    <section className="bg-indigo p-20 text-gray">
      <h2 className="uppercase text-6xl/tight font-bold mb-20">
        Наш экспертный совет
      </h2>
      <PersonList listItems={expertList} />
    </section>
  )
}
