import { motion } from 'framer-motion';
import { useState } from 'react';
import { EmailData, EmailResponse } from '../types/email';

const Contact = () => {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus({ type: 'loading', message: 'Sending message...' });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: EmailResponse = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-[#334155] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-[#334155] mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-[#475569]">
                  <svg
                    className="w-5 h-5 mr-3 text-[#94A3B8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  sayhey.vishwajeet@gmail.com
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#475569] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#94A3B8] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#475569] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#94A3B8] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#475569] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#94A3B8] transition-colors"
                    required
                  ></textarea>
                </div>
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : status.type === 'error'
                        ? 'bg-red-50 text-red-800'
                        : 'bg-blue-50 text-blue-800'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  className="w-full bg-[#6B7280] text-white px-6 py-3 rounded-lg hover:bg-[#94A3B8] transition-colors disabled:opacity-50"
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 