import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">We usually reply within 1 business day</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-4">Contact DueSoon</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Need help with reminders, integrations, or billing? Send us a note and our team will follow up.
          </p>
        </div>

        <form
          className="space-y-6 card max-w-3xl"
          action="mailto:support@duesoon.net"
          method="post"
          encType="text/plain"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Alex Freelancer"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Business email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="you@studio.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">How can we help?</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Tell us about your workflow, integrations, or any blockers."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="details" className="text-sm font-semibold text-gray-700">Optional details</label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Share client types, reminder volume, or deadlines."
            />
          </div>

          <p className="text-sm text-gray-500">
            Submitting opens your default email client with everything prefilled so you can review before sending.
          </p>

          <button
            type="submit"
            className="btn-primary w-full sm:w-auto"
          >
            Send message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
