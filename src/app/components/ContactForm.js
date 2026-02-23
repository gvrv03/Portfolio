"use client";

import { useState } from "react";

/* ── Minimal SVG icons matching the site's lucide-style ── */
const IconMail = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconUser = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16.04 16.04 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMessage = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconSend = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <path d="m22 2-7 20-4-9-9-4z" />
    <path d="M22 2 11 13" />
  </svg>
);
const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconAlertCircle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    whatsapp: "",
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");
    setIsSuccess(null);

    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: generateContactUsHTML(formData),
          subject: `Contact Us Submission of ${formData.name}`,
          email: ["gxurav.work@gmail.com", "itsgaurav3112003@gmail.com"],
        }),
      });

      const response2 = await fetch("/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: generateThankYouHTML(formData?.name),
          subject: `Thanks for Contacting us ${formData.name}!`,
          email: formData?.email,
        }),
      });

      if (response.ok && response2.ok) {
        setIsSuccess(true);
        setResponseMessage("Message sent! I'll get back to you shortly.");
        setFormData({ name: "", whatsapp: "", email: "", message: "" });
      } else {
        setIsSuccess(false);
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setResponseMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* Shared input class — mirrors the dark border-gray-800 cards used site-wide */
  const inputCls =
    "w-full bg-transparent border border-gray-800 text-white text-sm " +
    "pl-9 pr-4 py-2.5 rounded-md placeholder-gray-600 outline-none " +
    "transition-colors duration-200 " +
    "focus:border-gray-600 hover:border-gray-700";

  return (
    <section className="mb-16">
      {/* ── Section heading — identical to "Academics" / "Cool places I worked at" ── */}
      <h2 className="text-2xl font-bold text-white mb-8">Get in touch</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row: Email + Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label className="flex items-center gap-1.5 text-gray-400 text-xs font-medium mb-2">
              <IconMail /> Email address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                <IconMail />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputCls}
                required
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="flex items-center gap-1.5 text-gray-400 text-xs font-medium mb-2">
              <IconUser /> Full name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                <IconUser />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputCls}
                required
              />
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <label className="flex items-center gap-1.5 text-gray-400 text-xs font-medium mb-2">
            <IconPhone /> WhatsApp number
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
              <IconPhone />
            </span>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+91 77963 058**"
              className={inputCls}
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="flex items-center gap-1.5 text-gray-400 text-xs font-medium mb-2">
            <IconMessage /> Your message
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-600 pointer-events-none">
              <IconMessage />
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Let's build something amazing together..."
              rows={5}
              className={`${inputCls} resize-none`}
              required
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Response banner (left side) */}
          {responseMessage ? (
            <div
              className={`flex items-center gap-2 text-sm ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {isSuccess ? <IconCheck /> : <IconAlertCircle />}
              <span>{responseMessage}</span>
            </div>
          ) : (
            <p className="text-gray-600 text-xs">
              I typically respond within 24 hours.
            </p>
          )}

          {/* Submit button — matches site's primary button style */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold
              transition-all duration-200
              ${
                isSubmitting
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-200 active:scale-95"
              }
            `}
          >
            {isSubmitting ? (
              <>
                <span className="flex gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0ms]" />
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:150ms]" />
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:300ms]" />
                </span>
                Sending…
              </>
            ) : (
              <>
                <IconSend />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

/* ─── Email HTML generators (unchanged) ─── */
const generateContactUsHTML = (data) => {
  const { name, whatsapp, instagram, email, message } = data;
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(to right, #6a11cb, #2575fc); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Contact Us Submission</h1>
        </div>
        <div style="padding: 20px;">
          <p style="margin: 0 0 10px; font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 10px; font-size: 16px;"><strong>WhatsApp Number:</strong> ${whatsapp}</p>
          <p style="margin: 0 0 10px; font-size: 16px;"><strong>Instagram Profile:</strong> ${instagram}</p>
          <p style="margin: 0 0 10px; font-size: 16px;"><strong>Email Address:</strong> ${email}</p>
          <p style="margin: 0 0 10px; font-size: 16px;"><strong>Message:</strong> ${message}</p>
        </div>
        <div style="background: #f9f9f9; padding: 10px; text-align: center; font-size: 14px; color: #555;">
          <p style="margin: 0;">Thank you for contacting us!</p>
        </div>
      </div>
    `;
};

const generateThankYouHTML = (name) => {
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(to right, #00c6ff, #0072ff); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank You!</h1>
        </div>
        <div style="padding: 20px; text-align: center;">
          <p style="margin: 0 0 15px; font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #555;">Thank you for contacting us. We appreciate you taking the time to reach out and share your thoughts.</p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #555;">Our team will review your message and get back to you as soon as possible.</p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #333;">Have a great day!</p>
        </div>
        <div style="background: #f9f9f9; padding: 10px; text-align: center; font-size: 14px; color: #555;">
          <p style="margin: 0;">This is an automated message. Please do not reply.</p>
        </div>
      </div>
    `;
};
