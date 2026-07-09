"use client"
import { useState, useEffect } from 'react';
import {
  ChevronRight,
  Shield,
  Droplets,
  Sun,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ─────────── Animation Variants ─────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' as const, delay: 0.3 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

/* ─────────── Data ─────────── */
const heroImages = [
  'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

const services = [
  {
    icon: Shield,
    title: 'Ceiling Waterproofing',
    description: 'Complete ceiling protection with advanced waterproofing solutions to prevent water damage and leakage.',
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Leak Prevention', 'Mold Protection', 'Long-lasting Results'],
  },
  {
    icon: Sun,
    title: 'Heat Proofing',
    description: 'Advanced thermal insulation services to keep your building cool and reduce energy consumption.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Energy Efficient', 'Temperature Control', 'Cost Effective'],
  },
  {
    icon: Droplets,
    title: 'Water Proofing',
    description: 'Comprehensive waterproofing solutions for all types of structures and surfaces.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Moisture Control', 'Structural Protection', 'Quality Materials'],
  },
  {
    icon: Droplets,
    title: 'Water-Tank Leakage Treatment',
    description: 'Expert treatment for water tank leaks ensuring complete sealing and long-term protection.',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Complete Sealing', 'Rust Protection', 'Long-term Durability'],
  },
  {
    icon: Droplets,
    title: 'Washroom Leakage Treatment',
    description: 'Specialized waterproofing for washrooms to prevent leaks, seepage, and long-term water damage.',
    image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&fit=crop&w=800&q=80',
    features: ['Leak Seepage Control', 'Tile & Grout Protection', 'Odor Prevention'],
  },
  {
    icon: Droplets,
    title: 'Floor & Wall Waterproofing',
    description: 'Expert waterproofing for floors and walls to prevent leaks, seepage, and long-term water damage in any area.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Leak & Seepage Control', 'Surface Protection', 'Durable Finish'],
  },
];

