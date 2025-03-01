import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Shared/Layout";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

// Dummy Data Section
const images = [
  "/path-to-image1.png",
  "/path-to-image2.png",
  "/path-to-image3.png",
];

const dummyImages = [
  "https://storage.googleapis.com/a1aa/image/7klHenz4kEetZvrvOAh7-76Z3jdOERQouu5j_BoGV0Q.jpg",
  "https://storage.googleapis.com/a1aa/image/zg8Zn3B75NWhfG7z1gu3I0FojaupPAqMsAyPY_fnlo.jpg",
  "https://storage.googleapis.com/a1aa/image/D8BQkWoYKiaD8pceCQmLe8J75y0WOg4xeKzJ_7jyo-Q.jpg",
  "https://storage.googleapis.com/a1aa/image/0iuTVoZTVIm8S3lm4SCdcbLQvT2e3jq4KBvyGhkc0aU.jpg",
];

const chartData = Array(24)
  .fill(null)
  .map((_, index) => ({
    value: [
      70, 65, 45, 50, 45, 40, 50, 45, 40, 45, 50, 55, 45, 40, 45, 50, 45, 50,
      55, 40, 45, 50, 90, 45,
    ][index],
  }));

const projectData = [
  {
    id: 1,
    image: "https://storage.googleapis.com/a1aa/image/hqMjPN6hr2zN1J555pf0wWe73U9OOIzMUKBRsDNoowc.jpg",
    title: "Tarkwa School Building",
    category: "Education Infrastructure",
  },
  {
    id: 2,
    image: "https://storage.googleapis.com/a1aa/image/tZyD5d9rFgC0hnE5r6OjWRRIY7ci9AOICXjiEiF_Ez8.jpg",
    title: "Accra Community Hospital",
    category: "Healthcare Facility",
  },
  {
    id: 3,
    image: "https://storage.googleapis.com/a1aa/image/0iuTVoZTVIm8S3lm4SCdcbLQvT2e3jq4KBvyGhkc0aU.jpg",
    title: "Kumasi Road Expansion",
    category: "Transportation Infrastructure",
  },
  {
    id: 4,
    image: "https://storage.googleapis.com/a1aa/image/q7RKQqUlXjel33xeL2aGsJIQ9Wz2-MVrX0nKh58FW7s.jpg",
    title: "Tamale Water Project",
    category: "Water & Sanitation",
  },
];

const statsData = [
  { value: "200", label: "Total Projects" },
  { value: "120", label: "Ongoing Projects" },
  { value: "50", label: "Completed Projects" },
  { value: "30", label: "Pending Projects" },
];

const revenueData = [
  { label: "Hospitals", value: "25,000" },
  { label: "Schools", value: "50,000" },
  { label: "Agriculture", value: "36,900" },
];

const expensesData = [
  { label: "Creating Jobs", value: "872,400" },
  { label: "Infrastructure", value: "1,378,00" },
  { label: "Transportation", value: "928,500" },
  { label: "Security", value: "420,700" },
  { label: "Agriculture", value: "520,000" },
];

const logos = [
  "https://cdn.worldvectorlogo.com/logos/shell-3.svg",
  "https://www.shutterstock.com/image-vector/snd-letter-monogram-logo-design-260nw-1936835116.jpg",
  "https://iodghana.org/wp-content/uploads/2021/07/gnpc-logo.png",
  "https://i0.wp.com/ghanagoldexpo.org/wp-content/uploads/2020/02/Ghana-Gas-Logo.jpg",
  "https://media.istockphoto.com/id/1424452220/vector/lion-head-mascot-logo-design-lion-line-art-vector-illustration.jpg",
];

