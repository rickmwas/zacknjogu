import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "News & Updates | Zack Njogu MCA Campaign",
  description: "Read official news, press releases, and community baraza updates from Zack Njogu.",
};

const NEWS_LIST = [
  {
    id: 1,
    title: "Zack Njogu Holds Successful Community Baraza in Karunge",
    slug: "zack-njogu-holds-successful-community-baraza-in-karunge",
    date: "18 MAY 2025",
    excerpt: "We discussed key issues affecting Maai Mahiu Ward including roads, water, youth employment and security.",
    image: "/images/baraza.png",
  },
  {
    id: 2,
    title: "Youth Engagement Forum a Success",
    slug: "youth-engagement-forum-a-success",
    date: "10 MAY 2025",
    excerpt: "Young people shared ideas on opportunities, vocational training, and technology innovation.",
    image: "/images/candidate.png",
  },
  {
    id: 3,
    title: "Clean-Up Exercise Across the Ward",
    slug: "clean-up-exercise-across-the-ward",
    date: "03 MAY 2025",
    excerpt: "Together, we keep our environment clean and healthy for all families in Maai Mahiu.",
    image: "/images/baraza.png",
  },
];

export default function NewsPage() {
  return (
    <div className="py-10 md:py-16 space-y-10">
      {/* Screen 05 Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-2 text-left">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E31E24] dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-900">
            Media & Press
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white font-heading">
            News & Updates
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-3xl">
            Stay informed with official press releases, baraza reports, and policy updates from Zack Njogu.
          </p>
        </div>

        {/* Screen 05: News Cards List */}
        <div className="space-y-6 pt-4 max-w-4xl">
          {NEWS_LIST.map((item) => (
            <article
              key={item.id}
              className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all grid grid-cols-1 sm:grid-cols-12 gap-5 items-center"
            >
              <div className="sm:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="sm:col-span-8 space-y-2 text-left">
                <span className="text-xs font-bold text-[#E31E24] dark:text-red-400 uppercase tracking-wider">
                  {item.date}
                </span>
                <h2 className="text-lg font-bold text-neutral-950 dark:text-white font-heading leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#E31E24] dark:text-red-400 hover:underline"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-4 text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-md"
          >
            <span>View All News</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

