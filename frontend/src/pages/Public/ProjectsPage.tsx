import React from 'react';
import Layout from "../../components/Shared/Layout";

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
        
        {/* Sort Dropdown */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-lg font-medium" htmlFor="sort">
            SORT BY:
          </label>
          <select className="border border-gray-300 rounded px-4 py-2" id="sort">
            <option>All Projects</option>
          </select>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Project Cards */}
          {[
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/VpH_zSeYGkMmMxjK72GgnCrUBXw7fiBKsYOBFDOuvUE.jpg',
              title: 'Tarkwa community center',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/tsMm5Kio95Xdar0SFpDqBqqyOwaYVqRsrNvcFBz80KI.jpg',
              title: 'Tarkwa District Assembly',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/B4hF07pG1VK7P8HjUqWF7xoJI3DRBOUr4zcoeZhTaZ4.jpg',
              title: 'Bogoso Borehole project',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/q7RKQqUlXjel33xeL2aGsJIQ9Wz2-MVrX0nKh58FW7s.jpg',
              title: 'Abooso Borehole Project',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/D8BQkWoYKiaD8pceCQmLe8J75y0WOg4xeKzJ_7jyo-Q.jpg',
              title: 'Tarkwa Inner Roads',
              status: 'Ongoing project',
              date: '5th April, 2022'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/0iuTVoZTVIm8S3lm4SCdcbLQvT2e3jq4KBvyGhkc0aU.jpg',
              title: 'Takoradi Overpass',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/Xx1mrc36zO3Raq7ZuB4PhVuJotJ9bu83UND_Lcoj4w0.jpg',
              title: 'Abooso drainage',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/a7fjV883rnTuDxI-yuuiX9qgaXE0hsUf6sSXouJqlC4.jpg',
              title: 'Bogoso Central Mosque',
              status: 'Completed project',
              date: '29th January, 2022'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/eKISNNRK4fQgCBGwTe7QgxzghUbft_a_jiJSnWNSgw4.jpg',
              title: 'Tarkwa to Takoradi Road',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/hqMjPN6hr2zN1J555pf0wWe73U9OOIzMUKBRsDNoowc.jpg',
              title: 'Tarkwa Senior High Project',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/pYyBVtg5h06t0dG92ogfTq8Hgn7aHhfrjwBvdWv2Ulk.jpg',
              title: 'Nkroful Senior High Project',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/tZyD5d9rFgC0hnE5r6OjWRRIY7ci9AOICXjiEiF_Ez8.jpg',
              title: 'Takoradi Teaching Hospital',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/7klHenz4kEetZvrvOAh7-76Z3jdOERQouu5j_BoGV0Q.jpg',
              title: 'Tarkwa community Clinic',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/zg8Zn3bB75NWhfG7z1gu3I0FojaupPAqMsAyPY_fnlo.jpg',
              title: 'Tarkwa community Library',
              status: 'Ongoing project',
              date: '29th November, 2021'
            },
            {
              imgSrc: 'https://storage.googleapis.com/a1aa/image/7QpvqQSd-z5H-UHCwvRId8pWNH9V4CmO8eiJh9w44Mc.jpg',
              title: 'Tarkwa Community Toilet',
              status: 'Ongoing project',
              date: '29th November, 2021'
            }
          ].map((project, index) => (
            <a key={index} className="border-2 border-blue-500 p-2 block" href="#">
              <img
                alt={project.title}
                className="w-full h-40 object-cover mb-2"
                src={project.imgSrc}
              />
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm">{project.status}</p>
              <p className="text-xs text-gray-500">Started {project.date}</p>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-2">
            {[...Array(9)].map((_, index) => (
              <li key={index}>
                <a className="text-purple-500" href="#">
                  <i className="fas fa-circle"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
