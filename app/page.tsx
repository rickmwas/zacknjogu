import Link from "next/link";
import { ArrowRight, Newspaper, UserPlus, HeartHandshake } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { ManifestoHighlights } from "@/components/home/ManifestoHighlights";
import { TrackRecordPreview } from "@/components/home/TrackRecordPreview";
import { WardIssueCTA } from "@/components/home/WardIssueCTA";
import { NEWS_ARTICLES, CAMPAIGN_INFO } from "@/lib/data/campaignData";
import { AppleButton } from "@/components/ui/AppleButton";

export default function HomePage() {
  return (
    <div className="space-y-0 bg-[#0A0F1D]">
      {/* 1. Hero Section (Uncontainerized Candidate Cutout on Left, Right Text & CTAs) */}
      <HeroSection />

      {/* 2. 5-Point Manifesto Highlights (Apple Editorial Asymmetric Grid) */}
      <ManifestoHighlights />

      {/* 3. Community Track Record Preview */}
      <TrackRecordPreview />

      {/* 4. Ward Issue Reporting Civic Banner */}
      <WardIssueCTA />

      {/* 5. Campaign News & Press Releases Section */}
      <section className="py-20 sm:py-28 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-neutral-200/80 dark:border-neutral-800 pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-800 text-[#E31E24] text-xs font-black uppercase tracking-widest">
                Official Updates
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight uppercase">
                News & <span className="text-[#E31E24]">Press Statements</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
                Stay informed with official press releases, policy updates, and ground engagements from Zack Njogu.
              </p>
            </div>

            <Link href="/news" className="shrink-0">
              <AppleButton variant="outline" size="lg" className="bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold text-sm">
                <Newspaper className="w-4 h-4 text-[#E31E24]" />
                <span>View All News</span>
              </AppleButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="flex flex-col justify-between rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-100 dark:bg-red-950 text-[#E31E24] dark:text-red-400 border border-red-200 dark:border-red-900">
                      {article.category}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-neutral-950 dark:text-white line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="px-7 py-4 bg-white dark:bg-neutral-800/50 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs font-bold">
                  <span className="text-neutral-500 dark:text-neutral-400">{article.publishedAt}</span>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#E31E24] dark:text-red-400 font-extrabold hover:underline"
                  >
                    <span>Read Statement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Volunteer & Supporter Call-to-Action */}
      <section className="py-20 sm:py-28 bg-[#0A0F1D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-800 text-red-400 text-xs font-black uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4 text-[#E31E24]" />
            <span>Join the Movement</span>
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading max-w-4xl mx-auto tracking-tight uppercase leading-tight">
            Be Part of Maai Mahiu&apos;s Transformative Journey
          </h2>

          <p className="text-neutral-300 text-base sm:text-xl max-w-2xl mx-auto font-body leading-relaxed">
            Mobilize youth, support logistics, or share our vision across your sub-location. Every voice shapes Maai Mahiu&apos;s future.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/volunteer" className="w-full sm:w-auto">
              <AppleButton variant="primary" size="lg" className="w-full sm:w-auto bg-[#E31E24] hover:bg-red-700 text-white font-bold text-base px-9 py-4 rounded-full shadow-xl">
                <UserPlus className="w-5 h-5" />
                <span>Register as a Volunteer</span>
              </AppleButton>
            </Link>
            <a
              href={CAMPAIGN_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-all shadow-xl"
            >
              <span>Join Campaign WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