const processSteps = [
  { step: 1, title: 'Site Inspection', description: 'Thorough assessment of the area to identify problem areas and determine the best solution approach.', image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800', checks: ['Detailed moisture assessment', 'Structural integrity evaluation'] },
  { step: 2, title: 'Surface Preparation', description: 'Cleaning and preparing the surface by removing old materials and ensuring proper adhesion base.', image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800', checks: ['Surface cleaning and repair', 'Primer application for better adhesion'] },
  { step: 3, title: 'Application Process', description: 'Professional application of waterproofing materials using industry-standard techniques and equipment.', image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800', checks: ['Professional-grade materials', 'Multiple layer application'] },
  { step: 4, title: 'Quality Testing', description: 'Comprehensive testing to ensure complete waterproofing effectiveness and long-term durability.', image: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800', checks: ['Water-tightness verification', 'Coverage inspection'] },
  { step: 5, title: 'Final Inspection', description: 'Final quality check and customer walkthrough to ensure complete satisfaction with the work.', image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800', checks: ['Customer walkthrough', 'Warranty documentation'] },
];

const testimonials = [
  { name: 'Ahmed Hassan', role: 'Property Owner', content: 'Excellent service! They solved our ceiling leakage problem completely. Professional team and quality work.', rating: 5 },
  { name: 'Fatima Ali', role: 'Building Manager', content: 'Outstanding heatproofing service. Our electricity bills reduced significantly after their work.', rating: 5 },
  { name: 'Muhammad Khan', role: 'Contractor', content: 'Reliable and professional. We regularly recommend Quetta Chemical Service to our clients.', rating: 5 },
];

const projectGallery = [
  { image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Fresh Heat-Reflective Roof Finish', description: 'Uniform white coating designed to reduce roof temperature and improve long-term weather resistance.' },
  { image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Equipment Base Protection Work', description: 'Detailed waterproofing around raised structures and service units to block seepage at vulnerable joints.' },
  { image: 'https://images.pexels.com/photos/159213/hall-construction-site-concrete-159213.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Metal Roof Joint Sealing', description: 'Targeted treatment on panel overlaps and channels for reliable leak control in exposed roof areas.' },
  { image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Completed Industrial Roof Coating', description: 'Large-scale completed roof with clean finishing and consistent protective coverage across the surface.' },
];

const timeline = [
  { day: 'Day 1', task: 'Inspection & Quote' },
  { day: 'Day 2-3', task: 'Material Procurement' },
  { day: 'Day 4-6', task: 'Surface Preparation' },
  { day: 'Day 7-9', task: 'Application Process' },
  { day: 'Day 10', task: 'Final Testing & Handover' },
];

const navItems = [
  { name: 'Services', href: '#services', dropdown: ['Ceiling Waterproofing', 'Heat Proofing', 'Water Proofing', 'Maintenance', 'Emergency Repairs'] },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const serviceOptions = [
  'Ceiling Waterproofing',
  'Roof Heat Proofing',
  'General Water Proofing',
  'Emergency Service',
  'Washroom Leakage Treatment',
  'Floor Walls WaterProofing Treatment',
  'Water Tank Leakage Treatment',
];

/* ─────────── Components ─────────── */

function SectionBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn('inline-block px-5 py-2 rounded-full text-sm font-semibold mb-5', className)}
    >
      {children}
    </motion.span>
  );
}

function ServiceModal({ service, onClose }: { service: typeof services[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>
        <div className="relative">
          <img src={service.image} alt={service.title} className="w-full h-56 object-cover" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-md rounded-full p-3">
            <service.icon className="h-7 w-7 text-white" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
          <div className="mb-5">
            <span className="font-semibold text-blue-700 text-sm uppercase tracking-wide">Key Features</span>
            <ul className="space-y-2 mt-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function EmailProviderPopup({ onClose, onSelect }: { onClose: () => void; onSelect: (p: string) => void }) {
  const providers = [
    { name: 'Gmail', color: 'from-red-500 to-pink-500', hover: 'from-red-600 to-pink-600', ring: 'focus:ring-red-400' },
    { name: 'Outlook', color: 'from-blue-700 to-blue-500', hover: 'from-blue-800 to-blue-600', ring: 'focus:ring-blue-400' },
    { name: 'Yahoo', color: 'from-purple-600 to-purple-400', hover: 'from-purple-700 to-purple-500', ring: 'focus:ring-purple-400' },
    { name: 'Other Email', color: 'from-gray-200 to-gray-300', hover: 'from-gray-300 to-gray-400', ring: 'focus:ring-gray-400', textDark: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl transition-all duration-200 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <h4 className="text-xl font-bold mb-6 text-gray-800 text-center tracking-tight">Send Email With</h4>
        <div className="flex flex-col gap-3">
          {providers.map((p) => (
            <button
              key={p.name}
              className={cn(
                'flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r text-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 active:scale-[0.97]',
                p.color,
                `hover:${p.hover}`,
                p.ring,
                p.textDark && 'text-gray-800'
              )}
              onClick={() => onSelect(p.name === 'Other Email' ? 'mailto' : p.name.toLowerCase())}
            >
              <span className="font-semibold">{p.name}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── Main Component ─────────── */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openService, setOpenService] = useState<number | null>(null);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const whatsappNumber = '923023684297';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppRedirect = () => window.open(whatsappUrl, '_blank');

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Hero image rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* Close email popup on ESC */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowEmailPopup(false);
        setOpenService(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* ═══════════════ Navigation ═══════════════ */}
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/logo-alt.svg"
                  alt="QCS Waterproofing Logo"
                  className={cn(
                    'h-12 w-12 transition-all duration-300 drop-shadow-lg',
                    isScrolled ? 'brightness-100' : 'brightness-110'
                  )}
                />
              </div>
              <div className="sm:block">
                <span
                  className={cn(
                    'font-extrabold text-lg tracking-tight transition-colors duration-300 block leading-tight',
                    isScrolled ? 'text-blue-900' : 'text-white'
                  )}
                >
                  QCS Waterproofing
                </span>
                <span
                  className={cn(
                    'text-[10px] font-medium tracking-wide transition-colors duration-300 uppercase',
                    isScrolled ? 'text-blue-600' : 'text-blue-200'
                  )}
                >
                  Professional Solutions
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={cn(
                      'px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center space-x-1 text-sm font-medium',
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/80'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          activeDropdown === item.name && 'rotate-180'
                        )}
                      />
                    )}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-60 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-100/80 py-2 overflow-hidden"
                      >
                        {item.dropdown.map((dropItem) => (
                          <a
                            key={dropItem}
                            href="#services"
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3" />
                            {dropItem}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button
                onClick={handleWhatsAppRedirect}
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.03] active:scale-[0.97]"
              >
                <Phone className="inline mr-2 h-4 w-4" />
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'lg:hidden p-2.5 rounded-xl transition-all duration-300',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="lg:hidden overflow-hidden"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-1 mb-4 border border-gray-100/80">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-xl transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={() => { handleWhatsAppRedirect(); setIsMenuOpen(false); }}
                    className="w-full mt-3 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg active:scale-[0.97]"
                  >
                    <Phone className="inline mr-2 h-4 w-4" />
                    Get Quote
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ═══════════════ Hero Section ═══════════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((img, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: i === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img src={img} alt="" className="w-full h-full object-cover" draggable={false} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
              style={{
                left: `${(i * 7 + 3) % 100}%`,
                top: `${(i * 11 + 5) % 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center px-5 py-2.5 glass rounded-full text-sm font-semibold text-blue-200 mb-6"
              >
                <Star className="h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                #1 Waterproofing Service in Pakistan
              </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Professional{' '}
                <span className="text-gradient block mt-1">Waterproofing</span>
                <span className="text-orange-400 block mt-1">Solutions</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Expert ceiling waterproofing, heatproofing, and comprehensive water protection services in Quetta.{' '}
                <span className="text-blue-300 font-semibold">Protect your property</span> with our advanced solutions and professional expertise.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Done' },
                  { value: '100%', label: 'Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-blue-300 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-xl shadow-blue-900/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.97] group"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center px-7 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:border-white hover:scale-[1.03] active:scale-[0.97]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +92 0302-3684297
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                {['Licensed & Insured', '24/7 Emergency Service', '5-Year Warranty'].map((t) => (
                  <span key={t} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Quick Quote Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="glass rounded-3xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Quick Service Request</h3>
                    <p className="text-gray-400 text-sm">Get your free quote in 24 hours</p>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShowEmailPopup(true);
                    }}
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                    <select
                      required
                      defaultValue=""
                      className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" disabled>Select Service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="text-gray-900">{s}</option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.97]"
                    >
                      Request Quote
                      <ArrowRight className="inline ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>

                {/* Floating icons */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-5 -right-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl shadow-blue-500/30"
                >
                  <Shield className="h-7 w-7" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-5 -left-5 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-2xl shadow-xl shadow-orange-500/30"
                >
                  <Droplets className="h-7 w-7" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2.5">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-500',
                  i === currentImageIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/40 hover:bg-white/70'
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-xs tracking-wider uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [4, 16, 4], opacity: [0.7, 0.3, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-3 bg-white/70 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ Stats Bar ═══════════════ */}
      <section className="relative py-14 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '10+', label: 'Years of Excellence' },
            { value: '500+', label: 'Projects Completed' },
            { value: '24/7', label: 'Emergency Service' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={fadeInUp} custom={i} className="group">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* ═══════════════ Services Section ═══════════════ */}
      <section id="services" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_1px_at_1px_1px,#1e3a8a_1px,transparent_0)] bg-[length:40px_40px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionBadge className="bg-blue-100 text-blue-700">Our Expertise</SectionBadge>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            >
              Specialized <span className="text-blue-700">Waterproofing</span> Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive solutions for all your waterproofing needs with cutting-edge technology and expert craftsmanship
            </motion.p>
          </div>

          {/* Service Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden border border-gray-100/80 transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full p-2.5 border border-white/10">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOpenService(index)}
                    className="w-full py-3 px-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.97] flex items-center justify-center group/btn"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-10 max-w-4xl mx-auto border border-gray-100/80 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Every property is unique. Let our experts assess your specific needs and provide a tailored waterproofing solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </button>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center px-7 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get Quote Online
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ Process Section ═══════════════ */}
      <section id="process" className="relative py-24 bg-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-36 -translate-y-36 opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full translate-x-48 translate-y-48 opacity-50 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionBadge className="bg-orange-100 text-orange-700">Our Process</SectionBadge>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            >
              Step-by-Step <span className="text-orange-600">Excellence</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Our proven 5-step process ensures quality results and complete customer satisfaction
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className={cn(
                  'flex flex-col gap-10 items-center',
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                )}
              >
                {/* Text */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-blue-500/25">
                        {step.step}
                      </div>
                      <div className="absolute -inset-2 bg-blue-200 rounded-2xl -z-10 opacity-50 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{step.title}</h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mt-2" />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base pl-[84px]">{step.description}</p>
                  <div className="pl-[84px] space-y-2">
                    {step.checks.map((check, ci) => (
                      <div key={ci} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{check}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative group/image overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover/image:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-gray-800">Step {step.step}</span>
                    </div>
                  </div>
                </div>

                {/* Connecting line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 h-20 w-px bg-gradient-to-b from-blue-300 to-transparent" style={{ marginTop: `${index * 100 + 320}px` }} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline Strip */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 sm:p-10 border border-blue-100/50"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Typical Project Timeline</h3>
              <p className="text-gray-600">Most projects completed within this timeframe</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {timeline.map((t, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md border border-blue-100">
                    <span className="text-blue-700 font-bold">{i + 1}</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{t.day}</div>
                  <div className="text-xs text-gray-600 mt-1">{t.task}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ Projects Gallery ═══════════════ */}
      <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionBadge className="bg-cyan-100 text-cyan-800">Recent Projects</SectionBadge>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
            >
              Real Roof <span className="text-cyan-700">Transformation</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              A snapshot of our on-site roof waterproofing and heatproofing work with clean finishing and durable protection
            </motion.p>
          </div>

          {/* Project Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projectGallery.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -6, transition: { duration: 0.4 } }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-200/40 transition-shadow duration-500 hover:shadow-2xl hover:shadow-cyan-900/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-md">
                      Project {index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ Testimonials ═══════════════ */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_1px_at_1px_1px,white_1px,transparent_0)] bg-[length:32px_32px]" />
        </div>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionBadge className="bg-white/10 text-white glass">Client Testimonials</SectionBadge>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
            >
              What Our <span className="text-orange-400">Clients</span> Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-gray-400 max-w-3xl mx-auto"
            >
              Trusted by hundreds of satisfied customers across Quetta
            </motion.p>
          </div>

          {/* Testimonial Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.4 } }}
                className="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.15] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="text-white/90 mb-8 text-base leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { icon: Shield, label: 'Licensed', sub: 'Fully Certified' },
              { icon: CheckCircle, label: 'Insured', sub: 'Full Coverage' },
              { icon: Star, label: '5-Star Rated', sub: 'Top Quality' },
              { icon: Droplets, label: 'Warranty', sub: '5 Years' },
            ].map((badge, i) => (
              <motion.div key={badge.label} variants={fadeInUp} custom={i} className="group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
                  <badge.icon className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-white font-semibold">{badge.label}</div>
                <div className="text-gray-400 text-sm">{badge.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ═══════════════ About Section ═══════════════ */}
      <section id="about" className="relative py-24 bg-white overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/50 to-orange-100/30 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Images */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional team"
                  className="rounded-2xl shadow-xl h-64 sm:h-72 object-cover hover:shadow-2xl transition-shadow duration-500"
                  draggable={false}
                />
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality work"
                  className="rounded-2xl shadow-xl h-64 sm:h-72 object-cover mt-8 hover:shadow-2xl transition-shadow duration-500"
                  draggable={false}
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', damping: 15 }}
                className="absolute -bottom-6 -right-2 sm:right-4 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">98%</div>
                  <div className="text-gray-500 text-sm font-medium">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionBadge className="bg-blue-100 text-blue-700">About Us</SectionBadge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Quetta&apos;s Most <span className="text-blue-700">Trusted</span> Waterproofing Experts
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-base">
                With over a decade of experience in waterproofing solutions, Quetta Chemical Service has been the trusted choice for property owners throughout Quetta. We specialize in advanced ceiling waterproofing, comprehensive heatproofing, and complete water protection systems.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                Our team of certified professionals uses only the highest quality materials and latest techniques to ensure long-lasting results that protect your investment. We&apos;re not just contractors &ndash; we&apos;re your partners in property protection.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: CheckCircle, text: 'Certified Professionals', color: 'bg-blue-50 text-blue-600' },
                  { icon: CheckCircle, text: 'Premium Materials', color: 'bg-orange-50 text-orange-600' },
                  { icon: CheckCircle, text: '5-Year Warranty', color: 'bg-green-50 text-green-600' },
                  { icon: CheckCircle, text: '24/7 Support', color: 'bg-purple-50 text-purple-600' },
                ].map((f, i) => (
                  <div key={i} className={cn('flex items-center space-x-3 p-4 rounded-xl', f.color.split(' ')[0])}>
                    <f.icon className={cn('h-6 w-6 flex-shrink-0', f.color.split(' ')[1])} />
                    <span className="font-semibold text-gray-800 text-sm">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </button>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center px-7 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Contact Section ═══════════════ */}
      <section id="contact" className="relative py-24 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-36 -translate-y-36 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-48 translate-y-48 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <SectionBadge className="bg-white/10 text-white glass">Contact Us</SectionBadge>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
            >
              Ready to <span className="text-orange-400">Protect</span> Your Property?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-blue-200 max-w-2xl mx-auto"
            >
              Get your free consultation today and discover why we&apos;re Quetta&apos;s #1 choice for waterproofing
            </motion.p>
          </div>

          {/* Contact Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* Phone */}
            <motion.div variants={fadeInUp} custom={0} className="glass rounded-2xl p-6 sm:p-8 text-center hover:bg-white/[0.15] transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Call Us Now</h3>
              <div className="space-y-1 mb-4">
                <p className="text-blue-100 text-base">+92 0302-3684297</p>
                <p className="text-blue-100 text-base">+92 0315-8022932</p>
                <p className="text-blue-100 text-base">+92 0315-1221594</p>
              </div>
              <p className="text-blue-300 text-sm">Available 24/7 for emergencies</p>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInUp} custom={1} className="glass rounded-2xl p-6 sm:p-8 text-center hover:bg-white/[0.15] transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
              <p className="text-blue-100 text-base mb-1">quettachemicals.services@gmail.com</p>
              <p className="text-blue-200 text-sm mt-4">Response within 2 hours</p>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeInUp} custom={2} className="glass rounded-2xl p-6 sm:p-8 text-center hover:bg-white/[0.15] transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visit Our Office</h3>
              <p className="text-blue-100 text-base">Block 13-D2, Gulshan-e-Iqbal, Karachi</p>
              <p className="text-blue-200 text-sm mt-4">Mon-Sat: 8AM-6PM</p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={handleWhatsAppRedirect}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold shadow-xl shadow-orange-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.03] active:scale-[0.97]"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call for Emergency Service
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:border-white hover:scale-[1.03] active:scale-[0.97]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Request Free Quote
            </button>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto glass rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Contact Form</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowEmailPopup(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
                <select
                  required
                  defaultValue=""
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="" disabled>Select Service Type</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s} className="text-gray-900">{s}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Brief description of your requirements..."
                  rows={3}
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.97]"
                >
                  Send Message
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ Footer ═══════════════ */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-white pt-16 pb-8 overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-cyan-400/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-5">
                <img src="/logo.png" alt="QCS Logo" className="h-10 w-10" />
                <div>
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-300 via-cyan-200 to-orange-200 bg-clip-text text-transparent block leading-tight">
                    Quetta Chemical
                  </span>
                  <span className="text-gray-400 text-[10px] tracking-wide uppercase">Waterproofing & Heatproofing</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
                Modern, reliable, and affordable waterproofing and heatproofing for homes and businesses in Quetta and beyond.
              </p>
              <div className="flex space-x-3">
                {[
                  { href: 'https://facebook.com/', icon: 'M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z', color: 'bg-blue-600 hover:bg-blue-500' },
                  { href: 'https://twitter.com/', icon: 'M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.07 9c0 .34.04.67.1.99C7.72 9.8 4.84 8.13 2.98 5.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.95 3.63-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z', color: 'bg-sky-500 hover:bg-sky-400' },
                  { href: 'https://youtube.com/', icon: 'M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.13 6 12 6 12 6s-6.13 0-7.86.06A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.87 18 12 18 12 18s6.13 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z', color: 'bg-red-600 hover:bg-red-500' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn('w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110', social.color)}
                    aria-label="Social"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-base mb-4 text-white tracking-wide">Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {[
                  { icon: Shield, text: 'Ceiling Waterproofing' },
                  { icon: Sun, text: 'Heat Proofing' },
                  { icon: Droplets, text: 'Water Proofing' },
                  { icon: CheckCircle, text: 'Maintenance' },
                  { icon: Phone, text: 'Emergency Repairs' },
                ].map((s) => (
                  <li key={s.text}>
                    <a href="#services" className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200">
                      <s.icon className="h-4 w-4 text-blue-400 flex-shrink-0" />
                      {s.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-base mb-4 text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {['About Us', 'Our Services', 'Our Process', 'Contact Us', 'Get Quote'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-300 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-base mb-4 text-white tracking-wide">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span>+923023684297</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="break-all">quettachemical.services@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Block 13-D2, Gulshan-e-Iqbal, Karachi</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  <span>Mon-Sat: 8AM-6PM</span>
                </li>
              </ul>

              {/* Emergency Card */}
              <div className="mt-6 p-4 bg-gradient-to-r from-red-600/20 to-orange-500/15 border border-red-600/25 rounded-xl flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-red-600/80 p-2">
                  <Phone className="h-4 w-4 text-white" />
                </span>
                <div>
                  <p className="text-red-300 font-semibold text-xs">Emergency 24/7</p>
                  <p className="text-white font-bold text-sm">+92 302-3684297</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-700/50 pt-8">
            <p className="text-gray-500 text-sm">
              &copy; 2025 <span className="font-semibold text-blue-300">Quetta Chemical Service</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-500 text-xs">
              <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════════ WhatsApp Floating Button ═══════════════ */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 shadow-2xl shadow-green-500/30 border-4 border-white/20">
          <span className="absolute inset-0 rounded-full bg-green-500/20 blur-xl animate-pulse" />
          <MessageCircle className="relative z-10 h-6 w-6 text-white drop-shadow-lg" />
          <span className="absolute -top-1 -right-1 bg-white text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
            Chat
          </span>
        </span>
      </motion.a>

      {/* ═══════════════ Modals ═══════════════ */}
      <AnimatePresence>
        {openService !== null && (
          <ServiceModal service={services[openService]} onClose={() => setOpenService(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showEmailPopup && (
          <EmailProviderPopup
            onClose={() => setShowEmailPopup(false)}
            onSelect={(provider) => {
              const email = 'quettachemical.services@gmail.com';
              const subject = encodeURIComponent('New Service Quote Request');
              const body = encodeURIComponent('I would like to request a quote for waterproofing services.');
              let url = '';
              switch (provider) {
                case 'gmail':
                  url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
                  break;
                case 'outlook':
                  url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`;
                  break;
                case 'yahoo':
                  url = `https://compose.mail.yahoo.com/?to=${email}&subject=${subject}&body=${body}`;
                  break;
                default:
                  url = `mailto:${email}?subject=${subject}&body=${body}`;
              }
              window.open(url, '_blank');
              handleWhatsAppRedirect();
              setShowEmailPopup(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
