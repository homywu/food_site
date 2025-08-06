import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="restaurant-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Our Restaurant
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience exceptional dining with our curated menu and seamless online ordering system.
          </p>
          <div className="space-x-4">
            <Link
              href="/menu"
              className="bg-white text-restaurant-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/order"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-restaurant-secondary transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-restaurant-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest, locally-sourced ingredients in all our dishes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-restaurant-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to your doorstep or ready for pickup.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-restaurant-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
              <p className="text-gray-600">
                Simple and intuitive online ordering system for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-restaurant-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8">
            Browse our menu and place your order online for a seamless dining experience.
          </p>
          <Link
            href="/menu"
            className="bg-restaurant-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Start Ordering
          </Link>
        </div>
      </section>
    </main>
  )
} 