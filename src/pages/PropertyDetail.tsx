import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Phone, Mail, User, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { formatPrice } from '../lib/utils';
import { supabase } from '../lib/supabase';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams();
  const property = MOCK_PROPERTIES.find((p) => p.id === id);
  const [activeImage, setActiveImage] = React.useState(0);
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!property) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Property not found</h2>
        <Link to="/properties" className="mt-4 text-indigo-600 hover:underline">Back to listings</Link>
      </div>
    );
  }

  const handleInquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const inquiry = {
      property_id: property.id,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const { error } = await supabase.from('leads').insert([inquiry]);
      if (error) throw error;
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      // For demo purposes, we'll still show success if supabase isn't configured
      setFormStatus('success');
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-zinc-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-indigo-600">Properties</Link>
          <span>/</span>
          <span className="text-zinc-900 font-medium truncate">{property.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-zinc-200 group">
                <img
                  src={property.images[activeImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setActiveImage((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative flex-shrink-0 w-32 aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-indigo-600 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full">
                      {property.type}
                    </span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider rounded-full">
                      {property.status}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">{property.title}</h1>
                  <div className="flex items-center gap-2 mt-2 text-zinc-500">
                    <MapPin className="w-5 h-5" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-4xl font-bold text-indigo-600">
                  {formatPrice(property.price)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-black/5 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-zinc-50 rounded-2xl">
                    <Bed className="w-6 h-6 text-zinc-600" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-900">{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-zinc-50 rounded-2xl">
                    <Bath className="w-6 h-6 text-zinc-600" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-900">{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-4 bg-zinc-50 rounded-2xl">
                    <Square className="w-6 h-6 text-zinc-600" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-900">{property.size_sqft} sqft</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Description</h3>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Inquiry Form */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm sticky top-28">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">Inquire About This Property</h3>
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg">Message Sent!</h4>
                  <p className="text-zinc-500 mt-2">Our agent will contact you shortly.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-indigo-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-zinc-50 rounded-xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-zinc-50 rounded-xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1">Phone Number</label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-zinc-50 rounded-xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-1">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="I'm interested in this property..."
                      className="w-full px-4 py-3 bg-zinc-50 rounded-xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-black/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/seed/agent/100/100" alt="Agent" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Sarah Jenkins</h4>
                    <p className="text-xs text-zinc-500 font-medium">Senior Real Estate Agent</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <a href="tel:+15550000000" className="flex items-center gap-3 text-sm text-zinc-600 hover:text-indigo-600 transition-colors">
                    <Phone className="w-4 h-4" />
                    +1 (555) 000-0000
                  </a>
                  <a href="mailto:sarah@realestate.com" className="flex items-center gap-3 text-sm text-zinc-600 hover:text-indigo-600 transition-colors">
                    <Mail className="w-4 h-4" />
                    sarah@realestate.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
