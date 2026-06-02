"use client";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
            Name
          </label>
          <input
            id="name"
            className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-32 p-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none"
            placeholder="Share the role, opportunity, or question..."
          />
        </div>

        <button
          type="submit"
          className="w-full h-11 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
        >
          Send Message <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
