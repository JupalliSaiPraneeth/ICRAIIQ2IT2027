import React, { useMemo, useState } from 'react';
import {
  MapPin,
  Plane,
  Train,
  Navigation,
  ExternalLink,
  Image as ImageIcon,
  X,
  BusFront,
  ChevronRight,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

/*
  ICRAIIQ2IT 2027 — Venue / Location Page
  -----------------------------------------
  Redesigned from the supplied Vijayawada reference screenshots.

  Visual direction:
  - Clean white academic conference layout
  - Pink #F97316 + deep navy typography
  - Vijayawada introduction on the left
  - "HOW TO REACH" travel cards on the right
  - Major Attractions grid
  - Featured Attractions image gallery
  - Contact / campus location section with map
  - Responsive 1 / 2 / 3 / 5-column layouts
  - Image lightbox
  - No dark ScientificBackground
*/

const ATTRACTIONS = [
  'Akkanna Madanna Caves',
  'Amaravati Shrine',
  'Bhavani Island',
  'Gandhi Hill',
  'Gunadala Matha Shrine',
  'Hailand',
  'Hazratbal Mosque',
  'Hinkar Thirtha Jain Temple',
  'Kolleru Lake',
  'Kondapalli Fort',
  'Kuchipudi Kala Kshetram',
  'Mangalagiri Panakala Swami',
  'Manginapudi Beach',
  'Mogalrajapuram Caves',
  'Pavitra Sangamam',
  'Prakasam Barrage',
  'Rajiv Gandhi Park',
  'Scrap Sculpture Park',
  'Subramanya Swami Temple',
  'Undavalli Caves',
  'Uppalapadu Bird Sanctuary',
  'Bapu Museum',
];

const DEFAULT_VIJAYAWADA_DESCRIPTION = [
  `Vijayawada, the second-largest city in Andhra Pradesh, lies on the banks of the Krishna River, flanked by the Indrakeeladri Hills. Known as “The Business Capital of Andhra Pradesh,” it is a key center for commerce, politics, and agriculture. Major attractions include the Kanaka Durga Temple, Prakasam Barrage, Undavalli Caves, Bhavani Island, Gandhi Hill, and Mogalarajapuram Caves.`,
  `Weather in February: February offers pleasant weather, with temperatures ranging between 20°C to 30°C, making it an ideal time for sightseeing. During April (conference dates: 09–10 April 2027), the climate is pleasant and sunny, welcoming delegates from across the globe.`,
  `Vijayawada is well connected by air, rail, and road. The Vijayawada International Airport (13.5 km from the city) operates flights to Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, and more. The Vijayawada Railway Junction is a major station on the Chennai-Howrah and Chennai-Delhi routes. The city also has a robust road network with frequent bus services from various parts of India. Vijayawada’s strategic location, tourist spots, and connectivity make it a perfect destination for both business and leisure travel.`
];

const DEFAULT_CONTACTS = [
  {
    name: 'Dr. K. V. Sambasiva Rao',
    designation: 'Professor & Dean, R & D, Dr RVR NRIIT (DTBU)',
    email: 'icraiq2it27@nriit.edu.in',
  },
  {
    name: 'Dr. D. Sunitha',
    designation: 'HOD & Dean : School of Computer Studies, Dr RVR NRIIT (DTBU)',
    email: 'icraiq2it27@nriit.edu.in',
  },
];

const DEFAULT_ADDRESS = [
  'Dr RVR NRI Institute of Technology, Deemed to be University',
  'Pothavarappadu, Agiripalli Mandalam',
  'Eluru District, Andhra Pradesh, India',
  'Pin – 521212',
];

const DEFAULT_COORDINATES = {
  primary: '16.66327986299729, 80.73777642559249',
  secondary: '16.663338876474548, 80.7378364640956',
};

const DEFAULT_TRAVEL = {
  air: `Vijayawada International Airport (13.5 km from the city, ~22 km from campus) operates flights to Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, and more.`,
  rail: `Vijayawada Railway Junction is a major station on the Chennai-Howrah and Chennai-Delhi routes with frequent trains.`,
  road: `The city has a robust road network with frequent bus services from various parts of India along the Vijayawada–Nuzvid State Highway.`,
};

const DEFAULT_GALLERY = [
  {
    id: 'featured-1',
    title: 'Kanaka Durga Temple',
    category: 'Heritage & Spirituality',
    image: '/images/venue/kanaka-durga-temple.jpg',
  },
  {
    id: 'featured-2',
    title: 'Gandhi Hill',
    category: 'City Attractions',
    image: '/images/venue/gandhi-hill.jpg',
  },
  {
    id: 'featured-3',
    title: 'Prakasam Barrage',
    category: 'Vijayawada',
    image: '/images/venue/prakasam-barrage.jpg',
  },
  {
    id: 'featured-4',
    title: 'Bhavani Island',
    category: 'Nature & Recreation',
    image: '/images/venue/bhavani-island.jpg',
  },
];

const getValue = (value, fallback) =>
  value === undefined || value === null || value === ''
    ? fallback
    : value;

const getMapQuery = (data) =>
  getValue(
    data.organizer?.mapQuery,
    'Dr RVR NRI Institute of Technology, Pothavarappadu, Agiripalli Mandalam, Andhra Pradesh 521212'
  );

function TravelCard({ icon: Icon, title, children, centered = false }) {
  return (
    <article
      className={`rounded-xl border border-orange-100 bg-white p-5 shadow-[0_4px_12px_rgba(15,23,42,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F97316]/40 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)] ${centered ? 'text-center' : ''
        }`}
    >
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''
          }`}
      >
        <Icon className="h-6 w-6 shrink-0 text-[#F97316]" />
        <h3 className="text-[21px] font-extrabold text-[#F97316]">
          {title}
        </h3>
      </div>

      <p
        className={`mt-3 text-[15px] leading-7 text-[#29405f] ${centered ? 'mx-auto max-w-sm' : ''
          }`}
      >
        {children}
      </p>
    </article>
  );
}

function AttractionItem({ name }) {
  return (
    <div className="rounded-lg border border-[#FB923C] bg-white px-4 py-3 text-[14px] font-medium text-[#17213a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7ED] hover:shadow-sm">
      {name}
    </div>
  );
}

function GalleryCard({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative aspect-[1.55/1] overflow-hidden rounded-xl border border-orange-100 bg-orange-50 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-4 pb-4 pt-12">
        <div className="text-[10px] font-bold uppercase tracking-wider text-[#FDBA74]">
          {item.category || 'Featured Attraction'}
        </div>
        <div className="mt-1 truncate text-sm font-bold text-white">
          {item.title}
        </div>
      </div>
    </button>
  );
}

export const VenuePage = () => {
  const [activeImage, setActiveImage] = useState(null);

  const data = conferenceData || {};

  const mapQuery = getMapQuery(data);
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&z=15&output=embed`;

  const descriptions =
    Array.isArray(data.venueDescription) && data.venueDescription.length
      ? data.venueDescription
      : DEFAULT_VIJAYAWADA_DESCRIPTION;

  const travel = {
    air: getValue(data.venueTravel?.air, DEFAULT_TRAVEL.air),
    rail: getValue(data.venueTravel?.rail, DEFAULT_TRAVEL.rail),
    road: getValue(data.venueTravel?.road, DEFAULT_TRAVEL.road),
  };

  const address =
    Array.isArray(data.organizer?.addressLines) &&
      data.organizer.addressLines.length
      ? data.organizer.addressLines
      : DEFAULT_ADDRESS;

  const coordinates = {
    primary: getValue(
      data.organizer?.coordinates?.primary,
      DEFAULT_COORDINATES.primary
    ),
    secondary: getValue(
      data.organizer?.coordinates?.secondary,
      DEFAULT_COORDINATES.secondary
    ),
  };

  const contacts =
    Array.isArray(data.venueContacts) && data.venueContacts.length
      ? data.venueContacts
      : DEFAULT_CONTACTS;

  const gallery = useMemo(() => {
    const source =
      Array.isArray(data.campusGallery) && data.campusGallery.length
        ? data.campusGallery
        : DEFAULT_GALLERY;

    return source;
  }, [data.campusGallery]);

  return (
    <main className="min-h-screen bg-white text-[#17213a]">
      {/* =========================================================
          1. VIJAYAWADA INTRODUCTION + HOW TO REACH
         ========================================================= */}
      <section className="bg-white px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-14 lg:pt-12">
        <div className="mx-auto max-w-[1540px]">
          <header className="text-center">
            <h1 className="text-4xl font-extrabold uppercase tracking-[-0.02em] text-[#F97316] sm:text-5xl">
              Vijayawada
            </h1>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(520px,0.95fr)] lg:gap-14">
            {/* City information */}
            <div className="max-w-[820px] space-y-6">
              {descriptions.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[16px] leading-7 text-[#173c69] sm:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* How to reach */}
            <div>
              <h2 className="text-center text-3xl font-extrabold uppercase text-[#F97316] sm:text-[30px]">
                How to Reach
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <TravelCard icon={Plane} title="By Air">
                  {travel.air}
                </TravelCard>

                <TravelCard icon={Train} title="By Rail">
                  {travel.rail}
                </TravelCard>

                <div className="sm:col-span-2 sm:mx-auto sm:w-[68%]">
                  <TravelCard icon={BusFront} title="By Road" centered>
                    {travel.road}
                  </TravelCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAJOR ATTRACTIONS
         ========================================================= */}
      <section className="border-t border-orange-100 bg-[#FFFBF8] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-3xl font-extrabold text-[#F97316] sm:text-[30px]">
            Major Attractions
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {ATTRACTIONS.map((attraction) => (
              <AttractionItem key={attraction} name={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FEATURED ATTRACTIONS
         ========================================================= */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[1540px]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl font-extrabold text-[#F97316] sm:text-[30px]">
              Featured Attractions
            </h2>

            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <ImageIcon className="h-4 w-4 text-[#F97316]" />
              Click an image to enlarge
            </span>
          </div>

          {gallery.length > 0 ? (
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.slice(0, 8).map((item, index) => (
                <GalleryCard
                  key={item.id || `${item.title}-${index}`}
                  item={item}
                  onOpen={setActiveImage}
                />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-xl border border-dashed border-orange-200 bg-orange-50 p-10 text-center text-sm text-slate-500">
              Featured attraction images will be added soon.
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          4. CONTACT US / LOCATION
         ========================================================= */}
      <section className="border-t border-orange-100 bg-white px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-4xl font-extrabold text-[#F97316] sm:text-5xl">
            Contact Us
          </h2>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(430px,1fr)] lg:gap-12">
            {/* Map */}
            <div className="relative min-h-[390px] overflow-hidden rounded-xl border border-[#FB923C] bg-orange-50 shadow-[0_8px_25px_rgba(15,23,42,0.10)] sm:min-h-[500px]">
              <iframe
                title="NRI Institute of Technology location map"
                src={embedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-[#17213a] shadow-lg transition-colors hover:text-[#EA580C]"
              >
                <Navigation className="h-4 w-4 text-[#F97316]" />
                Open in Google Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Contact information */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4 text-[16px] leading-7 text-[#17213a]">
                {contacts.map((contact, index) => (
                  <p key={`${contact.email || contact.name}-${index}`}>
                    <span className="font-medium">
                      {contact.name}
                      {contact.designation
                        ? `, ${contact.designation}`
                        : ''}
                    </span>

                    {contact.email && (
                      <>
                        {' – '}
                        <a
                          href={`mailto:${contact.email}`}
                          className="transition-colors hover:text-[#EA580C]"
                        >
                          {contact.email}
                        </a>
                      </>
                    )}
                  </p>
                ))}
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-[#F97316] sm:text-3xl">
                {getValue(
                  data.organizer?.name,
                  'NRI Institute of Technology'
                )}
              </h3>

              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#F97316]" />

                <div className="text-[16px] leading-7 text-[#344054]">
                  {address.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="font-bold text-[#17213a]">
                  Coordinates:
                </div>

                <div className="text-[15px] leading-7 text-[#344054]">
                  <div>
                    Primary: {coordinates.primary}
                  </div>
                  <div>
                    Secondary: {coordinates.secondary}
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-[760px] text-[16px] leading-7 text-[#344054]">
                The campus is conveniently accessible from Vijayawada city
                and is surrounded by serene greenery, making it an ideal
                location for academic and professional events.
              </p>

              <div className="mt-6">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F97316] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#EA580C] hover:shadow-lg"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. IMAGE LIGHTBOX
         ========================================================= */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1020]/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-[#F97316] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="bg-orange-50">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="mx-auto max-h-[76vh] w-full object-contain"
              />
            </div>

            <div className="px-5 py-4 text-center">
              <h3 className="text-lg font-extrabold text-[#17213a]">
                {activeImage.title}
              </h3>

              {activeImage.category && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#F97316]">
                  {activeImage.category}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default VenuePage;
