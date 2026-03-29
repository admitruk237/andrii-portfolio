import { Link } from '@/i18n/routing'
import { Button } from '../ui/button'
import { Nav } from '../Nav/Nav'
import { MobileNav } from '../MobileNav/MobileNav'
import { Switch } from '@/components/ui/switch'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import { useTranslations } from 'next-intl'

export const Header = () => {
  const t = useTranslations('Header')

  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          aria-label="Home"
        >
          <h1 className="text-4xl font-semibold">
            {t('name')}
            <span className="text-accent-hover">.</span>
          </h1>
        </Link>

        <div className="flex items-center gap-2 lg:gap-4">
          <LanguageSwitcher />
          <Switch />
          <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button
                variant="default"
                size="default"
              >
                {t('hireMe')}
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
