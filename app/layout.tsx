import type { Metadata } from "next";
import { Inter, Playfair_Display, Raleway, Poppins } from "next/font/google"; // Using Inter, Playfair Display, Raleway, and Poppins
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Leo Club of Juhu | Youth Leadership & Community Service in Mumbai",
  description: "Official community platform for Leo Club of Juhu, Mumbai. Discover impactful youth service projects, blood donation drives, sports leagues, and fellowship events.",
  keywords: [
    "Leo Club",
    "Leo Club Juhu",
    "Leo Club Mumbai",
    "Lions Clubs International Mumbai",
    "Youth NGOs Mumbai",
    "Volunteer Opportunities Vile Parle",
    "Youth Leadership Mumbai"
  ],
  metadataBase: new URL("https://leoclubjuhu.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Leo Club of Juhu | Youth Leadership & Community Service in Mumbai",
    description: "Official community platform for Leo Club of Juhu, Mumbai. Discover impactful youth service projects, blood donation drives, sports leagues, and fellowship events.",
    url: "https://leoclubjuhu.org",
    siteName: "Leo Club of Juhu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leo Club of Juhu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Club of Juhu | Youth Leadership & Community Service in Mumbai",
    description: "Official community platform for Leo Club of Juhu, Mumbai. Discover impactful youth service projects, blood donation drives, sports leagues, and fellowship events.",
    images: ["/og-image.png"],
  },
};

const ngoSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Leo Club of Juhu",
  "alternateName": "Leo Club Juhu",
  "url": "https://leoclubjuhu.org",
  "logo": "https://leoclubjuhu.org/logo.png",
  "description": "Official community platform for Leo Club of Juhu, Mumbai. Empowering youth through service, leadership, and community action.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gulmohar Road, Ground Floor, Mukesh Patel Engg. College",
    "addressLocality": "Vile Parle West, Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400056",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98209-80731",
    "contactType": "membership inquiry",
    "email": "leoclub.juhu@gmail.com"
  },
  "sameAs": [
    "https://www.instagram.com/leoclubofjuhu/",
    "https://www.linkedin.com/company/leoclubofjuhu"
  ]
};

const eventsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Project Rakt - Blood Donation Drive & Health Camp",
    "startDate": "2026-07-26T09:00:00+05:30",
    "endDate": "2026-07-26T17:00:00+05:30",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Mukesh Patel School of Engg., Vile Parle West",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gulmohar Road, Irla, Vile Parle West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400056",
        "addressCountry": "IN"
      }
    },
    "image": [
      "https://leoclubjuhu.org/gallery/rakt.jpeg"
    ],
    "description": "Mega blood donation drive and health camp across Vile Parle and Juhu by Leo Club of Juhu. Join and donate blood to save lives.",
    "organizer": {
      "@type": "Organization",
      "name": "Leo Club of Juhu",
      "url": "https://leoclubjuhu.org"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Leo League Sports Carnival",
    "startDate": "2026-08-15T08:00:00+05:30",
    "endDate": "2026-08-16T18:00:00+05:30",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Juhu Sports Ground",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Juhu Tara Road",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400049",
        "addressCountry": "IN"
      }
    },
    "image": [
      "https://leoclubjuhu.org/gallery/Leo-league.jpg"
    ],
    "description": "The ultimate sports carnival by Leo Club of Juhu featuring intense football, box cricket, and table tennis matches.",
    "organizer": {
      "@type": "Organization",
      "name": "Leo Club of Juhu",
      "url": "https://leoclubjuhu.org"
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${raleway.variable} ${poppins.variable}`}>
      <head>
        <meta property="og:title" content="Leo Club of Juhu | Youth Leadership & Community Service in Mumbai" />
        <meta property="og:description" content="Official community platform for Leo Club of Juhu, Mumbai. Discover impactful youth service projects, blood donation drives, sports leagues, and fellowship events." />
        <meta property="og:image" content="https://leoclubjuhu.org/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
        />
      </head>
      <body>
        <div className="bg-glow-1" />
        <div className="bg-glow-2" />
        {children}
      </body>
    </html>
  );
}

