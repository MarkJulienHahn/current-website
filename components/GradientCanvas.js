// components/GradientCanvas.js
import { useEffect, useRef } from "react";

const GradientCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const color1 = { r: 0, g: 2, b: 28 }; // Red
    const color2 = { r: 0, g: 0, b: 255 }; // Blue

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function lerp(a, b, t) {
      return a * (1 - t) + b * t;
    }

    function noise(x, y) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      const u = fade(x);
      const v = fade(y);
      const A = p[X] + Y,
        B = p[X + 1] + Y;
      return lerp(
        lerp(grad(p[A], x, y), grad(p[B], x - 1, y), u),
        lerp(grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1), u),
        v
      );
    }

    function fade(t) {
      return t * t * t * (t * (t * 6 - 15) + 10);
    }

    function grad(hash, x, y) {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    // Initialize permutation table with random values
    const p = new Array(512);
    for (let i = 0; i < 256; i++)
      p[i] = p[i + 256] = Math.floor(Math.random() * 256);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scale = 5; // Adjust this value to change the turbulence scale
      const randomOffset = Math.random() * 1000; // Random offset for variety

      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const nx = x / canvas.width;
          const ny = y / canvas.height;
          const n =
            noise(nx * scale + randomOffset, ny * scale + randomOffset) * 0.5 +
            0.5;

          const r = Math.floor(lerp(color1.r, color2.r, n));
          const g = Math.floor(lerp(color1.g, color2.g, n));
          const b = Math.floor(lerp(color1.b, color2.b, n));

          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    draw();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default GradientCanvas;
