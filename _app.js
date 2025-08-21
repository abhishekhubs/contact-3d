"use client";
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const splineRef = useRef(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  function onLoad(splineApp) {
    splineRef.current = splineApp;
  }

  useEffect(() => {
    function handleMouseMove(event) {
      if (!splineRef.current) return;

      // Normalize cursor position (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;

      targetRotation.current = { x: -y * 0.3, y: x * 0.5 };
    }

    function animate() {
      if (splineRef.current) {
        const head = splineRef.current.findObjectByName("Head");
        if (head) {
          head.rotation.x +=
            (targetRotation.current.x - head.rotation.x) * 0.1;
          head.rotation.y +=
            (targetRotation.current.y - head.rotation.y) * 0.1;
        }
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex">
      {/* Fullscreen Spline */}
      <Spline
        scene="https://prod.spline.design/yvpgUkljv7ptym09/scene.splinecode"
        className="fixed inset-0 w-full h-full -z-10"
        onLoad={onLoad}
      />

      {/* Main Content Center */}
      <main className="relative z-10 flex-1 flex items-center justify-center text-white">
        <h1 className="text-5xl font-bold text-center">
          👋 Head follows your mouse!
        </h1>
      </main>

      {/* Contact Me Sidebar */}
      <aside className="relative z-10 w-80 bg-white/10 backdrop-blur-md border-l border-white/20 p-6 flex flex-col justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded-lg bg-white/20 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-lg bg-white/20 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-2 rounded-lg bg-white/20 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
          >
            Send
          </button>
        </form>
      </aside>
    </div>
  );
}
