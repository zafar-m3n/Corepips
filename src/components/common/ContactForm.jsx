import { useState } from "react";
import { Icon } from "@iconify/react";

const WEB3FORMS_ACCESS_KEY = "417feb7c-1792-445b-a650-48289a7d2a3c";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tradingExperience: "",
    message: "",
    botcheck: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (!formData.name || !formData.email || !formData.tradingExperience || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields before submitting.",
      });

      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New CorePips Contact Form Submission",
      from_name: "CorePips Website",
      name: formData.name,
      email: formData.email,
      trading_experience: formData.tradingExperience,
      message: formData.message,
      botcheck: formData.botcheck,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully. We'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          tradingExperience: "",
          message: "",
          botcheck: "",
        });

        return;
      }

      setStatus({
        type: "error",
        message: result.message || "Something went wrong. Please try again.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-core-soft rounded-3xl border border-core-line p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-2xl bg-core-sky flex items-center justify-center mb-4">
          <Icon icon="ph:paper-plane-tilt" className="text-core-blue text-2xl" />
        </div>

        <h3 className="font-serif text-2xl md:text-3xl text-core-ink mb-2">Send us a message</h3>

        <p className="text-sm text-core-muted leading-relaxed">
          Fill out the form below and we’ll get back to you within 48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="checkbox"
          name="botcheck"
          checked={Boolean(formData.botcheck)}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-core-ink mb-2">
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            className="w-full h-12 rounded-xl border border-core-line bg-white px-4 text-sm text-core-ink placeholder:text-core-muted outline-none transition-all focus:border-core-blue focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-core-ink mb-2">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            autoComplete="email"
            className="w-full h-12 rounded-xl border border-core-line bg-white px-4 text-sm text-core-ink placeholder:text-core-muted outline-none transition-all focus:border-core-blue focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label htmlFor="tradingExperience" className="block text-sm font-semibold text-core-ink mb-2">
            What is your trading experience?
          </label>

          <div className="relative">
            <select
              id="tradingExperience"
              name="tradingExperience"
              value={formData.tradingExperience}
              onChange={handleChange}
              className="w-full h-12 appearance-none rounded-xl border border-core-line bg-white px-4 pr-10 text-sm text-core-ink outline-none transition-all focus:border-core-blue focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select your experience level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>

            <Icon
              icon="ph:caret-down"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-core-muted text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-core-ink mb-2">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help"
            rows="5"
            className="w-full resize-none rounded-xl border border-core-line bg-white px-4 py-3 text-sm text-core-ink placeholder:text-core-muted outline-none transition-all focus:border-core-blue focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {status.message && (
          <div
            className={`rounded-xl border px-4 py-3 text-sm font-medium ${
              status.type === "success"
                ? "border-green-200 bg-green-50 text-core-green"
                : "border-red-200 bg-red-50 text-red-600"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-core-blue px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Icon icon="ph:spinner-gap" className="text-lg animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Message
              <Icon icon="ph:arrow-right" className="text-lg" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
