// pages/Public/ComplaintPage.tsx
import React from 'react';
import Layout from '../../components/Shared/Layout';
import ComplaintForm from '../../components/Public/ComplaintForm';

const ComplaintPage: React.FC = () => {
  return (
    <Layout>
      <div
        className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-white relative"
        style={{
          backgroundImage:
            'url("https://storage.googleapis.com/a1aa/image/aSTf3zBM2a7DuT-NPBfxz3wXQZnYVh9OLbXB6UInaxA.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg z-10 pt-24">
          <h1 className="text-3xl font-bold text-black text-center mb-8">
            Submit a Complaint
          </h1>
          <ComplaintForm />
        </div>
      </div>
    </Layout>
  );
};

export default ComplaintPage;
