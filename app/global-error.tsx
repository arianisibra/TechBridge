"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Kritischer Fehler</h1>
            <p className="text-slate-600 mb-8">
              Es ist ein kritischer Fehler aufgetreten. Bitte laden Sie die Seite neu.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

