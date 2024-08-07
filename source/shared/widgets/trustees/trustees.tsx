import { trusteesProps } from './types'
import { PersonList } from '@/source/shared/ui/person-list/person-list'

export const Trustees: React.FC<trusteesProps> = ({ trusteesList }) => {
  return (
    <section className="bg-indigo p-20">
      <h2 className="uppercase text-6xl/tight font-bold mb-20 text-gray">
        Наш попечительский совет
      </h2>
      <PersonList listItems={trusteesList} />
    </section>
  )
}
