"use client";

import { useState } from "react";
import { ChevronRight, Building2, Users, HeartHandshake, Laptop, ShieldCheck, HeartPulse, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "youth", label: "Youth" },
  { id: "women", label: "Women" },
];

const MANIFESTO_ITEMS = [
  {
    id: "infrastructure",
    category: "infrastructure",
    icon: Building2,
    title: "Smart Infrastructure",
    description: "Better roads, drainage, lighting and modern public facilities.",
    details: [
      "Grading and murraming of agricultural and quarry feeder roads.",
      "Solar high-mast floodlights at highway markets and Boda Boda stages.",
      "Flash flood drainage channels in Maai Mahiu Town center.",
    ],
  },
  {
    id: "youth",
    category: "youth",
    icon: Users,
    title: "Youth Empowerment",
    description: "Skills, innovation hubs, sports and job opportunities.",
    details: [
      "Vocational Empowerment Center for technical skill certification.",
      "30% priority county tender allocations for local youth groups.",
      "Apprenticeship placement at Inland Container Depot (ICD) and SGR terminal.",
    ],
  },
  {
    id: "women",
    category: "women",
    icon: HeartHandshake,
    title: "Women Advancement",
    description: "Opportunities, support programs and safe spaces.",
    details: [
      "Revolving Chama loan fund for market women and micro-entrepreneurs.",
      "Hygienic public sanitation and daycare facilities at main market hubs.",
      "Maternal health advocacy and clean water access reduction.",
    ],
  },
  {
    id: "digital",
    category: "youth",
    icon: Laptop,
    title: "Digital & Smart Services",
    description: "Leveraging technology for better communication and efficient service delivery.",
    details: [
      "100% Open SMS and online Ward Bursary Tracker.",
      "24/7 Ward Issue Reporting Portal for immediate civic response.",
      "Digital public noticeboards for county budget transparency.",
    ],
  },
  {
    id: "governance",
    category: "all",
    icon: ShieldCheck,
    title: "Transparent Leadership",
    description: "Open projects, public updates and community participation.",
    details: [
      "Quarterly rotational Town Hall Barazas across all 5 sub-locations.",
      "Public audit reports of Ward Development Fund expenditures.",
      "Community elder vetting for bursary awards.",
    ],
  },
  {
    id: "health",
    category: "women",
    icon: HeartPulse,
    title: "Health & Wellbeing",
    description: "Accessible healthcare, maternal care and wellness programs.",
    details: [
      "Upgrading local dispensaries with essential medical supplies.",
      "Solarizing water pumps at Munyu and Kamere community boreholes.",
      "Ward sports leagues and youth mental health support forums.",
    ],
  },
];

export function ManifestoAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string>("infrastructure");

  const filteredItems = activeCategory === "all"
    ? MANIFESTO_ITEMS
    : MANIFESTO_ITEMS.filter((item) => item.category === activeCategory || item.category === "all");

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Screen 03: Apple HIG Segmented Control Filter Tabs */}
      <div className="flex items-center justify-center p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 max-w-md mx-auto">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={cn(
                "flex-1 py-2 px-4 rounded-full text-xs font-bold transition-all",
                isActive
                  ? "bg-[#E31E24] text-white shadow-md"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Screen 03: Sector List Cards with Red Line Icon */}
      <div className="space-y-3.5">
        {filteredItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? "" : item.id)}
                type="button"
                className="w-full p-5 text-left flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/60 text-[#E31E24] dark:text-red-400 flex items-center justify-center shrink-0 border border-red-200/60 dark:border-red-900/60">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-body">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={cn("p-2 rounded-full transition-transform duration-200", isExpanded ? "rotate-90 text-[#E31E24]" : "text-neutral-400")}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>

              {/* Expanded Pillar Details */}
              {isExpanded && (
                <div className="px-6 pb-5 pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-2 bg-neutral-50/50 dark:bg-neutral-950/50 animate-in fade-in duration-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E31E24]">
                    Action Plan Commitments:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-body">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

