import { expertsProps } from './types'
import { PersonList } from '@/source/shared/ui/person-list/person-list'
import { expertsTexts } from './expertsTexts'

export const Experts: React.FC<expertsProps> = (
  {
    // expertList
  }
) => {
  return (
    <section className="bg-indigo p-20 text-gray">
      <h2 className="uppercase text-6xl/tight font-bold mb-20">
        {expertsTexts.title}
      </h2>
      <PersonList listItems={expertsTexts.experts} />
    </section>
  )
}
