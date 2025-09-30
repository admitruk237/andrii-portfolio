import { EMAIL_CONFIG } from '@/config/email';
import type {
  ContactFormData,
  ContactFormErrors,
  UseContactFormReturn,
} from '@/types';
import emailjs from '@emailjs/browser';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

const INITIAL_FORM_DATA: ContactFormData = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  message: '',
};

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateFormData = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};

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
  }, [formData]);

  const handleInputChange = useCallback(
    (field: keyof ContactFormData, value: string): void => {
      setFormData((prev: ContactFormData) => ({
        ...prev,
        [field]: value,
      }));

      if (errors[field]) {
        setErrors((prev: ContactFormErrors) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    },
    [errors]
  );

  const resetForm = useCallback((): void => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  }, []);

  const submitForm = useCallback(async (): Promise<void> => {
    if (!validateFormData()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        current_date: new Date().toLocaleDateString(),
        current_time: new Date().toLocaleTimeString(),
      };

      await emailjs.send(
        EMAIL_CONFIG.serviceID,
        EMAIL_CONFIG.templateID,
        templateParams,
        EMAIL_CONFIG.userID
      );

      resetForm();
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error('EmailJS error:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : (error as any)?.text || 'Unknown error';
      toast.error(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateFormData, resetForm]);

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    submitForm,
  };
};
