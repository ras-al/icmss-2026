import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronDown, ArrowRight, Calendar, MapPin,
    Activity, Radio, Shield, Cpu, Brain, Zap,
    HeartPulse, Bot, Plug, Atom, Rocket,
    Megaphone, FileText, CheckCircle, FileCheck,
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import {
    conferenceInfo, aboutConference, aboutTKM,
    stats, schedule, topics,
} from '../data/content';

const iconMap = {
    activity: Activity, radio: Radio, shield: Shield, cpu: Cpu,
    brain: Brain, zap: Zap, 'heart-pulse': HeartPulse, bot: Bot,
    plug: Plug, atom: Atom, rocket: Rocket,
    megaphone: Megaphone, 'file-text': FileText,
    'check-circle': CheckCircle, 'file-check': FileCheck,
    calendar: Calendar,
};

function Countdown() {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const tick = () => {
            const diff = conferenceInfo.dateStart - new Date();
            if (diff <= 0) return;
            setTime({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                minutes: Math.floor((diff % 3600000) / 60000),
                seconds: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const blocks = [
        { label: 'Days', value: time.days },
        { label: 'Hours', value: time.hours },
        { label: 'Minutes', value: time.minutes },
        { label: 'Seconds', value: time.seconds },
    ];

    return (
        <div className="flex gap-3 sm:gap-4 justify-center">
            {blocks.map((b) => (
                <div key={b.label} className="glass-card px-4 py-3 sm:px-6 sm:py-4 text-center min-w-[70px]">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text tabular-nums">{String(b.value).padStart(2, '0')}</div>
                    <div className="text-[10px] sm:text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{b.label}</div>
                </div>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <div>
            {/* ═══ Hero ═══ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* BG layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)] via-[#0d1235] to-[var(--color-primary)]" />
                <div className="absolute inset-0 opacity-30"
                    style={{
                        background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(0,212,255,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(124,58,237,0.12), transparent)',
                    }}
                />
                <ParticleBackground />

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto" style={{ animation: 'fade-in-up 1s ease' }}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-[var(--color-accent)] mb-8">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                        {conferenceInfo.edition} Edition — IEEE Conference
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-[var(--font-heading)] leading-tight mb-6">
                        <span className="gradient-text">ICMSS</span>{' '}
                        <span className="text-[var(--color-text-primary)]">2026</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-x2 text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-6 leading-relaxed">
                        {conferenceInfo.fullName}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-base sm:text-lg lg:text-x2 font-medium text-[var(--color-text-primary)] mb-12 tracking-wide">
                        <span className="flex items-center gap-2.5">
                            <MapPin size={24} strokeWidth={2.5} className="text-[var(--color-accent)] drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]" />
                            {conferenceInfo.venue}
                        </span>
                        <span className="hidden sm:inline text-[var(--color-border)] opacity-50">|</span>
                        <span className="flex items-center gap-2.5">
                            <Calendar size={24} strokeWidth={2.5} className="text-[var(--color-accent-2)] drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
                            {conferenceInfo.dates}
                        </span>
                    </div>

                    {/* Countdown */}
                    <div className="mb-10">
                        <Countdown />
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/call-for-papers" className="btn-primary">
                            Submit Paper <ArrowRight size={18} />
                        </Link>
                        <Link to="/registration" className="btn-outline">
                            Register Now
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[var(--color-text-muted)]">
                    <ChevronDown size={28} />
                </div>
            </section>

            {/* ═══ About Conference ═══ */}
            <section className="section-padding bg-[var(--color-primary)]">
                <div className="container mx-auto">
                    <SectionHeading title="About the Conference" subtitle="Since 2014, ICMSS has been a vibrant platform for cutting-edge research" />

                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12">
                            <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-5 text-base sm:text-lg text-justify">
                                {aboutConference.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20">
                        {stats.map((stat, i) => (
                            <ScrollReveal key={stat.label} delay={i * 100}>
                                <div className="glass-card p-6 sm:p-8 text-center">
                                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ About TKM ═══ */}
            <section className="section-padding" style={{ background: 'linear-gradient(180deg, var(--color-primary) 0%, #0d1235 100%)' }}>
                <div className="container mx-auto">
                    <SectionHeading title="About TKM College of Engineering" subtitle="Established 1958 · Kollam, Kerala" />
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12">
                            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base sm:text-lg text-justify">{aboutTKM}</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══ Important Dates / Timeline ═══ */}
            <section className="section-padding bg-[var(--color-primary)]">
                <div className="container mx-auto">
                    <SectionHeading title="Important Dates" subtitle="Mark your calendar for these key milestones" />

                    <div className="max-w-2xl mx-auto relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-2)] to-transparent" />

                        {schedule.map((item, i) => {
                            const Icon = iconMap[item.icon] || Calendar;
                            return (
                                <ScrollReveal key={i} delay={i * 120}>
                                    <div className="relative flex gap-5 sm:gap-6 mb-8 sm:mb-10 group">
                                        {/* Dot */}
                                        <div className={`relative z-10 shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.status === 'active'
                                            ? 'bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                                            : 'glass'
                                            }`}>
                                            <Icon size={20} className={item.status === 'active' ? 'text-white' : 'text-[var(--color-accent)]'} />
                                        </div>

                                        {/* Content */}
                                        <div className="glass-card flex-1 p-5 sm:p-6">
                                            <div className="text-xs sm:text-sm text-[var(--color-accent)] font-semibold tracking-wide uppercase mb-2">{item.date}</div>
                                            <div className="text-base sm:text-lg font-medium text-[var(--color-text-primary)]">{item.event}</div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ Topics ═══ */}
            <section className="section-padding" style={{ background: 'linear-gradient(180deg, var(--color-primary) 0%, #0d1235 100%)' }}>
                <div className="container mx-auto">
                    <SectionHeading title="Conference Topics" subtitle="Explore the wide range of technical areas covered" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {topics.map((topic, i) => {
                            const Icon = iconMap[topic.icon] || Cpu;
                            return (
                                <ScrollReveal key={topic.title} delay={i * 60}>
                                    <div className="glass-card p-6 flex items-start gap-4 group cursor-default h-full">
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                            <Icon size={22} className="text-[var(--color-accent)]" />
                                        </div>
                                        <h3 className="text-sm sm:text-base font-medium text-[var(--color-text-primary)] leading-snug mt-1">{topic.title}</h3>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/call-for-papers" className="btn-primary">
                            View Submission Guidelines <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ CTA Banner ═══ */}
            <section className="section-padding bg-[var(--color-primary)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse 50% 80% at 50% 50%, rgba(124,58,237,0.3), transparent)' }}
                />
                <div className="container mx-auto relative z-10 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-heading)] gradient-text mb-8 leading-tight">
                            Ready to Share Your Research?
                        </h2>
                        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 text-base sm:text-lg text-center">
                            Submit your paper and join researchers from around the world at ICMSS 2026.
                            Accepted papers will be published in IEEE Xplore Digital Library.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/call-for-papers" className="btn-primary">Submit Your Paper <ArrowRight size={18} /></Link>
                            <Link to="/committee" className="btn-outline">Meet the Committee</Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
