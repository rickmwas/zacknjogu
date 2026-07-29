"use client";

import { useState, useEffect } from "react";
import { X, Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { CAMPAIGN_INFO } from "@/lib/data/campaignData";
import { submitContactAction, ActionResponse } from "@/lib/actions/campaignActions";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ActionResponse | null>(null);

  // Lock scroll when modal is open & handle Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      contactInfo: formData.get("contactInfo"),
      category: formData.get("category"),
      message: formData.get("message"),
      honeypot: formData.get("contact_confirm_field"),
    };

    const res = await submitContactAction(payload);
    setLoading(false);
    setResponse(res);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop Blur */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#FAF8F5] dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800 flex items-start justify-between">
          <div>
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#E31E24] dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-900">
              Direct Access
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white font-heading mt-2">
              Contact Zack Njogu & Team
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-body mt-1">
              We are here to listen. Reach out directly or leave a message below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-body text-left">
          
          {/* Quick Contact Buttons Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={`tel:${CAMPAIGN_INFO.phone}`}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 hover:border-red-200 dark:hover:border-red-900 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950 text-[#E31E24] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-bold uppercase text-neutral-400 block">Call Us</span>
                <span className="text-xs font-bold text-neutral-950 dark:text-white truncate block">
                  {CAMPAIGN_INFO.phone}
                </span>
              </div>
            </a>

            <a
              href={CAMPAIGN_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-900 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-bold uppercase text-neutral-400 block">WhatsApp</span>
                <span className="text-xs font-bold text-neutral-950 dark:text-white truncate block">
                  {CAMPAIGN_INFO.phone}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${CAMPAIGN_INFO.email}`}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-bold uppercase text-neutral-400 block">Email Us</span>
                <span className="text-xs font-bold text-neutral-950 dark:text-white truncate block">
                  {CAMPAIGN_INFO.email}
                </span>
              </div>
            </a>
          </div>

          <hr className="border-neutral-200 dark:border-neutral-800" />

          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-heading text-neutral-950 dark:text-white">
              Send a Direct Message
            </h3>

            {response && (
              <div
                className={`p-3.5 rounded-xl text-xs font-medium flex items-start gap-3.5 ${
                  response.success
                    ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800"
                    : "bg-red-50 dark:bg-red-950/60 text-red-900 dark:text-red-200 border border-red-200 dark:border-red-800"
                }`}
              >
                {response.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold">{response.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="contact_confirm_field" tabIndex={-1} autoComplete="off" className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-900 dark:text-white mb-1">
                    Your Name <span className="text-[#E31E24]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-900 dark:text-white mb-1">
                    Phone / Email <span className="text-[#E31E24]">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactInfo"
                    required
                    placeholder="0712345678 or email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-900 dark:text-white mb-1">
                  Inquiry Category
                </label>
                <select
                  name="category"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                >
                  <option value="general">General Constituent Inquiry</option>
                  <option value="meeting">Request Meeting / Event Invitation</option>
                  <option value="bursary">Bursary Policy Feedback</option>
                  <option value="media">Media & Press Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-900 dark:text-white mb-1">
                  Message <span className="text-[#E31E24]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Write your message..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E31E24] hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-md disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Secretariat</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
