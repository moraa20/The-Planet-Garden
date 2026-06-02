import { Waves, Flower2, Zap, Users, UtensilsCrossed, Bike, Sunset, Tent } from 'lucide-react';

const services = [
  {
    icon: Waves,
    title: 'Swimming Pools',
    description: 'Dive into our Olympic-length main pool or relax in the heated family pool. A dedicated splash zone keeps the little ones entertained.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Flower2,
    title: 'Botanical Spa',
    description: 'Revive your senses with plant-based treatments, deep-tissue massages, and steam therapy in our garden-view spa suites.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Sunset,
    title: 'Lush Gardens',
    description: 'Stroll through 15 acres of manicured tropical gardens, koi ponds, and exotic flora — a living tapestry of colour and calm.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Users,
    title: 'Event Spaces',
    description: 'Host weddings, conferences, or private celebrations in our versatile indoor and outdoor venues with full event coordination.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: UtensilsCrossed,
    title: 'Farm-to-Table Dining',
    description: 'Savour chef-crafted menus using fresh produce from our on-site organic farm. Multiple dining settings from casual to fine dining.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Bike,
    title: 'Adventure Trails',
    description: 'Explore scenic cycling routes, guided nature walks, and a professionally designed obstacle course for the adventure seekers.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Zap,
    title: 'Recreation Centre',
    description: 'Our fully equipped gym, tennis courts, volleyball beach area, and mini-golf course ensure there\'s never a dull moment.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Tent,
    title: 'Kids Zone',
    description: 'Supervised play areas, creative art workshops, and themed adventure camps make Planet Gardens truly family-first.',
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Our Amenities</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
            Everything You Need for the Perfect Escape
          </h2>
          <p className="mt-5 text-stone-500 text-lg leading-relaxed">
            From relaxation to adventure, Planet Gardens offers a complete resort experience under one beautiful canopy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 rounded-2xl border border-stone-100 hover:border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-stone-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready for an Unforgettable Experience?</h3>
            <p className="text-stone-300 mt-2">Reserve your spot today and enjoy exclusive early-bird offers.</p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  );
}
