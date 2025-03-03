import React from "react";
import Layout from "../../components/Shared/Layout";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Projects: React.FC = () => {
  const projects = [
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/VpH_zSeYGkMmMxjK72GgnCrUBXw7fiBKsYOBFDOuvUE.jpg',
      title: 'Tarkwa community center',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id: 1 // Unique identifier for each project
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/VpH_zSeYGkMmMxjK72GgnCrUBXw7fiBKsYOBFDOuvUE.jpg',
      title: 'Tarkwa community center',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:2
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/tsMm5Kio95Xdar0SFpDqBqqyOwaYVqRsrNvcFBz80KI.jpg',
      title: 'Tarkwa District Assembly',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:3
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/B4hF07pG1VK7P8HjUqWF7xoJI3DRBOUr4zcoeZhTaZ4.jpg',
      title: 'Bogoso Borehole project',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:4
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/q7RKQqUlXjel33xeL2aGsJIQ9Wz2-MVrX0nKh58FW7s.jpg',
      title: 'Abooso Borehole Project',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:5
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/D8BQkWoYKiaD8pceCQmLe8J75y0WOg4xeKzJ_7jyo-Q.jpg',
      title: 'Tarkwa Inner Roads',
      status: 'Ongoing project',
      date: '5th April, 2022',
      id:6
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/0iuTVoZTVIm8S3lm4SCdcbLQvT2e3jq4KBvyGhkc0aU.jpg',
      title: 'Takoradi Overpass',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:7
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/Xx1mrc36zO3Raq7ZuB4PhVuJotJ9bu83UND_Lcoj4w0.jpg',
      title: 'Abooso drainage',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:8
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/a7fjV883rnTuDxI-yuuiX9qgaXE0hsUf6sSXouJqlC4.jpg',
      title: 'Bogoso Central Mosque',
      status: 'Completed project',
      date: '29th January, 2022',
      id:9
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/eKISNNRK4fQgCBGwTe7QgxzghUbft_a_jiJSnWNSgw4.jpg',
      title: 'Tarkwa to Takoradi Road',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:10
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/hqMjPN6hr2zN1J555pf0wWe73U9OOIzMUKBRsDNoowc.jpg',
      title: 'Tarkwa Senior High Project',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:11
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/pYyBVtg5h06t0dG92ogfTq8Hgn7aHhfrjwBvdWv2Ulk.jpg',
      title: 'Nkroful Senior High Project',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:12
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/tZyD5d9rFgC0hnE5r6OjWRRIY7ci9AOICXjiEiF_Ez8.jpg',
      title: 'Takoradi Teaching Hospital',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:13
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/7klHenz4kEetZvrvOAh7-76Z3jdOERQouu5j_BoGV0Q.jpg',
      title: 'Tarkwa community Clinic',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:14
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/zg8Zn3bB75NWhfG7z1gu3I0FojaupPAqMsAyPY_fnlo.jpg',
      title: 'Tarkwa community Library',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:15
    },
    {
      imgSrc: 'https://storage.googleapis.com/a1aa/image/7QpvqQSd-z5H-UHCwvRId8pWNH9V4CmO8eiJh9w44Mc.jpg',
      title: 'Tarkwa Community Toilet',
      status: 'Ongoing project',
      date: '29th November, 2021',
      id:16
    },
    
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 md:px-14 py-8 pt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-800">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-2 sm:p-3 md:p-4 block bg-white"
            >
              <img
                alt={project.title}
                className="w-full h-48 md:h-52 object-cover rounded-md mb-2"
                src={project.imgSrc}
              />
              <div className="space-y-1">
                <h2 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-1">
                  {project.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-600">{project.status}</p>
                <p className="text-xs text-gray-500">Started {project.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
