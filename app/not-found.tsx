import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Seite nicht gefunden</h2>
        <p className="text-slate-600 mb-8">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="/">Zur Startseite</Button>
          <Button variant="secondary" href="/contact">
            Kontakt
          </Button>
        </div>
      </div>
    </div>
  );
}

