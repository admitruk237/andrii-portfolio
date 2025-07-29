import { Button } from '@/components/ui/button';
import { FormField } from '../FormField/FormField';
import { useContactForm } from '@/app/hooks/useContactForm';

export const ContactForm = () => {
  const { formData, errors, isSubmitting, handleInputChange, submitForm } =
    useContactForm();

  return (
    <div className="lg:w-[54%] order-2 lg:order-none">
      <div className="flex flex-col gap-6 p-2 sm:p-10 bg-[#27272c] rounded-xl">
        <h3 className="text-4xl text-accent">Let's work together</h3>
        <p className="text-white/60">
          I'm excited to hear about your project! Share some details below, and
          let's start working together to create something amazing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            placeholder="Firstname"
            value={formData.firstname}
            onChange={(e) => handleInputChange('firstname', e.target.value)}
            error={errors.firstname}
          />

          <FormField
            placeholder="Lastname"
            value={formData.lastname}
            onChange={(e) => handleInputChange('lastname', e.target.value)}
            error={errors.lastname}
          />

          <FormField
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
          />

          <FormField
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            error={errors.phone}
          />
        </div>

        <FormField
          placeholder="Type your message here"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          error={errors.message}
          isTextarea
        />

        <Button
          size="md"
          className="max-w-40"
          onClick={submitForm}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </div>
  );
};
