import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import type { ContactItem } from '@/types';

const info: ContactItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+48) 516 626 351',
    type: 'phone' as const,
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'admitruk237@gmail.com',
    type: 'email' as const,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: '38-400 Krosno, Poland',
    type: 'location' as const,
  },
];

export { info };
export default info;
