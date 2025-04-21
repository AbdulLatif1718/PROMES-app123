export const ProjectTable = ({ data = [] }: { data?: any[] }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-black font-semibold">
            <tr>
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
            {data.map((item) => (
              <tr key={item.id} className="even:bg-gray-50">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.contractor}</td>
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-green-600 font-medium">
                    {item.progress}%
                  </span>
                </td>
                <td className="py-3 px-4">{item.amount}</td>
                <td className="py-3 px-4">{item.type}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  