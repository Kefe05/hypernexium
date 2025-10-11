export default function Contacts() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')"
          }}>
           
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-primary">
              CONTACT US
            </h1>

            {/* Contact Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
                    alt="Office location"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      CAELI ENERGIE France
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      73D Rue General Mangin 38100<br />
                      GRENOBLE
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">E-mail</h4>
                    <a
                      href="mailto:contact@caeli-energie.com"
                      className="text-brand-primary hover:underline"
                    >
                      contact@caeli-energie.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent-light focus:border-brand-aring-brand-accent-light dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent-light focus:border-brand-aring-brand-accent-light dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent-light focus:border-brand-aring-brand-accent-light dark:bg-gray-700 dark:text-white transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full  bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
