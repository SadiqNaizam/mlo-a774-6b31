import React from 'react';
import { Link } from 'react-router-dom';

const FooterAuth: React.FC = () => {
  console.log('FooterAuth loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 mt-auto bg-background border-t">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-2">
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p>&copy; {currentYear} Your Application Name. All rights reserved.</p>
        <p className="mt-1 text-xs">
            Note: 'Terms of Service' and 'Privacy Policy' links are placeholders. Update paths as needed.
        </p>
      </div>
    </footer>
  );
};

export default FooterAuth;