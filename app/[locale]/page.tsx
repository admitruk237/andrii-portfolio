import { Summary } from '@/components/AboutMe/Summary'
import { Stats } from '@/components/Stats/Stats'

const Home = () => {
  return (
    <main
      className="h-full"
      role="main"
    >
      <section
        className="container mx-auto h-full"
        aria-label="About section"
      >
        <Summary />
      </section>
      <section aria-label="Statistics section">
        <Stats />
      </section>
    </main>
  )
}

export default Home
