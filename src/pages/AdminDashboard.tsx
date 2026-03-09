import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Building2, Users, MessageSquare, Settings, LogOut, Plus, TrendingUp, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { MOCK_PROPERTIES } from '../constants';
import { formatPrice } from '../lib/utils';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState<'overview' | 'properties' | 'leads' | 'agents' | 'settings'>('overview');
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      // For demo purposes, we don't redirect if not logged in
      // if (!user) navigate('/admin/login');
    };
    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const stats = [
    { name: 'Total Properties', value: '24', icon: Building2, trend: '+12%', color: 'bg-indigo-500' },
    { name: 'Total Leads', value: '156', icon: MessageSquare, trend: '+25%', color: 'bg-emerald-500' },
    { name: 'Active Agents', value: '8', icon: Users, trend: '0%', color: 'bg-amber-500' },
    { name: 'Revenue', value: '₦1.2B', icon: TrendingUp, trend: '+18%', color: 'bg-violet-500' },
  ];

  const recentLeads = [
    { id: '1', name: 'Chidi Okafor', property: 'Luxury Villa in Maitama', date: '2 hours ago', email: 'chidi@example.com' },
    { id: '2', name: 'Amina Bello', property: 'Modern Apartment in Asokoro', date: '5 hours ago', email: 'amina@example.com' },
    { id: '3', name: 'Oluwaseun Adeyemi', property: 'Family Home in Gwarinpa', date: '1 day ago', email: 'seun@example.com' },
  ];

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'properties', name: 'Properties', icon: Building2 },
    { id: 'leads', name: 'Leads', icon: MessageSquare },
    { id: 'agents', name: 'Agents', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-black/5 flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-zinc-900 tracking-tight">AdminPanel</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-black/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 capitalize">{activeTab}</h1>
            <p className="text-zinc-500 mt-1">Welcome back, Admin</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            <Plus className="w-5 h-5" />
            Add New Property
          </button>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.name} className="bg-white p-6 rounded-[2rem] border border-black/5 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 ${stat.color} rounded-2xl text-white`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" />
                      {stat.trend}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium">{stat.name}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Recent Leads */}
              <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-black/5 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-zinc-900">Recent Leads</h3>
                  <button className="text-indigo-600 text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="divide-y divide-black/5">
                  {recentLeads.map((lead) => (
                    <div key={lead.id} className="p-6 hover:bg-zinc-50 transition-colors flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-zinc-900">{lead.name}</div>
                          <div className="text-xs text-zinc-500">{lead.property}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-zinc-900 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {lead.date}
                        </div>
                        <div className="text-xs text-zinc-400">{lead.email}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Properties */}
              <div className="bg-white rounded-[2.5rem] border border-black/5 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-black/5 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-zinc-900">Latest Properties</h3>
                  <button className="text-indigo-600 text-sm font-bold hover:underline">Manage</button>
                </div>
                <div className="p-6 space-y-4">
                  {MOCK_PROPERTIES.map((prop) => (
                    <div key={prop.id} className="flex items-center gap-4 p-4 rounded-2xl border border-black/5 hover:border-indigo-200 transition-all">
                      <img src={prop.images[0]} alt="" className="w-16 h-16 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="font-bold text-zinc-900 line-clamp-1">{prop.title}</div>
                        <div className="text-xs text-zinc-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {prop.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-indigo-600">{formatPrice(prop.price)}</div>
                        <div className="text-[10px] uppercase font-bold text-zinc-400">{prop.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'overview' && (
          <div className="bg-white p-24 rounded-[3rem] border border-dashed border-zinc-300 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-bold text-zinc-900">Module Under Construction</h3>
            <p className="text-zinc-500 mt-2">The {activeTab} management module is being implemented.</p>
          </div>
        )}
      </main>
    </div>
  );
};
