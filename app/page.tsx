export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b-4 border-primary sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-4xl bounce-gentle">🏎️</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary font-sans">Boom Karts</h1>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <span className="px-4 py-2 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg transform scale-105">
                🏠 Home
              </span>
              <a
                href="/about"
                className="px-4 py-2 rounded-full font-semibold transition-all duration-300 text-foreground hover:bg-accent/20"
              >
                ℹ️ About Us
              </a>
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
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="bg-card rounded-3xl shadow-2xl p-8 mb-8 border-4 border-primary/20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4 wiggle">🎮 Ready to Race? 🎮</h2>
            <p className="text-xl md:text-2xl text-card-foreground mb-6 font-medium">
              Jump into the most AWESOME kart racing adventure ever!
            </p>
            <div className="flex justify-center space-x-4 text-4xl mb-4">
              <span className="bounce-gentle">🏁</span>
              <span className="bounce-gentle" style={{ animationDelay: "0.2s" }}>
                ⚡
              </span>
              <span className="bounce-gentle" style={{ animationDelay: "0.4s" }}>
                🏆
              </span>
            </div>
          </div>
        </section>

        {/* Game Section */}
        <section className="mb-12">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-4 border-secondary/30">
            <div className="p-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl">🚀</span>
                <h2 className="text-3xl font-bold">Start Your Engines!</h2>
                <span className="text-3xl">🚀</span>
              </div>
              <p className="text-center text-lg mt-2 opacity-90">Click and play right here - no downloads needed!</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-card to-white">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-accent/30">
                <iframe
                  src="https://www.crazygames.com/embed/boom-karts"
                  title="Boom Karts Game"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-[500px] md:h-[600px] border-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl shadow-xl p-6 border-4 border-primary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🏎️</div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Super Fast Karts!</h3>
              <p className="text-card-foreground">Choose from amazing karts and zoom around exciting tracks!</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-6 border-4 border-secondary/20 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Cool Power-ups!</h3>
              <p className="text-card-foreground">Collect awesome power-ups to boost your speed and win races!</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-6 border-4 border-accent/20 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Be the Champion!</h3>
              <p className="text-card-foreground">Race against friends and become the ultimate Boom Karts champion!</p>
            </div>
          </div>
        </section>

        {/* How to Play */}
        <section className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-8 mb-12 border-4 border-secondary/30">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8">🎮 How to Play 🎮</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1️⃣
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Pick Your Kart</h3>
              <p className="text-muted-foreground">Choose your favorite colorful kart to start racing!</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2️⃣
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Use Arrow Keys</h3>
              <p className="text-muted-foreground">Press arrow keys to steer, speed up, and slow down!</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3️⃣
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">Win the Race!</h3>
              <p className="text-muted-foreground">Cross the finish line first and celebrate your victory!</p>
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
