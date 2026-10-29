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

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-6 sm:mb-8">
          Last updated: October 29, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Kaboodle for iPhone and iPad does not require an account. We do
              not ask for your name, email address or password.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Your trips and packing lists are stored on your device. If iCloud
              is turned on, they are also stored in your private iCloud account
              through Apple&apos;s CloudKit so they sync across your devices.
              We cannot access this data.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              We collect usage analytics to understand how the app is used, such
              as when a list is created, opened or finished, along with the trip
              answers that shape suggestions (destination country, trip purpose
              and who you are packing for), the app version and basic device
              information. This data is tied to a random identifier, not to your
              name or email. Trip names, descriptions and notes are never sent
              to us.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Payments are processed by Apple. We do not receive your payment
              details. Your subscription status is recorded by RevenueCat
              against the same random identifier.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              We do not collect precise location, we do not show ads, and we do
              not track you across other companies&apos; apps or websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We use this information to provide the app, unlock Kaboodle Pro
              for subscribers, understand which features are used so we can
              improve them, and help you when you contact support.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              3. Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We use the following providers to operate the app. They process
              data on our behalf and in accordance with their own privacy
              policies.
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-base">
              <li>Apple: iCloud sync, App Store payments and distribution</li>
              <li>PostHog: usage analytics</li>
              <li>RevenueCat: subscription management</li>
              <li>Vercel: hosting for our websites</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              4. Earlier Versions and Accounts
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Earlier versions of Kaboodle (1.x), including the Android app,
              offered sign-in with email, Google or Apple and stored packing
              lists on our servers using Firebase, Vercel and Neon. If you
              created an account in an earlier version, that account&apos;s
              data is covered by this policy until it is deleted. See{" "}
              <Link
                href="/data-deletion"
                className="text-blue-600 hover:text-blue-800"
              >
                Data Deletion
              </Link>{" "}
              to remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              5. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Your trips stay on your device and in your iCloud account until
              you delete them. Analytics data is kept only as long as it is
              useful for improving the app. Purchase records may be kept by
              Apple and RevenueCat for legal, tax and accounting purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              6. International Data Transfers
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
              7. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              You can delete every trip and packing list at any time from
              Settings &gt; Erase All Data, which removes them from your device
              and iCloud. To access or delete analytics data, email us with the
              Support ID shown in Settings. Depending on your location, you may
              have additional rights under applicable laws, including GDPR and
              CCPA.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              This app is not intended for children under the age of 13, and we
              do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We may update this Privacy Policy from time to time. The date at
              the top of this page shows when it was last changed.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              If you have any questions about this Privacy Policy or our data
              practices, contact us at{" "}
              <a
                href="mailto:awhalendev@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                awhalendev@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Additional Resources
            </h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/data-deletion"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Data Deletion
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Support
                </Link>
              </li>
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}
