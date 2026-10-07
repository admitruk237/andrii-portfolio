import { useTranslations } from 'next-intl'
import { Stats } from '@/components/Stats/Stats'
import { Summary } from '@/components/Summary/Summary'

const Home = () => {
  const t = useTranslations('Home')

  return (
    <main className="h-full">
      <section
        className="container mx-auto h-full"
        aria-label={t('aboutSection')}
      >
        <Summary />
      </section>
      <section aria-label={t('statsSection')}>
        <Stats />
      </section>
    </main>
  )
}

export default Home
