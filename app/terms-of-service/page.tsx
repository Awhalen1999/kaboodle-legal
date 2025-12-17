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
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Add your terms content here */}
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Use of Service</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Add your terms content here */}
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Add your terms content here */}
            </p>
          </section>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}

