import React from 'react';
import { Package2 } from 'lucide-react'; // Using Package2 as a generic logo icon

interface LogoLockupProps {
  /**
   * Optional application name. Defaults to "AuthApp".
   */
  appName?: string;
  /**
   * Optional additional Tailwind CSS classes for custom styling.
   */
  className?: string;
  /**
   * Optional size for the icon and text. Defaults to 'md'.
   * 'sm': h-5 w-5 icon, text-md
   * 'md': h-6 w-6 icon, text-lg
   * 'lg': h-8 w-8 icon, text-xl
   */
  size?: 'sm' | 'md' | 'lg';
}

const LogoLockup: React.FC<LogoLockupProps> = ({
  appName = "AuthApp",
  className = '',
  size = 'md',
}) => {
  console.log('LogoLockup loaded');

  let iconSizeClass = 'h-6 w-6';
  let textSizeClass = 'text-lg';

  if (size === 'sm') {
    iconSizeClass = 'h-5 w-5';
    textSizeClass = 'text-md';
  } else if (size === 'lg') {
    iconSizeClass = 'h-8 w-8';
    textSizeClass = 'text-xl';
  }

  return (
    <div className={`flex items-center gap-2 text-foreground ${className}`}>
      <Package2 className={`${iconSizeClass} text-primary`} aria-hidden="true" />
      <span className={`font-semibold ${textSizeClass}`}>{appName}</span>
    </div>
  );
};

export default LogoLockup;