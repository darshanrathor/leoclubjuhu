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
  title: "Leo Club of Juhu | Premier Youth Leadership & Community Service Club in Mumbai",
  description: "Official website of Leo Club of Juhu (Lions Clubs International). Join Mumbai's top Leo Club for youth leadership, impactful community service, professional networking, and fellowship.",
  keywords: [
    "Leo",
    "Leo Club",
    "Leo Club Juhu",
    "Leo Clubs",
    "Lions Clubs International",
    "Leo Club Mumbai",
    "youth leadership Mumbai",
    "community service Mumbai",
    "Leo Youth Club"
  ],
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Leo Club of Juhu - Aspire to Inspire | Youth Leadership & Service",
    description: "Join the leading Leo Club in Mumbai. Empowering youth through community service, leadership drives, and networking.",
    url: "http://localhost:3000",
    siteName: "Leo Club of Juhu",
    images: [
      {
        url: "/logo.png",
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
    title: "Leo Club of Juhu - Aspire to Inspire | Youth Leadership & Service",
    description: "Join the leading Leo Club in Mumbai. Empowering youth through community service, leadership drives, and networking.",
    images: ["/logo.png"],
  },
};

const ngoSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Leo Club of Juhu",
  "alternateName": ["Juhu Leo Club", "Leo Club"],
  "url": "http://localhost:3000",
  "logo": "http://localhost:3000/logo.png",
  "slogan": "Aspire to Inspire",
  "parentOrganization": {
    "@type": "NGO",
    "name": "Lions Clubs International"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gulmohar Road, Ground Floor, Mukesh Patel Engg. College, Opp Cooper Hospital, Irla, Vile Parle West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400056",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://instagram.com/leoclubofjuhu"
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
        <meta property="og:title" content="Leo Club of Juhu - Aspire to Inspire | Youth Leadership & Service" />
        <meta property="og:description" content="Join the leading Leo Club in Mumbai. Empowering youth through community service, leadership drives, and networking." />
        <meta property="og:image" content="http://localhost:3000/logo.png" />
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

