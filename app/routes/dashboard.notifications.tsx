// NotificationsPage.tsx

import React, { useState, useEffect } from 'react';

interface Notification {
  id: number;
  title: string;
  content: string;
  timestamp: string;
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Placeholder: Simulating fetching notifications from a data source
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchNotifications = async () => {
      // Simulate fetching notifications from an API
      const response = await fetch('https://api.example.com/notifications');
      const data = await response.json();

      // Update the state with fetched notifications
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

        {notifications.length === 0 ? (
          <p className="text-gray-600">No notifications to display.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {notifications.map((notification) => (
              <li key={notification.id} className="py-4">
                <div className="text-sm text-gray-600">{notification.timestamp}</div>
                <h3 className="text-lg font-semibold mt-2">{notification.title}</h3>
                <p className="text-gray-700 mt-1">{notification.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
