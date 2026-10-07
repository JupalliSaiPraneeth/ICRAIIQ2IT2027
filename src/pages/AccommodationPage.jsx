import React, { useState } from 'react';

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
        className={`flex items-center justify-center bg-slate-100 text-xs text-slate-500 ${className}`}
      >
        Image unavailable
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

const CompactHotelCard = ({ hotel }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors hover:border-orange-300">
      <div>
        <div className="relative aspect-[1.85/1] w-full overflow-hidden bg-slate-100">
          <ImageOrPlaceholder
            src={hotel.image}
            alt={hotel.imageAlt}
            className="h-full w-full"
          />

          <div className="absolute right-2 top-2 rounded bg-white/95 px-2 py-1 text-xs font-semibold text-slate-700">
            Rating {hotel.rating}
          </div>

          {hotel.tag && (
            <div className="absolute bottom-2 left-2 rounded bg-white/95 px-2 py-1 text-xs font-medium text-slate-700">
              {hotel.tag}
            </div>
          )}
        </div>

        <div className="p-3.5">
          <h3 className="text-base font-bold text-[#17213a]">
            {hotel.name}
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {hotel.description}
          </p>
        </div>
      </div>

      <div className="mt-auto px-3.5 pb-3.5">
        <a
          href={hotel.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-[#17213a] px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#F97316]"
        >
          Book Now
        </a>
      </div>
    </article>
  );
};

const CompactBudgetCard = ({ hotel }) => {
  return (
    <article className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-3.5 transition-colors hover:border-orange-300">
      <div>
        <div className="flex items-start gap-2.5">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-100">
            <ImageOrPlaceholder
              src={hotel.image}
              alt={hotel.name}
              className="h-full w-full"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-1">
              <h3 className="text-sm font-bold text-[#17213a]">
                {hotel.name}
              </h3>
              <div className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-700">
                {hotel.rating}
              </div>
            </div>

            <div className="mt-0.5 text-xs text-slate-500">
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

      <div className="mt-2.5 flex justify-end border-t border-slate-100 pt-2">
        <a
          href={hotel.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-[#17213a] px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-[#F97316]"
        >
          Book
        </a>
      </div>
    </article>
  );
};

export const AccommodationPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-[1280px] px-5 text-center sm:px-8 lg:px-10">
          <h1 className="text-3xl font-black uppercase tracking-tight text-[#17213a] sm:text-4xl lg:text-[42px]">
            Accommodation
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#F97316]" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            Hotel options in Vijayawada for ICRAIIQ2IT 2027 delegates. Contact each property to confirm rates and availability.
          </p>
        </div>
      </section>

      <section className="px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-[#17213a]">Recommended hotels</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredHotels.map((hotel) => (
              <CompactHotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-2 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-[#17213a]">Budget stays</h2>
              <p className="mt-1 text-sm text-slate-600">Indicative range: ₹1,000–₹2,000 per day. Confirm directly with the hotel.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {budgetHotels.map((hotel) => (
              <CompactBudgetCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px] pt-2 text-sm text-slate-600">
          Please contact hotels directly to confirm room availability and any conference rates.
        </div>
      </section>
    </main>
  );
};

export default AccommodationPage;
