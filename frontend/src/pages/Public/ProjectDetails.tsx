import React, { useState } from "react";
import Layout from "../../components/Shared/Layout";
import Reviews from "../../components/Public/Reviews";
import { Star } from "lucide-react";

interface Project {
  images: string[];
  title: string;
  progress: number;
  location: string;
  constructor: string;
  description: string;
  constructionDetails: string[];
  reviews: {
    name: string;
    date: string;
    rating: number;
    review: string;
  }[];
  reviewCount: number; // Add this for the total number of reviews
}

const ProjectDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );
  const [selectedImage, setSelectedImage] = useState(0);

  const projectDetails: Project = {
    images: [
      "https://storage.googleapis.com/a1aa/image/tZyD5d9rFgC0hnE5r6OjWRRIY7ci9AOICXjiEiF_Ez8.jpg",
      "https://storage.googleapis.com/a1aa/image/7klHenz4kEetZvrvOAh7-76Z3jdOERQouu5j_BoGV0Q.jpg",
      "https://storage.googleapis.com/a1aa/image/zg8Zn3bB75NWhfG7z1gu3I0FojaupPAqMsAyPY_fnlo.jpg",
      "https://storage.googleapis.com/a1aa/image/hqMjPN6hr2zN1J555pf0wWe73U9OOIzMUKBRsDNoowc.jpg",
    ],
    title: "Tarkwa community center",
    progress: 50,
    location: "Tarkwa",
    constructor: "Ninsou & co LTD",
    description:
      'Support AAA Animal Rescue by showing how much you love your pet with "I Love My Cat/Dog" charm bracelet. And remember, every purchase made off of the AMA SHOP goes directly to the medical expenses of our fur children',
    constructionDetails: [
      "Exclusively handmade",
      "Antique gold charms",
      "Semi precious round smooth gemstone",
      "8mm beads",
    ],
    reviews: [
      {
        name: "Ninsou Abdul",
        date: "24th January,2024",
        rating: 3,
        review:
          "This building is an excellent example of thoughtful urban development. The exterior design is sleek and modern, while the interior is practical and welcoming. Ventilation is superb, ensuring a comfortable indoor atmosphere, and the use of energy-efficient materials makes it environmentally friendly.",
      },
      {
        name: "Ishaah",
        date: "24th January,2024",
        rating: 5,
        review:
          "This building is an excellent example of thoughtful urban development. The exterior design is sleek and modern, while the interior is practical and welcoming. Ventilation is superb, ensuring a comfortable indoor atmosphere, and the use of energy-efficient materials makes it environmentally friendly.",
      },
    ],
    reviewCount: 10,
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6 pt-18">
        <button
          onClick={() => window.history.back()}
          className="text-sm mb-4 flex items-center gap-2"
        >
          ← BACK
        </button>

        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex lg:flex-col gap-3 w-full lg:w-24">
            {projectDetails.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer ${
                  selectedImage === index ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>

          <div className="w-full lg:flex-1">
            <img
              src={projectDetails.images[selectedImage]}
              alt="Main view"
              className="w-full h-[300px] lg:h-[400px] object-cover border-2 border-blue-500"
            />
          </div>

          <div className="w-full lg:w-1/3">
            <h1 className="text-2xl font-semibold mb-2">
              {projectDetails.title}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                {[...Array(2)].map((_, i) => (
                  <Star key={i + 3} size={16} className="text-gray-300" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {projectDetails.reviewCount} Reviews
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-purple-900">
                  Progress
                </span>
                <span className="text-xs font-semibold text-purple-900">
                  {projectDetails.progress}%
                </span>
              </div>
              <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-purple-900 transition-all duration-500"
                  style={{ width: `${projectDetails.progress}%` }}
                  role="progressbar"
                  aria-valuenow={projectDetails.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span className="sr-only">
                    {projectDetails.progress}% Complete
                  </span>
                </div>
              </div>
              <p className="text-gray-600">
                Location: {projectDetails.location}
              </p>
              <p className="text-gray-600">
                Constructor: {projectDetails.constructor}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="border-b mb-6 flex gap-6">
            <button
              className={`pb-2 px-1 ${
                activeTab === "description"
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`pb-2 px-1 ${
                activeTab === "reviews"
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>
          {activeTab === "description" && (
            <div>
              <p className="text-gray-600 mb-6">{projectDetails.description}</p>
              <h3 className="font-semibold mb-3">Construction details:</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {projectDetails.constructionDetails.map((detail, index) => (
                  <li key={index} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "reviews" && (
            <Reviews initialReviews={projectDetails.reviews} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
