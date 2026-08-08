export interface Business {
  id: string;
  name: string;
  owner: string;
  founderName: string;
  category: string;
  description: string;
  image: string;
  founderPhoto: string;
  logo: string;
  website: string;
  instagram: string;
  linkedin: string;
  story: string;
  companyDescription: string;
  achievements: string[];
  quote: string;
  foundedYear: string;
  teamSize: string;
}

export const businesses: Business[] = [
  {
    id: "b1",
    name: "Deescape",
    owner: "Founder: Leo Drashti Mehta",
    founderName: "Leo Drashti Mehta",
    category: "EXPERIENTIAL & SOCIAL COMMUNITY",
    description: "Hosting curated social events, immersive experiences, and board game socials to foster real-world connections and community fellowship.",
    image: "/businesses/tech.jpg",
    founderPhoto: "/team/drashti.jpeg",
    logo: "🎲",
    website: "https://example.com/deescape",
    instagram: "https://instagram.com/deescape",
    linkedin: "https://linkedin.com/company/deescape",
    story: "Drashti Mehta founded Deescape in 2024 to combat digital fatigue and create safe, welcoming spaces for real-world interactions. Seeing the need for offline connection, she launched weekly board game meetups and interactive social events. Today, Deescape is one of Mumbai's fastest-growing experiential community brands, bringing people together through play and conversation.",
    "companyDescription": "Deescape is an experiential social community designed to bring people together through curated social gatherings, board game events, and offline networking meetups.",
    "achievements": [
      "Hosted over 50+ offline social and board game meetups.",
      "Built a vibrant community of 1,000+ active members in Mumbai.",
      "Collaborated with leading cafes and community spaces across suburban Mumbai."
    ],
    "quote": "Leo Club of Juhu taught me how fellowship is the foundation of community. At Deescape, we translate that into real-world offline connections.",
    "foundedYear": "2024",
    "teamSize": "5+ Event Organizers"
  },
  {
    "id": "b2",
    "name": "Vision",
    "owner": "Founder: Leo Dhruvi Shah",
    "founderName": "Leo Dhruvi Shah",
    "category": "LUXURY APPAREL",
    "description": "Elegant and luxury custom clothing, merging traditional Indian embroidery techniques with modern geometric patterns.",
    "image": "/businesses/apparel.jpg",
    "founderPhoto": "/team/dhruvi.jpeg",
    "logo": "✨",
    "website": "https://example.com/vision-apparel",
    "instagram": "https://instagram.com/visionapparel",
    "linkedin": "https://linkedin.com/company/visionapparel",
    "story": "Dhruvi Shah launched Vision with a desire to showcase traditional Indian textiles in contemporary luxury silhouettes. Combining heritage hand-embroidery with clean cuts, she established a premier studio catering to Mumbai's fashion-conscious youth. By supporting local artisans, Vision delivers slow-fashion designs that inspire confidence and class.",
    "companyDescription": "Vision is a boutique luxury fashion house specializing in modern bridal, festive, and premium custom wear, crafted in collaboration with authentic heritage artisans.",
    "achievements": [
      "Showcased at Mumbai Fashion Week's Designer Spotlight.",
      "Partnered with 20+ traditional weaving families in Gujarat.",
      "Designed bespoke collections for high-profile community events."
    ],
    "quote": "Supporting our community's artisans is at the core of our business model, a value I learned from Leo Club's service drives.",
    "foundedYear": "2023",
    "teamSize": "12+ Staff"
  },
  {
    "id": "b3",
    "name": "Kytto",
    "owner": "Founder: Leo Vatsal",
    "founderName": "Leo Vatsal",
    "category": "CRAFT TEA & BEVERAGE",
    "description": "Freshly brewed organic masala chai and Indian street snacks served in eco-friendly clay cups with curated spices.",
    "image": "/businesses/chai.jpg",
    "founderPhoto": "/team/vatsal.jpeg",
    "logo": "☕",
    "website": "https://example.com/kytto",
    "instagram": "https://instagram.com/kytto",
    "linkedin": "https://linkedin.com/company/kytto",
    "story": "Vatsal launched Kytto with a dream of standardizing India's favorite beverage: Masala Chai, served with strict hygiene and high-quality organic ingredients. Sourcing organic leaves from Darjeeling and combining them with freshly crushed spices, Kytto has become Juhu's favorite hangout spot for tea lovers.",
    "companyDescription": "Kytto is a fast-casual beverage brand serving artisanal organic teas, specialty coffee, and clean Indian street foods in eco-friendly clay kulhads.",
    "achievements": [
      "Served over 50,000+ happy tea patrons in suburban Mumbai.",
      "Launched 2 custom corporate catering partnerships in Vile Parle.",
      "100% plastic-free service using biodegradable clay cups."
    ],
    "quote": "Chai brings people together. Sponsoring Leo Juhu fellowship meets gave me the insight that a great cup of tea builds bonds.",
    "foundedYear": "2024",
    "teamSize": "8+ Staff"
  },
  {
    "id": "b4",
    "name": "Oddo",
    "owner": "Founder: Leo Prashant",
    "founderName": "Leo Prashant",
    "category": "T-SHIRTS & STREETWEAR",
    "description": "High-quality, minimal typographic graphic t-shirts and custom streetwear designed for urban youth in Mumbai.",
    "image": "/businesses/consulting.jpg",
    "founderPhoto": "/team/mit.jpeg",
    "logo": "👕",
    "website": "https://example.com/oddo",
    "instagram": "https://instagram.com/oddo",
    "linkedin": "https://linkedin.com/company/oddo",
    "story": "Prashant founded Oddo to give voice to Mumbai's street culture through apparel. Unhappy with generic, mass-produced fast fashion, he started printing custom graphic tees for fellow university students. Today, Oddo designs streetwear collections that merge street-art aesthetics with premium cotton fabrics, loved by young adults.",
    "companyDescription": "Oddo is a premium graphic streetwear label catering to India's youth culture with limited-edition drop collections of t-shirts, hoodies, and activewear.",
    "achievements": [
      "Sold 10,000+ t-shirts in our first year of operations.",
      "Successfully launched 5 limited-edition capsule drops.",
      "Grown social community to over 15,000+ active fashion enthusiasts."
    ],
    "quote": "Streetwear is about identity. Leo Club gave me the platform to express myself and lead community drives, which now guides Oddo's vision.",
    "foundedYear": "2024",
    "teamSize": "6+ Employees"
  }
];
