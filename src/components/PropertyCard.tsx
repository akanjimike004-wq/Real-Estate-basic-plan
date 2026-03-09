import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { formatPrice } from '../lib/utils';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/properties/${property.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-black/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          {property.type}
        </div>
        <div className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">
          {formatPrice(property.price)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 mt-2 text-zinc-500 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-black/5 text-zinc-600">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4" />
            <span className="text-sm">{property.size_sqft} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
