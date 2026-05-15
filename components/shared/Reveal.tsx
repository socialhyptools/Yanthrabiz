"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
}) {
  const MotionComponent =
    Component === "section"
      ? motion.section
      : Component === "article"
        ? motion.article
        : Component === "header"
          ? motion.header
          : motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { defaultVariants };
