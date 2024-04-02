// LeadsOverview.tsx

import React from 'react';
import LeadsTable from '~/comp/molecule/LeadsTable';

interface LeadsOverviewProps {
  totalLeads: number;
  newLeads: number;
  convertedLeads: number;
}

const LeadsOverview: React.FC<LeadsOverviewProps> = ({ totalLeads, newLeads, convertedLeads }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Leads Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Leads Stat */}
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
            <p className="text-lg font-semibold text-blue-800">Total Leads</p>
            <p className="text-gray-600">{totalLeads} Leads</p>
          </div>
        </div>

        {/* New Leads Stat */}
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
            <p className="text-lg font-semibold text-green-800">New Leads</p>
            <p className="text-gray-600">{newLeads} New Leads</p>
          </div>
        </div>

        {/* Converted Leads Stat */}
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
            <p className="text-lg font-semibold text-yellow-800">Converted Leads</p>
            <p className="text-gray-600">{convertedLeads} Converted Leads</p>
          </div>
        </div>
      </div>
      <LeadsTable leads={["fabiel"]} />
    </div>
  );
};

export default LeadsOverview;
