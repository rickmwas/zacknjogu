import Link from "next/link";
import { ArrowRight, Newspaper, UserPlus, HeartHandshake } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { ManifestoHighlights } from "@/components/home/ManifestoHighlights";
import { TrackRecordPreview } from "@/components/home/TrackRecordPreview";
import { WardIssueCTA } from "@/components/home/WardIssueCTA";
import { NEWS_ARTICLES, CAMPAIGN_INFO } from "@/lib/data/campaignData";
import { SectionHeading } from "@/components/shared/SectionHeading";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. 5-Point Manifesto Highlights */}
      <ManifestoHighlights />

      {/* 3. Community Track Record Preview */}
      <TrackRecordPreview />

      {/* 4. Ward Issue Reporting Civic Banner */}
      <WardIssueCTA />

      {/* 5. Campaign News & Press Releases Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Latest Updates"
            title="Campaign News & Press Releases"
            description="Stay informed with official press releases, policy updates, and ground engagements from Zack Njogu."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {NEWS_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="flex flex-col justify-between rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-red-100 dark:bg-red-950/80 text-brand-red dark:text-red-400 border border-red-200 dark:border-red-900">
                      {article.category}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-heading line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="px-6 py-4 bg-white dark:bg-neutral-800/40 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 dark:text-neutral-400">{article.publishedAt}</span>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-brand-red dark:text-red-400 hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              <span>View All News & Statements</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Volunteer & Supporter Call-to-Action */}
      <section className="py-16 md:py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            <span>Join the Movement</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading max-w-3xl mx-auto">
            Be Part of Maai Mahiu&apos;s Transformative Journey
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-body">
            Whether you want to mobilize youth in your sub-location, support logistics, or share our vision online, your involvement matters.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/volunteer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red hover:bg-red-700 text-white font-semibold text-base transition-all shadow-lg active:scale-98"
            >
              <UserPlus className="w-5 h-5" />
              <span>Register as a Volunteer</span>
            </Link>
            <a
              href={CAMPAIGN_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base transition-all shadow-lg"
            >
              <span>Join WhatsApp Campaign Group</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
