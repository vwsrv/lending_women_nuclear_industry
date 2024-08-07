import { expertsProps } from './types'
import { PersonList } from '@/source/shared/ui/person-list/person-list'


export const Experts: React.FC<expertsProps> = ({ expertList }) => {
  return (
    <section className='bg-indigo p-20'>{/*  pb-[116px] */}
      <h2 className='uppercase text-6xl/tight font-bold mb-20 text-gray'>
        Наш экспертный совет
      </h2>
      <PersonList
        listItems={expertList}
      />
		</section>
	)
}
