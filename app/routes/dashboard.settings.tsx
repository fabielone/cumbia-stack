// SettingsPage.tsx

import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>

        {/* Change Password Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="currentPassword">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="newPassword">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Change Password
            </button>
          </form>
        </div>

        {/* Notification Settings Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              className="text-blue-500 form-checkbox h-5 w-5"
            />
            <label htmlFor="emailNotifications" className="text-sm text-gray-700">
              Receive email notifications
            </label>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="checkbox"
              id="smsNotifications"
              name="smsNotifications"
              className="text-blue-500 form-checkbox h-5 w-5"
            />
            <label htmlFor="smsNotifications" className="text-sm text-gray-700">
              Receive SMS notifications
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
