import Link from 'next/link';
import { Button } from '../ui/button';
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';
import { APP_CONFIG } from '@/config/email';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <h1 className="text-4xl font-semibold">
            {APP_CONFIG.developerName.split(' ')[0]}
            <span className="text-accent-hover">.</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button variant="default" size="default" className="">
              Hire me
            </Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
