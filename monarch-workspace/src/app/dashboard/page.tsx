'use client';

import { useState, useEffect } from 'react';
import { Users, Plus, Save, Building2, MonitorSmartphone, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

type MockUser = {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  lastActive: string;
};

export default function MonarchDashboard() {
  const [users, setUsers] = useState<MockUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newDept, setNewDept] = useState('Engineering');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/mock-idp/users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error("Failed to fetch Monarch users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:3001/api/mock-idp/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName,
          email: newEmail,
          department: newDept,
          role: newRole,
          lastActive: 'Just now'
        })
      });
      
      if (res.ok) {
        await fetchUsers();
        setShowForm(false);
        setNewName('');
        setNewEmail('');
        setNewRole('');
        setSuccessMsg('Employee Added Successfully to Live Directory!');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (error) {
      console.error("Error adding user", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#111827] font-sans">
      {/* Monarch Header */}
      <header className="bg-white border-b border-gray-200 px-4 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between sticky top-0 z-50 gap-4 sm:gap-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded bg-[#002b49] flex items-center justify-center text-white font-bold text-xl shadow-inner shrink-0">
            M
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#002b49]">Monarch<span className="text-[#00d4ff]">SSO</span></h1>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest break-words">Administrator Console</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-xs sm:text-sm font-medium text-gray-600 flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-gray-100 rounded-full">
                <Shield size={14} className="text-green-600 shrink-0" /> <span className="hidden sm:inline">Protected by </span>Zero Trust
            </div>
            <div className="w-9 h-9 rounded-full bg-[#002b49] border-2 border-white shadow flex items-center justify-center text-white font-bold text-sm shrink-0">
              AD
            </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="w-full p-4 md:p-8 lg:px-12 space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4 md:mb-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Enterprise Dashboard</h2>
                <p className="text-gray-500 mt-1 text-sm">Manage organization identities, security policies, and application integrations.</p>
            </div>
            <button 
                onClick={() => setShowForm(!showForm)}
                className="bg-[#002b49] hover:bg-[#001f35] text-white px-5 py-2.5 rounded shadow-sm transition-colors flex items-center justify-center gap-2 text-sm font-medium w-full md:w-auto shrink-0"
            >
                {showForm ? 'Cancel Provisioning' : <><Plus size={16} /> Provision User</>}
            </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 md:p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Active Identities</div>
                <div className="text-2xl md:text-3xl font-bold text-[#002b49]">{users.length || 24}</div>
                <div className="text-green-600 text-xs mt-2 flex items-center gap-1"><ArrowRight size={12} className="-rotate-45" /> +12% this month</div>
            </div>
            <div className="bg-white p-4 md:p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs font-semibold uppercase mb-1 truncate">Connected Apps (OIDC/SAML)</div>
                <div className="text-2xl md:text-3xl font-bold text-[#002b49]">14</div>
                <div className="text-gray-400 text-xs mt-2">Including Cense-Ops</div>
            </div>
            <div className="bg-white p-4 md:p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs font-semibold uppercase mb-1">Failed Logins</div>
                <div className="text-2xl md:text-3xl font-bold text-red-600">3</div>
                <div className="text-red-600 text-xs mt-2 flex items-center gap-1">Requires admin review</div>
            </div>
            <div className="bg-white p-4 md:p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs font-semibold uppercase mb-1 truncate">Directory Sync Status</div>
                <div className="text-base md:text-lg font-bold text-green-600 flex items-center gap-2 mt-2"><CheckCircle2 size={18} /> Healthy</div>
                <div className="text-gray-400 text-xs mt-2">Last sync: 2 mins ago</div>
            </div>
        </div>

        {successMsg && (
            <div className="bg-green-50 border-l-4 border-green-500 text-green-800 px-4 py-3 shadow-sm flex items-center gap-3 animate-in fade-in slide-in-from-top-2 mb-6">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="font-medium text-sm">{successMsg}</span>
                <span className="ml-auto text-xs text-green-600 flex items-center gap-1 font-semibold">
                    Directory Updated <ArrowRight size={14} />
                </span>
            </div>
        )}

        {/* Add User Form */}
        {showForm && (
            <div className="bg-white border text-sm border-gray-200 p-4 md:p-6 shadow-sm mb-6 border-l-4 border-l-[#002b49]">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users size={16} className="text-[#002b49]" /> Provision New Employee Identity
                </h3>
                <form onSubmit={handleAddUser} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-700 uppercase">First & Last Name</label>
                        <input type="text" required value={newName} onChange={e => setNewName(e.target.value)} className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-[#002b49] focus:border-[#002b49] outline-none" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-700 uppercase">Primary Email</label>
                        <input type="email" required value={newEmail} onChange={e => setNewEmail(e.target.value)} className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-[#002b49] focus:border-[#002b49] outline-none" placeholder="jane@monarchs.io" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-700 uppercase">Organization Unit</label>
                        <select value={newDept} onChange={e => setNewDept(e.target.value)} className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-[#002b49] focus:border-[#002b49] outline-none bg-white">
                            <option>Engineering (OU=Eng)</option>
                            <option>Product (OU=Prod)</option>
                            <option>Sales (OU=Sales)</option>
                            <option>Marketing (OU=Mktg)</option>
                            <option>Human Resources (OU=HR)</option>
                        </select>
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-semibold text-gray-700 uppercase">Job Title / Role</label>
                        <input type="text" required value={newRole} onChange={e => setNewRole(e.target.value)} className="w-full border border-gray-300 px-3 py-2 text-gray-900 focus:ring-1 focus:ring-[#002b49] focus:border-[#002b49] outline-none" placeholder="e.g. Senior Frontend Engineer" />
                    </div>
                    
                    <div className="pt-6 flex justify-end">
                        <button type="submit" disabled={isSubmitting} className="bg-[#002b49] hover:bg-[#001f35] text-white px-6 py-2 shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50 w-full text-sm font-medium">
                            {isSubmitting ? 'Provisioning...' : <><Save size={16} /> Save Identity</>}
                        </button>
                    </div>
                </form>
            </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Col: Users Table */}
            <div className="xl:col-span-2 bg-white border border-gray-200 shadow-sm overflow-hidden min-w-0">
                <div className="px-5 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Directory Users</span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded uppercase flex items-center gap-1">
                        <MonitorSmartphone size={12} /> Live Sync
                    </span>
                </div>
                
                {loading ? (
                    <div className="p-12 flex justify-center text-gray-400 text-sm">Loading directory...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white border-b border-gray-200">
                                <tr>
                                    <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase">Employee</th>
                                    <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase">Role & Dept</th>
                                    <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3">
                                            <div className="font-semibold text-gray-900">{user.name}</div>
                                            <div className="text-gray-400 text-xs">{user.email}</div>
                                        </td>
                                        <td className="px-5 py-3">
                                            <div className="text-gray-800 text-sm">{user.role}</div>
                                            <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><Building2 size={10} /> {user.department}</div>
                                        </td>
                                        <td className="px-5 py-3">
                                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Active
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-5 py-8 text-center text-gray-400 text-sm">
                                            No active identities.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Right Col: Admin Logs & Apps */}
            <div className="space-y-6 min-w-0">
                <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-5 py-3 border-b border-gray-200 bg-gray-50">
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">System Log (Live)</span>
                    </div>
                    <div className="p-0 text-sm font-mono text-gray-600 bg-gray-900 h-64 overflow-y-auto">
                        <div className="p-3 border-b border-gray-800 flex flex-col gap-1">
                            <span className="text-xs text-gray-500">Just now</span>
                            <span className="text-green-400">SUCCESS: OIDC Token Minted</span>
                            <span className="text-gray-400 text-xs">Client: Autonomous SaaS OS (Cense-Ops)</span>
                        </div>
                        <div className="p-3 border-b border-gray-800 flex flex-col gap-1">
                            <span className="text-xs text-gray-500">2 mins ago</span>
                            <span className="text-blue-400">INFO: User Directory Sync</span>
                            <span className="text-gray-400 text-xs">Target: Internal LDAP</span>
                        </div>
                        <div className="p-3 border-b border-gray-800 flex flex-col gap-1">
                            <span className="text-xs text-gray-500">14 mins ago</span>
                            <span className="text-red-400">WARN: Failed Login Attempt</span>
                            <span className="text-gray-400 text-xs">User: admin@monarchs.io | IP: 192.168.1.4</span>
                        </div>
                        <div className="p-3 border-b border-gray-800 flex flex-col gap-1">
                            <span className="text-xs text-gray-500">1 hr ago</span>
                            <span className="text-green-400">SUCCESS: SAML Assertion</span>
                            <span className="text-gray-400 text-xs">Client: Salesforce Prod</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-5 py-3 border-b border-gray-200 bg-gray-50">
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Active Integrations</span>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#0055ff] rounded flex items-center justify-center text-white font-bold text-xs">CO</div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">Cense-Ops OS</div>
                                    <div className="text-xs text-gray-500">OAUTH 2.0 / SCIM</div>
                                </div>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">SF</div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">Salesforce</div>
                                    <div className="text-xs text-gray-500">SAML 2.0</div>
                                </div>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        </div>
                        <div className="flex items-center justify-between opacity-50">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">O365</div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">Microsoft 365</div>
                                    <div className="text-xs text-gray-500">WS-Fed</div>
                                </div>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}
