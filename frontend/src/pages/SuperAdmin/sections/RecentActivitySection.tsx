import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { ProjectTable } from "../tables/ProjectTable";
import Pagination from "../../../components/Shared/Pagination";
import { Card } from "../../../components/ui/card";

const mockData = [
  {
    name: "New Work Les DO",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 33,
    amount: "$45454,888",
    type: "Bridge Construction",
    status: "Completed",
  },
  {
    name: "You can Change the text and all",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 55,
    amount: "$45454,888",
    type: "Hospital",
    status: "Completed",
  },
  {
    name: "You can Change the text and all",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 95,
    amount: "$45454,888",
    type: "Hospital",
    status: "Negotiating",
  },
  {
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 12,
    amount: "$45454,888",
    type: "Health Screening",
    status: "Ongoing",
  },
  {
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 24,
    amount: "$45454,888",
    type: "School Building",
    status: "Completed",
  },
  {
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 12,
    amount: "$45454,888",
    type: "Workshops",
    status: "Rejected",
  },
  {
    name: "You can Change the text and all",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 55,
    amount: "$45454,888",
    type: "Hospital",
    status: "Negotiating",
  },
  {
    name: "You can Change the text and all",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 55,
    amount: "$45454,888",
    type: "Hospital",
    status: "Negotiating",
  },
  {
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 12,
    amount: "$45454,888",
    type: "Health Screening",
    status: "Ongoing",
  },
  {
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 24,
    amount: "$45454,888",
    type: "School Building",
    status: "Completed",
  },
  {
    name: "Landing Page Design",
    contractor: "Cont 1",
    date: "12/12/2023",
    progress: 12,
    amount: "$45454,888",
    type: "Workshops",
    status: "Rejected",
  },
  // ... add more if needed
];

const tabs = ["All", "Ongoing", "Completed", "Negotiating", "Rejected"];

const RecentActivity = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Default 5
  
    const filteredData =
      activeTab === "All"
        ? mockData
        : mockData.filter((item) => item.status === activeTab);
  
    const totalEntries = filteredData.length;
    const totalPages = Math.ceil(totalEntries / rowsPerPage);
  
    return (
      <Card className="p-6 bg-white rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Project Summary</h2>
          <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded-xl text-sm font-medium">
            View All <span>▼</span>
          </button>
        </div>
    
        <div className="flex gap-6 border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 font-medium text-sm ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-500"
                  : "text-gray-500"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
            >
              {tab}
            </button>
          ))}
        </div>
    
        {filteredData.length === 0 ? (
          // EMPTY STATE
          <div className="flex flex-col items-center justify-center gap-6 py-12 w-full rounded-[20px]">
            <div className="w-[74px] h-[67px] bg-[url(/asset-19.png)] bg-[100%_100%]" />
    
            <div className="flex flex-col items-center gap-1">
              <h3 className="font-bold text-[#101828] text-lg font-['Figtree',Helvetica]">
                No Projects Available
              </h3>
              <p className="font-normal text-[#344054] text-lg font-['Figtree',Helvetica]">
                Create a new Project and see their data here
              </p>
            </div>
    
            <button className="flex items-center gap-2 px-4 py-2 bg-[#895bf1] text-white rounded-lg text-sm">
              <PlusIcon className="w-5 h-5" />
              Add a New Project
            </button>
          </div>
        ) : (
          // TABLE AND PAGINATION
          <>
            <ProjectTable
              data={filteredData}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
            />
    
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              rowsPerPage={rowsPerPage}
              totalEntries={totalEntries}
              onPageChange={setCurrentPage}
              onRowsPerPageChange={(rows) => {
                setRowsPerPage(rows);
                setCurrentPage(1);
              }}
            />
          </>
        )}
      </Card>
    );
  }
  export default RecentActivity;
