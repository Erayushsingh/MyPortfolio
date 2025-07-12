import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Icons for navigation items
    const iconMap = {
        'Home': Home,
        'About': User,
        'Skills': Code,
        'Projects': Briefcase,
        'Education': GraduationCap,
        'Contact': Mail
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);

            // Update active section based on scroll position
            const sections = NAVIGATION_LINKS.map(link => link.href.slice(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(`#${currentSection}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 right-0 top-0 z-50"
        >
            {/* Desktop Navigation */}
            <motion.div
                animate={{
                    backgroundColor: scrolled 
                        ? 'rgba(10, 10, 10, 0.95)' 
                        : 'rgba(10, 10, 10, 0.7)',
                    backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)'
                }}
                transition={{ duration: 0.3 }}
                className="mx-auto hidden max-w-5xl items-center justify-between rounded-2xl border border-white/10 px-8 py-4 mt-4 lg:flex glass"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="#" className="flex items-center space-x-3">
                        <img 
                            className="w-12 h-12 rounded-full ring-2 ring-blue-500/50 object-cover" 
                            src={logo} 
                            alt='logo' 
                        />
                    </a>
                </motion.div>

                <div className="hidden lg:flex items-center space-x-8">
                    {NAVIGATION_LINKS.map((item, index) => {
                        const Icon = iconMap[item.label] || Home;
                        const isActive = activeSection === item.href;
                        
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <a
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive
                                            ? 'text-blue-400 bg-blue-500/10'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span className="font-medium">{item.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
                <motion.div
                    animate={{
                        backgroundColor: scrolled 
                            ? 'rgba(10, 10, 10, 0.95)' 
                            : 'rgba(10, 10, 10, 0.7)',
                        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)'
                    }}
                    className="mx-4 mt-4 rounded-2xl border border-white/10 px-4 py-3 glass"
                >
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="#" className="flex items-center space-x-2">
                                <img 
                                    src={logo} 
                                    alt="logo" 
                                    className="w-10 h-10 rounded-full ring-2 ring-blue-500/50 object-cover" 
                                />
                                <span className="text-lg font-bold text-gradient">
                                    Portfolio
                                </span>
                            </a>
                        </motion.div>
                        
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} className="text-white" />
                            ) : (
                                <Menu size={24} className="text-white" />
                            )}
                        </motion.button>
                    </div>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 space-y-2 border-t border-white/10 pt-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => {
                                    const Icon = iconMap[item.label] || Home;
                                    const isActive = activeSection === item.href;
                                    
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <a
                                                href={item.href}
                                                onClick={(e) => handleLinkClick(e, item.href)}
                                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                                    isActive
                                                        ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                                }`}
                                            >
                                                <Icon size={20} />
                                                <span className="font-medium">{item.label}</span>
                                            </a>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;