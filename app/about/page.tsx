import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Boom Karts Racing Game for Kids",
  description:
    "Learn about Boom Karts - the safest and most fun online racing game designed for kids and families worldwide.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://boomkarts.com"}/about`,
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b-4 border-primary sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-4xl bounce-gentle">🏎️</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-sans">
                <a href="/">Boom Karts</a>
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className="px-4 py-2 rounded-full font-semibold transition-all duration-300 text-foreground hover:bg-accent/20"
              >
                🏠 Home
              </a>
              <span className="px-4 py-2 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg transform scale-105">
                ℹ️ About Us
              </span>
              <a
                href="/help"
                className="px-4 py-2 rounded-full font-semibold transition-all duration-300 text-foreground hover:bg-accent/20"
              >
                ❓ Help
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-8 border-4 border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-4">🌟 About Boom Karts 🌟</h2>
              <div className="flex justify-center space-x-4 text-3xl mb-6">
                <span>🎮</span>
                <span>🏎️</span>
                <span>🏆</span>
                <span>🎉</span>
              </div>
            </div>

            <div className="space-y-6 text-lg text-card-foreground">
              <p className="leading-relaxed">
                Welcome to <strong className="text-primary">Boom Karts</strong> - the most exciting and safe online
                racing game designed especially for kids and families! We believe that gaming should be fun,
                educational, and bring people together.
              </p>

              <div className="bg-white rounded-2xl p-6 border-2 border-secondary/30">
                <h3 className="text-2xl font-bold text-secondary mb-4">🎯 Our Mission</h3>
                <p>
                  To create the most awesome, safe, and fun racing experience that kids around the world can enjoy with
                  their friends and family!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-accent/30">
                <h3 className="text-2xl font-bold text-accent mb-4">🛡️ Safety First</h3>
                <p>
                  Your safety is our top priority! Boom Karts is completely safe for children, with no inappropriate
                  content, no chat features, and no personal information required.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-primary mb-4">🌍 Made for Everyone</h3>
                <p>
                  We've designed Boom Karts to be enjoyed by kids from all around the world - from the United States to
                  Europe to Japan and everywhere in between!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <span className="text-2xl">🏎️</span>
              <h3 className="text-2xl font-bold">Boom Karts</h3>
              <span className="text-2xl">🏎️</span>
            </div>
            <p className="text-sidebar-foreground/80 mb-2">
              © 2024 Boom Karts - The Ultimate Racing Adventure for Kids!
            </p>
            <p className="text-sidebar-foreground/60 text-sm">
              Safe • Fun • Educational • Made with ❤️ for families worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
