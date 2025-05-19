import React from "react";

interface Item {
  activity: string;
  time: string;
  date: string;
  id: string;
  action: string;
  status: string;
}

interface Props {
  data: Item[];
}

export const RecentActitvityTable: React.FC<Props> = ({ data }) => {
  return (
    <table className="w-full text-left">
      <thead className="bg-gray-100 text-sm">
        <tr>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Time</th>
          <th className="py-2 px-4">Activity</th>
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-700">
        {data.map((item, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{item.date}</td>
            <td className="py-2 px-4">{item.time}</td>
            <td className="py-2 px-4">{item.activity}</td>
            <td className="py-2 px-4">{item.id}</td>
            <td className="py-2 px-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Success"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {item.status}
              </span>
            </td>
            <td className="py-2 px-4">
              <a href="#" className="text-blue-600 underline">
                {`View ${item.action}`}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
