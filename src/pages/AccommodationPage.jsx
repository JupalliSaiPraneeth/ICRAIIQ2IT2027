import React, { useState } from 'react';
import {
  Hotel,
  MapPin,
  Star,
  ExternalLink,
  Sparkles,
  Info,
  Building2,
  Tag,
  CheckCircle2,
} from 'lucide-react';

/*
  AccommodationPage.jsx — Professional Small-Size Grid Design
  -------------------------------------------------------------
  - Sleek, compact hotel grid layout (3-col desktop / 2-col tablet / 1-col mobile)
  - Balanced card height with clean image headers & rating overlays
  - Professional typography, subtle micro-animations & consistent brand colors (#e47c14 / #F97316)
  - High scannability across 15 featured hotels & 8 budget hotels
  - Robust image error fallbacks & direct booking link integration
*/

const featuredHotels = [
  {
    name: 'Novotel Vijayawada Varun',
    description:
      'Luxury 5-star hotel with rooftop pool, spa, and fine-dining restaurants.',
    rating: '4.5',
    reviews: '2,317 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/Novotel.webp',
    imageAlt: 'Novotel Vijayawada Varun',
    bookingUrl:
      'https://novotel.accor.com/gb/city/hotels-vijayawada-v5676.shtml',
    tag: '5-Star Luxury',
  },
  {
    name: 'Lemon Tree Premier',
    description:
      'Elegant rooms, fitness centre, and outdoor pool. Centrally located.',
    rating: '4.4',
    reviews: '1,876 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/lemon.webp',
    imageAlt: 'Lemon Tree Premier',
    bookingUrl:
      'https://www.lemontreehotels.com/lemon-tree-premier/vijayawada/hotel-vijayawada',
    tag: 'Premier Business',
  },
  {
    name: 'Fortune Murali Park',
    description:
      'Popular business hotel with conference halls and multi-cuisine restaurant.',
    rating: '4.3',
    reviews: '1,120 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/murali.webp',
    imageAlt: 'Fortune Murali Park',
    bookingUrl:
      'https://www.fortunehotels.in/vijayawada-fortune-murali-park.dh.14',
    tag: 'Business Hotel',
  },
  {
    name: 'Minerva Grand',
    description:
      'Upscale hotel in city centre with stylish rooms, multi-cuisine dining & banquet facilities.',
    rating: '4.2',
    reviews: '1,420 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/minverva.webp',
    imageAlt: 'Minerva Grand',
    bookingUrl: 'https://minervahotels.in/',
    tag: 'Upscale City Hub',
  },
  {
    name: 'Quality Hotel DV Manor',
    description:
      'Excellent mid-range hotel with great dining options and central location.',
    rating: '4.2',
    reviews: '925 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/dv.webp',
    imageAlt: 'Quality Hotel DV Manor',
    bookingUrl: 'http://www.hoteldvmanor.com/',
    tag: 'Mid-Range Classic',
  },
  {
    name: 'Hotel Manorama',
    description:
      'Comfortable 3-star stay near railway station with easy access to MG Road & Durga Temple.',
    rating: '4.1',
    reviews: '1,230 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/manorama.webp',
    imageAlt: 'Hotel Manorama',
    bookingUrl: 'https://www.hotelmanorama.com/',
    tag: '3-Star Station Hub',
  },
  {
    name: 'Swarna Palace',
    description:
      'Modern 3-star hotel in heart of Vijayawada with banquet halls and in-house restaurant.',
    rating: '4.1',
    reviews: '1,150 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/swarna.webp',
    imageAlt: 'Swarna Palace',
    bookingUrl: 'https://www.hotelswarnapalace.com/',
    tag: 'Heart of City',
  },
  {
    name: 'Vivanta Vijayawada',
    description:
      'Modern 5-star hotel on MG Road featuring rooftop restaurant and fitness centre.',
    rating: '4.3',
    reviews: '1,560 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/vivanta.webp',
    imageAlt: 'Vivanta Vijayawada',
    bookingUrl:
      'https://www.tajhotels.com/en-in/gateway/mg-road-vijayawada/',
    tag: '5-Star MG Road',
  },
  {
    name: 'Hotel Ilapuram',
    description:
      'Boutique 3-star hotel blending heritage with contemporary elegance and veg dining.',
    rating: '3.9',
    reviews: '950 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/ilapuram.webp',
    imageAlt: 'Hotel Ilapuram',
    bookingUrl:
      'https://www.goibibo.com/hotels/ilapuram-hotel-in-vijayawada-5715766181567320738',
    tag: 'Boutique Heritage',
  },
  {
    name: 'Hotel Sannidhi (Boutique)',
    description:
      'Clean boutique rooms in Gandhi Nagar with banquet hall, AC, Wi-Fi & free breakfast.',
    rating: '3.8',
    reviews: '114 MMT / 531 Justdial',
    image: 'https://nriit.edu.in/icraiq2it-2026/sannidhi.webp',
    imageAlt: 'Hotel Sannidhi',
    bookingUrl: 'https://www.hotelsannidhi.com/',
    tag: 'Gandhi Nagar',
  },
  {
    name: 'Capital Luxury Suites',
    description:
      'Stylish hotel near Benz Circle with LED TVs, work desks, Wi-Fi and conference spaces.',
    rating: '4.2',
    reviews: '310 MMT ratings',
    image: 'https://nriit.edu.in/icraiq2it-2026/luxury.webp',
    imageAlt: 'Hotel Capital Luxury Suites',
    bookingUrl:
      'https://www.booking.com/hotel/in/capital-luxury-suites.html',
    tag: 'Near Benz Circle',
  },
  {
    name: 'Treebo C Plaza',
    description:
      'Budget-friendly AC rooms with free Wi-Fi, veg breakfast & prime Bandar Road location.',
    rating: '4.2',
    reviews: '31 Goibibo ratings',
    image: 'https://nriit.edu.in/icraiq2it-2026/tree.webp',
    imageAlt: 'Treebo C Plaza',
    bookingUrl:
      'https://www.treebo.com/hotels-in-vijayawada/treebo-c-plaza-mg-road-bandar-road-503/',
    tag: 'Bandar Road',
  },
  {
    name: 'Hotel Pride Madhava',
    description:
      'Smart business boutique hotel near Eluru Road with smart TVs, minibar & banquet halls.',
    rating: '4.0',
    reviews: '1,600+ reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/madhava.webp',
    imageAlt: 'Hotel Pride Madhava',
    bookingUrl:
      'https://www.makemytrip.com/hotels/hotel_pride_madhava-details-vijaywada.html',
    tag: 'Eluru Road',
  },
  {
    name: 'Hotel Centre Side',
    description:
      '3-star boutique hotel near Eluru Road with modern rooms, dining & boardroom facilities.',
    rating: '4.3',
    reviews: '1,870+ Google reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/centre.webp',
    imageAlt: 'Hotel Centre Side',
    bookingUrl:
      'https://www.makemytrip.com/hotels/hotel_centre_side-details-vijaywada.html',
    tag: 'Business Boutique',
  },
  {
    name: 'Hotel Aira',
    description:
      'Contemporary 3-star hotel near Benz Circle with stylish rooms, Wi-Fi & daily breakfast.',
    rating: '4.2',
    reviews: '1,040 reviews',
    image: 'https://nriit.edu.in/icraiq2it-2026/aira.webp',
    imageAlt: 'Hotel Aira',
    bookingUrl: 'https://www.airahotel.com/',
    tag: 'Contemporary 3-Star',
  },
];

