// LeadsTable.tsx

import React, { useState } from 'react';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}

interface LeadsTableProps {
  leads: Lead[];
}

const LeadsTable: React.FC<LeadsTableProps> = ({ leads }) => {
  const [editableLeadId, setEditableLeadId] = useState<number | null>(null);
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newLead, setNewLead] = useState<Lead>({
    id: 0, // Use appropriate logic to generate a unique ID
    name: '',
    email: '',
    phone: '',
    status: 'new', // Default status for a new lead
  });

  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [sortField, setSortField] = useState<string>('name'); // Default sorting by name
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleEditClick = (leadId: number) => {
    setEditableLeadId(leadId);
  };

  const handleSaveClick = () => {
    // Perform save logic (you can update data in the database or make an API call)
    setEditableLeadId(null);
  };

  const handleCancelClick = () => {
    setEditableLeadId(null);
  };

  const handleStatusChange = (leadId: number, newStatus: string) => {
    // Perform status change logic (you can update data in the database or make an API call)
  };

  const handleAddLead = () => {
    setShowAddLeadModal(true);
  };

  const handleAddLeadModalClose = () => {
    setShowAddLeadModal(false);
    setNewLead({
      id: 0,
      name: '',
      email: '',
      phone: '',
      status: 'new',
    });
  };

  const handleAddLeadSubmit = () => {
    // Perform logic to add the new lead to the leads list
    // (you can update data in the database or make an API call)
    // For simplicity, just updating the local state here
    leads.push(newLead);
    handleAddLeadModalClose();
  };

  const handleDeleteLead = (leadId: number) => {
    // Perform logic to delete the lead from the leads list
    // (you can update data in the database or make an API call)
    // For simplicity, just updating the local state here
    const updatedLeads = leads.filter((lead) => lead.id !== leadId);
    // Update leads state
  };

  const filteredLeads = leads.filter((lead) => {
    // Filter by status
    if (filterStatus && lead.status !== filterStatus) {
      return false;
    }
    return true;
  });

  const sortedLeads = filteredLeads.sort((a, b) => {
    // Sort based on the selected field and order
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (sortOrder === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Leads</h2>

        <div className="flex items-center space-x-4 mb-4">
          <label htmlFor="statusFilter" className="text-sm font-medium text-gray-700">
            Filter by Status:
          </label>
          <select
            id="statusFilter"
            name="statusFilter"
            value={filterStatus || ''}
            onChange={(e) => setFilterStatus(e.target.value || null)}
            className="border rounded-md px-2 py-1"
          >
            <option value="">All</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="closed">Closed</option>
          </select>

          <label htmlFor="sortField" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sortField"
            name="sortField"
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="status">Status</option>
          </select>

          <label htmlFor="sortOrder" className="text-sm font-medium text-gray-700">
            Order:
          </label>
          <select
            id="sortOrder"
            name="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="border rounded-md px-2 py-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
          onClick={handleAddLead}
        >
          Add New Lead
        </button>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editableLeadId === lead.id ? (
                    <input
                      type="text"
                      value={lead.name}
                      onChange={(e) => {} /* Add onChange logic */}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    lead.name
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editableLeadId === lead.id ? (
                    <input
                      type="text"
                      value={lead.email}
                      onChange={(e) => {} /* Add onChange logic */}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    lead.email
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editableLeadId === lead.id ? (
                    <input
                      type="text"
                      value={lead.phone}
                      onChange={(e) => {} /* Add onChange logic */}
                      className="border rounded-md px-2 py-1"
                    />
                  ) : (
                    lead.phone
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {editableLeadId === lead.id ? (
                    <select
                      value={lead.status}
                      onChange={(e) => {} /* Add onChange logic */}
                      className="border rounded-md px-2 py-1"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="closed">Closed</option>
                    </select>
                  ) : (
                    lead.status
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  {editableLeadId === lead.id ? (
                    <>
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleSaveClick()}
                      >
                        Save
                      </button>
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => handleCancelClick()}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEditClick(lead.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="text-green-500 hover:underline"
                    onClick={() => handleStatusChange(lead.id, 'contacted')}
                  >
                    Change Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       {/* Add Lead Modal */}
       {showAddLeadModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* Add an icon or initials for the lead */}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        Add New Lead
                      </h3>
                      {/* Add a form for entering new lead information */}
                      <div className="mt-2">
                        <label htmlFor="leadName" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="leadName"
                          name="leadName"
                          value={newLead.name}
                          onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                          className="mt-1 p-2 w-full border rounded-md"
                          required
                        />
                      </div>
                      {/* Add other input fields for email, phone, status */}
                      {/* ... */}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={handleAddLeadSubmit}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Add Lead
                  </button>
                  <button
                    type="button"
                    onClick={handleAddLeadModalClose}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default LeadsTable;
