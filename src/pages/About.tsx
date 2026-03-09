import React from 'react';
import { ShieldCheck, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const stats = [
    { label: 'Properties Sold', value: '10K+' },
    { label: 'Happy Clients', value: '8K+' },
    { label: 'Expert Agents', value: '150+' },
    { label: 'Years Experience', value: '25+' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-tight">
                Redefining the <br />
                <span className="text-indigo-600">Real Estate</span> Experience
              </h1>
              <p className="mt-8 text-xl text-zinc-500 leading-relaxed">
                We believe that finding a home should be an exciting and seamless journey. Our platform combines cutting-edge technology with human expertise to deliver unparalleled results.
              </p>
              <div className="mt-10 flex gap-4">
                <Link to="/properties" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all">
                  Explore Properties
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white text-zinc-900 border border-black/5 rounded-2xl font-bold hover:bg-zinc-50 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img src="https://picsum.photos/seed/about-hero/800/1000" alt="Modern Office" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-xl border border-black/5 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900">#1 Agency</div>
                    <div className="text-sm text-zinc-500">In Abuja, Nigeria</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-zinc-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-zinc-500">
              Everything we do is guided by our commitment to excellence and our passion for helping people find their perfect place.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity First', icon: ShieldCheck, desc: 'We operate with absolute transparency and honesty in every transaction.' },
              { title: 'Client Centric', icon: Users, desc: 'Your needs and dreams are at the heart of everything we do.' },
              { title: 'Global Reach', icon: Globe, desc: 'Access to exclusive properties across the most desirable locations worldwide.' },
            ].map((value) => (
              <div key={value.title} className="p-10 bg-zinc-50 rounded-[2.5rem] border border-black/5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-8">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{value.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
