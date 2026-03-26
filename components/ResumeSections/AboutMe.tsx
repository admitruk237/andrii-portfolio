import { about } from '@/constants'

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
        {about.discription}
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6  mx-auto lg:mx-0">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-white/60">{item.fieldName}</span>
              {item.fieldName === 'GitHub' ? (
                <a
                  href={item.fieldValue}
                  className="text-xl"
                >
                  admitruk237
                </a>
              ) : (
                <span className="text-xl">{item.fieldValue}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
