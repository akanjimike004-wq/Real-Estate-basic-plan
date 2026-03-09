import React from 'react';
import { Search, SlidersHorizontal, MapPin, X } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { PropertyCard } from '../components/PropertyCard';
import { Property } from '../types';

export const PropertyListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedType, setSelectedType] = React.useState<string>('all');
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 2000000]);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const filteredProperties = MOCK_PROPERTIES.filter((prop) => {
    const matchesSearch = prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prop.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || prop.type === selectedType;
    const matchesPrice = prop.price >= priceRange[0] && prop.price <= priceRange[1];
    return matchesSearch && matchesType && matchesPrice;
  });

  const propertyTypes = ['all', 'house', 'apartment', 'condo', 'commercial'];

  return (
    <div className="pt-24 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">Explore Properties</h1>
            <p className="text-zinc-500 mt-2">Discover {filteredProperties.length} properties matching your criteria</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search location or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-black/5 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="p-3 bg-white rounded-2xl border border-black/5 hover:bg-zinc-50 transition-colors"
            >
              <SlidersHorizontal className="w-6 h-6 text-zinc-600" />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {isFilterOpen && (
          <div className="bg-white p-8 rounded-3xl border border-black/5 mb-12 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-zinc-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-3">Property Type</label>
                <div className="flex flex-wrap gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                        selectedType === type
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-3">Price Range</label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="2000000"
                    step="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-sm font-medium text-zinc-600">
                    <span>$0</span>
                    <span>Up to ${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-zinc-300">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-zinc-900">No properties found</h3>
            <p className="text-zinc-500 mt-2">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setPriceRange([0, 2000000]);
              }}
              className="mt-6 text-indigo-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
