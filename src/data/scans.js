export const scans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    lastScan: "4d ago",
    vulnerabilities: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 18,
    },
  },
  {
    id: 2,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    lastScan: "3d ago",
    vulnerabilities: {
      critical: 2,
      high: 4,
      medium: 8,
      low: 1,
    },
  },
];