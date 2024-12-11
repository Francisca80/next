'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#9333EA] text-transparent bg-clip-text">
            Neem Contact Op
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Heeft u een vraag of wilt u meer informatie? Neem gerust contact op!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:francisca@margin-top.com" className="text-blue-600 hover:text-blue-700">
                    francisca@margin-top.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaPhone className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefoon</h3>
                  <a href="tel:+31653894771" className="text-purple-600 hover:text-purple-700">
                    +31 6 53894771
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adres</h3>
                  <p className="text-gray-600">
                    Bergfluiter 7<br />
                    3435AT Nieuwegein
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Uw bericht..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="text-green-600 text-sm">
                  Bericht succesvol verzonden!
                </div>
              )}

              {status === 'error' && (
                <div className="text-red-600 text-sm">
                  Er is iets misgegaan. Probeer het later opnieuw.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-gradient-to-r from-[#2563EB] to-[#6366F1] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300
                  ${status === 'loading' 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:opacity-90 hover:-translate-y-1'
                  }`}
              >
                {status === 'loading' ? 'Verzenden...' : 'Verstuur Bericht'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
