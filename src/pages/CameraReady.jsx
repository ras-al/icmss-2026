import { FileCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function CameraReady() {
  return (
    <div className="pt-24">
      <section className="section-padding min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.12), transparent)' }}
        />
        <div className="container mx-auto relative z-10 text-center">
          <SectionHeading title="Camera Ready Paper" subtitle="Instructions for final paper submission will be shared after acceptance" />

          <div className="glass-card max-w-lg mx-auto p-10 sm:p-14">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 flex items-center justify-center"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
            >
              <FileCheck size={36} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">Coming Soon</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Detailed instructions for preparing and submitting your camera-ready paper will be published here after the notification of acceptance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
