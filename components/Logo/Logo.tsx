import { useTranslations } from 'next-intl'
import { HOME_PATH } from '@/constants'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  onClick?: () => void
}

export const Logo = ({ className, onClick }: Props) => {
  const t = useTranslations('Header')
  const tNav = useTranslations('Nav')

  return (
    <Link
      href={HOME_PATH}
      aria-label={tNav('home')}
      onClick={onClick}
    >
      <span className={cn('block text-4xl font-semibold', className)}>
        {t('name')}
        <span className="text-accent-hover">.</span>
      </span>
    </Link>
  )
}
