import { Icon } from "@iconify/react";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-core-card rounded-2xl border border-core-line p-6 md:p-8 shadow-sm"
    >
      <h3 className="text-lg font-bold text-core-ink mb-6">Send a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-core-ink mb-1.5">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink placeholder:text-core-subtle focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-core-ink mb-1.5">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink placeholder:text-core-subtle focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-core-ink mb-1.5">Subject</label>
        <input
          type="text"
          placeholder="What's this about?"
          className="w-full px-4 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink placeholder:text-core-subtle focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-core-ink mb-1.5">Message</label>
        <textarea
          rows={5}
          placeholder="Write your message here..."
          className="w-full px-4 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink placeholder:text-core-subtle focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
      >
        Send Message
        <Icon icon="ph:paper-plane-right" />
      </button>
    </form>
  );
}
