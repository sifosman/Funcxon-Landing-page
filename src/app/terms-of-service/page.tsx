"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
              Terms & Conditions
            </h1>
            <p className="text-text-secondary text-lg">
              South Africa Compliant • Last Updated: 05 December 2025
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
                These Terms and Conditions ("Terms") govern the use of the Funcxon mobile application, 
                website, platform, and all related services (collectively, the "Platform"). By accessing, 
                registering, browsing, or transacting on the Platform, all users — including consumers, vendors, 
                service providers, event organisers, developers, and subscribers — agree to be bound by these 
                Terms.
              </p>

              <p className="text-text-secondary mb-8 leading-relaxed">
                These Terms are designed to comply with all applicable South African laws, including but not 
                limited to:
              </p>

              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>The Consumer Protection Act 68 of 2008 (CPA)</li>
                <li>The Protection of Personal Information Act 4 of 2013 (POPIA)</li>
                <li>The Electronic Communications and Transactions Act 25 of 2002 (ECTA)</li>
                <li>The Copyright Act 98 of 1978</li>
                <li>The Companies Act 71 of 2008</li>
                <li>Applicable contract, commercial, and common law principles in South Africa</li>
              </ul>

              <p className="text-text-secondary mb-8 leading-relaxed">
                Any policies legally required to be displayed separately (e.g., Privacy Policy, PAIA Manual, 
                Cookies Policy) will be provided as standalone documents. All other matters are contained 
                herein.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                1. DEFINITIONS
              </h2>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li><strong>"Funcxon/We/Us/Our"</strong>: The company owning and operating the Funcxon Platform.</li>
                <li><strong>"User"</strong>: Any person accessing or using the Platform, including consumers and vendors.</li>
                <li><strong>"Vendor/Service Provider"</strong>: A business or individual listing products/services for 
                booking or sale on the Platform.</li>
                <li><strong>"Subscriber"</strong>: Any vendor/service provider paying for listing packages.</li>
                <li><strong>"Client/Customer"</strong>: Any user booking or purchasing a vendor's services.</li>
                <li><strong>"Content"</strong>: All information, media, images, videos, documents, messages, reviews, and 
                data uploaded to the Platform.</li>
                <li><strong>"Developer"</strong>: Any authorised individual contracted to maintain, update, or enhance the 
                Platform.</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                2. ACCEPTANCE OF TERMS
              </h2>

              <p className="text-text-secondary mb-4">
                By using the Platform, you:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Confirm you are 18 years or older.</li>
                <li>Confirm you have read, understood, and agreed to these Terms.</li>
                <li>Consent to the processing of personal information in line with POPIA.</li>
                <li>Agree to any additional terms displayed during specific transactions (e.g., payments, 
                promotions).</li>
              </ul>

              <p className="text-text-secondary mb-8">
                If you do not agree with any part of the Terms, you must discontinue use of the Platform 
                immediately.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                3. PLATFORM DESCRIPTION
              </h2>

              <p className="text-text-secondary mb-4">
                Funcxon is a marketplace and directory platform connecting clients with vendors in the events 
                industry. Funcxon:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Does not own any vendor businesses.</li>
                <li>Is not party to agreements between vendors and clients.</li>
                <li>Provides tools, listings, catalogues, calendars, payment features, and communication 
                features.</li>
                <li>Is not responsible for execution of services by vendors.</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                4. USER OBLIGATIONS
              </h2>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">4.1 Accurate Information</h3>
              
              <p className="text-text-secondary mb-4">
                All users must provide:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Accurate personal or business details</li>
                <li>Valid contact information</li>
                <li>Updated payment details (where applicable)</li>
              </ul>

              <p className="text-text-secondary mb-8">
                False or fraudulent information is strictly prohibited.
              </p>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">4.2 Responsible Use</h3>
              
              <p className="text-text-secondary mb-4">
                Users may not:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Upload illegal, defamatory, harmful, hateful, pornographic, or copyrighted content.</li>
                <li>Misrepresent identity or business.</li>
                <li>Attempt to hack, modify, disrupt, or reverse-engineer the Platform.</li>
                <li>Use the Platform for any unlawful purpose.</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">4.3 Account Security</h3>
              
              <p className="text-text-secondary mb-4">
                Users are responsible for:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Maintaining confidentiality of login details.</li>
                <li>All activity under their account.</li>
                <li>Informing Funcxon immediately of suspicious access.</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                5. VENDOR/SUBSCRIBER TERMS
              </h2>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">5.1 Listings & Content</h3>
              
              <p className="text-text-secondary mb-4">
                Vendors are solely responsible for:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>The accuracy of all listings.</li>
                <li>Images, videos, pricing, availability calendars, catalogues, business profiles.</li>
                <li>Compliance with South African business and tax laws.</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Funcxon may remove any listing violating policy or law.
              </p>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">5.2 Subscriptions & Payments</h3>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Subscription fees are billed per the selected package.</li>
                <li>Fees are non-refundable unless required by law.</li>
                <li>Non-payment may result in suspension or removal.</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">5.3 Vendor Performance</h3>
              
              <p className="text-text-secondary mb-4">
                Vendors must:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Honour bookings.</li>
                <li>Deliver agreed services/products.</li>
                <li>Communicate professionally with clients.</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Funcxon is not liable for vendor actions or inactions.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                6. CLIENT/CUSTOMER TERMS
              </h2>

              <p className="text-text-secondary mb-8">
                Clients acknowledge that:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Vendors are independent businesses.</li>
                <li>Funcxon is not responsible for vendor quality, conduct, cancellations, or disputes.</li>
                <li>Clients must verify suitability of vendors before booking.</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                7. BOOKINGS, PAYMENTS & FEES
              </h2>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">7.1 Marketplace Interactions</h3>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Bookings may occur via direct vendor contact or through in-app booking features.</li>
                <li>Payment methods may include EFT, card payments, or third-party processors.</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">7.2 Payment Processing</h3>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Payments may be processed by authorised third-party payment gateways.</li>
                <li>Funcxon does not store credit card information.</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">7.3 Refunds</h3>
              
              <p className="text-text-secondary mb-4">
                Refunds are governed by:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Vendor's individual refund policy</li>
                <li>CPA requirements (where applicable)</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Funcxon does not issue refunds for vendor services.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                8. CONTENT OWNERSHIP & LICENSES
              </h2>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">8.1 User Content</h3>
              
              <p className="text-text-secondary mb-4">
                Users retain copyright over uploaded content. However, by uploading, users grant Funcxon:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>A non-exclusive, worldwide licence to display, reproduce, and distribute the content 
                solely within the Platform.</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-3 mt-6">8.2 Funcxon Intellectual Property</h3>
              
              <p className="text-text-secondary mb-8">
                All Funcxon branding, logos, software, UI/UX, features, and databases belong exclusively to 
                Funcxon and may not be copied, reverse-engineered, or used without permission.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                9. PRIVACY COMPLIANCE (POPIA)
              </h2>

              <p className="text-text-secondary mb-4">
                Funcxon will:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Collect only necessary personal information.</li>
                <li>Use information for platform functionality.</li>
                <li>Secure all data with appropriate safeguards.</li>
                <li>Never sell personal data.</li>
              </ul>

              <p className="text-text-secondary mb-4">
                Personal data may be shared with:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Vendors (to fulfil bookings)</li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                10. COMMUNICATION POLICY
              </h2>

              <p className="text-text-secondary mb-4">
                Funcxon may send users:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Booking updates</li>
                <li>Payment confirmations</li>
                <li>System notifications</li>
                <li>Marketing (with consent)</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Users may opt out of marketing at any time.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                11. REVIEWS & RATINGS
              </h2>

              <p className="text-text-secondary mb-4">
                Users agree to:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Post fair, truthful reviews.</li>
                <li>Refrain from harassment, defamation, or extortion.</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Funcxon may remove or moderate reviews violating the Terms.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                12. LIMITATION OF LIABILITY
              </h2>

              <p className="text-text-secondary mb-4">
                To the maximum extent allowed by law, Funcxon is not liable for:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Losses due to vendor actions or negligence</li>
                <li>Event failures, cancellations, delays</li>
                <li>Financial disputes between clients and vendors</li>
                <li>Internet outages or technical disruptions</li>
                <li>Loss of data beyond our reasonable control</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Users indemnify Funcxon against claims arising from their use of the Platform.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                13. SUSPENSION & TERMINATION
              </h2>

              <p className="text-text-secondary mb-4">
                Funcxon may suspend or terminate accounts for:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-6 ml-4">
                <li>Violations of these Terms</li>
                <li>Illegal activity</li>
                <li>Fraud</li>
                <li>Abuse of the Platform</li>
              </ul>

              <p className="text-text-secondary mb-8">
                Users may delete their accounts at any time.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                14. DEVELOPER RIGHTS & RESPONSIBILITIES
              </h2>

              <p className="text-text-secondary mb-4">
                Developers working for Funcxon:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>Must maintain confidentiality</li>
                <li>May not copy, share, or re-use Funcxon code or systems</li>
                <li>Must adhere to cybercrime and IP law</li>
                <li>Are bound by NDAs and internal agreements</li>
              </ul>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                15. UPDATES TO TERMS
              </h2>

              <p className="text-text-secondary mb-8">
                Funcxon may update these Terms periodically. Users will be notified of material changes, and 
                continued use constitutes acceptance.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                16. GOVERNING LAW
              </h2>

              <p className="text-text-secondary mb-8">
                These Terms are governed by South African law. Disputes must first be attempted through 
                mediation before formal legal action.
              </p>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                17. CONTACT INFORMATION
              </h2>

              <div className="bg-surface-muted rounded-lg p-6 mb-8">
                <p className="text-text-secondary mb-4">
                  For queries, complaints, or legal notices:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li><strong>Funcxon Legal & Compliance Department</strong></li>
                  <li><strong>Email:</strong> <a href="mailto:zulaykab@gmail.com" className="text-primary hover:underline">zulaykab@gmail.com</a></li>
                  <li><strong>Registered Address:</strong> 46 Alhambra Place, Roshnee, Vereeniging, Gauteng, South Africa, 1936</li>
                </ul>
              </div>

              <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-text-primary mb-4 mt-8">
                18. SEPARATE LEGALLY MANDATED POLICIES
              </h2>

              <p className="text-text-secondary mb-4">
                The following will appear as separate documents:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8 ml-4">
                <li>POPIA-compliant Privacy Policy</li>
                <li>PAIA Manual</li>
                <li>Cookie Policy</li>
                <li>Refund Policy</li>
              </ul>

              <div className="border-t border-border-subtle pt-8 mt-12">
                <p className="text-text-secondary text-center italic">
                  By using Funcxon, you confirm acceptance of these Terms & Conditions.
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
