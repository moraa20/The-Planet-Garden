import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    alt: 'Resort swimming pool surrounded by palms',
    category: 'Pool',
  },
  {
    src: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg',
    alt: 'Tropical botanical gardens pathway',
    category: 'Gardens',
  },
  {
    src: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg',
    alt: 'Luxury resort villa exterior',
    category: 'Accommodation',
  },
  {
    src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    alt: 'Resort infinity pool at dusk',
    category: 'Pool',
  },
  {
    src: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
    alt: 'Outdoor dining terrace with garden views',
    category: 'Dining',
  },
  {
    src: 'https://images.pexels.com/photos/1533946/pexels-photo-1533946.jpeg',
    alt: 'Spa treatment room with natural elements',
    category: 'Spa',
  },
  {
    src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    alt: 'Elegant resort event space',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg',
    alt: 'Aerial view of resort and gardens',
    category: 'Gardens',
  },
  {
    src: 'https://images.pexels.com/photos/2631204/pexels-photo-2631204.jpeg',
    alt: 'Nature trail through the resort',
    category: 'Activities',
  },
];

const categories = ['All', 'Pool', 'Gardens', 'Spa', 'Dining', 'Events', 'Accommodation', 'Activities'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? images : images.filter(img => img.category === active);

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
            A Glimpse of Paradise
          </h2>
          <p className="mt-5 text-stone-500 text-lg leading-relaxed">
            Every corner of Planet Gardens tells a story. Let our gallery transport you.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-emerald-50 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="absolute bottom-3 left-3 bg-white/90 text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery view"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
