import { useEffect, useRef, useState } from 'react';

export default function SectionHeading({ title, subtitle, light = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center mb-20 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6 leading-tight ${
          light ? 'text-[var(--color-text-heading)]' : 'gradient-text'
        }`}
      >
        {title}
      </h2>

      {/* Underline */}
      <div className="mx-auto w-24 h-1 rounded-full bg-[var(--color-accent)] mb-6" />

      {subtitle && (
        <p className="text-[var(--color-text-body)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
