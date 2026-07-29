import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { NEWS_ARTICLES } from "@/lib/data/campaignData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Zack Njogu Campaign`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug) || {
    id: "1",
    title: "Zack Njogu Holds Successful Community Baraza in Karunge",
    slug: "zack-njogu-holds-successful-community-baraza-in-karunge",
    excerpt: "We discussed key issues affecting Maai Mahiu Ward including roads, water, youth employment and security.",
    content: `Thank you to everyone who attended our community baraza at Karunge Market. We discussed key issues affecting Maai Mahiu Ward including roads, water, youth employment and security.\n\nYour voices matter. Together, we will prioritize, plan and deliver real solutions that improve our daily lives.\n\nLet's keep working together for a better future.`,
    category: "Community Event",
    featuredImageUrl: "/images/baraza.png",
    publishedAt: "18 MAY 2025",
    author: "Zack Njogu Communications",
    readTime: "3 min read",
  };

  return (
    <article className="py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Back Link */}
        <div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E31E24] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to News & Updates</span>
          </Link>
        </div>

        {/* Screen 10 Header */}
        <header className="space-y-3 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 dark:text-white font-heading leading-tight">
            {article.title}
          </h1>
          <div className="text-xs font-bold text-[#E31E24] dark:text-red-400 uppercase tracking-wider">
            {article.publishedAt}
          </div>
        </header>

        {/* Screen 10 Hero Photo */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md">
          <Image
            src={article.featuredImageUrl || "/images/baraza.png"}
            alt={article.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Screen 10 Body Paragraphs */}
        <div className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base font-body leading-relaxed space-y-4 text-neutral-700 dark:text-neutral-300">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Social Share Box */}
        <div className="p-6 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 mt-8">
          <h3 className="font-heading font-bold text-sm text-neutral-950 dark:text-white">
            Share this update with Maai Mahiu residents
          </h3>
          <div className="flex flex-wrap gap-2">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

