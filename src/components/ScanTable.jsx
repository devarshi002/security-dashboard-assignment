import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scans } from "../data/scans";

export default function ScanTable() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredScans = scans.filter((scan) =>
    scan.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-2xl p-6 border border-gray-200 dark:border-gray-800">

      {/* Responsive Toolbar */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search scans by name or type..."
          className="px-4 py-2 w-full sm:w-80 rounded-lg bg-white dark:bg-[#0F0F0F] border border-gray-300 dark:border-gray-700 outline-none"
        />

        <button className="bg-primary text-black px-4 py-2 rounded-lg font-semibold w-full sm:w-auto">
          + New Scan
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead className="text-sm text-gray-500">
            <tr>
              <th className="pb-4">Scan Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Vulnerabilities</th>
              <th>Last Scan</th>
            </tr>
          </thead>

          <tbody>
            {filteredScans.map((scan) => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="cursor-pointer border-t border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-[#222] transition duration-200"
              >
                <td className="py-4">{scan.name}</td>
                <td>{scan.type}</td>

                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      scan.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {scan.status}
                  </span>
                </td>

                <td>
                  <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${scan.progress}%` }}
                    ></div>
                  </div>
                </td>

                <td className="flex gap-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {scan.vulnerabilities.critical}
                  </span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {scan.vulnerabilities.high}
                  </span>
                  <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded">
                    {scan.vulnerabilities.medium}
                  </span>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    {scan.vulnerabilities.low}
                  </span>
                </td>

                <td>{scan.lastScan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}