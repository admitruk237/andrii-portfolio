import { experience } from '@/constants'
import { ScrollArea } from '@/components/ui/scroll-area'

export const Experience = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center lg:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="text-white/80 mx-auto lg:mx-0">{experience.description}</p>
      <ScrollArea className="h-[480px]">
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          {experience.items.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center
                        items-center lg:items-start gap-1"
              >
                <span className="text-accent">{item.duration}</span>
                <div className="flex gap-2 flex-wrap mb-3">
                  {item.projects.map((project, index) => {
                    return (
                      <h3
                        key={index}
                        className="text-xl   text-center lg:text-left"
                      >
                        {project}.
                      </h3>
                    )
                  })}
                </div>

                <div className="flex items-center gap-3 ">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technologie, index) => {
                      return (
                        <p
                          key={index}
                          className="text-white/60"
                        >
                          {technologie}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </ScrollArea>
    </div>
  )
}
