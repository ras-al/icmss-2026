import { Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Registration() {
  return (
    <div className="pt-24">
      <section className="section-padding min-h-[70vh] flex items-center" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container mx-auto text-center">
          <SectionHeading title="Registration" subtitle="Registration details will be available soon" />

          <div className="glass-card max-w-lg mx-auto p-10 sm:p-14">
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-bg-accent-subtle)', border: '1px solid var(--color-border-accent)' }}
            >
              <Clock size={36} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-heading)' }}>Coming Soon</h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
              Registration details including fees, categories, and payment instructions will be announced shortly. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
