import {
  img,
  process as processSteps,
  services as serviceList,
  showreelUrl as reelUrl,
  site,
} from "@/lib/site-data";

export const logoUrl = img.logo;
export const showreelUrl = reelUrl;
export const company = {
  name: site.short,
  tagline: "Construction · Interior · Renovation",
  since: "About Tameer Construction & Interior",
  phoneDisplay: site.phone,
  phoneTel: site.phoneTel,
  whatsapp: site.whatsapp,
  email: site.email,
  addressShort: site.addressShort,
  address: site.address,
  hours: "Mon–Sat, 9:00 AM–8:00 PM",
  socials: [{ label: "Facebook", href: site.facebook }],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "Completed" | "Under Construction" | "Upcoming";
  category: "Villa" | "Renovation" | "Interior" | "Remodel";
  image: string;
  gallery: string[];
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "120-sq-yds-villa-dha",
    title: "120 Sq. Yds Villa",
    location: "DHA Phase 6, Karachi",
    status: "Completed",
    category: "Villa",
    image: img.projectVillaDha,
    gallery: [img.projectVillaDha, img.turnkeyVilla, img.luxuryHouse],
    blurb:
      "A complete Karachi villa project combining a strong structure, efficient planning and refined finishing.",
  },
  {
    slug: "240-sq-yds-renovation-bahria",
    title: "240 Sq. Yds Bungalow Renovation",
    location: "Bahria Town Karachi",
    status: "Completed",
    category: "Renovation",
    image: img.projectRenovationBahria,
    gallery: [img.projectRenovationBahria, img.renovationKitchen, img.bathroomRemodel],
    blurb:
      "A carefully planned bungalow renovation that modernized the layout, finishes and everyday comfort.",
  },
  {
    slug: "drawing-room-interior-clifton",
    title: "Drawing Room Interior",
    location: "Clifton, Karachi",
    status: "Completed",
    category: "Interior",
    image: img.interiorDesign,
    gallery: [img.interiorDesign, img.bedroomWoodwork, img.luxuryHouse],
    blurb:
      "A modern drawing room shaped through balanced lighting, custom woodwork and an elegant material palette.",
  },
  {
    slug: "kitchen-bath-remodel-pechs",
    title: "Kitchen & Bath Remodel",
    location: "PECHS, Karachi",
    status: "Completed",
    category: "Remodel",
    image: img.renovationKitchen,
    gallery: [img.renovationKitchen, img.bathroomRemodel, img.interiorDesign],
    blurb:
      "A practical kitchen and bathroom transformation focused on durable materials, smart storage and clean details.",
  },
];

export const services = serviceList.map((service) => ({
  title: service.title,
  body: service.body,
}));
export const process = processSteps;
