'use client';

import { ContactForm } from '@/components/ContactForm/ContactForm';
import { ContactInfo } from '@/components/ContactInfo/ContactInfo';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="sm:py-6 p-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
