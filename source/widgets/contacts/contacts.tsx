import { contactsProps } from './type'

// wantParticipateTexts

export const Contacts: React.FC<contactsProps> = ({
  contactInfo,
  documents
}) => {
  return (
    <section className="bg-indigo p-20 text-gray max-w-[1440px]">
      <h2 className="uppercase text-6xl/tight font-bold mb-20">
        Наши контакты
      </h2>
      <div className="leading-10 text-3xl/10 grid grid-cols-2 gap-9 mb-28">
        <ul>
          {contactInfo.map(({ bgname, link, text }, index) => {
            // {name, link, text}
            // Для проверки "как должно быть"
            // <li key={index} className={"flex flex-row py-5 pl-16 bg-icons-email bg-no-repeat bg-[left_center]"}>
            // Срабатывает, только если картинка уже есть в кэше
            // <li key={index} className={"flex flex-row py-5 pl-16 bg-[url('/for-contacts/" + name + ".svg')] bg-no-repeat bg-[left_center]"}></li>
            return (
              <li
                key={index}
                className={
                  'flex flex-row py-5 pl-16 ' +
                  bgname +
                  ' bg-no-repeat bg-[left_center]'
                }
              >
                <a
                  href={link}
                  target="_blank"
                  rel="nofollow noindex noopener"
                  className="underline"
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="bg-logo-dark bg-no-repeat bg-top-center">
          <form className="bg-magenta text-gray mt-64">
            Форма &quot;подписаться&quot; и кнопка &quot;поддержать проект&quot;
          </form>
        </div>
      </div>
      <h3 className="uppercase text-3xl/10 font-bold mb-9 font-normal">
        Документы
      </h3>
      <ul className="uppercase leading-10 text-2xl font-bold grid grid-cols-2 gap-x-9 gap-y-10">
        {documents.map(({ name, link }, index) => {
          return (
            <li key={index} className="flex flex-row">
              <a
                href={link}
                target="_blank"
                rel="nofollow noindex noopener"
                className="underline"
              >
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
