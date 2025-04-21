import { useState } from "react";
import {ProjectTable} from "../tables/ProjectTable";
import {Pagination} from "../../../components/Shared/Pagination";
import { Card } from "../../../components/ui/card";

const allTabs = ["All", "Ongoing", "Completed", "Negotiating", "Rejected"];

const mockData = [
  {
    id: 1,
    name: "New Work Les DO",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 33,
    amount: "$45454,888",
    type: "Bridge Construction",
    status: "Completed",
  },
  {
    id: 2,
    name: "You can Change the text and all",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 55,
    amount: "$45454,888",
    type: "Hospital",
    status: "Completed",
  },
  {
    id: 3,
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 12,
    amount: "$45454,888",
    type: "Health Screening",
    status: "In - progress",
  },
  {
    id: 4,
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 24,
    amount: "$45454,888",
    type: "School Building",
    status: "Completed",
  },
  {
    id: 5,
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 12,
    amount: "$45454,888",
    type: "Workshops",
    status: "Rejected",
  },
];

export const RecentActivity = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredData =
    selectedTab === "All"
      ? mockData
      : mockData.filter((item) =>
          item.status.toLowerCase().includes(selectedTab.toLowerCase())
        );

  return (
    <Card className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Project Summary</h2>
        <button className="bg-blue-100 text-blue-800 font-medium px-4 py-1 rounded-full text-sm">
          View All ⌄
        </button>
      </div>

      <div className="flex space-x-6 mb-6 border-b border-gray-100">
        {allTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`pb-2 text-sm font-medium ${
              selectedTab === tab
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <ProjectTable data={filteredData} />

      <div className="mt-6">
        <Pagination totalItems={filteredData.length} itemsPerPage={5} />
      </div>
    </Card>
  );
};
