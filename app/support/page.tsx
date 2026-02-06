import Link from "next/link";

export default function Support() {
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
          Support
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Get Help
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Have questions or need assistance? We&apos;re here to help.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Email:{" "}
              <a
                href="mailto:awhalendev@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                awhalendev@gmail.com
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-1">
              Response time: Within 24–48 hours
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  How do I create a packing list?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Open the app, tap &quot;Create New List,&quot; enter your trip
                  details, and we&apos;ll generate personalized suggestions based
                  on your destination and travel style.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  How do subscriptions work?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Kaboodle offers a free tier with up to 2 lists. Upgrade to Pro
                  for unlimited lists. Manage your subscription from your
                  profile page in the app.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  Can I reuse my packing lists?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Yes! Save any list and reuse it for future trips. Perfect for
                  frequent travelers or recurring destinations.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  How do I delete my account?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Open your profile page and tap &quot;Delete Account.&quot; This
                  will permanently remove all your data.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  My list suggestions aren&apos;t accurate. What should I do?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Make sure your trip details (destination, dates, weather,
                  accommodation type) are correct. You can always customize
                  suggestions to fit your needs.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  How do I cancel my subscription?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Subscriptions are managed through the Apple App Store or Google
                  Play. Open your device&apos;s subscription settings to cancel
                  or modify your plan.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  Is my data backed up?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Yes. Your lists and account data are securely synced to the
                  cloud, so you won&apos;t lose anything if you switch devices or
                  reinstall the app.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium mb-1">
                  What do I do if the app crashes or isn&apos;t working?
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Try closing and reopening the app, or restarting your device.
                  Make sure you&apos;re running the latest version. If the issue
                  persists, contact us at awhalendev@gmail.com with a description
                  of the problem.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Additional Resources
            </h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Privacy Policy
                </Link>
              </li>
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
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}
