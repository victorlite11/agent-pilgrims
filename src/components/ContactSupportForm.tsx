import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ContactSupportForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Error', description: 'All fields are required.', variant: 'destructive' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast({ title: 'Message Sent', description: 'Support will contact you soon.' });
      if (onClose) onClose();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-center mb-2">Contact Support</h2>
      <Input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        autoComplete="name"
        disabled={loading || sent}
      />
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        autoComplete="email"
        disabled={loading || sent}
      />
      <textarea
        name="message"
        placeholder="How can we help you?"
        value={form.message}
        onChange={handleChange}
        className="w-full min-h-[80px] rounded border px-3 py-2 text-sm focus:outline-none focus:ring"
        disabled={loading || sent}
      />
      <Button type="submit" className="w-full" disabled={loading || sent}>
        {loading ? 'Sending...' : sent ? 'Sent!' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactSupportForm;
