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
  Search,
  Building2,
  Calendar,
  Compass,
  Mail,
  Copy,
  Check,
  Sparkles,
  Info,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { conferenceData } from '../data/conferenceData';

/* ================================================================
   ICRAIQ2IT 2027 — Venue & Host City Guide
   Academic Conference Standard Design
   ================================================================ */

const RAW_ATTRACTIONS = [
  { name: 'Akkanna Madanna Caves', category: 'heritage', description: '7th-century rock-cut cave monuments dedicated to Shiva.' },
  { name: 'Amaravati Shrine', category: 'heritage', description: 'Historic Buddhist stupa site and ancient Amaralingeswara temple.' },
  { name: 'AP High Court', category: 'capital', description: 'High Court of Andhra Pradesh located at Nelapadu, Amaravati.' },
  { name: 'AP Secretariat', category: 'capital', description: 'Administrative headquarters of Andhra Pradesh government in Velagapudi.' },
  { name: "Asia's Largest Mango Market", category: 'culture', description: 'Renowned agricultural trade hub at Nunna operating during mango season.' },
  { name: 'Bapu Museum', category: 'culture', description: 'State-of-the-art archaeological museum with historic antiquities & art.' },
  { name: 'Bhavani Island', category: 'nature', description: 'Scenic 133-acre river island on Krishna River with recreation & boating.' },
  { name: 'Gandhi Hill', category: 'culture', description: 'Historic memorial monument with Gandhi stupa, library & sound-and-light show.' },
  { name: 'Gunadala Matha Shrine', category: 'heritage', description: 'Prominent Catholic pilgrimage shrine with church carved on hill slopes.' },
  { name: 'Hailand', category: 'culture', description: 'Sprawling cultural and amusement theme park near Mangalagiri.' },
  { name: 'Hazratbal Mosque', category: 'heritage', description: 'Prominent Islamic shrine housing a sacred relic visited by thousands.' },
  { name: 'Hinkar Thirtha Jain Temple', category: 'heritage', description: 'Majestic Jain pilgrimage center with intricate marble carving architecture.' },
  { name: 'ISKCON Temple', category: 'heritage', description: 'Spiritual cultural center and temple on the banks of Krishna River.' },
  { name: 'Kanaka Durga Temple', category: 'heritage', description: 'Presiding deity of Vijayawada flanked high atop Indrakeeladri Hills.' },
  { name: 'Kolleru Lake', category: 'nature', description: 'One of India’s largest freshwater lakes and protected bird sanctuary.' },
  { name: 'Kondapalli Fort', category: 'heritage', description: '14th-century hill citadel famous for historical bastions and toy craftsmen.' },
  { name: 'Kuchipudi Kala Kshetram', category: 'culture', description: 'World-renowned village and center of classical Kuchipudi dance heritage.' },
  { name: 'Mangalagiri Panakala Swami', category: 'heritage', description: 'Historic hill temple of Sri Lakshmi Narasimha Swamy with ancient gopuram.' },
  { name: 'Manginapudi Beach', category: 'nature', description: 'Historic natural black-sand beach located near Machilipatnam.' },
  { name: 'Mogalrajapuram Caves', category: 'heritage', description: '5th-century rock architecture featuring shrines of Nataraja and Vinayaka.' },
  { name: 'Pavitra Sangamam', category: 'nature', description: 'Sacred confluence point where Godavari waters unite with Krishna River.' },
  { name: 'Prakasam Barrage', category: 'nature', description: '1.2 km road-cum-water regulator structure over the majestic Krishna River.' },
  { name: 'Rajiv Gandhi Park', category: 'culture', description: 'Horticultural city park featuring musical fountains and mini zoo.' },
  { name: 'Scrap Sculpture Park', category: 'culture', description: 'Innovative eco-park featuring artistic sculptures crafted from scrap metals.' },
  { name: 'Subramanya Swami Temple', category: 'heritage', description: 'Revered hill temple in Kothapeta offering scenic city panoramic views.' },
  { name: 'Undavalli Caves', category: 'heritage', description: 'Famous 4-tiered 7th-century rock sanctuary with colossal Anantasayana Vishnu.' },
  { name: 'Uppalapadu Bird Sanctuary', category: 'nature', description: 'Protected water wetland sanctuary hosting endangered migratory birds.' },
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Attractions', count: 27 },
  { id: 'heritage', label: 'Heritage & Shrines', count: 12 },
  { id: 'nature', label: 'Nature & Waterfront', count: 6 },
  { id: 'culture', label: 'Culture & Parks', count: 6 },
  { id: 'capital', label: 'Capital & Commerce', count: 3 },
];

