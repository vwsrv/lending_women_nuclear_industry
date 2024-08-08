import { trusteesProps } from './types'
import { PersonList } from '@/source/shared/ui/person-list/person-list'

export const Trustees: React.FC<trusteesProps> = ({ trusteesList }) => {
  return (
    <section className="p-20 text-indigo bg-logo-white bg-no-repeat bg-top-logo-white-2 bg-[length:205px_57px]">
      <h2 className="uppercase text-6xl/tight font-bold mb-20 pr-72">
        Наш попечительский совет
      </h2>
      <PersonList listItems={trusteesList} />
    </section>
  )
}
