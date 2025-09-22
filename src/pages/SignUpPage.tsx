import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const roles = [
  { label: 'Pilgrim', value: 'pilgrim' },
  { label: 'Agent', value: 'agent' },
  { label: 'Admin', value: 'admin' },
];

const SignUpPage: React.FC = () => {
  const { toast } = useToast();
  const [role, setRole] = useState('pilgrim');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast({ title: 'Error', description: 'All fields are required', variant: 'destructive' });
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast({ title: 'Error', description: 'Passwords do not match', variant: 'destructive' });
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({ title: 'Signup Successful', description: `Welcome, ${form.name}!` });
      // Redirect or further logic here
    }, 1200);
  };

  // Paystack button handler (placeholder)
  const handlePaystack = () => {
    toast({ title: 'Paystack', description: 'Paystack payment initiated (mock). Integrate API next.' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-card p-8 rounded shadow-card space-y-6">
        <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
        <div className="flex justify-center gap-2 mb-4">
          {roles.map(r => (
            <Button
              key={r.value}
              type="button"
              variant={role === r.value ? 'default' : 'outline'}
              onClick={() => setRole(r.value)}
            >
              {r.label}
            </Button>
          ))}
        </div>
        <Input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
        />
        {/* Paystack payment step for pilgrims only (to be implemented) */}
        {role === 'pilgrim' && (
          <div className="text-center mt-2">
            <Button type="button" variant="default" className="w-full font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white" onClick={handlePaystack}>
              Pay with Paystack
            </Button>
          </div>
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
        <Button type="button" variant="outline" className="w-full" onClick={() => window.location.href = '/'}>
          Back to Main Dashboard
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
