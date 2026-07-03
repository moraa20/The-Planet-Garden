import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', phone: '', subject: '', message: '' };

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Planet Gardens Resort & Recreation Centre', 'Off Thika Road, Kiambu County, Kenya'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+254-700-000-000', '+254-733-000-000'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@planetgardens.com', 'reservations@planetgardens.com'],
  },
  {
    icon: Clock,
    title: 'Hours',
    lines: ['Reception: 24 / 7', 'Restaurant: 6am – 11pm'],
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async submit
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
    setForm(initialForm);
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
            Start Planning Your Visit
          </h2>
          <p className="mt-5 text-stone-500 text-lg leading-relaxed">
            Our team is ready to craft the perfect experience for you. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map(info => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-stone-800 font-semibold mb-1">{info.title}</div>
                    {info.lines.map(line => (
                      <div key={line} className="text-stone-500 text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-stone-200 h-48">
              <img
                src="/images/gardenview.jpeg"
                alt="Resort location map view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-stone-700 font-medium text-sm mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-stone-800 placeholder:text-stone-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-stone-700 font-medium text-sm mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-stone-800 placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-stone-700 font-medium text-sm mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254-XXX-XXX-XXX"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-stone-800 placeholder:text-stone-400"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-stone-700 font-medium text-sm mb-1.5">
                    Enquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-stone-800 bg-white"
                  >
                    <option value="">Select enquiry type</option>
                    <option value="Accommodation">Accommodation</option>
                    <option value="Day Visit">Day Visit</option>
                    <option value="Event Booking">Event Booking</option>
                    <option value="Corporate Retreat">Corporate Retreat</option>
                    <option value="Spa & Wellness">Spa & Wellness</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-stone-700 font-medium text-sm mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your plans — dates, number of guests, special requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all text-stone-800 placeholder:text-stone-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-300 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-3 text-sm font-medium text-center">
                  Message sent! Our team will reach out to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 rounded-xl px-4 py-3 text-sm font-medium text-center">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
