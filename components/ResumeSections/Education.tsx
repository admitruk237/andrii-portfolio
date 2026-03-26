import { education } from '@/constants'
import { ScrollArea } from '@/components/ui/scroll-area'

export const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>

      <ScrollArea className="h-[480px]">
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {education.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <h3
                  key={index}
                  className="text-xl text-center lg:text-left mb-3"
                >
                  {item.degree}.
                </h3>

                <div className="flex items-center gap-3 ">
                  <p
                    key={index}
                    className="text-white/60"
                  >
                    {item.istitution}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </ScrollArea>
    </div>
  )
}