const budgetHotels = [
  {
    name: 'Hotel Ilapuram',
    rating: '4.2',
    location: 'Governorpet',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=280&fit=crop',
    amenities: ['Free WiFi', 'AC', 'Breakfast'],
    bookingUrl: 'https://ilapuram.com/',
  },
  {
    name: 'Hotel Sree Vasudev',
    rating: '4.0',
    location: 'Bunder Road',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=280&fit=crop',
    amenities: ['Free WiFi', 'Parking', 'Room Service'],
    bookingUrl: 'https://hotelsreevasudev.com/',
  },
  {
    name: 'Hotel Sun Square',
    rating: '3.9',
    location: 'MG Road',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=280&fit=crop',
    amenities: ['AC Rooms', 'WiFi', '24h Desk'],
    bookingUrl:
      'https://www.makemytrip.com/hotels/hotel_sun_square-details-vijaywada.html',
  },
  {
    name: 'Hotel Sripada',
    rating: '3.8',
    location: 'Railway Station Area',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=280&fit=crop',
    amenities: ['WiFi', 'AC', 'Central Location'],
    bookingUrl:
      'https://www.makemytrip.com/hotels/hotel_sripada-details-vijaywada.html',
  },
  {
    name: 'Hotel Kosala',
    rating: '4.1',
    location: 'Near Station',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=280&fit=crop',
    amenities: ['Free WiFi', 'Parking', 'Dining'],
    bookingUrl: 'https://www.kosalahotel.com/',
  },
  {
    name: 'Hotel Midcity',
    rating: '3.7',
    location: 'Bunder Road',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=280&fit=crop',
    amenities: ['AC Rooms', 'WiFi', 'Tv'],
    bookingUrl: 'https://www.hotelmidcity.com/',
  },
  {
    name: 'FabHotel RR Grand',
    rating: '4.3',
    location: 'Trendset Mall Area',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=280&fit=crop',
    amenities: ['Modern Suites', 'WiFi', 'Mall Access'],
    bookingUrl:
      'https://www.makemytrip.com/hotels/fabhotel_rr_grand_next_to_trendset_mall-details-vijayawada.html',
  },
  {
    name: 'FabHotel Golden Way',
    rating: '4.0',
    location: 'City Center',
    image:
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=400&h=280&fit=crop',
    amenities: ['Free WiFi', 'AC', 'Front Desk'],
    bookingUrl:
      'https://www.booking.com/hotel/in/golden-way-vijayawada.html',
  },
];

