"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Etwas ist schiefgelaufen</h1>
        <p className="text-slate-600 mb-8">
          Es tut uns leid, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="/">Zur Startseite</Button>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-6 py-2.5 text-sm font-medium text-slate-900 hover:border-slate-300"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    </div>
  );
}

