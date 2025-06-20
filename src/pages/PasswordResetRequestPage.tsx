import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import HeaderAuth from '@/components/layout/HeaderAuth';
import FooterAuth from '@/components/layout/FooterAuth';
import LogoLockup from '@/components/LogoLockup';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MailCheck, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type PasswordResetRequestFormValues = z.infer<typeof formSchema>;

const PasswordResetRequestPage: React.FC = () => {
  console.log('PasswordResetRequestPage loaded');

  const [isLoading, setIsLoading] = useState(false);
  const [alertState, setAlertState] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const form = useForm<PasswordResetRequestFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: PasswordResetRequestFormValues) {
    setIsLoading(true);
    setAlertState(null);
    console.log("Password reset requested for:", values.email);

    // Simulate API call to request password reset
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real application, you would handle success/error from the API
    // For this demo, we'll assume success and show a message.
    setAlertState({
      type: 'success',
      message: `If an account exists for ${values.email}, you will receive an email with password reset instructions shortly. Please check your inbox (and spam folder).`,
    });
    form.reset(); // Clear the form on success
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <HeaderAuth />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <LogoLockup appName="AuthApp" className="mx-auto mb-6" size="lg" />
            <CardTitle className="text-3xl font-bold tracking-tight">Forgot Your Password?</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              No problem! Enter your email address below and we'll send you a link to reset it.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </form>
            </Form>
            {alertState && (
              <Alert variant={alertState.type === 'error' ? 'destructive' : 'default'} className="mt-4">
                {alertState.type === 'success' ? (
                  <MailCheck className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertTitle>
                  {alertState.type === 'success' ? 'Check Your Email' : 'Request Failed'}
                </AlertTitle>
                <AlertDescription>{alertState.message}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Remembered your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline" aria-label="Back to Login">
                Log In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
      <FooterAuth />
    </div>
  );
};

export default PasswordResetRequestPage;