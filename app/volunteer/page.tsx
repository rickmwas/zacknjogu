"use client";

import { useState } from "react";
import { CheckCircle2, UserPlus } from "lucide-react";

const WARD_AREAS = [
  "Maai Mahiu Town",
  "Munyu Sub-Location",
  "Kamere Sub-Location",
  "Earth Dam Sub-Location",
  "Longonot / Highway Corridor",
];

const INTEREST_AREAS = [
  "Grassroots Mobilization",
  "Youth & Boda Boda Logistics",
  "Women & Chama Engagement",
  "Digital & Social Media",
  "Polling Agent / Event Support",
];

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 md:py-16 space-y-8">
      {/* Screen 07 Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 text-left">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E31E24] dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-900">
          Volunteer Registration
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white font-heading">
          Join the Movement
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-2xl">
          Be part of the change. Your time, skills and support can make a big difference for Maai Mahiu Ward.
        </p>
      </section>

      {/* Screen 07 Form Card */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-lg space-y-6">
          
          <form onSubmit={handleSubmit} className="space-y-4 font-body">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24] text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0722 123 456"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24] text-sm"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24] text-sm"
              />
            </div>

            {/* Your Ward/Area Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                Your Ward / Area
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24] text-sm"
              >
                <option value="">Select your sub-location</option>
                {WARD_AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            {/* Area of Interest Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                Area of Interest
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24] text-sm"
              >
                <option value="">Select area of interest</option>
                {INTEREST_AREAS.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </div>

            {/* Screen 07: Red CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#E31E24] hover:bg-red-700 text-white font-bold text-sm transition-all shadow-md active:scale-98"
              >
                <UserPlus className="w-4 h-4" />
                <span>I Want to Volunteer</span>
              </button>
            </div>
          </form>

          {/* Screen 07: Success Notification Callout Box */}
          {submitted && (
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-medium flex items-start gap-3 animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Thank you!</p>
                <p>We have received your details and will get in touch with you soon.</p>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

