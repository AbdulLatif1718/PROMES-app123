import React, { useRef, useEffect, useState } from 'react';

interface InfoPoint {
  x: number;
  y: number;
  info: string;
}

const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [infoPoints, setInfoPoints] = useState<InfoPoint[]>([]);
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 600,
    height: 500,
  });

  // Define the info points relative to canvas size
  useEffect(() => {
    setInfoPoints([
      {
        x: canvasDimensions.width * 0.25,
        y: canvasDimensions.height * 0.25,
        info: "Healthcare professionals are equipped with proper PPE to ensure safety."
      },
      {
        x: canvasDimensions.width * 0.2,
        y: canvasDimensions.height * 0.65,
        info: "Data collection is crucial for tracking community health metrics."
      },
      {
        x: canvasDimensions.width * 0.35,
        y: canvasDimensions.height * 0.85,
        info: "Regular monitoring ensures healthcare projects meet established standards."
      }
    ]);
  }, [canvasDimensions]);

  // Handle canvas resizing
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

  // Load the image
  useEffect(() => {
    const newImage = new Image();
    newImage.src = "/api/placeholder/600/500"; // Placeholder image
    newImage.onload = () => setImg(newImage);
  }, []);

  // Draw the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasDimensions.width;
    canvas.height = canvasDimensions.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background circle
    const circleX = canvas.width * 0.7;
    const circleY = canvas.height * 0.36;
    const circleRadius = canvas.width * 0.25;

    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#FAE6FF";
    ctx.fill();

    // Draw blob shape
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

    // Create clipping path
    ctx.save();
    ctx.clip();

    // Draw the image
    const imgWidth = canvas.width * 1.0;
    const imgHeight = canvas.height * 0.8;
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

    ctx.restore();
  }, [img, canvasDimensions]);

  // Handle clicking on info points
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if click is on any info point
    infoPoints.forEach((point) => {
      const dx = point.x - x;
      const dy = point.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 20) {
        setActiveInfo(activeInfo === point.info ? null : point.info);
      }
    });
  };

  return (
    <div className="relative w-full flex justify-center">
      <div 
        className="relative"
        onClick={handleCanvasClick}
      >
        <canvas
          ref={canvasRef}
          width={canvasDimensions.width}
          height={canvasDimensions.height}
          className="w-full max-w-full md:max-w-[600px] h-auto"
        />
        
        {/* Render the plus buttons */}
        {infoPoints.map((point, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center w-10 h-10 bg-purple-900 rounded-full text-white text-2xl cursor-pointer shadow-lg transform transition-transform hover:scale-110"
            style={{
              left: `${(point.x / canvasDimensions.width) * 100}%`,
              top: `${(point.y / canvasDimensions.height) * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            +
          </div>
        ))}
        
        {/* Show info tooltip if active */}
        {activeInfo && (
          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg text-gray-800 border-l-4 border-purple-800">
            {activeInfo}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setActiveInfo(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCanvas;