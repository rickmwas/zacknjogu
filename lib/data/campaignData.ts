import { ManifestoPillar, CommunityProject, NewsArticle } from "@/types";

export const CAMPAIGN_INFO = {
  candidateName: "Zack Njogu",
  position: "Member of County Assembly (MCA)",
  ward: "Maai Mahiu Ward",
  subCounty: "Naivasha Sub-County",
  county: "Nakuru County",
  party: "Jubilee Party",
  slogan: "Maai Mahiu Mbele: Uongozi Bora, Uazi na Maendeleo",
  sloganTranslation: "Maai Mahiu Forward: Good Governance, Transparency & Development",
  phone: "+254 700 000 000",
  whatsapp: "+254 700 000 000",
  email: "info@zacknjogu.co.ke",
  officeAddress: "Main Street, Maai Mahiu Town (Near Inland Container Depot Access Road)",
  socials: {
    facebook: "https://facebook.com/ZackNjoguMCA",
    twitter: "https://twitter.com/ZackNjoguMCA",
    whatsapp: "https://chat.whatsapp.com/campaign-channel",
    tiktok: "https://tiktok.com/@zacknjogumca",
  },
};

export const MANIFESTO_PILLARS: ManifestoPillar[] = [
  {
    id: "youth-msme",
    number: "01",
    title: "Youth Empowerment & Local MSME Growth",
    shortSummary: "Capitalizing on Maai Mahiu's logistics hub position to create sustainable jobs, vocational training, and revolving credit funds for young entrepreneurs.",
    detailedPoints: [
      "Establishment of the Maai Mahiu Youth Innovation & Vocational Empowerment Center in partnership with Nakuru County.",
      "Facilitating priority tender allocations (30% AGPO directive) for local youth, women, and PWD groups in County infrastructure projects.",
      "Partnering with logistics operators at the Inland Container Depot (ICD) and SGR terminal for apprenticeship and employment placement.",
      "Creation of an interest-free revolving Chama loan fund for Boda Boda associations and market vendors.",
    ],
    iconName: "Briefcase",
    localImpactArea: "Maai Mahiu Town & SGR Logistics Corridor",
  },
  {
    id: "water-sanitation",
    number: "02",
    title: "Clean Water & Community Sanitation",
    shortSummary: "Ending persistent water scarcity in Munyu, Kamere, and Earth Dam sub-locations through solar-powered borehole infrastructure.",
    detailedPoints: [
      "Solarization of high-yield community boreholes to reduce pumping costs and lower water tariffs for households.",
      "Expanding pipe networks to underserved rural households in Munyu and Kamere sub-locations.",
      "Construction of modern, hygienic public sanitation blocks at the main Maai Mahiu highway market and truck stop.",
      "Rainwater harvesting systems installation for all public primary and secondary schools in the ward.",
    ],
    iconName: "Droplets",
    localImpactArea: "Munyu, Kamere & Rural Settlements",
  },
  {
    id: "bursary-transparency",
    number: "03",
    title: "Digital Bursary Management & Education",
    shortSummary: "Implementing 100% transparent, tech-enabled bursary allocation to eliminate favoritism and ensure zero bright students drop out.",
    detailedPoints: [
      "Launch of an open online and SMS-based Ward Bursary Tracker where parents can verify applications and disbursement lists publicly.",
      "Equal allocation per sub-location vetted by elected community elders and school principals rather than political handpicking.",
      "Full bursary scholarships for top-performing needy students joining secondary schools and TVET colleges.",
      "Upgrading early childhood development (ECDE) centers with modern learning materials and feeding programs.",
    ],
    iconName: "GraduationCap",
    localImpactArea: "All 5 Sub-Locations in Maai Mahiu Ward",
  },
  {
    id: "infrastructure-roads",
    number: "04",
    title: "Ward Roads & Market Infrastructure",
    shortSummary: "Upgrading feeder roads connecting farms and quarries to the main highway to lower transport costs and boost trade.",
    detailedPoints: [
      "Grading and murraming of critical agricultural and sand transportation feeder roads (e.g., Munyu-Maai Mahiu link).",
      "Installation of high-mast solar floodlights in markets and Boda Boda stages to enable a 24-hour local economy.",
      "Fair and regulated management of sand harvesting sites to protect environmental health while ensuring fair revenue share for local youth.",
      "Proper drainage channels along the main town center to prevent flash flooding during heavy rains.",
    ],
    iconName: "Truck",
    localImpactArea: "Quarry Routes, Highway Market & Feeder Roads",
  },
  {
    id: "governance-transparency",
    number: "05",
    title: "Accountable Governance & Public Participation",
    shortSummary: "Quarterly town hall meetings and digital citizen reporting tools so every resident has a direct voice in County Assembly representation.",
    detailedPoints: [
      "Quarterly rotational Public Participation Assemblies held across all sub-locations before major County Budget votes.",
      "Publishing annual Ward Development Fund audit reports online and on public noticeboards.",
      "Establishment of a 24/7 Ward Issue Reporting portal allowing residents to submit road damage, water breakdowns, or emergency complaints directly.",
    ],
    iconName: "ShieldCheck",
    localImpactArea: "Maai Mahiu Ward Assembly Representation",
  },
];

