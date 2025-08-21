import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fullscreen Spline Background */}
      <Spline
        className="fixed inset-0 w-full h-full -z-10"
        scene="https://prod.spline.design/yvpgUkljv7ptym09/scene.splinecode"
      />

      {/* Content Sections */}
      <main className="relative z-10 text-white">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg max-w-2xl">
            Explore my work and projects while enjoying an interactive 3D Spline background.
          </p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center bg-black/50 backdrop-blur-md px-6"
        >
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-gray-900/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-gray-900/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-xl bg-gray-900/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
