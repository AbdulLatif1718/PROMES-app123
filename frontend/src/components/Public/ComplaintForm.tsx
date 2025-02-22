import React, { useState } from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa'; 

const ComplaintForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    complaint: '',
    rating: 0, 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      contact: '',
      location: '',
      complaint: '',
      rating: 0,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 bg-white rounded-lg shadow-lg">
      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
          Name
        </label>
        <div className="relative mt-1">
          <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            type="text"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="contact">
          Contact
        </label>
        <div className="relative mt-1">
          <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your number"
            type="text"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="location">
          Location
        </label>
        <div className="relative mt-1">
          <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            id="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Specify location"
            type="text"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rate the project</label>
        <div className="flex items-center mt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`cursor-pointer ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="complaint">
          Make a complaint
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          id="complaint"
          value={formData.complaint}
          onChange={handleChange}
          placeholder="Make a complaint..."
          rows={3}
        ></textarea>
      </div>

      <div className="flex justify-between">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-purple-800 rounded-md hover:bg-purple-900"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ComplaintForm;
