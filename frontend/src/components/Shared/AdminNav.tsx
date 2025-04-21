import React from 'react';
import { Link } from "react-router-dom";

interface AdminNavProps {
  username?: string;
  handle?: string;
}

const AdminNav: React.FC<AdminNavProps> = ({ 
  username = 'Robert Pattinson', 
  handle = '@profilehandle' 
}) => {
  return (
    <nav className="flex justify-between items-center h-10  bg-white border-b border-gray-200">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2 pb-6 cursor-pointer">
        <img src="/img/image.png" alt="PROMES Logo" className="h-10 sm:px-2" />
        <span className="text-black text-lg font-semibold">PROMES</span>
      </Link>
      </div>
      
      <div className="flex items-center space-x-4 pb-6">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-600">
            <path d="M18 8A3 3 0 0 0 15 5H9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3Z"></path>
            <path d="M22 15a3 3 0 0 1-3 3h-1"></path>
            <path d="M6 15a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h1"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mr-2 overflow-hidden">
            <img 
              src="/api/placeholder/32/32" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-black">{username}</span>
            <span className="text-xs text-gray-500">{handle}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;