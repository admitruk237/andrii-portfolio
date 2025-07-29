import { info } from '@/const/info';

export const ContactInfo = () => (
  <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
    <ul className="flex flex-col gap-10">
      {info.map((item, index) => (
        <li className="flex items-center gap-6" key={index}>
          <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-md bg-[#27272c] text-accent">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div>
            <p className="text-white/60">{item.title}</p>
            <h3 className="text-xl">{item.description}</h3>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
