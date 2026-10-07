import { PageFadeIn } from '@/components/common/PageFadeIn'
import { ContactForm } from '@/components/ContactForm/ContactForm'
import { ContactInfo } from '@/components/ContactInfo/ContactInfo'

const Contact = () => (
  <section className="sm:py-6 p-2">
    <PageFadeIn>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] xl:px-20 lg:px-10 px-0">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </PageFadeIn>
  </section>
)

export default Contact
