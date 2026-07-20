export interface Business {
  id: string;
  name: string;
  owner: string;
  category: string;
  description: string;
  image: string;
  website: string;
}

export const businesses: Business[] = [
  {
    id: "b1",
    name: "Juhu Tech Solutions",
    owner: "Founder: Leo Hitansh Doshi",
    category: "IT & Tech",
    description: "Premium web application development, custom software design, and digital transformation consulting for growing enterprises.",
    image: "/businesses/tech.jpg",
    website: "https://example.com/tech-solutions"
  },
  {
    id: "b2",
    name: "Gold & Thread Apparel",
    owner: "Founder: Leo Dhruvi Shah",
    category: "Apparel",
    description: "Elegant and luxury custom clothing, merging traditional Indian embroidery techniques with modern geometric patterns.",
    image: "/businesses/apparel.jpg",
    website: "https://example.com/gold-thread"
  },
  {
    id: "b3",
    name: "The Chai Co.",
    owner: "Founder: Leo Naman Solanki",
    category: "Food & Beverage",
    description: "Freshly brewed organic masala chai and Indian street snacks served in eco-friendly clay cups with curated spices.",
    image: "/businesses/chai.jpg",
    website: "https://example.com/the-chai-co"
  },
  {
    id: "b4",
    name: "Vanguard Consulting",
    owner: "Founder: Leo Mit Shah",
    category: "Consulting",
    description: "Expert tax planning, business management advisory, and financial structuring services tailored for startup founders in Mumbai.",
    image: "/businesses/consulting.jpg",
    website: "https://example.com/vanguard"
  },
  {
    id: "b5",
    name: "Aura Wellness Clinic",
    owner: "Founder: Leo Urvashi Jain",
    category: "Healthcare",
    description: "Holistic physiotherapy, physical rehabilitation, and clinical wellness plans designed to restore body balance and vitality.",
    image: "/businesses/wellness.jpg",
    website: "https://example.com/aura-wellness"
  },
  {
    id: "b6",
    name: "Focus Capture Studio",
    owner: "Founder: Leo Vatsal Nagodra",
    category: "Creative & Media",
    description: "Professional corporate headshots, event cinematography, and dynamic visual content creation for leading digital agencies.",
    image: "/businesses/media.jpg",
    website: "https://example.com/focus-capture"
  },
  {
    id: "b7",
    name: "Suburban Bakehouse",
    owner: "Founder: Leo Hawra Sabir",
    category: "Food & Beverage",
    description: "Artisanal sourdough bread, gluten-free pastries, and hand-decorated cakes baked fresh every morning in Vile Parle.",
    image: "/businesses/bakery.jpg",
    website: "https://example.com/suburban-bakehouse"
  },
  {
    id: "b8",
    name: "Elite Sports Academy",
    owner: "Founder: Leo Darshan Rathod",
    category: "Sports & Fitness",
    description: "Structured football coaching programs, cricket leagues, and indoor multi-sport training facilities for youth and adults.",
    image: "/businesses/sports.jpg",
    website: "https://example.com/elite-sports"
  }
];
