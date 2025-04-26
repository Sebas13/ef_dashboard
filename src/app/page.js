"use client";
import Image from "next/image";
import PremiumCalculator from "./PremiumCalculator";
import DashboardMenu from "./DashboardMenu";

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('en-US', { month: 'short' });
  const formattedDate = `${year} ${month}`;
  return (
    <div className="min-h-screen bg-[#18181b] text-white flex flex-col rounded-2xl border border-white/20 p-4 sm:p-8 max-w-5xl mx-auto">
      {/* Header */}
      <header className="pt-6 pb-2 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-1">Export finance Dashboard</h1>
        <p className="text-lg sm:text-xl text-white/80">Ultimate set of tools for the EF pro</p>
      </header>

      {/* Main content grid */}
      <main className="flex-1 flex flex-col gap-6 justify-center">
        {/* Dashboard Menu */}
        <div className="mb-2 flex justify-start">
          <DashboardMenu />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* CIRR rates */}
          <div className="rounded-2xl border border-white/20 p-4 flex items-center justify-center min-h-[90px] text-lg font-medium bg-[#232329]">CIRR rates</div>
          {/* Country categories */}
          <div className="rounded-2xl border border-white/20 p-4 flex items-center justify-center min-h-[90px] text-lg font-medium bg-[#232329]">Country categories</div>
          {/* Relevant documentation */}
          <div className="rounded-2xl border border-white/20 p-4 flex flex-col bg-[#232329] min-h-[180px]">
            <div className="flex items-center gap-2 mb-2">
              {/* Folder icon placeholder */}
              <span className="inline-block w-5 h-5 bg-white/20 rounded mr-1 flex items-center justify-center">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/80"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>
              </span>
              <span className="font-medium">Relevant documentation</span>
            </div>
            <ul className="flex-1 flex flex-col gap-1 pl-1">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-white/80" disabled />
                <span>Name of file 1</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-white/80" disabled />
                <span>Name of file 2</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="accent-white/80" disabled />
                <span>Name of file 3</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Premium calculator (spans width) */}
        <PremiumCalculator />
      </main>

      {/* Footer */}
      <footer className="mt-8 py-3 border-t border-white/10 text-center text-white/60 text-sm">
        {`Build 0.0.0. | © ${formattedDate} by Seb Lopez`}
      </footer>
    </div>
  );
}
