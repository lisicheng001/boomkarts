export default function SitemapPage() {
  const pages = [
    {
      title: "🏠 Home",
      url: "/",
      description: "Play Boom Karts - The most exciting racing game for kids!",
    },
    {
      title: "ℹ️ About Us",
      url: "/about",
      description: "Learn more about Boom Karts and our mission to create fun games",
    },
    {
      title: "❓ Help",
      url: "/help",
      description: "Get help with playing Boom Karts and troubleshooting",
    },
    {
      title: "🗺️ Site Map",
      url: "/site-map",
      description: "Find all pages on our website easily",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-green-50 to-cream-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4 animate-bounce">🗺️ Site Map</h1>
          <p className="text-xl text-green-700 font-medium">Find everything on our Boom Karts website!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {pages.map((page, index) => (
              <div
                key={page.url}
                className="bg-white rounded-3xl p-6 shadow-lg border-4 border-orange-200 hover:border-green-300 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <a href={page.url} className="block">
                  <h2 className="text-2xl font-bold text-green-600 mb-3 hover:text-orange-600 transition-colors">
                    {page.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{page.description}</p>
                  <div className="mt-4 inline-flex items-center text-orange-500 font-semibold hover:text-green-500 transition-colors">
                    Visit Page →
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-green-200 inline-block">
              <h2 className="text-2xl font-bold text-green-600 mb-4">🤖 For Search Engines</h2>
              <p className="text-gray-700 mb-4">Looking for our XML sitemap?</p>
              <a
                href="/sitemap.xml"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-green-500 transition-colors shadow-lg"
              >
                View XML Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