const ImageOrPlaceholder = ({ src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-orange-50/80 ${className}`}
      >
        <Hotel className="h-10 w-10 text-[#F97316]/50" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-cover ${className}`}
    />
  );
};

/* Professional Compact Featured Hotel Card */
const CompactHotelCard = ({ hotel }) => {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-orange-100/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/40 hover:shadow-xl">
      <div>
        {/* Card Image Header */}
        <div className="relative aspect-[1.85/1] w-full overflow-hidden bg-orange-50">
          <ImageOrPlaceholder
            src={hotel.image}
            alt={hotel.imageAlt}
            className="h-full w-full transition-transform duration-500 group-hover:scale-108"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          {/* Rating Badge */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-slate-900/85 px-2 py-0.5 text-xs font-bold text-white shadow-xs">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{hotel.rating}</span>
          </div>

          {/* Category Tag Badge */}
          {hotel.tag && (
            <div className="absolute bottom-2.5 left-2.5 rounded-md bg-[#F97316] px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow-xs">
              {hotel.tag}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-3.5 sm:p-4">
          <h3 className="text-sm sm:text-base font-extrabold text-[#17213a] line-clamp-1 group-hover:text-[#e47c14] transition-colors">
            {hotel.name}
          </h3>

          <p className="mt-1 text-xs leading-snug text-slate-600 line-clamp-2 min-h-[32px]">
            {hotel.description}
          </p>

          <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500 border-t border-orange-100/60 pt-2">
            <span className="font-semibold text-slate-700">{hotel.reviews}</span>
            <span className="flex items-center gap-1 text-[#F97316] font-bold text-[11px]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified Stay
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="p-3.5 sm:p-4 pt-0">
        <a
          href={hotel.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#F97316] hover:shadow-md"
        >
          Book Now
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
};

/* Compact Budget Hotel Card */
const CompactBudgetCard = ({ hotel }) => {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-orange-100 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F97316]/40 hover:shadow-md">
      <div>
        <div className="flex items-start gap-2.5">
          {/* Thumb Image */}
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-orange-100 bg-orange-50">
            <ImageOrPlaceholder
              src={hotel.image}
              alt={hotel.name}
              className="h-full w-full"
            />
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-1">
              <h3 className="text-xs font-extrabold text-[#17213a] line-clamp-1 group-hover:text-[#e47c14] transition-colors">
                {hotel.name}
              </h3>
              <div className="flex shrink-0 items-center gap-0.5 rounded-md bg-orange-50 px-1.5 py-0.5 text-[10px] font-bold text-[#F97316]">
                <Star className="h-2.5 w-2.5 fill-[#F97316]" />
                {hotel.rating}
              </div>
            </div>

            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500">
              <MapPin className="h-3 w-3 shrink-0 text-[#F97316]" />
              <span className="truncate">{hotel.location}</span>
            </div>

            <div className="mt-1.5 flex flex-wrap gap-1">
              {hotel.amenities.map((item, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2">
        <span className="text-[11px] font-bold text-[#e47c14]">
          ₹1,000 – ₹2,000 / day
        </span>

        <a
          href={hotel.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md bg-orange-500 px-2.5 py-1 text-xs font-bold text-white transition-colors hover:bg-[#e47c14]"
        >
          Book
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
};

export const AccommodationPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-[#17213a]">
      {/* =========================================================
          HERO BANNER
         ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-white to-slate-50 pb-2 pt-4 sm:pb-3 sm:pt-4">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-300/30 to-amber-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <h1 className="text-2xl font-extrabold uppercase tracking-tight text-[#17213a] sm:text-3xl lg:text-4xl">
            Hotels & <span className="text-[#F97316]">Stays</span>
          </h1>

          <p className="mx-auto mt-1 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
            Recommended hotels and budget-friendly accommodations in Vijayawada for ICRAIQ2IT - 2027 attendees and delegates.
          </p>
        </div>
      </section>

      {/* =========================================================
          1. FEATURED HOTELS GRID (Compact & Professional)
         ========================================================= */}
      <section className="px-4 py-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Compact 3-column grid layout */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHotels.map((hotel) => (
              <CompactHotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. BUDGET HOTELS GRID
         ========================================================= */}
      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-xs sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-orange-100 pb-2.5 mb-4">
              <div>
                <h2 className="text-lg font-extrabold uppercase tracking-tight text-[#17213a] sm:text-xl">
                  Budget Hotels in <span className="text-[#F97316]">Vijayawada</span>
                </h2>
                <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                  Affordable stay options for delegates and student researchers
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#17213a]">
                <Tag className="h-3.5 w-3.5 text-[#F97316]" />
                <span>Budget: ₹1,000 – ₹2,000 / day</span>
              </div>
            </div>

            {/* Compact 4-column budget grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {budgetHotels.map((hotel) => (
                <CompactBudgetCard key={hotel.name} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. DELEGATE NOTICE & ADVISORY
         ========================================================= */}
      <section className="px-5 py-8 sm:px-8 lg:px-10 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 rounded-2xl border border-orange-200/80 bg-gradient-to-r from-orange-500 to-[#e47c14] p-6 text-white shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-xs">
                <Info className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  Accommodation Advisory for Delegates
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-orange-100 max-w-3xl">
                  Delegates are advised to contact hotels directly or use the booking links provided to confirm room availability and special conference rates early.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-extrabold text-[#17213a] shadow-xs transition-colors hover:bg-slate-100"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccommodationPage;
