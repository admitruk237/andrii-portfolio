'use client'

import { Button } from '../ui/button'
import Social from '../Social/Social'
import Photo from '../Photo/Photo'
import { useDownloadCV } from '@/hooks'
import { getButtonContent } from './DownloadButton'
import { useTranslations } from 'next-intl'

export const Summary = () => {
  const { downloadState, progress, handleDownloadCV } = useDownloadCV()
  const t = useTranslations('Summary')
  const tHeader = useTranslations('Header')

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between
          lg:pt-8 lg:pb-24"
    >
      <div className="text-center xl:text-left order-2 lg:order-none">
        <span className="text-xl">{t('role')}</span>
        <h1 className="h1 mb-6">
          {t('hello')} <br />{' '}
          <span className="text-accent">{tHeader('name')}</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-muted-foreground">
          {t('description')}
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Button
            variant="outline"
            size="lg"
            className={`uppercase w-[160px] flex items-center gap-2 transition-all duration-300 ${
              downloadState === 'success'
                ? 'border-green-500 text-green-500 hover:bg-green-500'
                : downloadState === 'error'
                  ? 'border-red-500 text-red-500 hover:bg-red-500'
                  : ''
            }`}
            onClick={handleDownloadCV}
            disabled={downloadState === 'loading'}
            aria-label={t('downloadCV')}
          >
            {getButtonContent(downloadState, progress, t('downloadCV'))}
          </Button>

          <div className="mb-8 lg:mb-0">
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                  items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  )
}
