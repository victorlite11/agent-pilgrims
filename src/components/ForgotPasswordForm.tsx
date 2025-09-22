import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ForgotPasswordForm: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: 'Error', description: 'Please enter your email address.', variant: 'destructive' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast({ title: 'Reset Link Sent', description: 'Check your email for a password reset link.' });
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-center mb-2">Forgot your password?</h2>
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoComplete="email"
        disabled={loading || sent}
      />
      <Button type="submit" className="w-full" disabled={loading || sent}>
        {loading ? 'Sending...' : sent ? 'Sent!' : 'Send Reset Link'}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
