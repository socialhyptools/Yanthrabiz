"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import {
  Send,
  User,
  Building2,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const interests = [
  { v: "buying", label: "Buying" },
  { v: "selling", label: "Selling" },
  { v: "partnership", label: "Partnership" },
  { v: "other", label: "Other" },
] as const;

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "buying",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initial);

  const update = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setState((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const interestLabel =
      interests.find((i) => i.v === state.interest)?.label ?? state.interest;

    const text = [
      `Hi ${siteConfig.name}, I'm reaching out via the contact form.`,
      "",
      `*Name:* ${state.name}`,
      state.company && `*Company:* ${state.company}`,
      `*Email:* ${state.email}`,
      state.phone && `*Phone:* ${state.phone}`,
      `*Interested in:* ${interestLabel}`,
      "",
      `*Message:*`,
      state.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-3xl bg-white border border-ink-200 shadow-soft p-7 md:p-10">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Send className="h-3.5 w-3.5" />
          Send a message
        </div>
        <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
          Tell us what you need
        </h2>
        <p className="mt-2 text-ink-600">
          Fill in the form and we'll open WhatsApp with everything pre-filled.
          One tap to send.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 grid gap-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            id="name"
            label="Your name"
            placeholder="Jane Smith"
            icon={User}
            value={state.name}
            onChange={update("name")}
            required
          />
          <Field
            id="company"
            label="Company"
            placeholder="Acme Industries"
            icon={Building2}
            value={state.company}
            onChange={update("company")}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            id="email"
            label="Email"
            type="email"
            placeholder="you@company.com"
            icon={Mail}
            value={state.email}
            onChange={update("email")}
            required
          />
          <Field
            id="phone"
            label="Phone"
            type="tel"
            placeholder="+91 ••••• •••••"
            icon={Phone}
            value={state.phone}
            onChange={update("phone")}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-ink-800 mb-2 block">
            I'm interested in
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {interests.map((opt) => {
              const isActive = state.interest === opt.v;
              return (
                <button
                  key={opt.v}
                  type="button"
                  onClick={() => setState((s) => ({ ...s, interest: opt.v }))}
                  className={
                    isActive
                      ? "rounded-xl border border-primary bg-primary text-white px-4 py-3 text-sm font-semibold shadow-soft transition-all"
                      : "rounded-xl border border-ink-200 bg-white text-ink-700 px-4 py-3 text-sm font-medium hover:border-primary/40 hover:bg-primary-50/40 transition-colors"
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label
            className="text-sm font-semibold text-ink-800 mb-1.5 block"
            htmlFor="message"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={state.message}
            onChange={update("message")}
            className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y transition-shadow"
            placeholder="Tell us a bit about what you're looking for..."
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
          <Button type="submit" variant="primary" size="lg">
            <Send className="h-5 w-5" />
            Send via WhatsApp
          </Button>
          <div className="flex items-start gap-2 text-sm text-ink-500">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>
              Opens WhatsApp with your full message ready. We don't store
              anything on our end.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  required,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon: ComponentType<{ className?: string }>;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label
        className="text-sm font-semibold text-ink-800 mb-1.5 block"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full rounded-xl border border-ink-200 bg-white pl-11 pr-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-shadow"
        />
      </div>
    </div>
  );
}
