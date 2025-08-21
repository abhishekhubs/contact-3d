import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-16"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Contact Form */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="mb-6 text-gray-300"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Feel free to reach out for collaborations or just a friendly hello ✨
          </motion.p>
          <motion.form
            className="flex flex-col space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg text-black"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition p-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>

        {/* Right - Spline Scene */}
        <motion.div
          className="w-full h-[500px] md:h-[600px] relative"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Spline
            scene="https://prod.spline.design/yvpgUkljv7ptym09/scene.splinecode"
            className="absolute inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
