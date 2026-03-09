import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-zinc-500">
            Have questions about a property or want to list your own? Our team of experts is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900">Email Us</h3>
                  <p className="text-zinc-500 mt-1">Our team will respond within 24 hours.</p>
                  <a href="mailto:hello@realestate.com" className="text-indigo-600 font-semibold mt-2 block">hello@realestate.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900">Call Us</h3>
                  <p className="text-zinc-500 mt-1">Mon-Fri from 9am to 6pm.</p>
                  <a href="tel:+15550000000" className="text-emerald-600 font-semibold mt-2 block">+1 (555) 000-0000</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-amber-50 rounded-2xl text-amber-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900">Visit Us</h3>
                  <p className="text-zinc-500 mt-1">Come say hi at our office.</p>
                  <p className="text-zinc-900 font-semibold mt-2">Plot 456, Constitution Avenue<br />Central Business District, Abuja</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-12 rounded-[3rem] border border-black/5 shadow-sm">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Send us a Message</h2>
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Message</label>
                  <textarea rows={6} placeholder="How can we help you?" className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" />
                </div>
                <div className="md:col-span-2">
                  <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
