// src/app/dashboard/layout.tsx

import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-800 p-6 hidden md:block shrink-0">
        <div className="font-bold text-2xl mb-8 tracking-tighter text-blue-500">AXON</div>
        <nav className="space-y-1">
          {['Overview', 'Billing', 'Settings', 'API Keys'].map((item) => (
            <div 
              key={item} 
              className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-zinc-800 flex items-center px-8 justify-between">
          <div className="text-sm text-zinc-500 font-medium">Dashboard / Overview</div>
          <div className="w-8 h-8 rounded-full bg-zinc-800" />
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}