import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

export default function ScanDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("activity");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(65);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-8">
        Scan Detail — ID {id}
      </h2>

      {/* Top Section */}
      <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

          {/* Circular Progress */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r={radius}
                  stroke="gray"
                  strokeWidth="8"
                  fill="transparent"
                  className="opacity-20"
                />
                <circle
                  cx="48"
                  cy="48"
                  r={radius}
                  stroke="#0CC8A8"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progress / 100)}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                {progress}%
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-2">In Progress</p>
          </div>

          {/* Step Tracker */}
          <div className="flex flex-wrap gap-6 text-sm">
            {["Spidering", "Mapping", "Testing", "Validating", "Reporting"].map(
              (step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      index === 0
                        ? "bg-primary border-primary"
                        : "border-gray-500"
                    }`}
                  />
                  <span
                    className={`${
                      index === 0
                        ? "text-primary font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8 text-sm">
          <div>
            <p className="text-gray-500">Scan Type</p>
            <p>Grey Box</p>
          </div>
          <div>
            <p className="text-gray-500">Targets</p>
            <p>google.com</p>
          </div>
          <div>
            <p className="text-gray-500">Started At</p>
            <p>Nov 22, 09:00AM</p>
          </div>
          <div>
            <p className="text-gray-500">Credentials</p>
            <p>2 Active</p>
          </div>
          <div>
            <p className="text-gray-500">Files</p>
            <p>Control.pdf</p>
          </div>
          <div>
            <p className="text-gray-500">Checklists</p>
            <p>40/350</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Live Console */}
        <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold mb-4">Live Scan Console</h3>

          <div className="flex gap-6 mb-4 text-sm">
            <button
              onClick={() => setActiveTab("activity")}
              className={
                activeTab === "activity"
                  ? "text-primary font-semibold"
                  : "text-gray-500"
              }
            >
              Activity Log
            </button>

            <button
              onClick={() => setActiveTab("verification")}
              className={
                activeTab === "verification"
                  ? "text-primary font-semibold"
                  : "text-gray-500"
              }
            >
              Verification Loops
            </button>
          </div>

          <div className="bg-black text-green-400 p-4 rounded-lg text-xs font-mono h-64 overflow-y-auto">
            {activeTab === "activity" ? (
              <>
                [09:00:00] Starting scan... <br />
                [09:01:00] Target online... <br />
                [09:02:00] Performing reconnaissance... <br />
                [09:03:00] Login page discovered... <br />
                [09:04:00] Testing credentials... <br />
                [09:05:00] Vulnerability detected...
              </>
            ) : (
              <>
                Loop 1 — Checking credentials... <br />
                Loop 2 — Validating endpoints... <br />
                Loop 3 — Confirming exploit...
              </>
            )}
          </div>
        </div>

        {/* Finding Log */}
        <div className="bg-gray-100 dark:bg-[#1A1A1A] rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold mb-4">Finding Log</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <span className="text-red-500 text-xs font-semibold">
                Critical
              </span>
              <p className="font-semibold mt-1">
                SQL Injection in Authentication Endpoint
              </p>
              <p className="text-sm text-gray-500 mt-1">
                /api/users/profile
              </p>
            </div>

            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <span className="text-orange-500 text-xs font-semibold">
                High
              </span>
              <p className="font-semibold mt-1">
                Unauthorized Access to User Metadata
              </p>
              <p className="text-sm text-gray-500 mt-1">
                /api/auth/login
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}