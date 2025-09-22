import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ContactSupportForm from "./ContactSupportForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, FileCheck, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-church-image.jpg";
import pilgrimIcon from "@/assets/pilgrim-icon.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card shadow-card">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img 
                src={pilgrimIcon} 
                alt="Pilgrim Management System" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg shadow-card"
              />
              <h1 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                Pilgrim Management System
              </h1>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">Contact Support</Button>
              </DialogTrigger>
              <DialogContent className="max-w-md w-full">
                <ContactSupportForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-heading font-bold text-primary-foreground sm:text-4xl lg:text-6xl">
                Professional Christian Pilgrimage Registration Management
              </h1>
              <p className="text-base text-primary-foreground/90 sm:text-lg lg:text-xl">
                Secure, streamlined, and efficient Christian pilgrimage registration system for travel agencies, administrators, and pilgrims.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-primary-foreground sm:text-xl">
                Select Your Portal:
              </h3>

              <div className="flex flex-wrap gap-6 justify-center items-center mt-2 mb-2">
                {/* Admin Portal and Agent Portal buttons removed as requested */}
                <Button
                  variant="default"
                  className="h-14 min-w-[200px] text-lg font-bold shadow-xl border-2 border-white/40 transition-all duration-200 bg-white/60 backdrop-blur-lg text-primary flex items-center justify-center rounded-2xl hover:scale-105 hover:shadow-[0_0_32px_8px_rgba(255,215,0,0.55)] hover:border-yellow-400 focus:outline-none"
                  style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 70%, #fef9c3 100%)', boxShadow: '0 8px 32px 0 rgba(251, 191, 36, 0.08)'}}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/pilgrim-login';
                    link.click();
                  }}
                >
                  <FileCheck className="mr-2 h-6 w-6 text-yellow-600" />
                  Pilgrim Portal
                </Button>
                <Button
                  variant="default"
                  className="h-14 min-w-[200px] text-lg font-bold shadow-xl border-2 border-white/40 transition-all duration-200 bg-white/60 backdrop-blur-lg text-primary flex items-center justify-center rounded-2xl hover:scale-105 hover:shadow-[0_0_32px_8px_rgba(255,255,255,0.7)] hover:border-white focus:outline-none"
                  style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 70%, #e0e7ff 100%)', boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.08)'}}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/signup';
                    link.click();
                  }}
                >
                  <MessageCircle className="mr-2 h-6 w-6 text-blue-700" />
                  Sign Up
                </Button>
              </div>
              </div>
            </div>
            
            <div className="relative lg:order-2">
              <img 
                src={heroImage} 
                alt="Professional Christian Pilgrimage Management Interface with Church"
                className="w-full rounded-2xl shadow-floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4 lg:text-4xl">
              Comprehensive Christian Pilgrimage Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built for travel agencies, administrators, and Christian pilgrims with security and efficiency at its core.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Multi-level user authentication with role-based access control for administrators, agents, and pilgrims.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Agent Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Complete travel agent workflow with registration, payment integration, and Christian pilgrim management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Registration Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Advanced duplicate prevention, registration takeover system, and comprehensive status tracking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Communication Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Integrated messaging system between Christian pilgrims and agents, with comprehensive notification management.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src={pilgrimIcon} 
                alt="Pilgrim Management System" 
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-heading font-semibold text-foreground">
                Pilgrim Management System
              </span>
            </div>
            <p className="text-muted-foreground">
              Professional Christian pilgrimage registration management solution
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;