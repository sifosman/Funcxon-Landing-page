import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-text-secondary text-lg">
              POPIA Compliant • Effective Date: 05 December 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm border border-border-subtle">
              
              <p className="text-text-secondary mb-8 leading-relaxed">
                This Privacy Policy explains how Funcxon collects, uses, stores, shares, protects, and
                processes personal information in accordance with the Protection of Personal Information Act 4
                of 2013 (POPIA) and applicable South African law.
              </p>

              <p className="text-text-secondary mb-8 leading-relaxed">
                By using the Funcxon mobile application, website, platform, and related services (collectively,
                the "Platform"), you consent to the collection and processing of your personal information as
                described in this Policy.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                1. RESPONSIBLE PARTY
              </h2>
              
              <p className="text-text-secondary mb-4">
                Funcxon (Pty) Ltd is the Responsible Party as defined under POPIA.
              </p>

              <div className="bg-surface-muted rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-text-primary mb-3">Contact Details (Information Officer)</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li><strong>Name:</strong> Zulayka Bhyat</li>
                  <li><strong>Email:</strong> <a href="mailto:zulaykab@gmail.com" className="text-primary hover:underline">zulaykab@gmail.com</a></li>
                  <li><strong>Registered Address:</strong> 46 Alhambra Place, Roshnee, Vereeniging, Gauteng, South Africa, 1936</li>
                </ul>
              </div>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                2. PERSONAL INFORMATION WE COLLECT
              </h2>

              <p className="text-text-secondary mb-4">
                We collect the following categories of personal information:
              </p>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Full name and surname</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Physical address (where applicable)</li>
                <li>Business registration information (for vendors)</li>
                <li>Bank/payment details (processed via third parties)</li>
                <li>Booking details and event information</li>
                <li>Profile pictures, photos, videos, documents</li>
                <li>Reviews, messages, and communication data</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Device information</li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Usage data (pages viewed, clicks, time spent)</li>
                <li>Location data (if enabled)</li>
                <li>Cookies and tracking technologies (website)</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">2.3 Third-Party Information</h3>
              <p className="text-text-secondary mb-4">
                We may receive personal information through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Payment processors</li>
                <li>Identity verification services</li>
                <li>Vendors you engage with via the Platform</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                3. PURPOSE OF PROCESSING
              </h2>
              
              <p className="text-text-secondary mb-4">
                We process personal information for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Account creation and login</li>
                <li>Providing platform services</li>
                <li>Facilitating bookings between users and vendors</li>
                <li>Processing payments and invoicing</li>
                <li>Customer support and dispute resolution</li>
                <li>Sending notifications (bookings, payments, updates)</li>
                <li>Marketing communications (with consent)</li>
                <li>Platform analytics and improvement</li>
                <li>Legal and compliance requirements</li>
                <li>Security, fraud detection, and prevention</li>
              </ul>

              <p className="text-text-secondary mb-8 italic">
                We will only process personal information for purposes compatible with this Privacy Policy.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                4. CONSENT
              </h2>

              <p className="text-text-secondary mb-4">
                By creating an account, browsing, booking, or communicating through the Platform, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Consent to the processing of your personal information</li>
                <li>Confirm information provided is accurate</li>
                <li>Understand you may withdraw consent at any time (subject to legal limitations)</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Consent for marketing communications may be withdrawn using the unsubscribe option or by
                contacting the Information Officer.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                5. YOUR RIGHTS UNDER POPIA
              </h2>
              
              <p className="text-text-secondary mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Access your personal information</li>
                <li>Request correction or deletion of inaccurate information</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent to processing</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>

              <div className="bg-surface-muted rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-text-primary mb-3">Information Regulator Contact:</h3>
                <p className="text-text-secondary">
                  Email: <a href="mailto:complaints.IR@justice.gov.za" className="text-primary hover:underline">complaints.IR@justice.gov.za</a>
                </p>
              </div>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                6. INFORMATION SHARING & DISCLOSURE
              </h2>

              <p className="text-text-secondary mb-4 font-semibold">
                We will not sell your personal information.
              </p>

              <p className="text-text-secondary mb-4">
                We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li><strong>6.1 Vendors</strong> — to fulfil bookings and provide services.</li>
                <li><strong>6.2 Payment Processors</strong> — for secure payment processing.</li>
                <li><strong>6.3 Service Providers</strong> — IT, hosting, analytics.</li>
                <li><strong>6.4 Legal Authorities</strong> — when required by law or to protect rights.</li>
              </ul>

              <p className="text-text-secondary mb-8">
                All third parties must comply with POPIA.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                7. INTERNATIONAL TRANSFERS
              </h2>

              <p className="text-text-secondary mb-4">
                Where information must be processed or stored outside South Africa (e.g., cloud hosting
                providers), we will ensure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>The receiving country has adequate data protection laws, or</li>
                <li>Appropriate contractual safeguards are in place.</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                8. SECURITY SAFEGUARDS
              </h2>

              <p className="text-text-secondary mb-4">
                We implement appropriate security measures, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Encryption technologies</li>
                <li>Restricted access control</li>
                <li>Secure firewalls and server settings</li>
                <li>Password protection and authentication</li>
                <li>Regular security reviews and audits</li>
              </ul>

              <p className="text-text-secondary mb-8 italic">
                However, no internet-based system is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                9. RETENTION OF INFORMATION
              </h2>

              <p className="text-text-secondary mb-4">
                We retain personal information only for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>As long as necessary to fulfil the purpose collected</li>
                <li>Legal or regulatory retention periods</li>
                <li>Accounting and audit requirements</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Once no longer required, information will be securely deleted or anonymised.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                10. CHILDREN
              </h2>

              <p className="text-text-secondary mb-8">
                The Platform is not intended for children under 18. We do not knowingly collect personal
                information from minors without legal guardian consent.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                11. COOKIES & TRACKING TECHNOLOGIES
              </h2>

              <p className="text-text-secondary mb-4">
                Cookies may be used on the website for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Session management</li>
                <li>Analytics data</li>
                <li>Improving user experience</li>
                <li>Security purposes</li>
              </ul>

              <p className="text-text-secondary mb-4">
                Users may manage cookie preferences in browser settings.
              </p>

              <p className="text-text-secondary mb-8">
                A separate Cookie Policy applies to the web version of the Platform.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                12. DIRECT MARKETING
              </h2>

              <p className="text-text-secondary mb-4">
                We may send marketing content only when:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>The user has given consent</li>
                <li>It relates to similar services already used by the user</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Users may opt-out at any time without charge.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                13. INFORMATION REGULATOR COMPLIANCE
              </h2>

              <p className="text-text-secondary mb-4">
                If you believe your personal information has been mishandled, contact:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Funcxon Information Officer (see section 1)</li>
                <li>Or submit a complaint to the Information Regulator</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                14. UPDATES TO THIS POLICY
              </h2>

              <p className="text-text-secondary mb-8">
                This Privacy Policy may be updated periodically. Material changes will be communicated to
                users, and continued use of the Platform constitutes acceptance of the updated policy.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                15. CONTACT
              </h2>

              <div className="bg-surface-muted rounded-lg p-6 mb-8">
                <p className="text-text-secondary mb-4 font-semibold">
                  For all privacy inquiries:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li><strong>Information Officer</strong></li>
                  <li><strong>Email:</strong> <a href="mailto:zulaykab@gmail.com" className="text-primary hover:underline">zulaykab@gmail.com</a></li>
                  <li><strong>Address:</strong> 46 Alhambra Place, Roshnee, Vereeniging, Gauteng, South Africa, 1936</li>
                </ul>
              </div>

              <div className="border-t border-border-subtle pt-8 mt-12">
                <p className="text-text-secondary text-center italic">
                  By using Funcxon, you acknowledge that you have read and understood this Privacy Policy
                  and consent to the processing of personal information under POPIA.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
