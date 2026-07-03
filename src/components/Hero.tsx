import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/poolview.jpeg"
          alt="Planet Gardens Resort aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white/90 text-sm font-medium">Premier Luxury Resort</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          Escape to{' '}
          <span className="text-emerald-400 block sm:inline">Planet Gardens</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Luxury resort and recreation centre for families and adventurers where nature meets comfort.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Book Now
          </button>
          <button
            onClick={() => handleScroll('#services')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg rounded-full transition-all duration-200 w-full sm:w-auto"
          >
            Explore Amenities
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '15+', label: 'Acres of Gardens' },
            { value: '200+', label: 'Happy Guests / Week' },
            { value: '10+', label: 'World-class Amenities' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-stone-300 text-xs mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
