import React from 'react';
import ContactBackground from '../components/Contact/ContactBackground';
import ContactHeader from '../components/Contact/ContactHeader';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://www.linkedin.com/in/Sahaj-gaur-13406123a/' },
    { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com/sahaj645' },
    { name: 'WhatsApp', icon: 'logos:whatsapp-icon', url: 'https://wa.me/9928961531' },
    
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 relative min-h-screen flex items-center">
      <ContactBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-12">
          <ContactHeader />
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <ContactInfo socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;