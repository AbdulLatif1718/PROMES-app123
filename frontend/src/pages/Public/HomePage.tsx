import React, { useState, useEffect, useRef } from "react";
import Layout from "../../components/Shared/Layout";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const images = [
  "/path-to-image1.png",
  "/path-to-image2.png",
  "/path-to-image3.png",
];

const HomePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 600,
    height: 500,
  });
  const dummyImages = [
    "https://storage.googleapis.com/a1aa/image/7klHenz4kEetZvrvOAh7-76Z3jdOERQouu5j_BoGV0Q.jpg",
    "https://storage.googleapis.com/a1aa/image/zg8Zn3B75NWhfG7z1gu3I0FojaupPAqMsAyPY_fnlo.jpg",
    "https://storage.googleapis.com/a1aa/image/7QpvqQSd-z5H-UHCwvRId8pWNH9V4CmO8eiJh9w44Mc.jpg",
    "https://storage.googleapis.com/a1aa/image/eKISNNRK4fQgCBGwTe7QgxzghUbft_a_jiJSnWNSgw4.jpg",
  ];

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
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasDimensions.width;
    canvas.height = canvasDimensions.height;

    const img = new Image();
    img.src = dummyImages[imageIndex];

    let animationFrameId: number;

    const animateImage = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Responsive circle positioning
      const circleX = canvas.width * 0.7;
      const circleY = canvas.height * 0.36;
      const circleRadius = canvas.width * 0.25;

      ctx.beginPath();
      ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#FAE6FF";
      ctx.fill();

      // Responsive blob path
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
      ctx.drawImage(img, offsetX, 0, imgWidth, imgHeight);

      ctx.restore();

      setOffsetX((prevOffsetX) => {
        if (prevOffsetX < -canvas.width) {
          setImageIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
          return 0;
        }
        return prevOffsetX - 2;
      });

      animationFrameId = requestAnimationFrame(animateImage);
    };

    img.onload = animateImage;
    return () => cancelAnimationFrame(animationFrameId);
  }, [imageIndex, offsetX, canvasDimensions]);


  const [, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const chartData = Array(24)
    .fill(null)
    .map((_, index) => ({
      value: [
        70, 65, 45, 50, 45, 40, 50, 45, 40, 45, 50, 55, 45, 40, 45, 50, 45, 50,
        55, 40, 45, 50, 90, 45,
      ][index],
    }));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full pt-20">
        <div className="min-h-[80vh] bg-white flex flex-col items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-3 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Unlock the
                  <br />
                  Power of <br />
                  <span className="text-purple-700">Promes</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
                  Promes lets everyone track the progress of important projects
                  in your area.
                </p>
                <button className="px-6 py-2.5 bg-purple-700 text-white rounded-full text-base font-semibold hover:bg-purple-800 transition">
                  Explore Projects
                </button>
              </div>

              <div className="relative w-full flex justify-center">
                <canvas
                  ref={canvasRef}
                  width={canvasDimensions.width}
                  height={canvasDimensions.height}
                  className="w-full max-w-[600px] h-auto"
                />
              </div>
            </div>
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
        { label: "Promes App", active: false }
      ].map((item) => (
        <span
          key={item.label}
          className={`px-4 py-2 whitespace-nowrap text-base relative ${
            item.active 
              ? 'text-purple-900 font-medium after:content-[""] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:bg-purple-900' 
              : 'text-gray-500 hover:text-purple-900'
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
            {[
              { value: "200", label: "Total Projects" },
              { value: "120", label: "Ongoing Projects" },
              { value: "50", label: "Completed Projects" },
              { value: "30", label: "Pending Projects" },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-gray-100 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            ‹
          </button>
          <div className="relative aspect-video">
            <img
              src="/api/placeholder/800/400"
              alt="Tarkwa School Building"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold">
                Tarkwa School Building
              </h2>
              <p className="text-xs md:text-sm opacity-80">
                Education Infrastructure
              </p>
            </div>
          </div>
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            ›
          </button>
        </div>
      </section>

{/* Expenses and Revenue Section */}
<section className="w-full mb-16">
  <div className="max-w-4xl mx-auto px-6">
    {/* Header */}
    <h2 className="text-xl font-bold mb-1">Expenses and Revenue Generated</h2>
    <p className="text-sm text-gray-500 mb-8">01 - 25 January, 2025</p>
    
    {/* Chart */}
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

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column - Revenue Sources */}
      <div>
        <h3 className="text-base mb-4">where we generate money?</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Hospitals</span>
            <span>25,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Schools</span>
            <span>50,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Agriculture</span>
            <span>36,900</span>
          </div>
        </div>
      </div>

      {/* Right Column - Expenses */}
      <div>
        <h3 className="text-base mb-4">where your money go?</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <span>Creating Jobs</span>
              <div className="h-0.5 w-24 bg-red-500 mt-1"></div>
            </div>
            <span>872,400</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span>Infrastructure</span>
              <div className="h-0.5 w-24 bg-red-500 mt-1"></div>
            </div>
            <span>1,378,00</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span>Transportation</span>
              <div className="h-0.5 w-24 bg-red-500 mt-1"></div>
            </div>
            <span>928,500</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span>Security</span>
              <div className="h-0.5 w-24 bg-red-500 mt-1"></div>
            </div>
            <span>420,700</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span>Agriculture</span>
              <div className="h-0.5 w-24 bg-red-500 mt-1"></div>
            </div>
            <span>520,000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Logos */}
      <section className="w-full px-4 sm:px-6 py-8 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              "https://cdn.worldvectorlogo.com/logos/shell-3.svg",
              "https://www.shutterstock.com/image-vector/snd-letter-monogram-logo-design-260nw-1936835116.jpg",
              "https://iodghana.org/wp-content/uploads/2021/07/gnpc-logo.png",
              "https://i0.wp.com/ghanagoldexpo.org/wp-content/uploads/2020/02/Ghana-Gas-Logo.jpg",
              "https://media.istockphoto.com/id/1424452220/vector/lion-head-mascot-logo-design-lion-line-art-vector-illustration.jpg",
            ].map((logo, index) => (
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
