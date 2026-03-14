'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const redirectUri = searchParams.get('redirect_uri');
  const clientId = searchParams.get('client_id');
  const state = searchParams.get('state');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay for realistic enterprise login feeling
    setTimeout(() => {
      if (redirectUri && clientId) {
        // OAuth flow - redirect to consent page
        const params = new URLSearchParams();
        params.set('redirect_uri', redirectUri);
        params.set('client_id', clientId);
        if (state) params.set('state', state);
        
        router.push(`/consent?${params.toString()}`);
      } else {
        // Normal login - go to dashboard
        router.push('/dashboard');
      }
    }, 1200);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-[#002b49] px-8 py-6 text-center"> {/* Okta-ish blue header */}
        <h1 className="text-2xl font-bold text-white tracking-widest uppercase">
          Monarch<span className="text-[#00d4ff]">SSO</span>
        </h1>
        <p className="text-blue-200 text-sm mt-1">Enterprise Identity Management</p>
      </div>
      
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">Sign In</h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@monarchs.io"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002b49] focus:border-transparent outline-none transition text-gray-900"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002b49] focus:border-transparent outline-none transition text-gray-900"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#002b49] hover:bg-[#001f35] text-white font-medium py-2.5 rounded transition flex justify-center items-center mt-2 disabled:opacity-70"
          >
            {isLoading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <a href="#" className="hover:underline hover:text-[#002b49]">Need help signing in?</a>
        </div>
      </div>
      
      <div className="bg-gray-50 border-t border-gray-100 px-8 py-4 text-xs text-center text-gray-400">
        Powered by Monarch Secure Authentication<br/>
        © 2026 Monarchs IT Software Company. All rights reserved.
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-gray-500">Loading Login...</div>}>
      <LoginForm />
    </Suspense>
  );
}
