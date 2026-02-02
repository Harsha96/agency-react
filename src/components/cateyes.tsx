import { useEffect, useRef, useState } from "react";

/* ---------------------------------- TYPES --------------------------------- */
type CatMood = "normal" | "happy";

interface CatEyesProps {
  mood?: CatMood;
}

/* -------------------------------- COMPONENT -------------------------------- */
export default function CatEyes({ mood = "normal" }: CatEyesProps) {
  const catRef = useRef<HTMLDivElement>(null);

  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  const [blink, setBlink] = useState(false);

  const isHappy = mood === "happy";

  /* ----------------------------- RANDOM BLINK ------------------------------ */
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 120);
    }, 3500 + Math.random() * 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  /* ---------------------------- EYE FOLLOW LOGIC ---------------------------- */
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const movePupil = (pupil: HTMLDivElement, eye: HTMLDivElement) => {
      const rect = eye.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mouse.current.x - centerX;
      const dy = mouse.current.y - centerY;

      const angle = Math.atan2(dy, dx);
      const maxMove = rect.width * 0.25;

      const targetX = Math.cos(angle) * maxMove;
      const targetY = Math.sin(angle) * maxMove;

      const current = pupil.dataset.pos
        ? JSON.parse(pupil.dataset.pos)
        : { x: 0, y: 0 };

      const x = current.x + (targetX - current.x) * 0.15;
      const y = current.y + (targetY - current.y) * 0.15;

      pupil.dataset.pos = JSON.stringify({ x, y });

      pupil.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    };

    const animate = () => {
      if (
        leftEyeRef.current &&
        rightEyeRef.current &&
        leftPupilRef.current &&
        rightPupilRef.current
      ) {
        movePupil(leftPupilRef.current, leftEyeRef.current);
        movePupil(rightPupilRef.current, rightEyeRef.current);
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    /* ------------------------------- SCROLL FIX ------------------------------ */
    const onScroll = () => {
      if (leftPupilRef.current && rightPupilRef.current) {
        leftPupilRef.current.dataset.pos = JSON.stringify({ x: 0, y: 0 });
        rightPupilRef.current.dataset.pos = JSON.stringify({ x: 0, y: 0 });

        leftPupilRef.current.style.transform =
          "translate(-50%, -50%) translate(0px, 0px)";
        rightPupilRef.current.style.transform =
          "translate(-50%, -50%) translate(0px, 0px)";
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  /* ---------------------------------- JSX ---------------------------------- */
  return (
    <div
      ref={catRef}
      className="select-none cursor-pointer flex flex-col items-center"
      title="Akinahs' Assistant"
    >
      {/* FACE */}
      <div
        className={`relative w-16 h-16 rounded-full
        bg-gradient-to-br from-blue-600 to-cyan-500
        shadow-lg border border-white/20
        animate-[breathe_4s_ease-in-out_infinite]
        transition-all duration-300
        ${isHappy ? "scale-105" : ""}`}
      >
        {/* EARS */}
        <div className="absolute -top-3 -left-1 w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-500 rotate-45 rounded-lg border border-white/20" />
        <div className="absolute -top-3 -right-1 w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-500 -rotate-45 rounded-lg border border-white/20" />

        {/* EYES */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 mt-1">
          {/* LEFT EYE */}
          <div
            ref={leftEyeRef}
            className={`w-5 h-5 bg-white rounded-full relative overflow-hidden transition-all duration-150 ${
              blink ? "scale-y-10" : ""
            }`}
          >
            <div
              ref={leftPupilRef}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-900 rounded-full"
            />
          </div>

          {/* RIGHT EYE */}
          <div
            ref={rightEyeRef}
            className={`w-5 h-5 bg-white rounded-full relative overflow-hidden transition-all duration-150 ${
              blink ? "scale-y-10" : ""
            }`}
          >
            <div
              ref={rightPupilRef}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-900 rounded-full"
            />
          </div>
        </div>

        {/* NOSE */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-blue-300 rounded-sm" />

        {/* SMILE (HAPPY ONLY) */}
        <div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-2
          border-b-2 border-blue-200 rounded-full
          transition-all duration-300
          ${isHappy ? "opacity-100" : "opacity-0"}`}
        />

        {/* WHISKERS */}
        <div className="absolute bottom-4 left-0 w-6 h-0.5 bg-white/50 rotate-12" />
        <div className="absolute bottom-3 left-0 w-6 h-0.5 bg-white/50 -rotate-12" />
        <div className="absolute bottom-4 right-0 w-6 h-0.5 bg-white/50 -rotate-12" />
        <div className="absolute bottom-3 right-0 w-6 h-0.5 bg-white/50 rotate-12" />
      </div>

      {/* LABEL */}
     <p className="mt-1 text-xs text-blue-200 font-medium animate-text-cycle">
  <span className="text-line">Hi there!</span>
  <span className="text-line">Let’s start</span>
</p>
    </div>
  );
}
