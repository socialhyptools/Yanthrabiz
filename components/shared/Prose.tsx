import { cn } from "@/lib/utils";

/**
 * Renders text content with paragraph breaks (split on blank lines).
 * Designed for the body copy in our category markdown files,
 * which uses simple plain-text paragraphs separated by blank lines.
 */
export function Prose({
  text,
  className,
  size = "default",
}: {
  text: string;
  className?: string;
  size?: "default" | "lg";
}) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div
      className={cn(
        "text-ink-700 leading-relaxed space-y-4",
        size === "lg" && "text-lg",
        className,
      )}
    >
      {paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </div>
  );
}
