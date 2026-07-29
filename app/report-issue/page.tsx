"use client";

import { useState } from "react";
import { ShieldAlert, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitWardIssueAction, ActionResponse } from "@/lib/actions/campaignActions";

const ISSUE_CATEGORIES = [
  { value: "roads", label: "Roads & Feeder Transport Access" },
  { value: "water", label: "Water Scarcity & Borehole Breakdown" },
  { value: "bursary", label: "Bursary Allocation Issue" },
  { value: "sanitation", label: "Market Sanitation & Waste" },
  { value: "youth", label: "Youth Sports & Vocational Facilities" },
  { value: "security", label: "Street Lighting & Security" },
];

export default function ReportIssuePage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ActionResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      reporterName: formData.get("reporterName") || undefined,
      reporterContact: formData.get("reporterContact"),
      location: formData.get("location"),
      issueCategory: formData.get("issueCategory"),
      description: formData.get("description"),
      honeypot: formData.get("bot_check_ref"),
    };

    const res = await submitWardIssueAction(payload);
    setLoading(false);
    setResponse(res);
  };

  return (
    <div className="py-12 md:py-20 space-y-12">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-800 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Civic Action Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight">
              Report a Ward Issue in Maai Mahiu
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg font-body leading-relaxed">
              Help us map priorities for County Assembly legislation. Log challenges in your village or sub-location directly.
            </p>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-6">
          
          <div>
            <h2 className="text-2xl font-bold font-heading text-neutral-900 dark:text-white">
              Ward Issue Reporting Form
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-body mt-1">
              Your feedback directly informs Zack Njogu&apos;s County Assembly legislative priorities.
            </p>
          </div>

          {response && (
            <div
              className={`p-4 rounded-xl text-sm font-medium flex items-start gap-3 ${
                response.success
                  ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800"
                  : "bg-red-50 dark:bg-red-950/60 text-red-900 dark:text-red-200 border border-red-200 dark:border-red-800"
              }`}
            >
              {response.success ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-semibold">{response.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 font-body">
            
            <input type="text" name="bot_check_ref" tabIndex={-1} autoComplete="off" className="hidden" />

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                Specific Location / Sub-Location <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                name="location"
                required
                placeholder="e.g. Munyu Primary Access Road, Kamere Borehole 2, Maai Mahiu Highway Market"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                Issue Category <span className="text-brand-red">*</span>
              </label>
              <select
                name="issueCategory"
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
              >
                {ISSUE_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                Detailed Description of Issue <span className="text-brand-red">*</span>
              </label>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Describe the issue, how long it has persisted, and how it affects local residents..."
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                Your Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                type="tel"
                name="reporterContact"
                required
                placeholder="0712345678 (Used only to clarify issue details)"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                Your Name (Optional)
              </label>
              <input
                type="text"
                name="reporterName"
                placeholder="You may leave blank to report anonymously"
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-red hover:bg-red-700 text-white font-semibold text-base transition-colors shadow-lg disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Logging Issue...</span>
                </>
              ) : (
                <>
                  <ShieldAlert className="w-5 h-5" />
                  <span>Submit Ward Issue Report</span>
                </>
              )}
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}
