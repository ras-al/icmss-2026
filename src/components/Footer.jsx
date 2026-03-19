import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { navLinks } from '../data/content';
import tkmLogo from '../assets/images/tkm-logo.png';
import ieeeTkmLogo from '../assets/images/ieeetkmce.png';
import ieeeGlobalLogo from '../assets/images/IEEE_logo.svg.png';

export default function Footer() {
    return (
        <footer className="relative border-t" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-footer-bg)' }}>
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--color-footer-top-line)' }} />

            <div className="container mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-6 w-fit">
                            <a href="https://tkmce.ac.in/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                <img src={tkmLogo} alt="TKM College of Engineering" className="object-contain" style={{ height: '45px', width: 'auto', maxWidth: '100%' }} />
                            </a>
                            <div className="w-px shrink-0" style={{ height: '32px', backgroundColor: 'var(--color-logo-separator)' }}></div>
                            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                <img src={ieeeGlobalLogo} alt="IEEE" className="object-contain" style={{ height: '36px', width: 'auto', maxWidth: '100%' }} />
                            </a>
                            <div className="w-px shrink-0" style={{ height: '32px', backgroundColor: 'var(--color-logo-separator)' }}></div>
                            <a href="https://www.ieeesbtkmce.in/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                <img src={ieeeTkmLogo} alt="IEEE TKM SB" className="object-contain" style={{ height: '100px', width: 'auto', maxWidth: '100%' }} />
                            </a>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                            4th International Conference on Communication, Microelectronics, Signal Processing &amp; Systems
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--color-text-heading)' }}>Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-sm hover:text-[var(--color-accent)] transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--color-text-heading)' }}>Contact</h4>
                        <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-0.5 text-[var(--color-accent)] shrink-0" />
                                <span>TKM College of Engineering, Kollam, Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-[var(--color-accent)] shrink-0" />
                                <span>icmss@tkmce.ac.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* IEEE */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--color-text-heading)' }}>Publication</h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                            Accepted and presented papers will be submitted to <span className="text-[var(--color-accent)] font-semibold">IEEE Xplore</span> Digital Library.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>
                    <p>&copy; 2026 ICMSS. All rights reserved.</p>
                    <p>Organized by TKM College of Engineering, Kollam</p>
                </div>
            </div>
        </footer>
    );
}
