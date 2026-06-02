import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Amenities', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  'Experiences': [
    { label: 'Swimming & Recreation', href: '#services' },
    { label: 'Spa & Wellness', href: '#services' },
    { label: 'Dining', href: '#services' },
    { label: 'Events & Weddings', href: '#services' },
    { label: 'Nature Trails', href: '#services' },
  ],
  'Support': [
    { label: 'FAQs', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cancellation Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
};

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">Planet Gardens</div>
                <div className="text-emerald-400 text-xs tracking-widest uppercase">Resort & Recreation Centre</div>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premier resort and recreation centre offering luxury stays, family fun, and unforgettable experiences amid 15 acres of tropical beauty.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Off Thika Road, Kiambu County, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+254-700-000-000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>info@planetgardens.com</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(s => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 bg-stone-700 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4 text-stone-300 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-stone-400 hover:text-emerald-400 text-sm transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t border-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-stone-200 font-medium">Ready to experience Planet Gardens?</p>
            <p className="text-stone-400 text-sm">Book your stay today and create memories that last a lifetime.</p>
          </div>
          <button
            onClick={() => handleNavClick('#contact')}
            className="flex-shrink-0 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-stone-500 text-xs">
          <span>&copy; {new Date().getFullYear()} Planet Gardens Resort & Recreation Centre. All rights reserved.</span>
          <span>Designed with care for nature lovers everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
