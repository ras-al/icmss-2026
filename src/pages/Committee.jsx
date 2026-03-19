import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { committee } from '../data/content';

export default function Committee() {
    return (
        <div className="pt-24">
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.15), transparent)' }}
                />
                <div className="container mx-auto relative z-10">
                    <SectionHeading
                        title="Organizing Committee"
                        subtitle="Meet the distinguished members behind ICMSS 2026"
                    />

                    <div className="space-y-28">
                        {committee.map((group, gi) => (
                            <div key={gi}>
                                {/* Role heading */}
                                <ScrollReveal>
                                    <h3 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] text-center text-[var(--color-text-primary)] mb-16">
                                        <span className="relative inline-block pb-4">
                                            {group.role}
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
                                        </span>
                                    </h3>
                                </ScrollReveal>

                                {/* Member cards */}
                                <div className={`flex flex-wrap justify-center items-stretch gap-8 ${group.members.length === 1 ? 'max-w-sm mx-auto' :
                                    group.members.length === 2 ? 'max-w-2xl mx-auto' : ''
                                    }`}>
                                    {group.members.map((member, mi) => (
                                        <ScrollReveal key={mi} delay={mi * 100} className="flex">
                                            <div className="glass-card p-8 sm:p-10 text-center group w-[260px] sm:w-[280px] flex flex-col h-full items-center">
                                                <div className="flex-1 flex flex-col items-center">
                                                    {/* Avatar */}
                                                    <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-6 rounded-2xl overflow-hidden border-2 border-[var(--color-border)] transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] shrink-0">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                        {/* Overlay gradient */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,14,39,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    </div>

                                                    {/* Info */}
                                                    <h4 className="text-base sm:text-lg font-semibold text-[var(--color-text-primary)] mb-2 mt-auto">{member.name}</h4>
                                                </div>
                                                <p className="text-xs sm:text-sm text-[var(--color-accent)] font-medium mt-1">{member.designation}</p>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