const DEFAULT_VIJAYAWADA_DESCRIPTION = [
  `Vijayawada, the second-largest city in Andhra Pradesh, lies on the banks of the Krishna River, flanked by the Indrakeeladri Hills. Known as “The Business Capital of Andhra Pradesh,” it is a key center for commerce, politics, education, and culture. Major attractions include the historic Kanaka Durga Temple, Prakasam Barrage, Undavalli Caves, Bhavani Island, Gandhi Hill, and Mogalarajapuram Caves.`,
  `The city serves as the gateway to the Amaravati Capital Region, harmoniously uniting deep historic traditions with rapid modern technological innovation. April in Vijayawada offers pleasant, warm, and sunny weather with temperatures typically between 28°C and 34°C, creating an ideal setting for academic sessions and pleasant city sightseeing.`,
  `Vijayawada is exceptionally well-connected through air, rail, and road infrastructure. The Vijayawada International Airport operates regular flights to major Indian metros. Vijayawada Junction is one of the busiest railway hubs in the nation, while an extensive network of national highways (NH-16 and NH-65) ensures smooth ground transit.`
];

const DEFAULT_TRAVEL = {
  air: {
    title: 'By Air',
    hub: 'Vijayawada International Airport (VGA)',
    distance: '~22 km from NRIIT Campus',
    description: 'Located in Gannavaram, the airport operates direct daily flights connecting Vijayawada to Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, and other major hubs. Pre-paid airport taxis and ride-hailing services (Ola/Uber) are readily available 24/7.',
    badge: 'Code: VGA'
  },
  rail: {
    title: 'By Rail',
    hub: 'Vijayawada Railway Junction (BZA)',
    distance: '~24 km from NRIIT Campus',
    description: 'A major premier A1-category junction on the Chennai–Howrah and Chennai–New Delhi trunk routes with over 250 express trains stopping daily. Frequent bus services and taxis operate directly from the railway station to the campus along Nuzvid Road.',
    badge: 'Code: BZA'
  },
  road: {
    title: 'By Road',
    hub: 'National & State Highway Network',
    distance: 'Direct Highway Frontage',
    description: 'Strategically accessible via NH-16 (Kolkata–Chennai) and NH-65 (Pune–Machilipatnam). State road transport (APSRTC) and private luxury coaches link Vijayawada with all Southern and Central Indian cities. The campus is directly situated on the Vijayawada–Nuzvid State Highway.',
    badge: 'NH-16 / NH-65'
  },
};

const DEFAULT_GALLERY = [
  {
    id: 'featured-1',
    title: 'Dr RVR NRIIT University Campus',
    category: 'Conference Venue',
    image: '/newblock.png',
    description: 'Main academic blocks, research centers, and international conference auditoriums.'
  },
  {
    id: 'featured-2',
    title: 'Prakasam Barrage across Krishna River',
    category: 'Iconic Landmark',
    image: 'https://nriit.edu.in/icraiq2it-2026/001.jpg',
    description: '1.2 km road bridge and water regulator across the Krishna River, illuminated at night.'
  },
  {
    id: 'featured-3',
    title: 'Vijayawada Riverfront Cityscape',
    category: 'Scenic Panorama',
    image: 'https://nriit.edu.in/icraiq2it-2026/002.webp',
    description: 'Panoramic riverfront view with the surrounding Indrakeeladri hills and river basin.'
  },
  {
    id: 'featured-4',
    title: 'Aerial View of Vijayawada',
    category: 'City Heritage',
    image: 'https://nriit.edu.in/icraiq2it-2026/003.jpg',
    description: 'Aerial perspective showcasing the city layout, waterways, and natural landscape.'
  },
  {
    id: 'featured-5',
    title: 'Krishna Riverfront & Barrage',
    category: 'Riverfront',
    image: 'https://nriit.edu.in/icraiq2it-2026/004.jpg',
    description: 'Lush greenery and calm river waters framing the city outskirts.'
  },
  {
    id: 'featured-6',
    title: 'NRI University Innovation Hub',
    category: 'Academic Venue',
    image: 'https://nriit.edu.in/icraiq2it-2026/005.jpg',
    description: 'Advanced laboratories, seminar halls, and smart classrooms supporting conference sessions.'
  },
];

