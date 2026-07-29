import Link from "next/link";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800/80 pt-16 pb-12 font-body relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E31E24] text-white flex items-center justify-center font-bold text-lg font-heading shadow-md shadow-red-600/30">
                ZN
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl block leading-tight text-white tracking-tight">
                  Zack Njogu
                </span>
                <span className="text-xs text-[#E31E24] font-bold uppercase tracking-wider">
                  MCA Candidate • Maai Mahiu Ward
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Championing accountable, community-first governance across Maai Mahiu Ward. Focused on youth jobs, bursary integrity, and reliable water infrastructure.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-neutral-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Jubilee Party Candidate • Naivasha Sub-County</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-neutral-300">
              Campaign Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-medium">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Zack
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="hover:text-white transition-colors">
                  5-Point Manifesto
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Track Record & Projects
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News & Press Statements
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-white transition-colors">
                  Join as Volunteer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sub-locations & Civic Issue Trigger */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-neutral-300">
              Ward Civic Action
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400 font-medium">
              <li>
                <Link href="/report-issue" className="inline-flex items-center gap-1.5 text-amber-400 font-bold hover:underline">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Report Ward Issue</span>
                </Link>
              </li>
              <li className="text-xs text-neutral-500 pt-1 font-semibold uppercase tracking-wider">Sub-Locations Covered:</li>
              <li className="text-xs text-neutral-400">• Maai Mahiu Town</li>
              <li className="text-xs text-neutral-400">• Munyu Sub-Location</li>
              <li className="text-xs text-neutral-400">• Kamere & Earth Dam</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-neutral-300">
              Ward Office
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <span>{CAMPAIGN_INFO.officeAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CAMPAIGN_INFO.phone}`} className="hover:text-white transition-colors">
                  {CAMPAIGN_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${CAMPAIGN_INFO.email}`} className="hover:text-white transition-colors">
                  {CAMPAIGN_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
          <div>
            <p>© {new Date().getFullYear()} Zack Njogu MCA Campaign Team. All rights reserved.</p>
            <p className="mt-0.5">Authorized by Jubilee Party Secretariat • Naivasha Constituency.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Official Maai Mahiu MCA Campaign Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
