import { CheckCircle } from 'lucide-react';

const highlights = [
  'Nestled within 15 lush acres of curated tropical gardens',
  'Family friendly environment with dedicated kids\' zones',
  'Professional concierge and event coordination services',
  'Eco-conscious design with solar and rainwater harvesting',
  'Direct access to scenic walking and cycling trails',
  'Farm to table dining experience on-site',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/poolview.jpeg"
                alt="Luxury resort pool"
                className="rounded-2xl w-full h-56 object-cover shadow-lg"
              />
              <img
                src="/images/gardens.jpeg"
                alt="Tropical garden path"
                className="rounded-2xl w-full h-56 object-cover shadow-lg mt-8"
              />
              <img
                src="/images/gardenview.jpeg"
                alt="Resort gardens"
                className="rounded-2xl w-full h-48 object-cover shadow-lg"
              />
              <img
                src="/images/spa.jpeg"
                alt="Peaceful resort area"
                className="rounded-2xl w-full h-48 object-cover shadow-lg mt-8"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white rounded-2xl p-5 shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-emerald-100 text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
              Where Luxury Meets Nature
            </h2>
            <p className="mt-5 text-stone-600 text-lg leading-relaxed">
              Planet Gardens Resort & Recreation Centre is more than a destination  it's a world unto itself. Spanning over 15 breathtaking acres, our resort seamlessly blends lush botanical gardens with world class amenities, creating a sanctuary that soothes the soul and energises the spirit.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Whether you're seeking a romantic getaway, a family adventure, or a corporate retreat, Planet Gardens delivers an unmatched experience tailored to your every need.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-10 inline-flex items-center px-7 py-3.5 bg-stone-800 hover:bg-stone-700 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Plan Your Stay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
