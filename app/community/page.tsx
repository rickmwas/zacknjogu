import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Working Together For Our Ward | Zack Njogu",
  description: "Community initiatives, clean-up drives, youth mentorship, and local group empowerment in Maai Mahiu Ward.",
};

const COMMUNITY_PHOTOS = [
  { id: 1, title: "Clean-Up Drive at Karunge Market", tag: "Environment", image: "/images/baraza.png" },
  { id: 2, title: "Youth Mentorship & Boda Boda Safety", tag: "Youth", image: "/images/candidate.png" },
  { id: 3, title: "Women Economic Empowerment Meeting", tag: "Women", image: "/images/baraza.png" },
  { id: 4, title: "Solar Water Borehole Project Inspection", tag: "Water", image: "/images/baraza.png" },
];

export default function CommunityPage() {
  return (
    <div className="py-10 md:py-16 space-y-12">
      {/* Screen 04 Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-2 text-left">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E31E24] dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-900">
            Community Action
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white font-heading">
            Working Together For Our Ward
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-3xl">
            From clean-up drives to youth mentorship and supporting local groups, we are building a stronger Maai Mahiu together.
          </p>
        </div>

        {/* Screen 04: 2x2 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {COMMUNITY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md group"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E31E24]">
                  {photo.tag}
                </span>
                <h3 className="text-base font-bold font-heading">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold text-xs hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span>View All Initiatives</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Screen 04: Red Callout Banner "Have an Idea or Concern?" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#E31E24] text-white space-y-4 shadow-xl text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-100">
            <Lightbulb className="w-4 h-4" />
            <span>Citizen Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Have an Idea or Concern?
          </h2>
          <p className="text-sm sm:text-base text-red-100 font-body leading-relaxed max-w-2xl">
            Share your thoughts with me. Together we find solutions that work for Maai Mahiu Ward.
          </p>
          <div className="pt-2">
            <Link
              href="/report-issue"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#E31E24] font-bold text-xs hover:bg-red-50 transition-colors shadow-md"
            >
              <span>Share Now →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

