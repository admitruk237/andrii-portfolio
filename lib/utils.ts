import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ORDINAL_DIGITS = 2

export const formatOrdinal = (index: number): string =>
  String(index + 1).padStart(ORDINAL_DIGITS, '0')

export const isActiveRoute = (pathname: string, path: string): boolean =>
  pathname === path
