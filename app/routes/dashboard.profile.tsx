// ProfilePage.tsx

import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

        {/* Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <p id="fullName" className="mt-1 text-sm text-gray-500">
              John Doe
            </p>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p id="email" className="mt-1 text-sm text-gray-500">
              john.doe@example.com
            </p>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <p id="phoneNumber" className="mt-1 text-sm text-gray-500">
            +1 (555) 123-4567
          </p>
        </div>

        <div className="mt-6">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <p id="address" className="mt-1 text-sm text-gray-500">
            123 Main Street, Cityville
          </p>
        </div>

        {/* Additional Profile Information */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Additional Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <p id="companyName" className="mt-1 text-sm text-gray-500">
                Home Services Inc.
              </p>
            </div>
            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                Specialization
              </label>
              <p id="specialization" className="mt-1 text-sm text-gray-500">
                Plumbing, HVAC
              </p>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-700">
              About Me
            </label>
            <p id="aboutMe" className="mt-1 text-sm text-gray-500">
              Experienced service provider in plumbing and HVAC with a commitment to quality work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
