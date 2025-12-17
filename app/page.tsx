import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">Kaboodle Legal</h1>
        <div className="flex flex-col gap-3 sm:gap-4">
          <Link
            href="/terms-of-service"
            className="block p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm sm:text-base"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="block p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm sm:text-base"
          >
            Privacy Policy
          </Link>
          <Link
            href="/data-deletion"
            className="block p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm sm:text-base"
          >
            Data Deletion
          </Link>
        </div>
      </div>
    </div>
  );
}
