import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { CreateUserDto } from "../../types/User";

const CreateAdminForm: React.FC = () => {
  const [formData, setFormData] = useState<CreateUserDto>({
    email: "",
    role: "admin"
  });
  const [success, setSuccess] = useState(false);
  const { createAdmin } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      createAdmin(formData);
      setSuccess(true);
      setFormData({ email: "", role: "admin" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Create New Admin</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => 
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Create Admin
        </button>
        
        {success && (
          <p className="text-green-600 mt-2">Admin created successfully!</p>
        )}
      </form>
    </div>
  );
};

export default CreateAdminForm;