import React, { useState } from "react";
import Layout from "../../components/Shared/Layout";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const images = [
  "/path-to-image1.png",
  "/path-to-image2.png",
  "/path-to-image3.png",
];

const HomePage: React.FC = () => {
  const [, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const chartData = Array(24).fill(null).map((_, index) => ({
    value: [70, 65, 45, 50, 45, 40, 50, 45, 40, 45, 50, 55,
            45, 40, 45, 50, 45, 50, 55, 40, 45, 50, 90, 45][index]
  }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full px-6 py-8 pt-34">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">
                Unlock the Power of{" "}
                <span className="text-purple-600">Promes</span>
              </h1>
              <p className="mt-4 text-gray-600">
                Promes lets everyone—residents and stakeholders track the progress of important projects in your area.
              </p>
              <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full text-sm">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-50"></div>
              <img 
                src="/api/placeholder/400/300" 
                alt="Road Construction" 
                className="relative z-10 rounded-lg w-64 h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="w-full px-6 py-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-purple-600 mb-8">
            <span className="px-4 py-1 bg-purple-100 rounded-full">Home</span>
            <span>›</span>
            <span>Projects</span>
            <span>›</span>
            <span>Education Infrastructure</span>
            <span>›</span>
            <span>Tarkwa School Building</span>
          </nav>

          <div className="flex justify-between items-center mb-8">
            <div className="text-center">
              <p className="text-2xl font-bold">200</p>
              <p className="text-sm text-gray-500">Total Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">120</p>
              <p className="text-sm text-gray-500">Ongoing Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">50</p>
              <p className="text-sm text-gray-500">Completed Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">30</p>
              <p className="text-sm text-gray-500">Pending Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full px-6 py-8">
        <div className="max-w-4xl mx-auto relative">
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            ‹
          </button>
          <div className="relative">
            <img 
              src="/api/placeholder/800/400" 
              alt="Tarkwa School Building" 
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold">Tarkwa School Building</h2>
              <p className="text-sm opacity-80">Education Infrastructure</p>
            </div>
          </div>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            ›
          </button>
        </div>
      </section>

      {/* Expenses and Revenue */}
      <section className="w-full px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-2">Expenses and Revenue Generated</h2>
          <p className="text-sm text-gray-500 mb-8">01 - 25 January, 2025</p>
          
          <div className="h-48 mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <Bar 
                  dataKey="value" 
                  fill="#4B0082"
                  radius={[0, 0, 0, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm mb-4">where we generate money?</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs mb-1">Hospitals</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-xs">25,000</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1">Schools</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <span className="text-xs">50,000</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1">Agriculture</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '36%' }}></div>
                    </div>
                    <span className="text-xs">36,900</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm mb-4">where your money go?</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs mb-1">Creating Jobs</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <span className="text-xs">872,400</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1">Infrastructure</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-xs">1,378,000</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1">Transportation</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <span className="text-xs">928,500</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1">Security</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <span className="text-xs">420,700</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs mb-1">Agriculture</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-grow h-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <span className="text-xs">520,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="w-full px-6 py-8 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <img src="/api/placeholder/80/80" alt="Shell Logo" className="h-12 w-12 object-contain" />
            <img src="/api/placeholder/80/80" alt="Second Logo" className="h-12 w-12 object-contain" />
            <img src="/api/placeholder/80/80" alt="GNPC Logo" className="h-12 w-12 object-contain" />
            <img src="/api/placeholder/80/80" alt="Ghana Gas Logo" className="h-12 w-12 object-contain" />
            <img src="/api/placeholder/80/80" alt="Lion Logo" className="h-12 w-12 object-contain" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="p-4 bg-white border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-sm">What is Promes</h3>
              <button className="text-xl">×</button>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Promes is a tool that allows everyone—residents and stakeholders track the progress of important projects in your area
            </p>
          </div>
          
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-4 bg-white border rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-sm">What is the purpose of promes</h3>
                <button className="text-xl">+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vote of Thanks */}
      <section className="w-full px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-purple-600">Appreciation</p>
            <h2 className="text-2xl font-bold text-purple-900">Vote Of Thanks</h2>
          </div>

          <div className="flex justify-center gap-16">
            <div className="text-center max-w-xs">
              <img 
                src="/api/placeholder/120/120" 
                alt="Jhon Scot" 
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-medium">Jhon Scot</h3>
              <p className="text-sm text-gray-500 mb-4">Municipal Chief Executive</p>
              <p className="text-sm text-gray-600 mb-4">
                Thank you for the warm welcome, I'm grateful for the rich culture and hospitality of this region. I'm excited to be a part of this amazing rural community. I'm a staunch patriot that I appreciate. I feel privileged to be part of this vibrant region
              </p>
              <div className="flex justify-center">
                <div className="w-5 h-5 bg-purple-600 rounded"></div>
              </div>
            </div>

            <div className="text-center max-w-xs">
              <img 
                src="/api/placeholder/120/120" 
                alt="Charles Edward" 
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-medium">Charles Edward</h3>
              <p className="text-sm text-gray-500 mb-4">Regional Minister</p>
              <p className="text-sm text-gray-600 mb-4">
                Thank you for the warm welcome, I'm grateful for the rich culture and hospitality of this region. I'm excited to be a part of this amazing rural community. I'm a staunch patriot that I appreciate. I feel privileged to be part of this vibrant region
              </p>
              <div className="flex justify-center">
                <div className="w-5 h-5 bg-purple-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;