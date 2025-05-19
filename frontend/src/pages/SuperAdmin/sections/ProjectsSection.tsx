import { SearchIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { useState } from "react";
import Pagination from "../../../components/Shared/Pagination"; // Adjust path accordingly
import { RecentActitvityTable } from "../tables/RecentActivityTable";

const mockData = [
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Admin Created",
    id: "001000102",
    status: "Success",
    action: "Admin",
  },
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Admin Created",
    id: "001000102",
    status: "Pending",
    action: "Project",
  },
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Admin Created",
    id: "001000102",
    status: "Success",
    action: "Admin",
  },
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Admin Created",
    id: "001000102",
    status: "Success",
    action: "Project",
  },
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Project Created",
    id: "001000102",
    status: "Success",
    action: "Project",
  },
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Project Created",
    id: "001000102",
    status: "Success",
    action: "Project",
  },
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Admin created",
    id: "001000102",
    status: "Pending",
    action: "Admin",
  },
  {
    date: "2022-10-02",
    time: "10:00",
    activity: "Project Created",
    id: "001000102",
    status: "Success",
    action: "Project",
  },
  // Add more as needed
];

const ProjectSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const data = mockData;
  const totalEntries = data.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries);
  const visibleData = data.slice(startEntry - 1, endEntry);

  return (
    <Card className="w-full rounded-lg overflow-hidden">
      <CardHeader className="px-6 py-4 flex flex-row items-center justify-between border-b border-[#f2f4f7]">
        <h2 className="font-bold text-lg text-color-paletheading-color font-['Figtree',Helvetica]">
          Recent Activity
        </h2>

        <div className="w-[293px]">
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 w-5 h-5 text-[#7c7c7c]" />
            <Input
              className="pl-10 py-2.5 border border-solid border-[#9b9b9b] font-['Figtree',Helvetica] text-sm"
              placeholder="Search by name"
            />
          </div>
        </div>
      </CardHeader>

      {visibleData.length === 0 ? (
        <CardContent className="flex flex-col items-center justify-center py-16">
          <img
            className="w-[266.49px] h-[286.82px] mb-6"
            alt="No Data"
            src="/undraw-knowledge-0ty5--1--1.svg"
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="font-text-xl-semibold text-global-neutral-grey-1300">
              No Recent Activity
            </h3>
            <p className="font-text-lg-regular text-global-neutral-grey-1000">
              No activities yet. They&apos;ll appear here once created.
            </p>
          </div>
        </CardContent>
      ) : (
        <CardContent className="px-6 py-4">
          <RecentActitvityTable data={visibleData} />
        </CardContent>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalEntries={totalEntries}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Card>
  );
};

export default ProjectSection;
