import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-md p-8">
      <div className="max-w-screen-xl mx-auto bg-slate-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          We are a dedicated team of e-commerce enthusiasts, passionate about
          helping businesses thrive in the digital marketplace. With years of
          experience, we specialize in creating tailored e-commerce solutions
          that drive growth and boost sales.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to provide you with the tools and expertise needed to
          succeed online. Whether you're a small startup or an established
          brand, we're here to empower you with cutting-edge technology and
          strategies.
        </p>
        <p className="text-gray-600 mb-8">
          Partner with us to transform your e-commerce journey. We'll work
          closely with you to understand your unique needs and deliver solutions
          that not only meet but exceed your expectations.
        </p>

        {/* E-commerce section */}
        <div className="bg-blue-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Our E-commerce Expertise
          </h2>
          <p className="text-slate-700">
            We specialize in building cutting-edge e-commerce solutions that
            drive growth and enhance customer experiences. Whether you need a
            custom online store or integration with popular e-commerce
            platforms, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
