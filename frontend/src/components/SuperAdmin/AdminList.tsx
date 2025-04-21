import React from "react";
import { useAuth } from "../../contexts/AuthContext";

// Changed to named export
export const AdminList: React.FC = () => {
  const { users, deleteAdmin } = useAuth();
  const admins = users.filter(user => user.role === "admin");

  const handleDelete = (userId: string) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      try {
        deleteAdmin(userId);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Admin Users</h3>
      {admins.length === 0 ? (
        <p>No admin users found</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {admins.map(admin => (
            <li key={admin.id} className="py-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{admin.email}</p>
                <p className="text-sm text-gray-500">
                  Created: {new Date(admin.createdAt || "").toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(admin.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Remove this line if it exists at the bottom:
// export default AdminList;