export const COMMUNITY_PROJECTS: CommunityProject[] = [
  {
    id: "munyu-water-borehole",
    title: "Munyu Community Water Solarization",
    location: "Munyu Sub-Location",
    category: "Water Infrastructure",
    status: "Completed",
    description: "Replaced high-cost diesel generator pumps with a 15kW solar pumping system, cutting water costs by 60% for over 1,200 households.",
    impactMetrics: "1,200+ Households Served",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "market-solar-lights",
    title: "Highway Market Solar Floodlighting",
    location: "Maai Mahiu Main Town",
    category: "Trade & Security",
    status: "Completed",
    description: "Erected four 30-meter high-mast solar lighting towers across the main market area and truck parking bay to enhance security and extend trading hours.",
    impactMetrics: "400+ Traders & Operators Benefited",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "youth-boda-first-aid",
    title: "Boda Boda Safety & Empowerment Drive",
    location: "Kamere & Earth Dam Stages",
    category: "Youth & Safety",
    status: "Completed",
    description: "Provided safety gear, reflector jackets, and certified St. John Ambulance first-aid training to over 250 youth operators across 8 stages.",
    impactMetrics: "250+ Youth Trained & Equipped",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ecde-classrooms",
    title: "Model ECDE Classroom Upgrade",
    location: "Kijabe Border Primary",
    category: "Education",
    status: "In Progress",
    description: "Constructing modern child-friendly ECDE learning facilities with rainwater collection tanks and modern sanitation.",
    impactMetrics: "180 Children Benefiting",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    title: "Zack Njogu Unveils 5-Point Transformation Plan for Maai Mahiu Ward",
    slug: "zack-njogu-unveils-5-point-transformation-plan",
    excerpt: "Addressing residents and business leaders in Maai Mahiu Town, Zack Njogu outlined his clear blueprint focusing on youth job placement, water access, and bursary integrity.",
    content: `MAAI MAHIU, NAKURU — In a well-attended consultative meeting with community leaders, youth representatives, and local business owners, Zack Njogu formally presented his 5-point manifesto for Maai Mahiu Ward.

"Maai Mahiu is the heartbeat of Naivasha's logistics and transit economy," stated Zack Njogu. "Yet our youth still struggle to access vocational training, our mothers spend hours seeking clean water, and our bright students risk dropping out due to opaque bursary systems. My campaign is built on tangible, measurable commitments to change this reality."

Key highlights of the transformation plan include solarizing existing community boreholes in Munyu and Kamere, setting up an open online/SMS bursary tracking system, and advocating for 30% local youth recruitment across logistics companies operating within the Inland Container Depot (ICD).

Community elders present welcomed the policy-first approach, noting that the ward requires energetic, technology-oriented leadership capable of advocating effectively in the Nakuru County Assembly.`,
    category: "Policy",
    featuredImageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2026-07-20",
    author: "Zack Njogu Communications",
    readTime: "3 min read",
  },
  {
    id: "2",
    title: "Bursary Transparency Initiative: How Open Technology Will Protect Student Futures",
    slug: "bursary-transparency-initiative-open-technology",
    excerpt: "Opaque bursary allocations have disadvantaged deserving students for years. Learn how our digital tracker will bring 100% public accountability.",
    content: `Education is the ultimate equalizer. However, for many families in Maai Mahiu Ward, securing a County Bursary has been marred by political favoritism and delays.

Zack Njogu's education roadmap introduces the Ward Digital Bursary Portal. Under this new initiative:
1. Every application will receive an automated tracking code via SMS.
2. Selection committees will comprise verified community representatives from each of the 5 sub-locations.
3. Full lists of successful beneficiaries and amounts awarded will be posted publicly online and at local chief offices.

"No child in Maai Mahiu should stay home from school while public funds intended for their education are mismanaged," Zack Njogu emphasized.`,
    category: "Community Initiative",
    featuredImageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2026-07-15",
    author: "Zack Njogu Communications",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Youth & Boda Boda Operators Engagement Forum Held in Maai Mahiu Town",
    slug: "youth-boda-boda-operators-engagement-forum",
    excerpt: "Over 300 youth operators convened to discuss road safety, SACCO credit access, and strategic partnerships with highway transport firms.",
    content: `Youth engaged in the transport sector form the backbone of local mobility in Maai Mahiu. On Saturday, Zack Njogu hosted an interactive listening forum at the main town center with leaders from 14 Boda Boda stages.

Discussions focused on practical solutions, including County support for SACCO registration, group insurance coverage, and establishing dedicated, illuminated parking bays.

Participants commended Zack for treating youth operators as key economic partners rather than political rally props.`,
    category: "Youth & Economy",
    featuredImageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
    publishedAt: "2026-07-10",
    author: "Zack Njogu Communications",
    readTime: "3 min read",
  },
];
