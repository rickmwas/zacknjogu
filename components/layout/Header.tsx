"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Zack" },
  { href: "/manifesto", label: "My Plan" },
  { href: "/community", label: "Community" },
  { href: "/news", label: "News & Updates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
];

interface HeaderProps {
  onOpenContact?: () => void;
}

export function Header({ onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Apple Editorial Continuous Marquee Ticker */}
      <div className="bg-[#E31E24] text-white text-[11px] sm:text-xs font-black uppercase tracking-widest py-1.5 overflow-hidden shadow-inner flex items-center">
        <div className="animate-ticker flex items-center gap-8 shrink-0">
          <span>★ MAAI MAHIU MBELE: UONGOZI BORA, UAZI NA MAENDELEO</span>
          <span>•</span>
          <span>VOTE ZACK NJOGU MCA</span>
          <span>•</span>
          <span>JUBILEE PARTY OFFICIAL CANDIDATE</span>
          <span>•</span>
          <span>MAAI MAHIU WARD • NAIVASHA SUB-COUNTY</span>
          <span>•</span>
          <span>★ MAAI MAHIU MBELE: UONGOZI BORA, UAZI NA MAENDELEO</span>
          <span>•</span>
          <span>VOTE ZACK NJOGU MCA</span>
          <span>•</span>
          <span>JUBILEE PARTY OFFICIAL CANDIDATE</span>
          <span>•</span>
          <span>MAAI MAHIU WARD • NAIVASHA SUB-COUNTY</span>
          <span>•</span>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-2xl border-b",
          scrolled
            ? "bg-[#FAF8F5]/90 dark:bg-neutral-950/90 border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3"
            : "bg-[#FAF8F5]/80 dark:bg-neutral-950/80 border-neutral-200/40 dark:border-neutral-800/40 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/jubilee_logo.png"
                alt="Jubilee Party Mbele Pamoja Logo"
                width={56}
                height={56}
                className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="hidden sm:block leading-tight">
                <span className="font-heading font-extrabold text-sm sm:text-base text-neutral-950 dark:text-white block tracking-tight">
                  Zack Njogu
                </span>
                <span className="text-[11px] text-[#E31E24] dark:text-red-400 font-bold uppercase tracking-wider block">
                  MCA • Maai Mahiu
                </span>
              </div>
            </Link>

            {/* Floating Glass Pill Navigation Bar */}
            <nav className="hidden lg:flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.06] p-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.1] backdrop-blur-md shadow-inner">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 font-body relative",
                      isActive
                        ? "bg-white dark:bg-neutral-800 text-[#E31E24] dark:text-red-400 shadow-sm"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-neutral-800/50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              
              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-[#E31E24] text-neutral-900 dark:text-white font-bold text-xs transition-all shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#E31E24]" />
                  <span>Contact Us</span>
                </button>
              )}

              <Link
                href="/volunteer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-bold text-xs tracking-wide transition-all shadow-md shadow-red-600/20 active:scale-95"
              >
                <span>Join Movement</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />

              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  type="button"
                  className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[#E31E24]"
                  aria-label="Open contact modal"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded-xl bg-neutral-200/60 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-neutral-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#FAF8F5] dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-neutral-900 pb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/jubilee_logo.png"
                    alt="Jubilee Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <span className="font-heading font-extrabold text-base text-neutral-950 dark:text-white block">
                      Zack Njogu
                    </span>
                    <span className="text-xs text-[#E31E24] font-bold">
                      MCA Candidate • Maai Mahiu
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-neutral-500 hover:bg-neutral-200/60 dark:hover:bg-neutral-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-4 py-3 rounded-2xl text-sm font-bold transition-all flex items-center justify-between",
                        isActive
                          ? "bg-red-50 dark:bg-red-950/60 text-[#E31E24] dark:text-red-400"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-900"
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-neutral-400" />
                    </Link>
                  );
                })}

                {onOpenContact && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact();
                    }}
                    className="w-full text-left px-4 py-3 rounded-2xl text-sm font-bold text-[#E31E24] hover:bg-red-50 dark:hover:bg-red-950/40 transition-all flex items-center justify-between mt-2 border border-red-200/60 dark:border-red-900/60"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Contact Us</span>
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </nav>
            </div>

            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-900 space-y-4">
              <div className="p-4 rounded-2xl bg-[#E31E24] text-white space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-100">
                  <Sparkles className="w-4 h-4" />
                  <span>Be Part of the Change</span>
                </div>
                <p className="text-xs text-red-100 leading-relaxed font-body">
                  Together, we can build a better Maai Mahiu for everyone. Join our ward mobilization network today.
                </p>
                <Link
                  href="/volunteer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#E31E24] font-bold text-xs hover:bg-red-50 transition-colors shadow-sm"
                >
                  <span>Join the Movement →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
