'use client'

import { useTranslations } from 'next-intl'
import { FiAlertCircle, FiCheck, FiDownload } from 'react-icons/fi'
import { useDownloadCV } from '@/hooks'
import { cn } from '@/lib/utils'
import type { DownloadState } from '@/types'
import CircularProgress from '../CircularProgress/CircularProgress'
import { Button } from '../ui/button'

const STATE_CLASS_NAMES: Record<DownloadState, string> = {
  idle: '',
  loading: '',
  success: 'border-success text-success hover:bg-success',
  error: 'border-destructive text-destructive hover:bg-destructive',
}

const CENTERED = 'flex items-center justify-center w-full'

type ContentProps = {
  state: DownloadState
  progress: number
}

const DownloadButtonContent = ({ state, progress }: ContentProps) => {
  const t = useTranslations('Summary')

  switch (state) {
    case 'loading':
      return (
        <div
          className={CENTERED}
          aria-label={t('downloading')}
        >
          <CircularProgress progress={progress} />
        </div>
      )
    case 'success':
      return (
        <div
          className={CENTERED}
          aria-label={t('downloaded')}
        >
          <FiCheck className="text-xl text-success" />
        </div>
      )
    case 'error':
      return (
        <div
          className={CENTERED}
          aria-label={t('downloadFailed')}
        >
          <FiAlertCircle className="text-xl text-destructive" />
        </div>
      )
    case 'idle':
      return (
        <div className="flex items-center gap-2">
          <span>{t('downloadCV')}</span>
          <FiDownload className="text-xl" />
        </div>
      )
  }
}

export const DownloadButton = () => {
  const t = useTranslations('Summary')
  const { downloadState, progress, handleDownloadCV } = useDownloadCV()

  return (
    <Button
      variant="outline"
      size="lg"
      className={cn(
        'uppercase w-[160px] flex items-center gap-2 transition-all duration-300',
        STATE_CLASS_NAMES[downloadState],
      )}
      onClick={handleDownloadCV}
      disabled={downloadState === 'loading'}
      aria-label={t('downloadCV')}
    >
      <DownloadButtonContent
        state={downloadState}
        progress={progress}
      />
    </Button>
  )
}
