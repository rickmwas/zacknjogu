import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Laptop, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";

export const metadata = {
  title: "About Zack Njogu | MCA Candidate Maai Mahiu Ward",
  description: "Learn about Zack Njogu, servant leader, community advocate, and technology enthusiast committed to transforming Maai Mahiu Ward.",
};

export default function AboutPage() {
  return (
    <div className="py-10 md:py-16 space-y-12">
      {/* Screen 02: About Zack Njogu Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3 text-left">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E31E24] dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-900">
            About Candidate
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white font-heading">
            About Zack Njogu
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-3xl">
            A servant leader, community advocate and technology enthusiast committed to transforming Maai Mahiu Ward through transparency, innovation and effective service delivery.
          </p>
        </div>

        {/* Screen 02: 3 Value Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-md space-y-3 hover:border-red-200 dark:hover:border-red-900 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/60 text-[#E31E24] dark:text-red-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-heading">
              Community Focused
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
              I listen, engage and act for our people across all 5 sub-locations in Maai Mahiu.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-md space-y-3 hover:border-red-200 dark:hover:border-red-900 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-heading">
              Tech Driven
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
              Using technology to simplify services, eliminate bursary favoritism, and increase accessibility.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-md space-y-3 hover:border-red-200 dark:hover:border-red-900 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white font-heading">
              Accountable Leader
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
              I believe in openness, transparency and measurable results in County Assembly oversight.
            </p>
          </div>
        </div>

        {/* Screen 02: Community Banner Photo */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
          <Image
            src="/images/baraza.png"
            alt="Zack Njogu Community Engagement Baraza"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-red-300">
              Grassroots Engagement
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Listening to Residents in Every Sub-Location
            </h3>
          </div>
        </div>

        {/* Screen 02: Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-neutral-950 text-white shadow-xl">
          <div className="text-center space-y-1 py-2 sm:border-r border-neutral-800">
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#E31E24] font-heading">10+</span>
            <span className="text-xs text-neutral-300 font-medium">Community Initiatives</span>
          </div>
          <div className="text-center space-y-1 py-2 sm:border-r border-neutral-800">
            <span className="block text-3xl sm:text-4xl font-extrabold text-amber-400 font-heading">5+</span>
            <span className="text-xs text-neutral-300 font-medium">Years of Experience</span>
          </div>
          <div className="text-center space-y-1 py-2">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading">100%</span>
            <span className="text-xs text-neutral-300 font-medium">Commitment to Service</span>
          </div>
        </div>

        {/* Candidate Callout Box */}
        <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-lg space-y-4">
          <h2 className="text-2xl font-bold text-neutral-950 dark:text-white font-heading">
            Personal Message to Maai Mahiu Residents
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
            &ldquo;Maai Mahiu Ward holds immense potential as Nakuru County&apos;s logistics gateway and agricultural center. My commitment is to ensure our ward gets its fair share of county development funds, our youth get priority job opportunities, and our bursary allocation is 100% transparent.&rdquo;
          </p>
          <div className="pt-2">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-bold text-sm transition-all shadow-md"
            >
              <span>Join Zack&apos;s Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

