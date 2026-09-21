export const img = {
  logo: "/logo.webp",
  spanishVilla: "/homes/hero-spanish.jpg",
  luxuryVilla: "/homes/hero-villa.jpg",
  luxuryHouse: "/homes/hero-luxury.jpg",
  courtyard: "/homes/hero-courtyard.jpg",
  modernVilla: "/homes/home-1.jpg",
  classicMansion: "/homes/home-2.jpg",
  greyClassic: "/homes/home-3.jpg",
  completedVilla: "/homes/home-4.jpg",
  brickFront: "/homes/home-5.jpg",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "TAMEER — Construction & Interior",
  short: "TAMEER",
  fullName: "TAMEER — Construction & Interior",
  tagline: "Transforming Blueprints into Reality",
  logo: img.logo,
  address: "Karachi, Sindh, Pakistan",
  addressShort: "Karachi, Sindh",
  email: "info@tameerconstruction.pk",
  phone: "0334 2889533",
  phoneTel: "+923342889533",
  whatsapp: "https://wa.me/923342889533?text=Hello%20TAMEER%2C%20I%20would%20like%20to%20discuss%20my%20project.",
  facebook: "https://facebook.com/Tameerconstruction.pk",
  messenger: "https://m.me/Tameerconstruction.pk",
  instagram: "https://facebook.com/Tameerconstruction.pk",
  youtube: "https://facebook.com/Tameerconstruction.pk",
  hours: [{ day: "Monday to Saturday", time: "9:00 AM – 8:00 PM" }],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/services#renovation", label: "Renovation" },
  { to: "/services#materials", label: "Building Materials" },
  { to: "/contact", label: "Contact" },
];

export const heroSlides = [
  { title: "Transforming Blueprints into Reality.", highlight: "Your trusted construction partner in Karachi", image: img.luxuryVilla },
  { title: "Homes Built to Last for Generations", highlight: "From grey structure to luxury finishing, all under one accountable team.", image: img.spanishVilla },
  { title: "Renovation Begins With a Proper Plan", highlight: "Thoughtful planning, honest pricing and expert execution for every space.", image: img.luxuryHouse },
  { title: "Construction, Interiors & Materials", highlight: "Your one-stop construction solution across Karachi.", image: img.courtyard },
];

export const stats = [
  { value: "1.1K+", label: "Happy clients" },
  { value: "32+", label: "Projects completed" },
  { value: "100%", label: "Transparent" },
  { value: "A+", label: "Material quality" },
];

export const posts = [
  { image: "/posts/post1.jpeg", title: "120 Sq. Yds Villa", location: "DHA Phase 6", tag: "Completed" },
  { image: "/posts/post2.jpeg", title: "Bungalow Renovation", location: "Bahria Town Karachi", tag: "Completed" },
  { image: "/posts/post3.jpeg", title: "Drawing Room Interior", location: "Clifton", tag: "Completed" },
  { image: "/posts/post4.jpeg", title: "Kitchen & Bath Remodel", location: "PECHS", tag: "Completed" },
  { image: "/posts/post5.jpeg", title: "Luxury Finishing", location: "Karachi", tag: "On Site" },
  { image: "/posts/post6.jpeg", title: "Grey Structure", location: "Scheme 33", tag: "In Progress" },
  { image: "/posts/post7.jpeg", title: "Modern Interior", location: "Gulshan", tag: "In Progress" },
  { image: "/posts/post1.jpeg", title: "Residential Elevation", location: "DHA Karachi", tag: "Design" },
  { image: "/posts/post2.jpeg", title: "Turnkey Residence", location: "Karachi", tag: "Coming Soon" },
];

export const videoGallery = [
  { src: "/videogrally/video1.mp4", poster: img.luxuryVilla, title: "Project Showreel", caption: "Planning to handover" },
  { src: "/videogrally/video2.mp4", poster: img.spanishVilla, title: "Villa Walkthrough", caption: "Karachi residence" },
  { src: "/videogrally/video3.mp4", poster: img.luxuryHouse, title: "Site Progress", caption: "Grey structure" },
  { src: "/videogrally/video4.mp4", poster: img.courtyard, title: "Interior Reveal", caption: "Luxury finishing" },
];

export const testimonials = [
  { name: "Client", role: "DHA Karachi", quote: "Tameer team renovated our DHA home perfectly on time. Highly recommended!" },
  { name: "Client", role: "Bahria Town Karachi", quote: "Professional team, honest pricing. Best construction company in Karachi." },
];

export const services = [
  { slug: "grey-structure", title: "Grey Structure Construction", image: img.brickFront, short: "Strong foundation, Grade 60 steel, pure cement and expert supervision.", body: "Complete excavation, foundation, RCC, block masonry, and electrical and plumbing piping using Grade 60 steel and OPC cement for maximum strength." },
  { slug: "turnkey", title: "Turnkey Construction", image: img.luxuryVilla, short: "Foundation to finishing with A+ materials. Key-ready homes.", body: "From foundation to finishing—tiles, paint, woodwork, bathroom fittings, kitchen and lighting—delivered as one complete, durable home." },
  { slug: "renovation", title: "Home Renovation", image: img.completedVilla, short: "Kitchen, bathroom, living room and full-house renovation in Karachi.", body: "A successful renovation starts with proper planning, not guesswork. We handle kitchen remodeling, bathroom renovation and complete home upgrades." },
  { slug: "interior", title: "Interior Design", image: img.greyClassic, short: "Modern ceilings, lighting, woodwork, kitchens and wardrobes.", body: "Elegant interiors matched to your lifestyle, including 3D design, false ceilings, LED lighting, media walls, wardrobes and custom kitchens." },
  { slug: "materials", title: "Building Material Store", image: img.modernVilla, short: "High-quality construction materials at wholesale rates in Karachi.", body: "Cement, steel, blocks, bajri and tiles supplied at competitive rates, with dependable quality for projects across Karachi." },
  { slug: "architectural-design", title: "Architectural & 3D Design", image: img.classicMansion, short: "Modern maps, 3D elevation and interior visualization.", body: "Practical architectural plans, modern elevations and realistic interior visualization so every important decision is made before construction begins." },
];

export const registrations = ["100% Transparent", "A+ Material", "Expert Team"];

export const process = [
  { step: "01", title: "Book Consultation", body: "Tell us about your plot, space, requirements and budget." },
  { step: "02", title: "Site Visit, 3D Plan & Quotation", body: "We inspect, plan clearly and provide a transparent scope and quotation." },
  { step: "03", title: "Construction With Daily Updates", body: "Our supervised team executes the plan and keeps you informed." },
  { step: "04", title: "Handover & After-Service", body: "We complete final checks, hand over your space and remain available afterward." },
];

export const galleryImages = Object.values(img).filter((value) => typeof value === "string");
