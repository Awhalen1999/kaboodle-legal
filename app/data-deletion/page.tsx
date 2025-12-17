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
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Data Deletion</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Data Deletion Request</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Add your data deletion policy content here */}
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">What Data Is Deleted</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Add information about what data is deleted */}
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">How to Request Deletion</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Add instructions for requesting data deletion */}
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Processing Time</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Add information about processing time */}
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

