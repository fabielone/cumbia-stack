// CalendarOverview.tsx

import React from 'react';

interface CalendarOverviewProps {
  totalEvents: number;
  upcomingEvents: number;
  pastEvents: number;
}

const CalendarOverview: React.FC<CalendarOverviewProps> = ({
  totalEvents,
  upcomingEvents,
  pastEvents,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Calendar Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Events Stat */}
        <div className="flex items-center bg-blue-200 p-4 rounded-md">
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-lg font-semibold text-blue-800">Total Events</p>
            <p className="text-gray-600">{totalEvents} Events</p>
          </div>
        </div>

        {/* Upcoming Events Stat */}
        <div className="flex items-center bg-green-200 p-4 rounded-md">
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 text-green-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 19l3-3m-3 3L6 16m9 6h-4m4 0l3-3m-3 3l-3-3"></path>
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-lg font-semibold text-green-800">Upcoming Events</p>
            <p className="text-gray-600">{upcomingEvents} Upcoming Events</p>
          </div>
        </div>

        {/* Past Events Stat */}
        <div className="flex items-center bg-yellow-200 p-4 rounded-md">
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 text-yellow-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect width="18" height="18" x="3" y="2" rx="2" ry="2"></rect>
              <path d="M3 9h18m-4.5 9h-9"></path>
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-lg font-semibold text-yellow-800">Past Events</p>
            <p className="text-gray-600">{pastEvents} Past Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarOverview;
