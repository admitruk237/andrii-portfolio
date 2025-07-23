'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'sonner';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+48) 516 626 351',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'admitruk237@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: '5A/12 Naftowa St, Krosno, Poland',
  },
];

const validationErrorStyles =
  'text-red-500 text-[10px] lg:text-xs mt-1 transition-opacity duration-200 min-h-[1.25rem]';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = 'First name is required';
    } else if (formData.firstname.trim().length < 2) {
      newErrors.firstname = 'First name must be at least 2 characters';
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
    } else if (formData.lastname.trim().length < 2) {
      newErrors.lastname = 'Last name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleSubmit = async () => {
    console.log('Submit clicked'); // Debug log

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    console.log('Starting email send...'); // Debug log

    try {
      // EmailJS configuration
      const serviceID = 'service_9c1rc86';
      const templateID = 'template_555f1fw';
      const userID = 'koLCC8sY2wJnMRMaw';

      const templateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        current_date: new Date().toLocaleDateString(),
        current_time: new Date().toLocaleTimeString(),
      };

      console.log('Sending email with params:', templateParams); // Debug log

      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
      console.log('Email sent successfully:', result); // Debug log

      // Reset form on success
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });

      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error('EmailJS error:', error); // Debug log
      toast.error(
        ` Failed to send message: ${
          error.text || error.message || 'Unknown error'
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="sm:py-6 p-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:w-[54%] order-2 lg:order-none">
            <div className="flex flex-col gap-6 p-2 sm:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm excited to hear about your project! Share some details
                below, and let's start working together to create something
                amazing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={(e) =>
                      handleInputChange('firstname', e.target.value)
                    }
                  />
                  <p
                    className={`${validationErrorStyles} ${
                      errors.firstname ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {errors.firstname || '\u00A0'}
                  </p>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={(e) =>
                      handleInputChange('lastname', e.target.value)
                    }
                  />
                  <p
                    className={`${validationErrorStyles} ${
                      errors.lastname ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {errors.lastname || '\u00A0'}
                  </p>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <p
                    className={`${validationErrorStyles} ${
                      errors.email ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {errors.email || '\u00A0'}
                  </p>
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <p
                    className={`${validationErrorStyles} ${
                      errors.phone ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {errors.phone || '\u00A0'}
                  </p>
                </div>
              </div>
              <div>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
                <p
                  className={`${validationErrorStyles} ${
                    errors.message ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {errors.message || '\u00A0'}
                </p>
              </div>
              <Button
                size="md"
                className="max-w-40"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li className="flex items-center gap-6 " key={index}>
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-md bg-[#27272c] text-accent">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
