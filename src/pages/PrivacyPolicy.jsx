import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const sections = [
  {
    title: 'Information We Collect',
    body: [
      'We collect information you provide directly, such as account details, client contacts, invoices, reminder schedules, and billing information. We also gather usage data about how you interact with the Service, device information, and log data such as IP address, browser type, and timestamps.',
      'If you connect third-party services (e.g., Gmail, Slack, payment processors), we process the data necessary to deliver the requested automations, subject to each integration\'s permissions.',
    ],
  },
  {
    title: 'How We Use Information',
    body: [
      'To provide, maintain, and improve the Service, including scheduling reminders, syncing conversations, and monitoring payment statuses.',
      'To personalize experiences, troubleshoot issues, detect abuse, and develop new features.',
      'To communicate with you about account changes, product updates, security alerts, and marketing messages (where permitted).',
    ],
  },
  {
    title: 'How We Share Information',
    body: [
      'With service providers who support infrastructure, analytics, customer support, payment processing, and communications. These partners are bound by confidentiality obligations.',
      'With third-party platforms you choose to connect (e.g., Gmail, Outlook, Slack, WhatsApp, Stripe). Data shared with those services is governed by their respective policies.',
      'When required by law, to protect our rights, or to prevent fraud or abuse of the Service.',
      'In connection with a merger, acquisition, financing, or sale of assets, subject to contractual safeguards.',
    ],
  },
  {
    title: 'Data Retention & Security',
    body: [
      'We retain personal information for as long as needed to provide the Service, comply with legal obligations, or resolve disputes. When no longer necessary, we securely delete or anonymize data.',
      'DueSoon uses encryption in transit, restricted access controls, and continuous monitoring to protect your data. No system is perfectly secure, so please notify us immediately if you suspect unauthorized access.',
    ],
  },
  {
    title: 'Your Choices & Rights',
    body: [
      'You can access, update, or delete certain information within your account settings. Depending on your jurisdiction, you may have additional rights such as requesting a copy of your data, objecting to processing, or asking us to restrict use. Contact us to exercise these rights.',
      'You can unsubscribe from marketing communications at any time using the link in those messages. Transactional or security notices will still be delivered.',
    ],
  },
  {
    title: 'International Transfers',
    body: [
      'DueSoon may process data in the United States and other countries where we or our providers operate. When we transfer personal data internationally, we implement safeguards consistent with applicable law.',
    ],
  },
  {
    title: 'Children',
    body: [
      'The Service is not intended for individuals under 18. We do not knowingly collect personal information from children. If you believe a minor has provided data, please contact us so we can delete it.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will notify you of material changes via the Service or email. Your continued use after changes become effective signifies acceptance of the revised policy.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'Have questions or requests? Email support@duesoon.net and we\'ll respond promptly.',
    ],
  },
];

export default function PrivacyPolicy() {
  const effectiveDate = 'Effective: April 5, 2025';

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-16 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{effectiveDate}</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-4">Privacy Policy</h1>
          <p className="mt-4 text-gray-600 text-lg">
            DueSoon is built for trust. This Privacy Policy explains what data we collect, how we use it to automate
            reminders and messaging, and the choices you have regarding your information.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
              {section.body.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
