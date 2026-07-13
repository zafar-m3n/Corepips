// src/components/ContactForm.jsx

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { getStoredAdTrackingData, clearStoredAdTrackingData } from "@/lib/adTracking";

const WEB3FORMS_ACCESS_KEY = "417feb7c-1792-445b-a650-48289a7d2a3c";

function Toast({ toast, onClose }) {
  if (!toast.show) return null;

  return createPortal(
    <div className="fixed left-4 right-4 top-6 z-50 sm:left-1/2 sm:right-auto sm:w-full sm:max-w-md sm:-translate-x-1/2">
      <div
        className={`flex items-start gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-300 ease-out ${
          toast.visible ? "translate-y-0 scale-100 opacity-100" : "-translate-y-4 scale-95 opacity-0"
        } ${
          toast.type === "success"
            ? "border-green-200 bg-green-50 text-green-700"
            : "border-red-200 bg-red-50 text-red-700"
        }`}
      >
        <div
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
            toast.type === "success" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <Icon
            icon={toast.type === "success" ? "ph:check-circle-fill" : "ph:warning-circle-fill"}
            className="text-lg"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm font-bold">{toast.type === "success" ? "Message sent" : "Submission failed"}</p>
          <p className="mt-0.5 text-sm leading-relaxed">{toast.message}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-0.5 rounded-full p-1 transition hover:bg-black/5"
          aria-label="Close notification"
        >
          <Icon icon="ph:x" className="text-base" />
        </button>
      </div>
    </div>,
    document.body,
  );
}

function ContactForm({ icon, title, subheading, buttonText }) {
  const navigate = useNavigate();

  const toastTimerRef = useRef(null);
  const toastAnimationRef = useRef(null);
  const isSubmittingRef = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tradingExperience: "",
    phone: "",
    botcheck: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    visible: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }

      if (toastAnimationRef.current) {
        clearTimeout(toastAnimationRef.current);
      }
    };
  }, []);

  function closeToast() {
    setToast((prev) => ({
      ...prev,
      visible: false,
    }));

    toastAnimationRef.current = setTimeout(() => {
      setToast({
        show: false,
        visible: false,
        type: "",
        message: "",
      });
    }, 300);
  }

  function showToast(type, message) {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    if (toastAnimationRef.current) {
      clearTimeout(toastAnimationRef.current);
    }

    setToast({
      show: true,
      visible: false,
      type,
      message,
    });

    requestAnimationFrame(() => {
      setToast({
        show: true,
        visible: true,
        type,
        message,
      });
    });

    toastTimerRef.current = setTimeout(() => {
      closeToast();
    }, 4000);
  }

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmittingRef.current) {
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.tradingExperience.trim() ||
      !formData.phone.trim()
    ) {
      showToast("error", "Please fill in all required fields before submitting.");
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    const adTrackingData = getStoredAdTrackingData();

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New CorePips Contact Form Submission",
      from_name: "CorePips Website",
      name: formData.name,
      email: formData.email,
      trading_experience: formData.tradingExperience,
      phone: formData.phone,
      botcheck: formData.botcheck,
      lp_gclid: adTrackingData.gclid,
      lp_keyword: adTrackingData.keyword,
      lp_location: adTrackingData.location,
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
        setFormData({
          name: "",
          email: "",
          tradingExperience: "",
          phone: "",
          botcheck: "",
        });

        clearStoredAdTrackingData();

        navigate("/thank-you", { state: { fromContactForm: true } });
        return;
      }

      showToast("error", result.message || "Something went wrong. Please try again.");
    } catch (error) {
      showToast("error", "Unable to send your message right now. Please try again later.");
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Toast toast={toast} onClose={closeToast} />

      <div className="bg-core-soft rounded-3xl border border-core-line p-6 sm:p-8 shadow-sm">
        <div className={`flex items-center ${icon ? "mb-4" : ""}`}>
          {icon && (
            <div className="w-12 h-12 rounded-2xl bg-core-sky flex items-center justify-center mb-4">
              <Icon icon={icon} className="text-core-blue text-2xl" />
            </div>
          )}

          <h3 className="font-serif text-2xl md:text-3xl text-core-ink mb-2">{title}</h3>

          <p className="text-sm text-core-muted leading-relaxed">{subheading}</p>
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
            <label htmlFor="phone" className="block text-sm font-semibold text-core-ink mb-2">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
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
                {buttonText || "Send Message"}
                <Icon icon="ph:arrow-right" className="text-lg" />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
