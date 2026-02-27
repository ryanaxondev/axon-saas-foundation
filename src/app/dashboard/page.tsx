// src/app/dashboard/page.tsx

import React from 'react';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back 🚀</h1>
        <p className="text-zinc-500 mt-1">Your authentication was successful. Ready to build?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition">
          <h3 className="text-zinc-500 text-xs font-semibold mb-2 uppercase tracking-[0.1em]">Current Plan</h3>
          <p className="text-2xl font-bold tracking-tight">FREE TIER</p>
        </div>
        
        <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition">
          <h3 className="text-zinc-500 text-xs font-semibold mb-2 uppercase tracking-[0.1em]">Usage Limits</h3>
          <p className="text-2xl font-bold tracking-tight">0 / 100 Credits</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;