import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';
import tkmLogo from '../assets/images/tkm-logo.png';
import ieeeTkmLogo from '../assets/images/ieeetkmce.png';
import ieeeGlobalLogo from '../assets/images/IEEE_logo.svg.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'py-2 bg-[rgba(10,14,39,0.85)] backdrop-blur-xl border-b border-[var(--color-border)]'
                : 'py-4 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logos */}
                <div className="flex items-center gap-3 sm:gap-5 w-fit">
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

                {/* Desktop links */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                ? 'text-[var(--color-accent)] bg-[rgba(0,212,255,0.1)]'
                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-[rgba(10,14,39,0.95)] backdrop-blur-xl border-b border-[var(--color-border)] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                ? 'text-[var(--color-accent)] bg-[rgba(0,212,255,0.1)]'
                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
