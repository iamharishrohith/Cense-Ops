'use client';

import { Suspense, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShieldCheck, Mail, Users, HardDrive } from 'lucide-react';

function ConsentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const redirectUri = searchParams.get('redirect_uri') || 'http://localhost:3005/sso-connect';

  const handleAllow = () => {
    setIsRedirecting(true);
    // Simulate secure token generation delay
    setTimeout(() => {
      const authCode = `auth_mnrch_${Math.random().toString(36).substring(2, 10)}`;
      
      if (window.opener && !window.opener.closed) {
        // We are in a popup, send message to parent and close
        window.opener.postMessage({ type: 'oauth_success', code: authCode }, '*');
        window.close();
      } else {
        // Fallback to full page redirect
        window.location.href = `${redirectUri}?code=${authCode}`;
      }
    }, 1500);
  };

  const handleDeny = () => {
    if (window.opener && !window.opener.closed) {
      window.opener.postMessage({ type: 'oauth_error', error: 'access_denied' }, '*');
      window.close();
    } else {
      window.location.href = `${redirectUri}?error=access_denied`;
    }
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-[#002b49] px-8 py-5 flex items-center justify-between">
        <div>
           <h1 className="text-xl font-bold text-white tracking-widest uppercase">
            Monarch<span className="text-[#00d4ff]">SSO</span>
          </h1>
          <p className="text-blue-200 text-xs mt-1">OAuth 2.0 Authorization</p>
        </div>
        <ShieldCheck className="text-[#00d4ff]" size={28} />
      </div>

      <div className="p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Cense-Ops is requesting access
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            The external application <strong>Autonomous SaaS Ecosystem OS (Cense-Ops)</strong> wants to access your Monarchs directory.
          </p>
        </div>

        <div className="bg-gray-50 rounded p-4 mb-6 border border-gray-100">
          <h3 className="font-medium text-sm text-gray-700 mb-3 uppercase tracking-wider">This app will be able to:</h3>
          <ul className="space-y-3">
            <li className="flex items-start text-sm text-gray-600">
              <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
              <span>Read basic user profile information and primary email addresses.</span>
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <Users className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
              <span>View organization directory, department mapping, and roles.</span>
            </li>
            <li className="flex items-start text-sm text-gray-600">
              <HardDrive className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" />
              <span>Access application telemetry and sign-in logs (read-only).</span>
            </li>
          </ul>
        </div>

        <div className="text-xs text-gray-500 mb-6 text-center px-4">
          By clicking Allow, you authorize this application to access your data in accordance with their privacy policy and terms of service.
        </div>

        <div className="flex gap-4">
          <button 
            onClick={handleDeny}
            disabled={isRedirecting}
            className="flex-1 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition"
          >
            Deny Access
          </button>
          
          <button 
            onClick={handleAllow}
            disabled={isRedirecting}
            className="flex-1 py-2.5 bg-[#002b49] text-white font-medium rounded hover:bg-[#001f35] transition flex items-center justify-center gap-2"
          >
            {isRedirecting ? (
              <>
                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authorizing...
              </>
            ) : "Allow Access"}
          </button>
        </div>
      </div>
      
      <div className="bg-gray-50 border-t border-gray-100 px-8 py-3 text-[10px] text-center text-gray-400 font-mono">
        OAUTH_CLIENT_ID: cense_ops_x09a • REDIRECT_URI: {redirectUri}
      </div>
    </div>
  );
}

export default function ConsentPage() {
  return (
    <Suspense fallback={<div className="text-gray-500">Loading OAuth Provider...</div>}>
      <ConsentContent />
    </Suspense>
  );
}
