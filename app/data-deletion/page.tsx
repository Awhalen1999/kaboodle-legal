import Link from "next/link";

export default function DataDeletion() {
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
          Data Deletion
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Deleting Your Trips
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Kaboodle does not require an account. Your trips and packing lists
              are stored on your device and in your private iCloud account, and
              you can delete them at any time without contacting us.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Open the app, go to Settings and tap &quot;Erase All Data.&quot;
              Type ERASE to confirm. Every trip and packing list is removed from
              your device and from iCloud. This cannot be undone.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Analytics and Purchase Records
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Usage analytics are tied to a random identifier rather than your
              name or email. To have them deleted, email us with the Support ID
              shown in the app&apos;s Settings and we will remove them within 30
              days.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Purchase and subscription records are kept by Apple and RevenueCat
              and may be retained for legal, tax, accounting or fraud-prevention
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Accounts From Earlier Versions
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              If you created an account in an earlier version of Kaboodle (1.x),
              including the Android app, you can delete it in that version from
              Profile &gt; Delete Account. You can also email us from the
              address on the account and we will delete it for you.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Deleting an account removes its email address, sign-in details,
              profile information and saved packing lists from our active
              systems within a few days. Backups are purged within 30 days.
            </p>
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
