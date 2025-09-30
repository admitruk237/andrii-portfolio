'use client';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from 'react-icons/fa';

type Props = {
  containerSyles?: string;
  iconStyles?: string;
};

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/admitruk237' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/andr11-dmytruk/',
  },
  { icon: <FaFacebook />, path: 'https://www.facebook.com/share/18xKDJ3szf/' },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/dmytruk_andrii_/?utm_source=qr&igsh=ZmZrcHN3dXQyemt1',
  },
  { icon: <FaTelegram />, path: 'https://t.me/Dmytruk_Andrii' },
];

const Social = ({ containerSyles, iconStyles }: Props) => {
  return (
    <div className={containerSyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
