'use client';
import { useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import * as gtag from '@/lib/gtag';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactDetails = [
    { icon: MdEmail, text: 'francisca@margin-top.com', href: 'mailto:francisca@margin-top.com' },
    { icon: MdPhone, text: '+31 6 53 89 47 71', href: 'tel:+31653894771' },
    { 
      icon: FaWhatsapp, 
      text: 'WhatsApp', 
      href: 'https://wa.me/31653894771',
      className: 'text-green-500 hover:text-green-600'
    },
    { icon: FaMapMarkerAlt, text: 'Nieuwegein, Netherlands', href: 'https://goo.gl/maps/YZZHGe9bAv8jbqSt7' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/margin-top', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/margin_top_/', label: 'Instagram' },
  ];

  const handleContactMethodClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    method: string,
    href: string
  ) => {
    e.preventDefault();
    
    try {
      await gtag.event({
        action: 'contact_method_click',
        category: 'conversion',
        label: method,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to track contact click:', error.message);
      }
    } finally {
      if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    }
  };

  const handleSocialClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    platform: string,
    href: string
  ) => {
    e.preventDefault();
    
    try {
      await gtag.event({
        action: 'social_link_click',
        category: 'engagement',
        label: platform,
      });
    } catch (error) {
      console.error('Failed to track social click:', error);
    }

    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#6EC1E4] to-[#4F8BD2] text-transparent bg-clip-text">
            Plan een afspraak
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
           Stel een vraag of maak vrijblijvend een afspraak om te zien wat we voor jou kunnen betekenen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Contact Details */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Details</h2>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <a
                    key={index}
                    href={detail.href}
                    onClick={(e) => handleContactMethodClick(e, detail.text, detail.href)}
                    className={`flex items-center space-x-3 text-gray-600 hover:text-[#4F8BD2] transition-colors ${detail.className || ''}`}
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <detail.icon className="w-5 h-5" />
                    <span>{detail.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Social Media</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    onClick={(e) => handleSocialClick(e, social.label, social.href)}
                    className="text-gray-600 hover:text-[#4F8BD2] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Calendly Widget */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-4 h-full">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/francisca-margin-top"
                style={{ 
                  minWidth: '320px',
                  height: '700px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
