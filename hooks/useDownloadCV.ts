'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  CV_DOWNLOAD_DURATION_MS,
  CV_FILE,
  CV_PROGRESS_TICK_MS,
  CV_STATUS_RESET_MS,
} from '@/constants'
import type { DownloadState } from '@/types'

const MAX_PROGRESS = 100
const PROGRESS_STEP =
  MAX_PROGRESS / (CV_DOWNLOAD_DURATION_MS / CV_PROGRESS_TICK_MS)

type UseDownloadCVReturn = {
  downloadState: DownloadState
  progress: number
  handleDownloadCV: () => void
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const triggerFileDownload = (href: string, fileName: string) => {
  const link = document.createElement('a')
  link.href = href
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const useDownloadCV = (): UseDownloadCVReturn => {
  const [downloadState, setDownloadState] = useState<DownloadState>('idle')
  const [progress, setProgress] = useState(0)
  const progressTimer = useRef<ReturnType<typeof setInterval>>(undefined)
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(
    () => () => {
      clearInterval(progressTimer.current)
      clearTimeout(resetTimer.current)
    },
    [],
  )

  const scheduleReset = useCallback(() => {
    resetTimer.current = setTimeout(() => {
      setDownloadState('idle')
      setProgress(0)
    }, CV_STATUS_RESET_MS)
  }, [])

  const handleDownloadCV = useCallback(async (): Promise<void> => {
    setDownloadState('loading')
    setProgress(0)

    progressTimer.current = setInterval(() => {
      setProgress((previous) => Math.min(previous + PROGRESS_STEP, MAX_PROGRESS))
    }, CV_PROGRESS_TICK_MS)

    try {
      await wait(CV_DOWNLOAD_DURATION_MS)
      triggerFileDownload(CV_FILE.href, CV_FILE.fileName)
      setDownloadState('success')
    } catch (error) {
      console.error('Download error:', error)
      setDownloadState('error')
      setProgress(0)
    } finally {
      clearInterval(progressTimer.current)
      scheduleReset()
    }
  }, [scheduleReset])

  return { downloadState, progress, handleDownloadCV }
}
