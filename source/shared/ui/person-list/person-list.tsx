import { personListProps } from './types'
import Image from 'next/image'

export const PersonList: React.FC<personListProps> = ({ listItems }) => {
  return (
    <ul className="grid grid-cols-2 gap-y-7 gap-x-28">
      {listItems.map((item, index) => {
        return (
          <li key={index} className="flex flex-row">
            <Image
              src={item.photo}
              alt={'Фото ' + item.name}
              className="rounded-full mr-6 w-32 h-32"
            />
            <div className="mt-3 leading-10 text-xl/10">
              <h3 className="uppercase font-bold">{item.name}</h3>
              <p>{item.info}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
