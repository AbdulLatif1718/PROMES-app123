import React, { useState } from 'react';
import AdminNav from '../../components/Shared/AdminNav';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Ongoing', 'Completed', 'Negotiating', 'Rejected'];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <AdminNav />
      <div className="flex justify-between items-center mb-6 p-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Create New</button>
        <div className="text-gray-500 text-sm">Jan 12, 2024 - Jan 18, 2024</div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-sm">Views</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 17V8" />
              <path d="M13 17V13" />
              <path d="M8 17V11" />
              <path d="M3 17l6-6 4 4 8-8" />
            </svg>
          </div>
          <div className="text-2xl font-bold mt-2">0</div>
          <div className="text-sm">0%</div>
        </div>
        <div className="bg-black text-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-sm">Visits</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 17V8" />
              <path d="M13 17V13" />
              <path d="M8 17V11" />
              <path d="M3 17l6-6 4 4 8-8" />
            </svg>
          </div>
          <div className="text-2xl font-bold mt-2">0</div>
          <div className="text-sm">0%</div>
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-sm">New Users</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 17V8" />
              <path d="M13 17V13" />
              <path d="M8 17V11" />
              <path d="M3 17l6-6 4 4 8-8" />
            </svg>
          </div>
          <div className="text-2xl font-bold mt-2">0</div>
          <div className="text-sm">0%</div>
        </div>
        <div className="bg-black text-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-sm">Active Users</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 17V8" />
              <path d="M13 17V13" />
              <path d="M8 17V11" />
              <path d="M3 17l6-6 4 4 8-8" />
            </svg>
          </div>
          <div className="text-2xl font-bold mt-2">0</div>
          <div className="text-sm">0%</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white border rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-800">Overview</span>
            <select className="border rounded px-2 py-1 text-sm text-gray-600">
              <option>Month</option>
            </select>
          </div>
          <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-500">
            Graph Placeholder
          </div>
        </div>
        <div className="bg-white border rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-800">Projects</span>
            <select className="border rounded px-2 py-1 text-sm text-gray-600">
              <option>Monthly</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">789</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 mr-2 rounded-full"></div>
              <span className="text-gray-700">Ongoing 0%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-500 mr-2 rounded-full"></div>
              <span className="text-gray-700">Completed 0%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 mr-2 rounded-full"></div>
              <span className="text-gray-700">Negotiation 0%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 mr-2 rounded-full"></div>
              <span className="text-gray-700">Withdrawn 0%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-800">Project Summary</span>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        <div className="flex space-x-2 mb-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm ${
                activeTab === tab 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-300">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">No Projects Available</h2>
          <p className="text-gray-600 mb-4 text-center">Create a new Project and see their data here</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
            + Add a New Project
          </button>
        </div>
      </div>

      <div className="bg-white border rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-800">Recent Activity</span>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by name" 
              className="border rounded-md px-3 py-2 pl-8 text-sm w-64 text-gray-700"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="absolute left-2 top-3 h-4 w-4 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-300">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">No Recent Activity</h2>
          <p className="text-gray-600 mb-4 text-center">Activities will appear here once created</p>
        </div>

        <div className="text-sm text-gray-500 mt-4">
          Showing 1 to 5 of 0 Results
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 border rounded text-gray-500 text-sm">Previous</button>
          <button className="px-4 py-2 border rounded text-gray-500 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;