const DEFAULT_CONTACTS = [
  {
    name: 'Dr. K. V. Sambasiva Rao',
    role: 'Dean, Research & Development',
    designation: 'Professor & Dean, R & D, Dr RVR NRIIT (DTBU)',
    email: 'icraiq2it27@nriit.edu.in',
  },
  {
    name: 'Dr. D. Sunitha',
    role: 'Dean, School of Computer Studies',
    designation: 'HOD & Dean : School of Computer Studies, Dr RVR NRIIT (DTBU)',
    email: 'icraiq2it27@nriit.edu.in',
  },
];

const DEFAULT_ADDRESS = [
  'Dr RVR NRI Institute of Technology (Deemed to be University)',
  'Pothavarappadu, Agiripalli Mandalam',
  'Eluru District / Vijayawada Rural, Andhra Pradesh, India',
  'PIN Code – 521212',
];

const DEFAULT_COORDINATES = {
  primary: '16.66327986299729, 80.73777642559249',
  secondary: '16.663338876474548, 80.7378364640956',
  display: '16.6633° N, 80.7378° E',
};

function getValue(value, fallback) {
  return value === undefined || value === null || value === ''
    ? fallback
    : value;
}

export const VenuePage = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const data = conferenceData || {};

  const mapQuery = getValue(
    data.organizer?.mapQuery,
    'Dr RVR NRI Institute of Technology, Pothavarappadu, Agiripalli Mandalam, Andhra Pradesh 521212'
  );
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&z=15&output=embed`;

  const descriptions =
    Array.isArray(data.venueDescription) && data.venueDescription.length
      ? data.venueDescription
      : DEFAULT_VIJAYAWADA_DESCRIPTION;

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

  const filteredAttractions = useMemo(() => {
    return RAW_ATTRACTIONS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyCoordinates = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(DEFAULT_COORDINATES.primary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-orange-500 selection:text-white">

      {/* =========================================================
          HERO / PAGE TITLE BANNER
         ========================================================= */}
      <section className="bg-white px-5 pb-1.5 pt-5 sm:px-8 sm:pb-2 sm:pt-6 lg:px-10">
        <div className="mx-auto max-w-[1280px] text-center">
          {/* Main Heading */}
          <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            Conference Venue & <span className="text-orange-600">Host City</span>
          </h1>

          <div className="mx-auto mt-2.5 h-1 w-20 rounded-full bg-orange-500" />
        </div>
      </section>

      {/* =========================================================
          1. CITY OVERVIEW + HOW TO REACH (Balanced Two Columns)
         ========================================================= */}
      <section className="bg-white px-5 pb-4 pt-2 sm:px-8 sm:pb-5 sm:pt-3 lg:px-10 lg:pb-5 lg:pt-3">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">

            {/* Left: About Vijayawada */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
                <span className="h-[2px] w-6 bg-orange-600" />
                <span>Host Destination</span>
              </div>

              <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                About Vijayawada
              </h2>
              <p className="mt-1 text-sm font-semibold text-orange-600">
                The Commercial & Cultural Capital of Andhra Pradesh
              </p>

              <div className="mt-3 space-y-2.5 text-justify text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                {descriptions.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Destination Highlights Pill Grid */}
              <div className="mt-3 rounded-2xl bg-orange-50/40 p-3">
                <div className="text-xs font-black uppercase tracking-wider text-orange-700">
                  Vijayawada Fast Facts for Delegates
                </div>
                <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>Location: Banks of Krishna River</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>April Weather: 28°C – 34°C (Sunny)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>Rail: A1 Premier Junction (BZA)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span>Airport: Gannavaram Int'l (VGA)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: How to Reach */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
                  <span className="h-[2px] w-6 bg-orange-600" />
                  <span>Travel & Connectivity</span>
                </div>

                <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  How to Reach the Venue
                </h2>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Seamless transit options by air, railway, and national highway network.
                </p>

                <div className="mt-3 space-y-2">
                  {/* By Air */}
                  <article className="group rounded-2xl bg-orange-50/45 p-3 sm:p-4 transition-all duration-200 hover:bg-orange-50/75">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600 shadow-xs transition-colors group-hover:bg-orange-600 group-hover:text-white">
                          <Plane className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 sm:text-lg">
                            {DEFAULT_TRAVEL.air.title}
                          </h3>
                          <div className="text-xs font-medium text-slate-500">
                            {DEFAULT_TRAVEL.air.hub}
                          </div>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-extrabold text-orange-700 shadow-xs">
                        {DEFAULT_TRAVEL.air.badge}
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-bold text-orange-600">
                      {DEFAULT_TRAVEL.air.distance}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {DEFAULT_TRAVEL.air.description}
                    </p>
                  </article>

                  {/* By Rail */}
                  <article className="group rounded-2xl bg-orange-50/45 p-3 sm:p-4 transition-all duration-200 hover:bg-orange-50/75">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600 shadow-xs transition-colors group-hover:bg-orange-600 group-hover:text-white">
                          <Train className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 sm:text-lg">
                            {DEFAULT_TRAVEL.rail.title}
                          </h3>
                          <div className="text-xs font-medium text-slate-500">
                            {DEFAULT_TRAVEL.rail.hub}
                          </div>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-extrabold text-orange-700 shadow-xs">
                        {DEFAULT_TRAVEL.rail.badge}
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-bold text-orange-600">
                      {DEFAULT_TRAVEL.rail.distance}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {DEFAULT_TRAVEL.rail.description}
                    </p>
                  </article>

                  {/* By Road */}
                  <article className="group rounded-2xl bg-orange-50/45 p-3 sm:p-4 transition-all duration-200 hover:bg-orange-50/75">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-600 shadow-xs transition-colors group-hover:bg-orange-600 group-hover:text-white">
                          <BusFront className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 sm:text-lg">
                            {DEFAULT_TRAVEL.road.title}
                          </h3>
                          <div className="text-xs font-medium text-slate-500">
                            {DEFAULT_TRAVEL.road.hub}
                          </div>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-extrabold text-orange-700 shadow-xs">
                        {DEFAULT_TRAVEL.road.badge}
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-bold text-orange-600">
                      {DEFAULT_TRAVEL.road.distance}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {DEFAULT_TRAVEL.road.description}
                    </p>
                  </article>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAJOR ATTRACTIONS (Interactive Directory & Search)
         ========================================================= */}
      <section className="bg-white px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6">
        <div className="mx-auto max-w-[1280px]">

          {/* Section Header */}
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
                <span className="h-[2px] w-6 bg-orange-600" />
                <span>Destination Guide</span>
              </div>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Major Attractions in & Around Vijayawada
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Explore 27 prominent cultural landmarks, spiritual shrines, historic caves, and natural spots.
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search attractions..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs font-semibold text-slate-800 placeholder-slate-400 shadow-sm transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 border-b border-orange-100 pb-3">
            {CATEGORY_TABS.map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-all duration-200 ${
                    active
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-500/25'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50/50 hover:text-orange-600'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      active ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Attractions Grid */}
          {filteredAttractions.length > 0 ? (
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredAttractions.map((attraction) => (
                <a
                  key={attraction.name}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    attraction.name + ' Vijayawada Andhra Pradesh'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between rounded-xl bg-white p-2 sm:px-2.5 sm:py-2 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-500 transition-transform group-hover:scale-110" />
                      <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-orange-600 line-clamp-1">
                        {attraction.name}
                      </h3>
                    </div>
                    <ExternalLink className="h-3 w-3 shrink-0 text-slate-300 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-orange-500" />
                  </div>

                  <div className="mt-1 flex items-center justify-end pt-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-orange-600">
                      View on Map →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-orange-200 bg-white p-6 text-center">
              <p className="text-sm font-semibold text-slate-600">
                No attractions found matching "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================
          3. FEATURED ATTRACTIONS PHOTO GALLERY
         ========================================================= */}
      <section className="bg-white px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
                <span className="h-[2px] w-6 bg-orange-600" />
                <span>Visual Highlights</span>
              </div>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Featured Destination Gallery
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Click on any photo to inspect full cinematic view.
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
              <ImageIcon className="h-4 w-4 text-orange-600" />
              <span>Interactive Lightbox Enabled</span>
            </span>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <button
                key={item.id || index}
                type="button"
                onClick={() => setActiveImage(item)}
                className="group relative aspect-[16/8.5] w-full overflow-hidden rounded-xl bg-slate-900 text-left shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Graceful fallback to block photo if external asset fails
                    e.currentTarget.src = '/newblock.png';
                  }}
                />

                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
                  <span className="inline-block rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-orange-200 backdrop-blur-md">
                    {item.category || 'Highlight'}
                  </span>

                  <h3 className="mt-1 text-sm font-bold text-white drop-shadow-sm sm:text-[15px]">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-0.5 text-[11px] text-white/80 line-clamp-1 sm:text-xs">
                      {item.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. VENUE LOCATION, MAP & CONFERENCE SECRETARIAT
         ========================================================= */}
      <section className="bg-white px-5 pb-6 pt-4 sm:px-8 sm:pb-7 sm:pt-5 lg:px-10 lg:pb-7 lg:pt-6">
        <div className="mx-auto max-w-[1280px]">

          {/* Section Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-orange-600">
              <span className="h-[2px] w-6 bg-orange-600" />
              <span>Campus & Secretariat</span>
              <span className="h-[2px] w-6 bg-orange-600" />
            </div>

            <h2 className="mt-1.5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Venue Location & Secretariat Contacts
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-orange-500" />
            <p className="mx-auto mt-2 text-sm text-slate-500">
              Conference venue premises, geo-coordinates, and key secretariat contact personnel.
            </p>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2.5 lg:grid-cols-12 lg:items-stretch lg:gap-3">

            {/* Left: Google Maps Interactive Embed */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col h-full">
              <div className="relative min-h-[300px] h-full flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
                <iframe
                  title="Dr RVR NRI Institute of Technology Location Map"
                  src={embedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Floating Directions Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 sm:left-auto">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3.5 py-2 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md transition-all hover:bg-orange-600 hover:text-white"
                  >
                    <Navigation className="h-3.5 w-3.5 text-orange-500 group-hover:text-white" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Venue Institution & Secretariat Contact Details */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-2.5">

              {/* Institution Box */}
              <div className="rounded-xl border border-orange-100 bg-white p-3 shadow-xs">
                <div>
                  <h3 className="text-base font-black text-slate-900 sm:text-lg">
                    {getValue(data.organizer?.name, 'Dr RVR NRI Institute of Technology')}
                  </h3>
                  {!String(data.organizer?.name || '').includes('Deemed') && (
                    <div className="text-xs font-semibold text-orange-700">
                      (Deemed to be University)
                    </div>
                  )}
                </div>

                {/* Address */}
                <div className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  <div>
                    {DEFAULT_ADDRESS.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>

                {/* Coordinates & Copy */}
                <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs">
                  <div>
                    <span className="font-bold text-slate-500">GPS Coordinates: </span>
                    <span className="font-mono font-bold text-slate-800">{DEFAULT_COORDINATES.display}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCoordinates}
                    className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold text-orange-600 transition hover:bg-orange-100"
                    title="Copy latitude & longitude"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Secretariat Contacts */}
              <div className="rounded-xl border border-orange-100 bg-white p-3 shadow-xs">
                <div className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
                  Secretariat Key Contacts
                </div>

                <div className="mt-2 space-y-1.5">
                  {contacts.map((contact, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {contact.name}
                        </div>
                        <div className="text-xs font-medium text-slate-500">
                          {contact.designation || contact.role}
                        </div>
                      </div>

                      {contact.email && (
                        <a
                          href={`mailto:${contact.email}`}
                          className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-orange-200 bg-orange-50 px-2 py-0.5 text-xs font-bold text-orange-700 transition hover:bg-orange-600 hover:text-white"
                          title={`Email ${contact.name}`}
                        >
                          <Mail className="h-3 w-3" />
                          <span>Email</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-orange-600 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-700"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href="mailto:icraiq2it27@nriit.edu.in"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs transition hover:border-orange-400 hover:text-orange-600"
                  >
                    <Mail className="h-3.5 w-3.5 text-orange-600" />
                    <span>Contact Helpdesk</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          5. IMAGE LIGHTBOX MODAL
         ========================================================= */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image lightbox"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] max-h-[75vh] w-full bg-slate-950">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/newblock.png';
                }}
              />
            </div>

            <div className="border-t border-slate-100 bg-white px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-600">
                    {activeImage.category || 'Featured Attraction'}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {activeImage.title}
                  </h3>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    activeImage.title + ' Vijayawada Andhra Pradesh'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700 transition hover:bg-orange-600 hover:text-white sm:inline-flex"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Search Location</span>
                </a>
              </div>

              {activeImage.description && (
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  {activeImage.description}
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
