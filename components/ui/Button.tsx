import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-800 shadow-soft hover:shadow-glow",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-700 shadow-soft hover:shadow-card",
        outline:
          "border border-primary/20 bg-white text-primary hover:border-primary/40 hover:bg-primary-50",
        ghost: "text-primary hover:bg-primary-50",
        secondary:
          "bg-ink-100 text-ink-900 hover:bg-ink-200",
        white:
          "bg-white text-primary hover:bg-ink-50 shadow-soft",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-5 text-[15px] rounded-lg",
        lg: "h-13 px-7 text-base rounded-xl",
        xl: "h-15 px-8 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonStyles };
