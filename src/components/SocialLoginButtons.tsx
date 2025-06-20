import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Facebook, Chrome } from 'lucide-react'; // Using Chrome icon for Google

interface SocialLoginButtonsProps {
  // Props can be added here if needed in the future, e.g., for custom providers or callbacks
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = () => {
  console.log('SocialLoginButtons loaded');

  const handleSocialLogin = (provider: string) => {
    console.log(`Attempting social login with ${provider}`);
    // In a real application, this function would initiate the OAuth flow.
    // For example: window.location.href = `/auth/${provider.toLowerCase()}`;
    // Or call a function passed via props: props.onSocialLogin(provider);
  };

  return (
    <div className="w-full">
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center py-2.5"
          onClick={() => handleSocialLogin('Google')}
          aria-label="Continue with Google"
        >
          <Chrome className="mr-2 h-5 w-5" />
          <span className="text-sm font-medium">Continue with Google</span>
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center py-2.5"
          onClick={() => handleSocialLogin('GitHub')}
          aria-label="Continue with GitHub"
        >
          <Github className="mr-2 h-5 w-5" />
          <span className="text-sm font-medium">Continue with GitHub</span>
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center py-2.5"
          onClick={() => handleSocialLogin('Facebook')}
          aria-label="Continue with Facebook"
        >
          <Facebook className="mr-2 h-5 w-5" />
          <span className="text-sm font-medium">Continue with Facebook</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;