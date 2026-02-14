"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rakshith.rg24@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="panel-modern max-w-2xl space-y-5 p-5 sm:p-6">
      <input
        type="hidden"
        name="_subject"
        value="New portfolio contact form message"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm text-gray-300">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="w-full rounded-xl bg-slate-900/80 border border-slate-600/80 px-4 py-3 text-gray-100 placeholder:text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm text-gray-300">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full rounded-xl bg-slate-900/80 border border-slate-600/80 px-4 py-3 text-gray-100 placeholder:text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm text-gray-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or idea..."
          required
          className="w-full rounded-xl bg-slate-900/80 border border-slate-600/80 px-4 py-3 text-gray-100 placeholder:text-gray-500 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-7 py-2.5 font-medium text-white shadow-lg shadow-cyan-900/30 hover:from-cyan-500 hover:to-blue-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm">Message sent successfully.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Unable to send right now. Please try again.
        </p>
      )}
    </form>
  );
}
