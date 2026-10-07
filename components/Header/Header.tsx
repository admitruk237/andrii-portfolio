import { useTranslations } from 'next-intl'
import { Switch } from '@/components/ui/switch'
import { CONTACT_PATH } from '@/constants'
import { Link } from '@/i18n/routing'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { Logo } from '../Logo/Logo'
import { MobileNav } from '../MobileNav/MobileNav'
import { Nav } from '../Nav/Nav'
import { Button } from '../ui/button'

export const Header = () => {
  const t = useTranslations('Header')

  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-2 lg:gap-4">
          <LanguageSwitcher />
          <Switch />
          <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Button
              asChild
              variant="default"
              size="default"
            >
              <Link href={CONTACT_PATH}>{t('hireMe')}</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
