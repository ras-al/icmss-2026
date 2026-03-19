import { Link } from 'react-router-dom';
import {
    ArrowRight, ExternalLink, FileText, Upload, BookOpen, ShieldCheck,
    Activity, Radio, Shield, Cpu, Brain, Zap,
    HeartPulse, Bot, Plug, Atom, Rocket,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { authorGuidelines, topics } from '../data/content';

const iconMap = {
    activity: Activity, radio: Radio, shield: Shield, cpu: Cpu,
    brain: Brain, zap: Zap, 'heart-pulse': HeartPulse, bot: Bot,
    plug: Plug, atom: Atom, rocket: Rocket,
};

export default function CallForPapers() {
    return (
        <div className="pt-24">
            {/* ═══ Header ═══ */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,212,255,0.15), transparent)' }}
                />
                <div className="container mx-auto relative z-10">
                    <SectionHeading
                        title="Call for Papers"
                        subtitle={authorGuidelines.overview}
                    />
                </div>
            </section>

            {/* ═══ Topics ═══ */}
            <section className="section-padding bg-[var(--color-primary)]" style={{ paddingTop: 0 }}>
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold font-[var(--font-heading)] text-[var(--color-text-primary)] mb-16 text-center">Conference Topics</h3>
                    <br></br>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {topics.map((topic, i) => {
                            const Icon = iconMap[topic.icon] || Cpu;
                            return (
                                <ScrollReveal key={topic.title} delay={i * 50}>
                                    <div className="glass-card p-5 flex items-center gap-4 h-full">
                                        <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 flex items-center justify-center">
                                            <Icon size={18} className="text-[var(--color-accent)]" />
                                        </div>
                                        <span className="text-sm font-medium text-[var(--color-text-primary)]">{topic.title}</span>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ Submission Guidelines ═══ */}
            <section className="section-padding" style={{ background: 'linear-gradient(180deg, var(--color-primary) 0%, #0d1235 100%)' }}>
                <div className="container mx-auto max-w-4xl">
                    <SectionHeading title="Submission Guidelines" />

                    <div className="space-y-6">
                        {/* Paper Format */}
                        <ScrollReveal>
                            <div className="glass-card p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 flex items-center justify-center">
                                        <FileText size={20} className="text-[var(--color-accent)]" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Paper Format</h4>
                                </div>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-justify">
                                    {authorGuidelines.submission}
                                </p>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5 text-justify">
                                    Full papers should not exceed <span className="text-[var(--color-accent)] font-semibold">{authorGuidelines.maxPages} pages</span>.
                                </p>
                                <a
                                    href={authorGuidelines.templateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline inline-flex items-center gap-2 text-sm"
                                >
                                    Download IEEE Template <ExternalLink size={16} />
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Submission Process */}
                        <ScrollReveal delay={100}>
                            <div className="glass-card p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 flex items-center justify-center">
                                        <Upload size={20} className="text-[var(--color-accent)]" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Submission Process</h4>
                                </div>
                                <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-4 text-justify">
                                    <p>
                                        Authors are required to submit their full papers (maximum {authorGuidelines.maxPages} pages) through the
                                        <span className="text-[var(--color-accent)] font-medium"> Microsoft Conference Management Toolkit (CMT)</span>.
                                    </p>
                                    <p>
                                        The full text papers should be submitted by one of the authors of the paper through electronic submission. Submissions by anyone other than the authors will not be accepted.
                                    </p>
                                    <p>
                                        After logging into the Conference Management System, please click on the &quot;Create new submission&quot; tab and follow the instructions. The Title of the paper and the Abstract are to be entered separately, along with the full paper.
                                    </p>
                                    {authorGuidelines.cmtLink ? (
                                        <a href={authorGuidelines.cmtLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm mt-2">
                                            Submit via CMT <ExternalLink size={16} />
                                        </a>
                                    ) : (
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-[var(--color-gold)]">
                                            CMT submission link will be updated soon
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Important Notes */}
                        <ScrollReveal delay={200}>
                            <div className="glass-card p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 flex items-center justify-center">
                                        <BookOpen size={20} className="text-[var(--color-accent)]" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Important Notes</h4>
                                </div>
                                <ul className="text-[var(--color-text-secondary)] leading-relaxed space-y-4 list-none text-justify">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                        Papers must be submitted on the understanding that they have not been published elsewhere and are not currently under consideration by another conference.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                        The submitting author is responsible for ensuring that the article's publication has been approved by all other co-authors.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                        It is the authors' responsibility to ensure that articles emanating from a particular institution are submitted with the approval of the necessary institution.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                        All enquiries concerning the publication of accepted papers should be addressed to the conference secretariat.
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Peer Review & Publication */}
                        <ScrollReveal delay={300}>
                            <div className="glass-card p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 flex items-center justify-center">
                                        <ShieldCheck size={20} className="text-[var(--color-accent)]" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Peer Review & Publication</h4>
                                </div>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed text-justify">
                                    {authorGuidelines.peerReview}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* CMT Acknowledgment */}
                        <ScrollReveal delay={400}>
                            <div className="glass-card p-6 sm:p-8 border-[var(--color-border-accent)]">
                                <h4 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">CMT Acknowledgment</h4>
                                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed text-justify">
                                    {authorGuidelines.cmtAcknowledgment}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
