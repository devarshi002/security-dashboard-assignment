import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="relative min-h-screen bg-[#0B0F14] text-white overflow-hidden">

      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#0CC8A8,_transparent_35%),radial-gradient(circle_at_80%_80%,_#FF6B00,_transparent_35%)] opacity-40"></div>

      {/* Top Logo */}
      <div className="absolute top-6 left-8 flex items-center gap-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <span className="font-semibold text-lg">aps</span>
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-8">

        <div className="grid lg:grid-cols-2 gap-20 w-full items-center">

          {/* LEFT SECTION */}
          <div className="space-y-8">

            <h1 className="text-5xl font-bold leading-tight">
              Expert level Cybersecurity
              <br />
              in <span className="text-teal-400">hours</span> not weeks.
            </h1>

            <div>
              <p className="text-gray-400 mb-4">What's included</p>

              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-teal-400">✔</span>
                  Effortlessly spider and map targets to uncover hidden security flaws
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">✔</span>
                  Deliver high-quality, validated findings in hours, not weeks.
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-400">✔</span>
                  Generate professional, enterprise-grade security reports automatically.
                </li>
              </ul>
            </div>

            <div className="pt-6 text-gray-400">
              <div className="flex items-center gap-2 text-teal-400">
                ★ Trustpilot
              </div>
              <p className="mt-2 text-white">
                Rated 4.5/5.0 <span className="text-gray-500">(100k+ reviews)</span>
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl shadow-2xl p-10 text-black max-w-md ml-auto">

            <h2 className="text-2xl font-semibold text-center">Sign up</h2>

            <p className="text-center text-sm text-gray-500 mt-2">
              Already have an account?{" "}
              <Link to="/" className="text-teal-600 hover:underline">
                Log in
              </Link>
            </p>

            <form className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="First name*"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="text"
                placeholder="Last name*"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                placeholder="Email address*"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="password"
                placeholder="Password (8+ characters)*"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1" />
                <span>
                  I agree to Aps’s{" "}
                  <span className="text-teal-600 underline">Terms & Conditions</span>{" "}
                  and acknowledge the{" "}
                  <span className="text-teal-600 underline">Privacy Policy</span>
                </span>
              </div>

              <button
                type="button"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full font-semibold transition"
              >
                Create account
              </button>
            </form>

            {/* Social Buttons */}
            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-black text-white py-2 rounded-full cursor-pointer">
                
              </button>
              <button className="flex-1 bg-gray-100 py-2 rounded-full cursor-pointer">
                G
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-full cursor-pointer">
                ∞
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}