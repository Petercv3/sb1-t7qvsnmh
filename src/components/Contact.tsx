import React from 'react';
import { Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Kontakt Oss
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Vi hjelper deg med dine trykkebehov
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium">Telefon</h4>
                <a href="tel:94087344" className="text-gray-600 hover:text-blue-600">
                  940 87 344
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium">E-post</h4>
                <a
                  href="mailto:peterandreassen80@gmail.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  peterandreassen80@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;