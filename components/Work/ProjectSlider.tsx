import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import WorkSliderBtns from '@/components/WorkSliderBtns/WorkSliderBtns';

type Project = {
  image: string;
  num: string;
  title: string;
};

type Props = {
  projects: Project[];
  onSlideChange: (swiper: SwiperType) => void;
};

export const ProjectSlider = ({ projects, onSlideChange }: Props) => {
  return (
    <div className="w-full lg:w-[50%]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="lg:h-[520px] mb-12"
        onSlideChange={onSlideChange}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="h-[300px] sm:h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
              <Image
                src={project.image}
                fill
                className="object-cover"
                alt={`${project.title} project image`}
              />
            </div>
          </SwiperSlide>
        ))}
        <WorkSliderBtns
          containerStylels="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
        />
      </Swiper>
    </div>
  );
};
