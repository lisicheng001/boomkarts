import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help & Support - Boom Karts Racing Game",
  description:
    "Get help with playing Boom Karts! Learn game controls, troubleshooting tips, and safety information for kids and parents.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://boomkarts.com"}/help`,
  },
}

export default function HelpPage() {
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
              <a
                href="/about"
                className="px-4 py-2 rounded-full font-semibold transition-all duration-300 text-foreground hover:bg-accent/20"
              >
                ℹ️ About Us
              </a>
              <span className="px-4 py-2 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg transform scale-105">
                ❓ Help
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-8 border-4 border-accent/20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-accent mb-4">❓ Need Help? ❓</h2>
              <p className="text-xl text-card-foreground">We're here to help you have the best racing experience!</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-primary mb-3">🎮 Game Controls</h3>
                <ul className="space-y-2 text-card-foreground">
                  <li>
                    <strong>↑ Arrow Key:</strong> Speed up and go forward
                  </li>
                  <li>
                    <strong>↓ Arrow Key:</strong> Slow down and reverse
                  </li>
                  <li>
                    <strong>← → Arrow Keys:</strong> Turn left and right
                  </li>
                  <li>
                    <strong>Spacebar:</strong> Use power-ups and special abilities
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-secondary/30">
                <h3 className="text-2xl font-bold text-secondary mb-3">🔧 Technical Help</h3>
                <ul className="space-y-2 text-card-foreground">
                  <li>
                    <strong>Game won't load?</strong> Try refreshing the page or check your internet connection
                  </li>
                  <li>
                    <strong>Game running slowly?</strong> Close other browser tabs to free up memory
                  </li>
                  <li>
                    <strong>Sound issues?</strong> Check your device's volume settings
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-accent/30">
                <h3 className="text-2xl font-bold text-accent mb-3">👨‍👩‍👧‍👦 For Parents</h3>
                <p className="text-card-foreground">
                  Boom Karts is completely safe for children. The game runs directly in your browser with no downloads
                  required, no personal information collected, and no communication features. It's designed to be
                  educational and fun!
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
