import React from 'react';

interface Service  {
  icon: React.ReactNode; // Icon component or image
  title: string;
  description: string;
  link: string;
  linkLabel: string;
};

interface ServicesSectionProps  {
  services: Service[];
};

const ServiceCard: React.FC<Service> = ({ icon, title, description, link, linkLabel }) => {
  return (
    <div className="space-y-4">
      <div className="inline-flex items-center justify-center p-2 bg-gray-100 rounded dark:bg-gray-700">
        {icon}
      </div>
      <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a href={link} title="" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        {linkLabel}
        {/* SVG Icon for the arrow, or use a different icon */}
      </a>
    </div>
  );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our work
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>
        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

