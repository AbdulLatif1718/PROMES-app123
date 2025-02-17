import React, { useState } from 'react';
import Layout from "../../components/Shared/Layout";
import { Star, Share2, Facebook, Twitter } from 'lucide-react';

interface Project {
  images: string[];
  title: string;
  progress: number;
  location: string;
  constructor: string;
  description: string;
  constructionDetails: string[];
  reviews: number;
}

const ProjectDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  const [selectedImage, setSelectedImage] = useState(0);

  const projectDetails: Project = {
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    title: 'Tarkwa community center',
    progress: 50,
    location: 'Tarkwa',
    constructor: 'Ninsou & Co LTD',
    description: 'Support AAA Animal Rescue by showing how much you love your pet with "I Love My Gold" charm bracelet...',
    constructionDetails: [
      'Excavation completed',
      'Antirust gold chains',
      'Semi precious metal smooth gemstone',
      'Brass beads'
    ],
    reviews: 19
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-6 pt-24">
        {/* Back Button */}
        <button onClick={() => window.history.back()} className="text-sm mb-6 flex items-center gap-2">
          ← BACK
        </button>

        <div className="grid grid-cols-12 gap-6">
          {/* Thumbnails Column */}
          <div className="col-span-2">
            {projectDetails.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-20 object-cover mb-3 cursor-pointer ${selectedImage === index ? 'border-2 border-purple-600' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>

          {/* Main Content Column */}
          <div className="col-span-10">
            {/* Main Image */}
            <img
              src={projectDetails.images[selectedImage]}
              alt="Main view"
              className="w-full h-96 object-cover mb-4"
            />

            {/* Project Info */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-semibold mb-1">{projectDetails.title}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">{projectDetails.reviews} Reviews</span>
                </div>
                <div className="mt-2">
                  <span className="font-semibold">{projectDetails.progress}%</span>
                  <span className="text-gray-600 ml-2">Ongoing Project</span>
                </div>
                <div className="mt-1">
                  <span className="text-gray-600">Location: {projectDetails.location}</span>
                </div>
                <div className="mt-1">
                  <span className="text-gray-600">Project Constructor: {projectDetails.constructor}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Share2 size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Facebook size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Twitter size={20} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b mb-4">
              <div className="flex gap-6">
                <button
                  className={`pb-2 px-1 ${activeTab === 'description' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`pb-2 px-1 ${activeTab === 'reviews' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600 mb-6">{projectDetails.description}</p>
                <h3 className="font-semibold mb-3">Construction details :</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {projectDetails.constructionDetails.map((detail, index) => (
                    <li key={index} className="mb-2">{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-gray-600">
                <p>Reviews content would go here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
