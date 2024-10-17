import { useEffect, useRef, useState } from "react";

const GradientCanvas = () => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false); // Track when the canvas is ready

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const color1 = { r: 0, g: 2, b: 28 }; // Dark Blue
    const color2 = { r: 0, g: 0, b: 255 }; // Blue

    function resizeCanvas() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const scaleFactor = 0.5; // Adjust this value to control canvas resolution
        canvas.width = window.innerWidth * scaleFactor;
        canvas.height = window.innerHeight * scaleFactor;
        draw(); // Redraw after resizing to ensure it scales correctly
        setIsLoaded(true); // Once the drawing is done, show the canvas
      }, 200); // Debounce the resizing
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
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

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

          const index = (y * canvas.width + x) * 4;
          data[index] = r; // Red
          data[index + 1] = g; // Green
          data[index + 2] = b; // Blue
          data[index + 3] = 255; // Alpha
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    let resizeTimeout;
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(resizeTimeout);
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
        background: "black",
        opacity: isLoaded ? 1 : 0, // Set opacity to 1 after it's loaded
        transition: "opacity 0.5s ease-in-out", // Smooth fade-in
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default GradientCanvas;
