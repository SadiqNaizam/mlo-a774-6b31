import React from 'react';
import { Link } from 'react-router-dom';
import LogoLockup from '@/components/LogoLockup'; // Assuming LogoLockup is in src/components/
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

const HeaderAuth: React.FC = () => {
  console.log('HeaderAuth loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" aria-label="Go to homepage">
          <LogoLockup />
        </Link>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default HeaderAuth;