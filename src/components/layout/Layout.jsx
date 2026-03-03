import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0F0F0F] text-black dark:text-white transition-colors duration-300 ">
      <Sidebar />
      <main className="flex-1 p-8 transition-all duration-300">
        <Header />
        <div className="animate-fadeIn">{children}</div>
      </main>
    </div>
  );
}


