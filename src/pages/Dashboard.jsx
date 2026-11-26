
import {
  ClipboardList,
  Clock,
  Wrench,
  CircleCheck,
} from "lucide-react";

import StatCard from "../components/layout/StatCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Welcome to FixFlow
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor facility issues and maintenance operations.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Issues"
          value="128"
          description="All reported issues"
          icon={ClipboardList}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Pending"
          value="24"
          description="Awaiting assignment"
          icon={Clock}
          color="bg-amber-100 text-amber-600"
        />

        <StatCard
          title="In Progress"
          value="18"
          description="Currently being repaired"
          icon={Wrench}
          color="bg-purple-100 text-purple-600"
        />

        <StatCard
          title="Resolved"
          value="86"
          description="Successfully completed"
          icon={CircleCheck}
          color="bg-green-100 text-green-600"
        />
      </div>

      {/* Recent Issues */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">
          Recent Issues
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="text-slate-500 border-b">
                <th className="p-3">Issue</th>
                <th className="p-3">Location</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Broken AC", "Block A - Room 204", "High", "Pending"],
                ["Water Leakage", "Block B - Room 101", "Critical", "In Progress"],
                ["Light Failure", "Block C - Floor 2", "Low", "Resolved"],
                ["Lift Malfunction", "Block A - Lift 2", "High", "Pending"],
              ].map((issue, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-3 font-medium">
                    {issue[0]}
                  </td>

                  <td className="p-3 text-slate-500">
                    {issue[1]}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        issue[2] === "Critical"
                          ? "bg-red-100 text-red-700"
                          : issue[2] === "High"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {issue[2]}
                    </span>
                  </td>

                  <td className="p-3">
                    <span className="text-sm">
                      {issue[3]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
