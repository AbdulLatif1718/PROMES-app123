import { JSX, useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export const ProjectSummarySection = (): JSX.Element => {
  // State for hover effects on donut segments
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  // Dummy data that will be replaced with database fetching
  const dummyData = {
    overview: {
      currentMonth: "May",
      currentValue: 0,
      chartData: [
        { month: "JAN", value: 8000 },
        { month: "FEB", value: 15000 },
        { month: "MAR", value: 10000 },
        { month: "APR", value: 32000 },
        { month: "MAY", value: 25000 },
        { month: "JUN", value: 45000 },
        { month: "JUL", value: 20000 },
      ],
      secondaryData: [
        { month: "JAN", value: 18000 },
        { month: "FEB", value: 30000 },
        { month: "MAR", value: 22000 },
        { month: "APR", value: 20000 },
        { month: "MAY", value: 12000 },
        { month: "JUN", value: 18000 },
        { month: "JUL", value: 8000 },
      ]
    },
    projects: {
      totalCount: 789,
      segments: [
        { id: "ongoing", name: "Ongoing", percentage: "0%", color: "#DB5AEE", position: "top" },
        { id: "completed", name: "Completed", percentage: "0%", color: "#8B5CF6", position: "right" },
        { id: "negotiation", name: "Negotiation", percentage: "0%", color: "#FFBE55", position: "left" },
        { id: "withdrawn", name: "Withdrawn", percentage: "0%", color: "#F87171", position: "bottom" }
      ],
      statuses: [
        { name: "Ongoing", percentage: "0%", color: "#DB5AEE" },
        { name: "Completed", percentage: "0%", color: "#8B5CF6" },
        { name: "Yet To Start", percentage: "0%", color: "#FFBE55" },
        { name: "Withdrawn", percentage: "0%", color: "#F87171" },
      ]
    }
  };

  // Data for months on x-axis
  const months = dummyData.overview.chartData.map(item => item.month);

  // Data for y-axis values
  const yAxisValues = ["50K", "30K", "20K", "10K"];

  return (
    <div className="flex flex-wrap gap-7">
      {/* Overview Card */}
      <Card className="flex-1 min-w-[300px] h-[447px] rounded-xl shadow-sm">
        <CardContent className="p-0 h-full">
          <div className="p-5 flex justify-between items-center">
            <h3 className="font-medium text-lg text-gray-700">
              Overview
            </h3>

            <Select defaultValue="month">
              <SelectTrigger className="w-28 h-9 bg-white rounded-full border border-gray-100 text-gray-500 text-sm">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="quarter">Quarter</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative h-[calc(100%-80px)] w-full px-6">
            {/* Y-axis labels */}
            <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-12">
              {yAxisValues.map((value, index) => (
                <div
                  key={index}
                  className="text-gray-400 text-xs"
                >
                  {value}
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="absolute left-16 right-6 top-0 h-[calc(100%-24px)]">
              {/* Horizontal grid lines */}
              <div className="absolute w-full h-full">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="absolute w-full h-px bg-gray-100"
                    style={{ top: `${index * 33}%` }}
                  />
                ))}
              </div>

              {/* Line chart - we'd use a proper chart library in production */}
              <div className="absolute inset-0 mt-12">
                {/* Purple line path */}
                <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                  <path
                    d="M0,180 C50,160 70,100 100,120 C130,140 200,80 250,70 C300,60 350,90 400,80 C450,70 500,40 550,60 C600,80 650,70 700,90"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                  />
                  <path
                    d="M0,140 C50,100 100,150 150,90 C200,30 250,70 300,120 C350,170 400,150 450,100 C500,50 550,100 600,150 C650,200 700,180 700,150"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M0,140 C50,100 100,150 150,90 C200,30 250,70 300,120 C350,170 400,150 450,100"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* This month indicator */}
              <div className="absolute left-0 top-1/3 bg-white rounded-lg shadow-sm p-2 border border-gray-100">
                <div className="text-xs text-gray-400">This Month</div>
                <div className="text-lg font-semibold text-gray-800">0</div>
                <div className="text-xs text-gray-400">May</div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-600 rounded-full border-2 border-white"></div>
              </div>
            </div>

            {/* X-axis month labels */}
            <div className="absolute bottom-0 left-16 right-6 flex justify-between">
              {months.map((month, index) => (
                <div
                  key={index}
                  className="text-xs text-gray-400"
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Card - Now with hover functionality */}
      <Card className="w-[389px] h-[447px] rounded-xl shadow-sm overflow-hidden">
        <CardContent className="p-5 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium text-lg text-gray-700">
              Projects
            </h3>

            <div className="flex items-center gap-1 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-gray-600">Monthly</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Donut chart with hover effects */}
          <div className="flex justify-center flex-grow ">
            <div className="relative w-64 h-64">
              {/* SVG Donut Chart with hover interactions */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Donut segments with mouse events */}
                <path 
                  d="M100,20 A80,80 0 0,1 180,100 L100,100 Z" 
                  fill="#DB5AEE"
                  onMouseEnter={() => setHoveredSegment('ongoing')}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{ cursor: 'pointer' }}
                />
                <path 
                  d="M180,100 A80,80 0 0,1 100,180 L100,100 Z" 
                  fill="#8B5CF6"
                  onMouseEnter={() => setHoveredSegment('completed')}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{ cursor: 'pointer' }}
                />
                <path 
                  d="M100,180 A80,80 0 0,1 20,100 L100,100 Z" 
                  fill="#FFBE55"
                  onMouseEnter={() => setHoveredSegment('negotiation')}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{ cursor: 'pointer' }}
                />
                <path 
                  d="M20,100 A80,80 0 0,1 100,20 L100,100 Z" 
                  fill="#F87171"
                  onMouseEnter={() => setHoveredSegment('withdrawn')}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{ cursor: 'pointer' }}
                />
                
                {/* Center circle */}
                <circle cx="100" cy="100" r="50" fill="white" />
                <text x="100" y="110" textAnchor="middle" fontSize="32" fontWeight="500" fill="#6B7280">789</text>
              </svg>
              
              {/* Label Tags - Only shown on hover */}
              {hoveredSegment === 'ongoing' && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                  <div className="bg-white border border-gray-200 rounded-full shadow-sm px-4 py-1 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#DB5AEE]"></div>
                    <span className="text-sm text-gray-400">Ongoing</span>
                  </div>
                </div>
              )}
              
              {hoveredSegment === 'completed' && (
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
                  <div className="bg-white border border-gray-200 rounded-full shadow-sm px-4 py-1 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
                    <span className="text-sm text-gray-400">Completed</span>
                  </div>
                </div>
              )}
              
              {hoveredSegment === 'withdrawn' && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
                  <div className="bg-white border border-gray-200 rounded-full shadow-sm px-4 py-1 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F87171]"></div>
                    <span className="text-sm text-gray-400">Withdrawn</span>
                  </div>
                </div>
              )}
              
              {hoveredSegment === 'negotiation' && (
                <div className="absolute top-1/2 left-0 transform -translate-x-1/4 -translate-y-1/2">
                  <div className="bg-white border border-gray-200 rounded-full shadow-sm px-4 py-1 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FFBE55]"></div>
                    <span className="text-sm text-gray-400">Negotiation</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project status list - contained in a fixed height container */}
          <div className="mt-auto w-full px-4">
            <div className="flex flex-col">
              {dummyData.projects.statuses.map((status, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-4 h-4 mr-4 flex items-center justify-center"
                    style={{ color: status.color }}
                  >■</div>
                  <span className="flex-1 text-sm font-medium text-gray-900">{status.name}</span>
                  <span className="text-lg font-sm text-gray-900">{status.percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};