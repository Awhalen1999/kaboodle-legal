import Link from "next/link";

export default function TermsOfService() {
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
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              By accessing or using this app, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, you may not
              use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              2. Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              You must be at least 13 years old to use the app. By using the
              app, you represent that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              3. Use of the Service
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              The app provides tools for creating and managing packing lists and
              travel planning content. You agree to use the service only for
              lawful purposes and in accordance with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              4. Subscriptions and Payments
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Certain features may require a paid subscription. Payments and
              subscriptions are processed through Apple App Store or Google Play
              and are subject to their respective terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              5. Account Termination
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              You may delete your account at any time using the in-app deletion
              feature. We reserve the right to suspend or terminate accounts
              that violate these terms or misuse the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              The app and its content are owned by us or our licensors. You
              retain ownership of content you create, but grant us a limited
              license to store and process it solely to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              The app is provided “as is” without warranties of any kind. We are
              not liable for any indirect, incidental, or consequential damages
              arising from your use of the app, to the maximum extent permitted
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              8. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              These terms are governed by the laws of the United States, without
              regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              9. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We may update these Terms of Service from time to time. Continued
              use of the app after changes are posted constitutes acceptance of
              the updated terms.
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
