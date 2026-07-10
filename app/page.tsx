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
  { image: '/public/metal.jpeg', title: 'Metal Roof Joint Sealing', description: 'Targeted treatment on panel overlaps and channels for reliable leak control in exposed roof areas.' },
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

      {/* Show modals */}
      <AnimatePresence>
        {openService !== null && (
          <ServiceModal 
            service={services[openService]} 
            onClose={() => setOpenService(null)} 
          />
        )}
        {showEmailPopup && (
          <EmailProviderPopup 
            onClose={() => setShowEmailPopup(false)} 
            onSelect={(provider) => {
              console.log('Selected provider:', provider);
              setShowEmailPopup(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
