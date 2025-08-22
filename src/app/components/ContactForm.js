"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    whatsapp: "",

    name: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        setResponseMessage(
          "Thank you for reaching out! We'll get back to you soon."
        );
        setFormData({
          name: "",
          whatsapp: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="mb-16 ">
      <div className="max-w-4xl  mx-auto">
        {/* Terminal Window */}
        <div className="bg-black rounded-md border border-gray-700 overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-gray-950 px-4 py-3 flex items-center justify-between ">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono">
              📧 contact_protocol.sh
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-3 font-mono text-sm">
            {/* Terminal Prompt */}
            <div className="mb-6">
              <div className="text-green-400 mb-2">
                {">"} Ready for secure transmission
              </div>
              <div className="text-orange-400 mb-2">
                <span className="text-orange-500">gaurav@portfolio</span> : ~
              </div>
              <div className="text-white mb-4">
                $ fetch contact_form.protocol
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                  ENTER YOUR EMAIL
                </label>
                <div className="relative  ">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-orange-400">📧</span>
                  </div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="developer@gmail.com"
                    className="bg-black border-gray-800 text-white placeholder-gray-500 rounded-none pl-10 font-mono focus:border-orange-400 focus:ring-orange-400"
                    required
                  />
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                  ENTER YOUR NAME
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-blue-400">👤</span>
                  </div>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-black border-gray-800 text-white placeholder-gray-500 rounded-none pl-10 font-mono focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>

              {/* WhatsApp Input */}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                  WHATSAPP NO.
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-blue-400">📞</span>
                  </div>
                  <Input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+91 77963058**"
                    className="bg-black border-gray-800 text-white placeholder-gray-500 rounded-none pl-10 font-mono focus:border-blue-400 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
              {/* Message Input */}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                  ENTER YOUR MESSAGE
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-4">
                    <span className="text-green-400">💬</span>
                  </div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let's build something amazing together..."
                    rows={4}
                    className="bg-black border-gray-800 text-white placeholder-gray-500 rounded-none pl-10 font-mono focus:border-green-400 focus:ring-green-400 resize-none"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-transparent border w-full rounded-none cursor-pointer border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black px-8 py-3 font-mono uppercase tracking-wider transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      TRANSMITTING...
                    </span>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </Button>
              </div>
            </form>


            <div className=" text-center py-2 mt-5" >
            {responseMessage}
            </div>

            {/* Status Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex flex-wrap justify-center gap-6 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 uppercase tracking-wider">
                    ENCRYPTED CONNECTION
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400 uppercase tracking-wider">
                    SECURE TRANSMISSION
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 uppercase tracking-wider">
                    RESPONSE GUARANTEED
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 text-gray-500 text-xs">
              <div>Connection established to: gaurav.portfolio.dev</div>
              <div>Protocol: HTTPS/2.0 | Encryption: AES-256</div>
              <div className="mt-2">
                <span className="text-green-400">●</span> Ready to receive
                transmission
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const generateContactUsHTML = (data) => {
  const { name, whatsapp, instagram, email, message } = data;

  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(to right, #6a11cb, #2575fc); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Contact Us Submission</h1>
        </div>
        <div style="padding: 20px;">
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Name:</strong> ${name}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>WhatsApp Number:</strong> ${whatsapp}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Instagram Profile:</strong> ${instagram}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Email Address:</strong> ${email}
          </p>
          <p style="margin: 0 0 10px; font-size: 16px;">
            <strong>Message:</strong> ${message}
          </p>
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
          <p style="margin: 0 0 15px; font-size: 16px; color: #333;">
            Dear <strong>${name}</strong>,
          </p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #555;">
            Thank you for contacting us. We appreciate you taking the time to reach out and share your thoughts.
          </p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #555;">
            Our team will review your message and get back to you as soon as possible.
          </p>
          <p style="margin: 0 0 15px; font-size: 16px; color: #333;">
            Have a great day!
          </p>
        </div>
        <div style="background: #f9f9f9; padding: 10px; text-align: center; font-size: 14px; color: #555;">
          <p style="margin: 0;">This is an automated message. Please do not reply.</p>
        </div>
      </div>
    `;
};
