export default function SeverityCard({ title, count, color }) {
  return (
    <div className="p-6 rounded-xl bg-gray-100 dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className={`text-sm font-medium ${color}`}>{title}</p>
      <p className="text-3xl font-bold mt-2">{count}</p>
      <p className="text-xs text-gray-500 mt-1">
        +0.9% increase than yesterday
      </p>
    </div>
  );
}