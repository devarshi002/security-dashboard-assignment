import Layout from "../components/layout/Layout";
import SeverityCard from "../components/ui/SeverityCard";
import ScanTable from "../components/ScanTable";

export default function Dashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <SeverityCard title="Critical" count="86" color="text-red-500" />
        <SeverityCard title="High" count="16" color="text-orange-500" />
        <SeverityCard title="Medium" count="26" color="text-yellow-500" />
        <SeverityCard title="Low" count="16" color="text-green-500" />
      </div>

      <ScanTable />
    </Layout>
  );
}

