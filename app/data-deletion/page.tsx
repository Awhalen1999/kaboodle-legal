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
              Data Deletion Request
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Users have the right to request deletion of their account and
              associated personal data at any time. In accordance with
              applicable data protection laws, including the GDPR and CCPA,
              users may exercise their right to erasure directly within the app.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              The app provides an in-app account deletion option that allows
              users to permanently delete their account without contacting
              support. Once a deletion request is confirmed, the account is
              immediately disabled and scheduled for permanent removal from our
              active systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              What Data Is Deleted
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              When an account is deleted, we permanently remove personal data
              associated with the user, including authentication identifiers,
              email address, profile information, and user-generated content
              such as packing lists and planning data. App preferences and
              settings stored on our servers are also deleted.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Certain data may be retained where required or permitted by law.
              Purchase and subscription records are managed by Apple App Store,
              Google Play, and RevenueCat and may be retained for legal, tax,
              accounting, or fraud-prevention purposes. Anonymous analytics and
              crash reporting data that cannot reasonably be linked to an
              individual user may also be retained.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-3">
              Deleted data may persist temporarily in encrypted backups for a
              limited period before being automatically removed as part of
              normal backup retention cycles.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              How to Request Deletion
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              To request deletion, open the app, navigate to the Profile
              section, and select “Delete Account.” Follow the on-screen
              instructions to confirm the request. This option is available to
              all users, regardless of sign-in method.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Processing Time
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Account access is revoked immediately after deletion is confirmed.
              Most associated data is permanently deleted from active systems
              within a few days. Backup data may be retained for up to 30 days
              before being automatically purged.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
