// src/app/(auth)/register/page.tsx

import { signUp } from "@/server/actions/user.actions";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <form 
        action={signUp} 
        className="flex flex-col gap-4 p-8 bg-zinc-900 rounded-xl border border-zinc-800 w-full max-w-sm shadow-2xl"
      >
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-zinc-500 text-sm mt-1">Join AXON SaaS foundation today</p>
        </div>
        
        <div className="space-y-2">
          <input 
            name="email" 
            type="email" 
            placeholder="Email address" 
            className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition text-white" 
            required 
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Create password" 
            className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition text-white" 
            required 
          />
        </div>
        
        <button 
          type="submit" 
          className="bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-all active:scale-[0.98]"
        >
          Get Started
        </button>

        <p className="text-sm text-zinc-500 text-center mt-4">
          Already have an account? <a href="/login" className="text-white hover:underline">Sign in</a>
        </p>
      </form>
    </div>
  );
}