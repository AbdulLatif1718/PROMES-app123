import React from "react";

interface Project {
  name: string;
  contractor: string;
  date: string;
  progress: number;
  amount: string;
  type: string;
  status: string;
}

interface ProjectTableProps {
  data?: Project[];
  currentPage: number;
  rowsPerPage: number;
}

export const ProjectTable: React.FC<ProjectTableProps> = ({
  data = [],
  currentPage,
  rowsPerPage,
}) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <table className="min-w-full mt-4">
      <thead>
        <tr className="text-left border-b font-semibold text-sm text-gray-700">
          <th className="py-3 px-4">Project</th>
          <th className="py-3 px-4">Project Contractor</th>
          <th className="py-3 px-4">Date</th>
          <th className="py-3 px-4">Progress</th>
          <th className="py-3 px-4">Amount</th>
          <th className="py-3 px-4">Project Type</th>
          <th className="py-3 px-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((project, idx) => (
          <tr key={idx} className="bg-gray-50 hover:bg-gray-100 border-b">
            <td className="py-3 px-4 font-medium">{project.name}</td>
            <td className="py-3 px-4">{project.contractor}</td>
            <td className="py-3 px-4">{project.date}</td>
            <td className="py-3 px-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-green-600 text-sm font-medium">
                  {project.progress}%
                </span>
              </div>
            </td>
            <td className="py-3 px-4">{project.amount}</td>
            <td className="py-3 px-4">{project.type}</td>
            <td className="py-3 px-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : project.status === "Rejected"
                    ? "bg-red-100 text-red-500"
                    : "bg-orange-100 text-orange-500"
                }`}
              >
                {project.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
