/**
 * Loading State Component
 * Displayed while pages are loading
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gold-500 mb-4"></div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we load the content</p>
      </div>
    </div>
  )
}
