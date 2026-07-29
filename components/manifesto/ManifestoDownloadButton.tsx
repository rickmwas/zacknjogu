"use client";

import { Download } from "lucide-react";

export function ManifestoDownloadButton() {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Manifesto PDF download requested. Download starting...");
  };

  return (
    <button
      onClick={handleDownload}
      type="button"
      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-red hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-md active:scale-95"
    >
      <Download className="w-4 h-4" />
      <span>Download Full Manifesto (PDF)</span>
    </button>
  );
}
