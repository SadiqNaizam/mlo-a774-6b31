import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderAuth from '@/components/layout/HeaderAuth'; // Custom component
import FooterAuth from '@/components/layout/FooterAuth'; // Custom component
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'; // shadcn/ui
import { Button } from '@/components/ui/button'; // shadcn/ui
import { Textarea } from '@/components/ui/textarea'; // shadcn/ui
import { LogOut, Settings, User } from 'lucide-react'; // Icons

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens)
    console.log('User logging out');
    navigate('/'); // Navigate to LoginPage, path from App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <HeaderAuth />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome to Your Dashboard!</CardTitle>
            <CardDescription>
              This is your main hub for application features. You are successfully logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" onClick={() => console.log('Navigate to Profile')}>
                  <User className="mr-2 h-4 w-4" /> My Profile
                </Button>
                <Button variant="outline" onClick={() => console.log('Navigate to Settings')}>
                  <Settings className="mr-2 h-4 w-4" /> Account Settings
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="quickNotes" className="text-sm font-medium text-foreground">
                Quick Notes
              </label>
              <Textarea
                id="quickNotes"
                placeholder="Jot down any quick notes or reminders here..."
                className="min-h-[100px]"
              />
              <Button size="sm" className="mt-2">Save Notes</Button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                Explore other sections of the application using the (hypothetical) main navigation menu.
              </p>
              {/* Example link to a non-existent page, for demonstration */}
              <Link to="/features" className="text-primary hover:underline mt-2 inline-block">
                Discover Features (Example Link)
              </Link>
            </div>

          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardFooter>
        </Card>
      </main>
      <FooterAuth />
    </div>
  );
};

export default DashboardPage;