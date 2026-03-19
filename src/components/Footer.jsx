import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { navLinks } from '../data/content';
import tkmLogo from '../assets/images/tkm-logo.png';
import ieeeTkmLogo from '../assets/images/ieeetkmce.png';
import ieeeGlobalLogo from '../assets/images/IEEE_logo.svg.png';

export default function Footer() {
    return (
        <footer className="relative border-t border-[var(--color-border)] bg-[rgba(10,14,39,0.8)]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-6 w-fit">
                            <a href="https://tkmce.ac.in/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                <img src={tkmLogo} alt="TKM College of Engineering" className="object-contain" style={{ height: '45px', width: 'auto', maxWidth: '100%' }} />
                            </a>
                            <div className="w-px bg-white/20 shrink-0" style={{ height: '32px' }}></div>
                            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                <img src={ieeeGlobalLogo} alt="IEEE" className="object-contain" style={{ height: '36px', width: 'auto', maxWidth: '100%' }} />
                            </a>
                            <div className="w-px bg-white/20 shrink-0" style={{ height: '32px' }}></div>
                            <a href="https://www.ieeesbtkmce.in/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                <img src={ieeeTkmLogo} alt="IEEE TKM SB" className="object-contain" style={{ height: '100px', width: 'auto', maxWidth: '100%' }} />
                            </a>
                        </div>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                            4th International Conference on Communication, Microelectronics, Signal Processing &amp; Systems
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">Quick Links</h4>
                        <br></br>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">Contact</h4>
                        <br></br>
                        <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
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
                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">Publication</h4>
                        <br></br>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                            Accepted and presented papers will be submitted to <span className="text-[var(--color-accent)]">IEEE Xplore</span> Digital Library.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
                    <p>&copy; 2026 ICMSS. All rights reserved.</p>
                    <p>Organized by TKM College of Engineering, Kollam</p>
                </div>
            </div>
        </footer>
    );
}