// Main Component
const HomePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 600,
    height: 500,
  });

  const [img, setImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const updateCanvasSize = () => {
      const screenWidth = window.innerWidth;
      const newWidth = screenWidth < 768 ? 300 : 600;
      const newHeight = screenWidth < 768 ? 250 : 500;
      setCanvasDimensions({ width: newWidth, height: newHeight });
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  useEffect(() => {
    const newImage = new Image();
    newImage.src = dummyImages[imageIndex];
    newImage.onload = () => setImg(newImage);
  }, [imageIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasDimensions.width;
    canvas.height = canvasDimensions.height;

    let animationFrameId: number;

    const animateImage = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const circleX = canvas.width * 0.7;
      const circleY = canvas.height * 0.36;
      const circleRadius = canvas.width * 0.25;

      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#FAE6FF";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.5, canvas.height * 0.1);
      ctx.bezierCurveTo(
        canvas.width * 0.66,
        canvas.height * 0.1,
        canvas.width * 0.83,
        canvas.height * 0.2,
        canvas.width * 0.83,
        canvas.height * 0.4
      );
      ctx.bezierCurveTo(
        canvas.width * 0.83,
        canvas.height * 0.6,
        canvas.width * 0.66,
        canvas.height * 0.8,
        canvas.width * 0.5,
        canvas.height * 0.8
      );
      ctx.bezierCurveTo(
        canvas.width * 0.33,
        canvas.height * 0.8,
        canvas.width * 0.16,
        canvas.height * 0.7,
        canvas.width * 0.16,
        canvas.height * 0.5
      );
      ctx.bezierCurveTo(
        canvas.width * 0.16,
        canvas.height * 0.3,
        canvas.width * 0.33,
        canvas.height * 0.1,
        canvas.width * 0.5,
        canvas.height * 0.1
      );
      ctx.closePath();

      ctx.fillStyle = "#FF69B4";
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#FF1493";
      ctx.stroke();

      ctx.save();
      ctx.clip();

      const imgWidth = canvas.width * 0.83;
      const imgHeight = canvas.height * 0.8;
      ctx.globalAlpha = imageOpacity;
      ctx.drawImage(img, offsetX, 0, imgWidth, imgHeight);

      ctx.restore();

      setOffsetX((prevOffsetX) => {
        const newOffsetX = prevOffsetX - 1.5;

        if (newOffsetX < -canvas.width) {
          setImageOpacity(0);
          setTimeout(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
            setImageOpacity(1);
          }, 500);
          return 0;
        }

        return newOffsetX;
      });

      animationFrameId = requestAnimationFrame(animateImage);
    };

    animateImage();
    return () => cancelAnimationFrame(animationFrameId);
  }, [img, imageOpacity, canvasDimensions.width, canvasDimensions.height]);

  const [, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Layout>
      {/* Hero Section */}

<section className="relative w-full pt-16 md:pt-20">
  <div className="min-h-[80vh] bg-white flex flex-col items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Heading shows first on mobile */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-center md:text-left mb-6 md:hidden">
        Unlock the<br />
        Power of<br />
        <span className="text-purple-800">Promes</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          {/* Heading hidden on mobile, visible on desktop */}
          <h1 className="hidden md:block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            Unlock the<br />
            Power of<br />
            <span className="text-purple-800">Promes</span>
          </h1>
          
          {/* Text paragraph that follows canvas on mobile */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
            Promes lets everyone—residents and
            stakeholders track the progress of important
            projects in your area
          </p>
        </div>

        <div className="relative w-full flex justify-center mb-6 md:mb-0">
          <canvas
            ref={canvasRef}
            width={canvasDimensions.width}
            height={canvasDimensions.height}
            className="w-full max-w-full md:max-w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
    
    {/* Centered button below content */}
    <div className="mt-4 md:mt-8 mb-12 md:mb-16 px-4">
      <button className="w-full sm:w-auto px-8 sm:px-10 py-3 bg-purple-800 text-white rounded-full text-base md:text-lg font-medium hover:bg-purple-900 transition shadow-md">
        Explore Projects
      </button>
    </div>
  </div>
</section>

      {/* Navigation */}
      <section className="w-full mb-12">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <nav className="flex items-center gap-4 bg-purple-100 rounded-full p-1 w-max min-w-full">
            {[
              { label: "Promes", active: true },
              { label: "Promes 1.0", active: false },
              { label: "Build environment with Promes", active: false },
              { label: "Safety", active: false },
              { label: "Promes App", active: false },
            ].map((item) => (
              <span
                key={item.label}
                className={`px-4 py-2 whitespace-nowrap text-base relative ${
                  item.active
                    ? "text-purple-900 font-medium after:content-[''] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:bg-purple-900"
                    : "text-gray-500 hover:text-purple-900"
                }`}
              >
                {item.label}
              </span>
            ))}
          </nav>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center bg-gray-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Image Carousel */}
      <section className="w-full px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition"
            aria-label="Previous project"
          >
            <span className="text-xl text-purple-900">‹</span>
          </button>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            {projectData.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === imageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                  <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
                  <p className="text-xs md:text-sm opacity-80">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition"
            aria-label="Next project"
          >
            <span className="text-xl text-purple-900">›</span>
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === imageIndex ? 'bg-purple-700 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expenses and Revenue Section */}
      <section className="w-full mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-1">Expenses and Revenue Generated</h2>
          <p className="text-sm text-gray-500 mb-8">01 - 25 January, 2025</p>
          <div className="h-48 mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <Bar
                  dataKey="value"
                  fill="#4B0082"
                  radius={[0, 0, 0, 0]}
                  barSize={16}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base mb-4">Where We Generate Money?</h3>
              <div className="space-y-4">
                {revenueData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base mb-4">Where Your Money Goes?</h3>
              <div className="space-y-4">
                {expensesData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span>{item.label}</span>
                      <div className="h-0.5 w-24 bg-red-500 mt-1"></div>
                    </div>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="w-full px-4 sm:px-6 py-8 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Partner logo"
                className="h-8 md:h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-2">
          {/* ... FAQ content with responsive padding ... */}
        </div>
      </section>

      {/* Vote of Thanks */}
      <section className="w-full px-4 sm:px-6 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-sm text-purple-600">Appreciation</p>
            <h2 className="text-xl md:text-2xl font-bold text-purple-900">
              Vote Of Thanks
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {/* ... responsive profile cards ... */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;