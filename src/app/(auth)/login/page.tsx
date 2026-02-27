// src/app/(auth)/login/page.tsx

import { loginAction } from "@/server/actions/auth";

interface LoginPageProps {
  searchParams: { error?: string; message?: string };
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <form 
        action={loginAction} 
        className="flex flex-col gap-4 p-8 bg-zinc-900 rounded-xl border border-zinc-800 w-full max-w-sm shadow-2xl"
      >
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Sign in to AXON</h1>
          <p className="text-zinc-500 text-sm mt-1">Enter your credentials to continue</p>
        </div>
        
        {searchParams.error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm">
            {searchParams.error}
          </div>
        )}

        {searchParams.message && (
          <div className="bg-blue-500/10 border border-blue-500/50 text-blue-400 p-3 rounded-lg text-sm">
            {searchParams.message}
          </div>
        )}

        <div className="space-y-2">
          <input 
            name="email" 
            type="email" 
            placeholder="Email address" 
            className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition" 
            required 
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 bg-black border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition" 
            required 
          />
        </div>
        
        <button 
          type="submit" 
          className="bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-all active:scale-[0.98]"
        >
          Sign In
        </button>

        <p className="text-sm text-zinc-500 text-center mt-2">
          Don't have an account? <a href="/register" className="text-white hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}