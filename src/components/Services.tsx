import React from 'react';
import { services } from '../utils/constants';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Våre Tjenester
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Kvalitetstrykk på klær i Bodø
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Se priser
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;