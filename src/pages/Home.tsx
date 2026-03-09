import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Building2, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_PROPERTIES } from '../constants';
import { PropertyCard } from '../components/PropertyCard';

export const Home: React.FC = () => {
  const featuredProperties = MOCK_PROPERTIES.slice(0, 3);

  const categories = [
    { name: 'Houses', count: 120, icon: '🏠', type: 'house' },
    { name: 'Apartments', count: 85, icon: '🏢', type: 'apartment' },
    { name: 'Condos', count: 45, icon: '🏙️', type: 'condo' },
    { name: 'Commercial', count: 30, icon: '🏪', type: 'commercial' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Find Your Dream <br />
              <span className="text-indigo-400 italic font-serif">Perfect Home</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-200 max-w-xl">
              Discover the most exclusive properties in the most desirable locations. Your journey to a new home starts here.
            </p>

            <div className="mt-10 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-2xl">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white rounded-xl text-zinc-900">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <input
                    type="text"
                    placeholder="Search Maitama, Asokoro..."
                    className="w-full bg-transparent outline-none text-sm font-medium"
                  />
                </div>
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">Browse by Category</h2>
              <p className="text-zinc-500 mt-2">Find the perfect property type for your needs</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-black/5 hover:border-indigo-200 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900">{cat.name}</h3>
                <p className="text-sm text-zinc-500 mt-1">{cat.count} Properties</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">Featured Properties</h2>
              <p className="text-zinc-500 mt-2">Handpicked exclusive listings just for you</p>
            </div>
            <Link to="/properties" className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                We Help You Find Your <br />
                <span className="text-indigo-400">Dream Property</span> Since 1995
              </h2>
              <p className="mt-6 text-zinc-400 text-lg">
                With over 25 years of experience, we've helped thousands of families find their perfect homes. Our commitment to excellence and integrity sets us apart in the real estate industry.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    <ShieldCheck className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Trusted Agency</h4>
                    <p className="text-sm text-zinc-500 mt-1">Certified and verified listings only.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    <Users className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Expert Agents</h4>
                    <p className="text-sm text-zinc-500 mt-1">Dedicated professionals at your service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/about/800/800"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-3xl hidden md:block">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm text-indigo-200 font-medium">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Have Questions? Get in Touch</h2>
              <p className="text-indigo-100 text-xl max-w-2xl mx-auto mb-10">
                Our team is ready to help you find your next home or answer any questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-bold hover:bg-zinc-100 transition-colors">
                  Contact Us
                </Link>
                <Link to="/properties" className="px-10 py-4 bg-indigo-500 text-white rounded-2xl font-bold hover:bg-indigo-400 transition-colors border border-indigo-400">
                  Browse Properties
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};
