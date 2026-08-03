export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  category: string;
  beneficiaries: string;
  volunteers: string;
  impactMetrics: string[];
  detailedStory: string;
  gallery: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "rakt",
    title: "Project Rakt 🩸",
    desc: "Join our mega blood donation drive and health camp across Vile Parle and Juhu. Partnering with Tata Memorial and Cooper Hospital to secure life-saving blood units.",
    image: "/gallery/rakt.jpeg",
    date: "July 2026",
    category: "Service Project",
    beneficiaries: "350+ Blood Receivers",
    volunteers: "40+ Leos & Lions",
    impactMetrics: [
      "250+ Blood Bags Safely Collected",
      "Partnered with Tata Memorial and Cooper Hospital",
      "Free Health Diagnostic Screenings for 150+ Citizens",
      "Distributed Platelet Donation Awareness Guides"
    ],
    detailedStory: "Project Rakt is the flagship healthcare initiative of the Leo Club of Juhu. Held annually, this mega blood donation camp serves as a vital pipeline for Mumbai's municipal blood banks. Setting up professional collection chambers, our Leos manage logistics, coordinate donor registrations, and distribute educational guides on platelet and plasma donations. The drive supports local thalassemic patients and emergency surgical wards, making a direct, life-saving impact in our community.",
    gallery: [
      "/gallery/rakt.jpeg",
      "/gallery/sumer.jpeg",
      "/gallery/Star Warriors.jpg",
      "/gallery/1781177142537_MI.jpg"
    ]
  },
  {
    id: "leoleague",
    title: "Leo League ⚽🏏",
    desc: "The annual sports carnival promoting physical wellness, competitive sportsmanship, and fundraising for children's primary education.",
    image: "/gallery/Leo-league.jpg",
    date: "August 2026",
    category: "Fun & Fellowship",
    beneficiaries: "150+ Youth Athletes",
    volunteers: "30+ Organizing Leos",
    impactMetrics: [
      "16 Football Tournament Squads",
      "12 Box Cricket Registered Teams",
      "Raised Funds for Underprivileged Student Scholarships",
      "Hosted Over 500+ Sports Spectators"
    ],
    detailedStory: "The Leo League is a premier sports carnival hosted in Juhu. Designed to promote physical fitness and competitive fellowship, the tournament brings together teams to compete in fast-paced box cricket, futsal, and table tennis. More than just a sports event, the league acts as a major youth outreach campaign and a fundraiser, with registration fees and sponsorships going directly toward providing education scholarships for underprivileged students in Mumbai.",
    gallery: [
      "/gallery/Leo-league.jpg",
      "/gallery/cricket.jpg",
      "/gallery/CHAMPION’S ROAR.jpg",
      "/gallery/roar.jpg"
    ]
  },
  {
    id: "hues",
    title: "Hues That Heal 🎨",
    desc: "Transforming cold pediatric wards in suburban municipal hospitals into cheerful, healing spaces through customized art murals.",
    image: "/gallery/art.jpg",
    date: "December 2025",
    category: "Service Project",
    beneficiaries: "200+ Pediatric Patients Daily",
    volunteers: "35+ Leos & Art Students",
    impactMetrics: [
      "4 Pediatric Hospital Wards Completely Painted",
      "Bright, Child-Friendly Murals Created",
      "Gifted 100+ Recreational Toy Kits",
      "Improved Recovery Ward Environments"
    ],
    detailedStory: "Hues That Heal is our pediatric wellness initiative. Understanding the anxiety children face when hospitalized, our volunteers and local art students collaborate to paint bright, cheerful, and interactive murals on the walls of pediatric wards in suburban municipal hospitals. By transforming white clinical walls into colorful spaces featuring forests, oceans, and friendly characters, we help ease anxiety and foster a positive environment for young patients recovering from illnesses.",
    gallery: [
      "/gallery/art.jpg",
      "/gallery/Meals Across Miles.jpg",
      "/gallery/11th Service Project Report – Circle of Care.jpg",
      "/gallery/masti-ki-pathshala.jpg"
    ]
  },
  {
    id: "vision",
    title: "Vision Beyond Boundaries 🏏",
    desc: "Promoting inclusivity in sports by organizing specialized cricket tournaments with visually impaired athletes.",
    image: "/gallery/cricket.jpg",
    date: "February 2026",
    category: "Service Project",
    beneficiaries: "80+ Visually Impaired Athletes",
    volunteers: "20+ Supporting Leos",
    impactMetrics: [
      "1 Dynamic Blind Cricket Match Conducted",
      "Sourced Sound-Emitting Cricket Equipment",
      "Distributed 50+ Custom Sports Kits",
      "Raised Public Awareness for Adaptive Sports"
    ],
    detailedStory: "Vision Beyond Boundaries is an inclusive sporting campaign designed to showcase the talents of visually impaired athletes. We organized a friendly box cricket tournament using sound-emitting acoustic cricket balls, which guide players via sound rather than sight. The event brought together professional blind cricketers and club volunteers, breaking down social barriers and highlighting the critical need for accessible recreational options and adaptive sports facilities in Mumbai.",
    gallery: [
      "/gallery/cricket.jpg",
      "/gallery/action.jpg",
      "/gallery/CHAMPION’S ROAR.jpg",
      "/gallery/sumer.jpeg"
    ]
  },
  {
    id: "sitaare",
    title: "Sitaare Zameen Par 🎬",
    desc: "Sensory-friendly private screenings of cinema and educational animations for neurodiverse children and their caregivers.",
    image: "/gallery/sumer.jpeg",
    date: "September 2025",
    category: "Celebration",
    beneficiaries: "120+ Neurodiverse Children",
    volunteers: "25+ Support Leos",
    impactMetrics: [
      "Private Sensory-Friendly Cinema Screening Hosted",
      "Custom Adjusted Lighting and Audio Standards",
      "Provided 120+ Custom Snack and Toy Bundles",
      "Supported 60+ Caregiver Families"
    ],
    detailedStory: "Sitaare Zameen Par is our specialized recreation project for children on the autism spectrum, ADHD, and other neurodiverse paths. Recognizing that standard movie theaters can be overwhelming due to loud noises and dark spaces, we host private screenings of children's movies with low, soft audio, dim lights, and spacious layouts. Volunteers are trained to provide support, ensuring that families and caregivers can enjoy a fun, judgment-free day at the cinema.",
    gallery: [
      "/gallery/sumer.jpeg",
      "/gallery/game.jpeg",
      "/gallery/Garba Night.jpg",
      "/gallery/celebration.jpeg"
    ]
  }
];
