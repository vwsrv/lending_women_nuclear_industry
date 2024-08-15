import { Button } from '@/source/shared/ui/button'
import { Contacts } from '@/widgets/contacts'
import { link } from 'fs'

// import aaa from '@'

const contactInfo = [
  {
    bgname: 'bg-icons-email',
    link: 'mailto:womeninnuclear.russia@yandex.ru',
    text: 'womeninnuclear.russia@yandex.ru'
  },
  {
    bgname: 'bg-icons-phone',
    link: 'tel:+79260121657',
    text: '+7 926 012 16 57'
  },
  {
    bgname: 'bg-icons-whatsup',
    link: 'https://wa.me/+79260121657',
    text: 'WIN RUSSIA'
  },
  {
    bgname: 'bg-icons-instagram',
    link: 'https://www.instagram.com/women_in_nuclear',
    text: '@women_in_nuclear'
  },
  {
    bgname: 'bg-icons-website',
    link: 'https://www.win-women-win.com',
    text: 'www.win-women-win.com'
  },
  {
    bgname: 'bg-icons-kolba',
    link: 'https://kolba.win-women-win.com',
    text: 'Премия “Kolba”'
  },
  {
    bgname: 'bg-icons-vkontakte',
    link: 'https://vk.com/women_in_nuclear',
    text: 'WIN RUSSIA'
  },
  {
    bgname: 'bg-icons-telegram',
    link: 'https://t.me/kolba_science',
    text: '@kolba_science'
  }
]

const documents = [
  {
    name: 'Свидетельство о госрегистрации',
    link: 'https://disk.yandex.ru/i/go1heapj0g3hxA'
  },
  {
    name: 'Свидетельство о постановке на учет',
    link: 'https://disk.yandex.ru/i/81o5J0GsKFpKRg'
  },
  {
    name: 'Банковские реквизиты',
    link: 'https://disk.yandex.ru/i/81o5J0GsKFpKRg'
  },
  { name: 'Устав', link: 'https://disk.yandex.ru/i/RIWS5J-iZAj6GA' }
]

export const HomePage: React.FC = () => {
  return (
    <main>
      <Button className="bg-[#D3CAFF] rounded-2xl px-6 py-8 text-[#2E2559] bold text-2xl hover:opacity-75 transition-opacity">
        Зарегистрироваться
      </Button>
      <Contacts contactInfo={contactInfo} documents={documents} />
    </main>
  )
}
