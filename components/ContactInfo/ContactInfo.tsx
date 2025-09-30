import { useContactAction } from '@/hooks';
import { info } from '@/constants/info';

export const ContactInfo = () => {
  const { isMobile, handleContactAction } = useContactAction();

  return (
    <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
      <ul className="flex flex-col gap-10">
        {info.map((item, index) => (
          <li className="flex items-center gap-6" key={index}>
            <div
              className="group relative w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-md bg-[#27272c] text-accent cursor-pointer"
              onClick={() => handleContactAction(item)}
            >
              <div className="text-[28px]">{item.icon}</div>
              {!isMobile && (
                <span className="absolute -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  Copy
                </span>
              )}
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
};
