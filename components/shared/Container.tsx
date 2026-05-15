import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-10",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-[1440px]",
        size === "wide" && "max-w-[1600px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
