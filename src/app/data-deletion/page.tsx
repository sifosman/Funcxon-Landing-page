"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataDeletion() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user_id is in URL params (from Facebook callback)
    const urlParams = new URLSearchParams(window.location.search);
    const userIdFromUrl = urlParams.get('user_id');
    if (userIdFromUrl) {
      setUserId(userIdFromUrl);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/data-deletion-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          email: email,
          source: 'manual_request'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to submit deletion request');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        
        <div className="pt-24 pb-16">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="font-[var(--font-playfair)] text-3xl font-bold text-text-primary mb-4">
                  Deletion Request Received
                </h1>
                <p className="text-text-secondary mb-6">
                  Your data deletion request has been successfully submitted. We will process your request within 30 days as required by law.
                </p>
                <div className="bg-surface rounded-lg p-4 text-left">
                  <h3 className="font-semibold text-text-primary mb-2">What happens next:</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• You'll receive a confirmation email shortly</li>
                    <li>• Your data will be permanently deleted within 30 days</li>
                    <li>• You'll be notified when the deletion is complete</li>
                  </ul>
                </div>
              </div>
              
              <button
                onClick={() => window.location.href = '/'}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                Return to Homepage
              </button>
            </motion.div>
          </div>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Data Deletion Request
              </h1>
              <p className="text-text-secondary text-lg">
                Request permanent deletion of your personal data
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm border border-border-subtle">
              <div className="mb-8">
                <h2 className="font-semibold text-text-primary mb-4">Facebook Login Users</h2>
                <p className="text-text-secondary text-sm mb-4">
                  If you used Facebook Login to create your account, you can request data deletion through Facebook's interface or by submitting the form below.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Facebook Users:</strong> You can also initiate deletion directly from your Facebook settings under "Apps and Websites".
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_id" className="block text-sm font-medium text-text-primary mb-2">
                    Facebook User ID (if known)
                  </label>
                  <input
                    type="text"
                    id="user_id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your Facebook User ID"
                  />
                  <p className="text-xs text-text-secondary mt-1">
                    Optional. Leave blank if you don't know your Facebook User ID.
                  </p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-border-subtle rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                  <p className="text-xs text-text-secondary mt-1">
                    We'll use this to verify your identity and send confirmation.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-semibold text-amber-800 mb-2">Important Notice:</h3>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• This action is irreversible</li>
                    <li>• All your personal data will be permanently deleted</li>
                    <li>• You'll lose access to your Funcxon account</li>
                    <li>• Active bookings and services may be affected</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Data Deletion'}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border-subtle">
                <h3 className="font-semibold text-text-primary mb-4">Alternative Methods:</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">1</span>
                    </div>
                    <div>
                      <strong>Email Request:</strong> Send a deletion request to 
                      <a href="mailto:zulaykab@gmail.com" className="text-primary hover:underline ml-1">
                        zulaykab@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">2</span>
                    </div>
                    <div>
                      <strong>Facebook Settings:</strong> Go to Facebook Settings &gt; Apps and Websites &gt; Funcxon &gt; Remove
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
