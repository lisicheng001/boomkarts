"use client"

import { useState } from "react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home")

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
              <button
                onClick={() => setActiveTab("home")}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "home"
                    ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                    : "text-foreground hover:bg-accent/20"
                }`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "about"
                    ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                    : "text-foreground hover:bg-accent/20"
                }`}
              >
                ℹ️ About Us
              </button>
              <button
                onClick={() => setActiveTab("help")}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "help"
                    ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                    : "text-foreground hover:bg-accent/20"
                }`}
              >
                ❓ Help
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === "home" && (
          <>
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
                  <p className="text-center text-lg mt-2 opacity-90">
                    Click and play right here - no downloads needed!
                  </p>
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
                  <p className="text-card-foreground">
                    Race against friends and become the ultimate Boom Karts champion!
                  </p>
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
          </>
        )}

        {activeTab === "about" && (
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
                    To create the most awesome, safe, and fun racing experience that kids around the world can enjoy
                    with their friends and family!
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
                    We've designed Boom Karts to be enjoyed by kids from all around the world - from the United States
                    to Europe to Japan and everywhere in between!
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "help" && (
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
        )}
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
