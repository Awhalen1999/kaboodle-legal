import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-4 sm:mb-6 inline-block text-sm sm:text-base"
        >
          ← Back
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We collect information you provide directly when using the app,
              including your email address, authentication credentials, and
              profile information such as a profile photo if you sign in using
              Google or Apple. We also collect user-generated content, including
              packing lists and related planning data.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              We automatically collect certain technical and usage information,
              such as app usage data, crash reports, and device information, to
              improve performance and reliability. We do not intentionally
              collect precise location data.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Subscription and purchase information is processed by Apple App
              Store and Google Play. We do not store full payment details.
              Subscription status and related metadata may be processed via
              RevenueCat.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We use your information to operate and improve the app,
              authenticate users, store and sync packing lists, manage
              subscriptions, provide customer support, and communicate important
              service-related messages.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              We may also use your email address to send optional product
              updates or announcements. You may opt out of non-essential
              communications where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              3. Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We use third-party service providers to operate and improve the
              app. These providers process data on our behalf and in accordance
              with their own privacy policies.
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-base">
              <li>Firebase – authentication and core app services</li>
              <li>PostHog – analytics and product usage insights</li>
              <li>RevenueCat – subscription and purchase management</li>
              <li>
                Vercel and Neon – application hosting and database
                infrastructure
              </li>
              <li>
                Apple App Store and Google Play – payment processing and
                distribution
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              4. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We retain personal data for as long as your account is active or
              as necessary to provide the service. When an account is deleted,
              personal data is removed from active systems within a reasonable
              period. Some data may be retained for legal, accounting, or
              security purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              5. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Your information may be processed and stored in countries other
              than your own, including the United States, where our service
              providers operate. We take reasonable steps to ensure appropriate
              safeguards are in place.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              You have the right to access, correct, or delete your personal
              data. Users may delete their account at any time using the in-app
              deletion feature. Depending on your location, you may have
              additional rights under applicable laws, including GDPR and CCPA.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              This app is not intended for children under the age of 13, and we
              do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              If you have any questions about this Privacy Policy or our data
              practices, contact us at{" "}
              <a
                href="mailto:awhalendev@kaboodle.now"
                className="text-blue-600 hover:text-blue-800"
              >
                awhalendev@kaboodle.now
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
