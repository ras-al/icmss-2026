import { Mic } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Speakers() {
  return (
    <div className="pt-24">
      <section className="section-padding min-h-[70vh] flex items-center" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container mx-auto text-center">
          <SectionHeading title="Plenary Sessions & Speakers" subtitle="Distinguished speakers will be announced soon" />

          <div className="glass-card max-w-lg mx-auto p-10 sm:p-14">
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-bg-accent-subtle)', border: '1px solid var(--color-border-accent)' }}
            >
              <Mic size={36} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Coming Soon</h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
              We are in the process of finalizing our lineup of eminent keynote speakers and session chairs. Check back soon for updates!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
