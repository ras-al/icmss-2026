import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import tkmLogo from '../assets/images/tkm-logo.png';
import ieeeTkmLogo from '../assets/images/ieeetkmce.png';
import ieeeGlobalLogo from '../assets/images/IEEE_logo.svg.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

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
                ? 'py-2 backdrop-blur-xl border-b shadow-sm'
                : 'py-4 backdrop-blur-sm'
                }`}
            style={{
                backgroundColor: scrolled ? 'var(--color-nav-bg)' : 'var(--color-nav-bg-transparent)',
                borderColor: 'var(--color-border)',
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logos */}
                <div className="flex items-center gap-3 sm:gap-5 w-fit">
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

                {/* Desktop links + toggle */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                            style={{
                                color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-nav-link)',
                                backgroundColor: location.pathname === link.path ? 'var(--color-nav-active-bg)' : 'transparent',
                            }}
                            onMouseEnter={(e) => {
                                if (location.pathname !== link.path) {
                                    e.currentTarget.style.backgroundColor = 'var(--color-nav-link-hover-bg)';
                                    e.currentTarget.style.color = 'var(--color-accent)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (location.pathname !== link.path) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--color-nav-link)';
                                }
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="ml-3 p-2 rounded-lg transition-all duration-300 cursor-pointer"
                        style={{ color: 'var(--color-nav-link)', backgroundColor: 'var(--color-nav-link-hover-bg)' }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>

                {/* Mobile: toggle + hamburger */}
                <div className="lg:hidden flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg transition-colors cursor-pointer"
                        style={{ color: 'var(--color-nav-link)' }}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg transition-colors"
                        style={{ color: 'var(--color-nav-link)' }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ backgroundColor: 'var(--color-nav-bg)', borderColor: 'var(--color-border)' }}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                            style={{
                                color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-nav-link)',
                                backgroundColor: location.pathname === link.path ? 'var(--color-nav-active-bg)' : 'transparent',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
