'use client'

import { useSwiper } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

type Props = {
  containerStyles?: string
  btnStyles?: string
  iconsStyles?: string
  swiper?: SwiperType | null
}

const WorkSliderBtns = ({ swiper: externalSwiper }: Props) => {
  const internalSwiper = useSwiper()
  const swiper = externalSwiper || internalSwiper

  const btnStyles =
    'bg-accent hover:bg-accent-hover text-primary text-sm lg:text-xl w-[30px] h-[30px] lg:w-[44px] lg:h-[44px] flex justify-center items-center transition-all cursor-pointer'

  return (
    <div className="flex gap-2 justify-end w-full">
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>

      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSliderBtns
