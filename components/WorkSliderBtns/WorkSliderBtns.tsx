'use client'

import type { Swiper as SwiperType } from 'swiper'
import { useTranslations } from 'next-intl'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const BUTTON_CLASS_NAME =
  'bg-accent hover:bg-accent-hover text-primary text-sm lg:text-xl w-[30px] h-[30px] lg:w-[44px] lg:h-[44px] flex justify-center items-center transition-all cursor-pointer'

type Props = {
  swiper: SwiperType | null
}

const WorkSliderBtns = ({ swiper }: Props) => {
  const t = useTranslations('Work.slider')

  return (
    <div className="flex gap-2 justify-end w-full">
      <button
        type="button"
        aria-label={t('previous')}
        className={BUTTON_CLASS_NAME}
        onClick={() => swiper?.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
        type="button"
        aria-label={t('next')}
        className={BUTTON_CLASS_NAME}
        onClick={() => swiper?.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSliderBtns
