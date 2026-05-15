import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 gradient-hero">
      <Container size="narrow">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/10">
            Error 404
          </div>
          <h1 className="mt-5 text-6xl md:text-8xl font-bold tracking-tight text-ink-900">
            <span className="gradient-text-primary">404</span>
          </h1>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
            Page not found
          </h2>
          <p className="mt-4 text-lg text-ink-600 max-w-lg mx-auto">
            The page you are looking for doesn't exist or may have moved. Try
            heading back home or browsing our industries.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home className="h-5 w-5" />
                Back to home
              </Button>
            </Link>
            <Link href="/industries">
              <Button variant="outline" size="lg">
                <ArrowLeft className="h-5 w-5" />
                Browse industries
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
