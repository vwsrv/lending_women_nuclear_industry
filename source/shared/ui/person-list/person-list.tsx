import { personListProps } from './types'
import Image from 'next/image';

import defaultPhoto from '@/shared/ui/person-list/person-02.png'

export const PersonList: React.FC<personListProps> = ({ listItems }) => {
  return (
		<ul className='grid grid-cols-2 gap-y-7 gap-x-28'> {/*gap-x-117px*/ }
      {listItems.map((item, index) => {
        return (
          <li
            key={index}
            className='text-gray leading-10 flex flex-row'
          >
            <Image
              src={item.photo ? item.photo : defaultPhoto}
              alt={'Фото ' + item.name}
              width={100}
              height={100}
              className='rounded-full mr-[22px] w-[118px] h-[118px]'
            />
            <div className='mt-3'>
              <h3 className='uppercase font-bold'>{item.name}</h3>
              <p>{item.info}</p>
            </div>
          </li>
        )
      })}

		</ul>
	)
}
