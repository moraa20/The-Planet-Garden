import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Family Vacation Guest',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 5,
    text: 'Planet Gardens exceeded every expectation. The botanical gardens are absolutely stunning, the staff incredibly attentive, and our kids had the time of their lives. We\'ve already booked for next year!',
  },
  {
    name: 'David K.',
    role: 'Corporate Retreat Organiser',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
    text: 'We hosted our annual company retreat here and it was seamless. The event team handled every detail perfectly, the food was exceptional, and the ambience sparked genuine creativity in our team.',
  },
  {
    name: 'Amina J.',
    role: 'Honeymoon Guest',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 5,
    text: 'The most romantic escape imaginable. From the garden-view spa sessions to candlelit dinners on the terrace — every moment felt like a dream. Planet Gardens is pure magic.',
  },
  {
    name: 'James O.',
    role: 'Weekend Escape Guest',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    rating: 5,
    text: 'I come here twice a year to decompress. The pools, the trails, the spa — everything is maintained to the highest standard. It\'s my personal paradise. Worth every shilling.',
  },
  {
    name: 'Grace W.',
    role: 'Birthday Celebration Host',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    rating: 5,
    text: 'Hosted my mother\'s 60th birthday here and it was perfect. The team decorated beyond expectations, the catering was divine, and everyone left with the most beautiful memories.',
  },
  {
    name: 'Tom L.',
    role: 'Solo Traveller',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    rating: 5,
    text: 'Even as a solo traveller I felt completely at home. The trails are incredible, the restaurant staff knew my name by day two, and I left feeling genuinely renewed.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Loved by Every Guest
          </h2>
          <p className="mt-5 text-stone-300 text-lg leading-relaxed">
            Don't just take our word for it,  hear from the families, couples, and adventurers who've made Planet Gardens their home away from home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="bg-stone-700/50 border border-stone-600 rounded-2xl p-6 hover:bg-stone-700 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-emerald-400 mb-4 opacity-60" />
              <p className="text-stone-200 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-stone-600">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-stone-400 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
