import React from 'react';
import { COMPANY_INFO } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="py-16 sm:py-24 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-slate-700">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: January 2025</p>

        <section className="space-y-3 pt-4">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            At {COMPANY_INFO.name}, we collect personal information you explicitly provide when submitting contact or quotation requests, including your name, email address, phone number, and project requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p className="text-sm leading-relaxed">
            We use your data solely to respond to project inquiries, formulate custom proposals, communicate project milestones, and provide customer support. We never sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Data Security & Storage</h2>
          <p className="text-sm leading-relaxed">
            We adopt industry-standard SSL encryption and rigorous administrative safeguards to protect your personal and business data from unauthorized access or disclosure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Contacting Our Data Officer</h2>
          <p className="text-sm leading-relaxed">
            For questions regarding this policy, email us at <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 underline">{COMPANY_INFO.email}</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <main className="py-16 sm:py-24 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-slate-700">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500">Last updated: January 2025</p>

        <section className="space-y-3 pt-4">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p className="text-sm leading-relaxed">
            By accessing the website and utilizing services provided by {COMPANY_INFO.name}, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Intellectual Property Rights</h2>
          <p className="text-sm leading-relaxed">
            All proprietary code, branding, logos, graphics, and custom software created for clients become the exclusive property of the client upon receipt of final project payments as agreed in individual contracts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Service Delivery & Milestones</h2>
          <p className="text-sm leading-relaxed">
            Project deliverables are executed based on statement of work milestones approved prior to project kickoff.
          </p>
        </section>
      </div>
    </main>
  );
};

