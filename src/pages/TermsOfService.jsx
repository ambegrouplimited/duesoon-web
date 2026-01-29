import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const sections = [
  {
    title: '1. Agreement Overview',
    body: [
      'These Terms of Service ("Terms") govern your access to and use of DueSoon\'s websites, mobile apps, APIs, and related services (collectively, the "Service"). By accessing or using the Service you agree to be bound by these Terms and all policies referenced below. If you do not agree, do not use DueSoon.',
    ],
  },
  {
    title: '2. Eligibility & Accounts',
    body: [
      'You must be at least 18 years old and able to form a binding contract to use the Service. You are responsible for maintaining accurate account information, safeguarding login credentials, and for all activity that occurs under your account.',
    ],
  },
  {
    title: '3. Subscriptions & Billing',
    body: [
      'Certain Service features require a paid subscription. Fees, billing intervals, and plan details are shown at checkout. Unless otherwise stated, subscriptions renew automatically until cancelled. You may cancel at any time, but fees already incurred are non-refundable except where required by law.',
    ],
  },
  {
    title: '4. Use of the Service',
    body: [
      'DueSoon automates reminder workflows, messaging, and payment tracking. You agree to use the Service only for lawful business purposes and in compliance with all applicable laws, regulations, and industry standards.',
      'You must not (a) misuse or disrupt the Service, (b) attempt to reverse engineer, hack, or compromise our infrastructure, (c) use the Service to send spam or unlawful communications, or (d) infringe on the rights of others. We may suspend or terminate access for violations.',
    ],
  },
  {
    title: '5. Data & Privacy',
    body: [
      'We process personal data as described in our Privacy Policy. You represent that you have obtained all necessary rights and consents to provide client information, contact methods, and payment data to DueSoon for processing.',
    ],
  },
  {
    title: '6. Integrations & Third-Party Services',
    body: [
      'The Service may integrate with third-party messaging, payment, or accounting tools. Those services are provided by independent parties and are governed by their own terms. DueSoon is not responsible for third-party systems or outages.',
    ],
  },
  {
    title: '7. Intellectual Property',
    body: [
      'DueSoon retains all rights, title, and interest in and to the Service, including all intellectual property. You receive a limited, non-exclusive, non-transferable license to access and use the Service for your internal business purposes during an active subscription.',
    ],
  },
  {
    title: '8. Disclaimers & Limitation of Liability',
    body: [
      'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, DUESOON DISCLAIMS ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, DUESOON, ITS AFFILIATES, AND SUPPLIERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS OR REVENUES. OUR TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO DUESOON IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.',
    ],
  },
  {
    title: '9. Termination',
    body: [
      'You may stop using the Service at any time. We may suspend or terminate access if you violate these Terms, misuse the Service, or fail to pay fees when due. Sections intended to survive termination (including payment obligations, indemnities, and liability limitations) will continue to apply.',
    ],
  },
  {
    title: '10. Changes to These Terms',
    body: [
      'We may update these Terms from time to time. Material changes will be communicated via the Service or email. Your continued use after the effective date constitutes acceptance of the updated Terms.',
    ],
  },
  {
    title: '11. Contact',
    body: [
      'Questions about these Terms? Email support@duesoon.net and we\'ll be glad to help.',
    ],
  },
];

export default function TermsOfService() {
  const effectiveDate = 'Effective: April 5, 2025';

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-16 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{effectiveDate}</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-4">Terms of Service</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Welcome to DueSoon. These Terms outline the rules and responsibilities that keep reminder automation,
            messaging, and payment tracking running smoothly for everyone. Please read them carefully.
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
