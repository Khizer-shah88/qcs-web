'use client';

import { useState, useEffect } from 'react'
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
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // WhatsApp number for all redirects
  const whatsappNumber = "923023684297";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // Handler for all WhatsApp redirects
  const handleWhatsAppRedirect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.open(whatsappUrl, "_blank");
  };

  const heroImages = [
    'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ];

  useEffect(() => {
    setIsVisible(true);

    // Image rotation
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(imageInterval);
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Ceiling Waterproofing',
      description:
        'Complete ceiling protection with advanced waterproofing solutions to prevent water damage and leakage.',
      image: '/images/floor.jpg',
      features: ['Leak Prevention', 'Mold Protection', 'Long-lasting Results'],
    },
    {
      icon: Sun,
      title: 'Heat Proofing',
      description:
        'Advanced thermal insulation services to keep your building cool and reduce energy consumption.',
      image: '/images/ceiling.jpg',
      features: ['Energy Efficient', 'Temperature Control', 'Cost Effective'],
    },
    {
      icon: Droplets,
      title: 'Water Proofing',
      description:
        'Comprehensive waterproofing solutions for all types of structures and surfaces.',
      image: '/images/top ceil.jpg',
      features: ['Moisture Control', 'Structural Protection', 'Quality Materials'],
    },
    {
      icon: Droplets,
      title: 'Water-Tank Leakage Treatment',
      description:
        'Comprehensive waterproofing solutions for all types of structures and surfaces.',
      image: '/images/tank.jpeg', // Real water tank image from Pexels
      features: ['Moisture Control', 'Structural Protection', 'Quality Materials'],
    },
    {
      icon: Droplets,
      title: 'Washroom Leakage Treatment',
      description:
        'Specialized waterproofing for washrooms to prevent leaks, seepage, and long-term water damage.',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&fit=crop&w=800&q=80', // Real washroom image from Pexels
      features: ['Leak Seepage Control', 'Tile & Grout Protection', 'Odor Prevention'],
    },
    {
      icon: Droplets,
      title: 'Floor & Wall Waterproofing Treatment',
      description:
        'Expert waterproofing for floors and walls to prevent leaks, seepage, and long-term water damage in any area of your property.',
      image: '/images/walls.jpg', // Floor and wall waterproofing image
      features: ['Leak & Seepage Control', 'Surface Protection', 'Durable Finish'],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Site Inspection',
      description:
        'Thorough assessment of the area to identify problem areas and determine the best solution approach.',
      image:
        'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      step: 2,
      title: 'Surface Preparation',
      description:
        'Cleaning and preparing the surface by removing old materials and ensuring proper adhesion base.',
      image:
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      step: 3,
      title: 'Application Process',
      description:
        'Professional application of waterproofing materials using industry-standard techniques and equipment.',
      image:
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      step: 4,
      title: 'Quality Testing',
      description:
        'Comprehensive testing to ensure complete waterproofing effectiveness and long-term durability.',
      image:
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      step: 5,
      title: 'Final Inspection',
      description:
        'Final quality check and customer walkthrough to ensure complete satisfaction with the work.',
      image:
        'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Property Owner',
      content:
        'Excellent service! They solved our ceiling leakage problem completely. Professional team and quality work.',
      rating: 5,
    },
    {
      name: 'Fatima Ali',
      role: 'Building Manager',
      content:
        'Outstanding heatproofing service. Our electricity bills reduced significantly after their work.',
      rating: 5,
    },
    {
      name: 'Muhammad Khan',
      role: 'Contractor',
      content:
        'Reliable and professional. We regularly recommend Quetta Chemical Service to our clients.',
      rating: 5,
    },
  ];

  const navItems = [
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Ceiling Waterproofing', href: '#ceiling-waterproofing' },
        { name: 'Heat Proofing', href: '#heat-proofing' },
        { name: 'Water Proofing', href: '#water-proofing' },
        { name: 'Maintenance', href: '#maintenance' },
      ],
    },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Fix: Use stable random for animated particles
  const particlePositions = Array.from({ length: 20 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    animationDelay: `${(i * 0.23) % 3}s`,
    animationDuration: `${3 + ((i * 0.37) % 2)}s`,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative flex items-center justify-center">
                {/* Modern logo: layered water drop + shield + sparkle */}
                <span className="relative inline-block h-12 w-12">
                  {/* Water drop background */}
                  <svg
                    className={`absolute inset-0 h-12 w-12 transition-all duration-300 ${
                      isScrolled ? 'opacity-100' : 'opacity-80'
                    }`}
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="waterDropGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M24 4C24 4 10 20 10 30C10 38 17 44 24 44C31 44 38 38 38 30C38 20 24 4 24 4Z"
                      fill="url(#waterDropGradient)"
                      stroke="#2563eb"
                      strokeWidth="2"
                      className="drop-shadow-lg"
                    />
                  </svg>
                  {/* Shield overlay */}
                  <svg
                    className={`absolute left-2 top-2 h-8 w-8 transition-all duration-300 ${
                      isScrolled ? 'text-blue-700' : 'text-white'
                    } group-hover:scale-110 group-hover:rotate-6`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3L4 6.5V11.5C4 17 12 21 12 21C12 21 20 17 20 11.5V6.5L12 3Z"
                      fill="currentColor"
                      fillOpacity="0.7"
                    />
                  </svg>
                  {/* Sparkle accent */}
                  <svg
                    className="absolute right-1 top-1 h-4 w-4 text-yellow-400 opacity-80 animate-pulse"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <polygon points="10,2 11,7 16,8 12,11 13,16 10,13 7,16 8,11 4,8 9,7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
              </div>
              <div>
                <span
                  className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-blue-800' : 'text-white'
                  }`}
                  style={{
                    letterSpacing: '0.01em',
                    textShadow: isScrolled
                      ? 'none'
                      : '0 2px 8px rgba(0,0,0,0.18), 0 1px 0 #2563eb',
                  }}
                >
                  Quetta Chemical Service
                </span>
                <p
                  className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-blue-600' : 'text-blue-100'
                  }`}
                >
                  Professional Waterproofing Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-1 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-100 translate-y-0 transition-all duration-300">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleWhatsAppRedirect}
                type="button"
              >
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700"
                onClick={handleWhatsAppRedirect}
                type="button"
              >
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Images with Smooth Transitions */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== currentImageIndex}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`Waterproofing service ${index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
          ))}
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.animationDelay,
                animationDuration: pos.animationDuration,
              }}
              aria-hidden="true"
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="mt-24">
                <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-200 rounded-full text-sm font-medium mb-4 backdrop-blur-sm  ">
                  🏆 #1 Waterproofing Service in Pakistan
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 block animate-pulse">
                  Waterproofing
                </span>
                <span className="text-orange-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Expert ceiling waterproofing, heatproofing, and comprehensive water protection services in Quetta.{' '}
                <span className="text-blue-300 font-semibold">
                  Protect your property
                </span>{' '}
                with our advanced solutions and professional expertise.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-blue-200 text-sm">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => {
                    // Scroll to the contact section and open the quick contact form popup
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                      // Try to trigger the quick contact form popup if possible
                      // This assumes a global function or event to open the popup
                      // If using React state, you may need to lift state up or use a custom event
                      const event = new CustomEvent("openQuickContactForm");
                      window.dispatchEvent(event);
                    }
                  }}
                  type="button"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-black hover:bg-white hover:text-gray-900 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  onClick={handleWhatsAppRedirect}
                  type="button"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  +92 0302-3684297
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  24/7 Emergency Service
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  5-Year Warranty
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
            >
              {/* Quick Service Request with WhatsApp and Email Integration */}
              <div className="relative lg:block hidden">
                {/* React state and handler logic */}
                {(() => {
                  // Use React hooks in a closure to avoid polluting the parent scope
                  const React = require("react");
                  const [name, setName] = React.useState("");
                  const [phone, setPhone] = React.useState("");
                  const [email, setEmail] = React.useState("");
                  const [service, setService] = React.useState("");
                  const [sending, setSending] = React.useState(false);
                  const [showEmailOptions, setShowEmailOptions] = React.useState(false);

                  // WhatsApp and Email details
                  const whatsappNumber = "923023684297"; // without +
                  const emailRecipient = "khizershah493@gmail.com";

                  // Compose email subject and body
                  const subject = encodeURIComponent("New Service Quote Request");
                  const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}`;
                  const encodedBody = encodeURIComponent(body);

                  // Handler for the button
                  const handleRequestQuote = async (e: React.FormEvent) => {
                    e.preventDefault();
                    if (!name || !phone || !service) {
                      alert("Please fill in your name, phone, and select a service.");
                      return;
                    }
                    setShowEmailOptions(true);
                  };

                  // Handler for sending via selected email provider
                  const handleProviderClick = (provider: string) => {
                    setSending(true);
                    let url = "";
                    if (provider === "gmail") {
                      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${subject}&body=${encodedBody}`;
                    } else if (provider === "outlook") {
                      url = `https://outlook.live.com/mail/0/deeplink/compose?to=${emailRecipient}&subject=${subject}&body=${encodedBody}`;
                    } else if (provider === "yahoo") {
                      url = `https://compose.mail.yahoo.com/?to=${emailRecipient}&subject=${subject}&body=${encodedBody}`;
                    } else {
                      // Default: mailto
                      url = `mailto:${emailRecipient}?subject=${subject}&body=${encodedBody}`;
                    }
                    window.open(url, "_blank");

                    // WhatsApp message
                    const message = `New Service Request:%0AName: ${encodeURIComponent(
                      name
                    )}%0APhone: ${encodeURIComponent(
                      phone
                    )}%0AEmail: ${encodeURIComponent(
                      email
                    )}%0AService: ${encodeURIComponent(service)}`;
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                    window.open(whatsappUrl, "_blank");

                    setSending(false);
                    setShowEmailOptions(false);
                  };

                  // Handler to close the popup
                  const handleClosePopup = () => {
                    setShowEmailOptions(false);
                  };

                  return (
                    <>
                      <form
                        className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
                        onSubmit={handleRequestQuote}
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Quick Service Request
                          </h3>
                          <p className="text-gray-300">
                            Get your free quote in 24 hours
                          </p>
                        </div>
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                          />
                          <input
                            type="email"
                            placeholder="Email (optional)"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                          <select
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-black backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={service}
                            onChange={e => setService(e.target.value)}
                            required
                          >
                            <option value="">Select Service</option>
                            <option value="Ceiling Waterproofing">Ceiling Waterproofing</option>
                            <option value="Heat Proofing">Heat Proofing</option>
                            <option value="Water Proofing">Water Proofing</option>
                          </select>
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                            disabled={sending}
                          >
                            {sending ? "Sending..." : "Request Quote"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </form>
                      {/* Email provider popup */}
                      {showEmailOptions && (
                        <div
                          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300"
                          style={{ animation: "fadeInBg 0.3s" }}
                        >
                          <div
                            className="bg-white rounded-3xl shadow-2xl p-8 max-w-xs w-full relative transform transition-all duration-300 scale-95 opacity-0 animate-popupIn"
                          >
                            <button
                              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
                              onClick={handleClosePopup}
                              aria-label="Close"
                              type="button"
                            >
                              <span className="block transition-transform duration-200 hover:rotate-90">&times;</span>
                            </button>
                            <h4 className="text-xl font-bold mb-6 text-gray-800 text-center tracking-tight">
                              Send Email With
                            </h4>
                            <div className="flex flex-col gap-3">
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                                onClick={() => handleProviderClick("gmail")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><path d="M24 27.5L8 16.5V36C8 37.1046 8.89543 38 10 38H38C39.1046 38 40 37.1046 40 36V16.5L24 27.5Z" fill="#EA4335"/><path d="M38 10H10C8.89543 10 8 10.8954 8 12V16.5L24 27.5L40 16.5V12C40 10.8954 39.1046 10 38 10Z" fill="#4285F4"/><path d="M40 16.5L24 27.5L8 16.5" stroke="#34A853" strokeWidth="2"/><path d="M8 16.5V36C8 37.1046 8.89543 38 10 38H38C39.1046 38 40 37.1046 40 36V16.5" stroke="#FBBC05" strokeWidth="2"/></svg>
                                <span className="font-medium">Gmail</span>
                              </button>
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onClick={() => handleProviderClick("outlook")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><rect x="8" y="14" width="32" height="20" rx="2" fill="#0072C6"/><rect x="8" y="14" width="32" height="20" rx="2" stroke="#005A9E" strokeWidth="2"/></svg>
                                <span className="font-medium">Outlook</span>
                              </button>
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onClick={() => handleProviderClick("yahoo")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><path d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36Z" fill="#6001D2"/><path d="M24 18C21.2386 18 19 20.2386 19 23C19 25.7614 21.2386 28 24 28C26.7614 28 29 25.7614 29 23C29 20.2386 26.7614 18 24 18ZM24 26C22.3431 26 21 24.6569 21 23C21 21.3431 22.3431 20 24 20C25.6569 20 27 21.3431 27 23C27 24.6569 25.6569 26 24 26Z" fill="#6001D2"/></svg>
                                <span className="font-medium">Yahoo</span>
                              </button>
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                onClick={() => handleProviderClick("mailto")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><path d="M8 14C8 12.8954 8.89543 12 10 12H38C39.1046 12 40 12.8954 40 14V34C40 35.1046 39.1046 36 38 36H10C8.89543 36 8 35.1046 8 34V14Z" fill="#E0E0E0"/><path d="M8 14L24 26L40 14" stroke="#757575" strokeWidth="2"/><path d="M8 34V14L24 26L40 14V34" stroke="#757575" strokeWidth="2"/></svg>
                                <span className="font-medium">Other Email</span>
                              </button>
                            </div>
                          </div>
                          <style jsx global>{`
                            @keyframes fadeInBg {
                              from { opacity: 0; }
                              to { opacity: 1; }
                            }
                            @keyframes popupIn {
                              0% {
                                opacity: 0;
                                transform: scale(0.92) translateY(40px);
                              }
                              100% {
                                opacity: 1;
                                transform: scale(1) translateY(0);
                              }
                            }
                            .animate-popupIn {
                              animation: popupIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                            }
                          `}</style>
                        </div>
                      )}
                    </>
                  );
                })()}

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <Droplets className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-blue-200">Emergency Service</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Animation */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Specialized <span className="text-blue-700">Waterproofing</span>{' '}
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your waterproofing needs with
              cutting-edge technology and expert craftsmanship
            </p>
          </div>

          {/*
            Service Cards with "Learn More" popup modal
          */}
          {(() => {
            const [openService, setOpenService] = useState<null | number>(null);

            // For smooth fade/scale animation
            function ServiceModal({ service, onClose }: { service: any; onClose: () => void }) {
              return (
                <div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all"
                  style={{ animation: 'fadeInBg 0.3s' }}
                  onClick={onClose}
                >
                  <div
                    className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden animate-modalIn"
                    style={{
                      animation: 'modalIn 0.35s cubic-bezier(.4,2,.6,1) both',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                      onClick={onClose}
                      aria-label="Close"
                    >
                      <X className="h-5 w-5 text-gray-700" />
                    </button>
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-56 object-cover"
                        draggable={false}
                        style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-sm rounded-full p-3">
                        {service.icon && (
                          <service.icon className="h-8 w-8 text-blue-700" />
                        )}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <span className="font-semibold text-blue-700">Features:</span>
                        <ul className="space-y-2 mt-2">
                          {service.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              <span className="text-gray-800">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 mt-2"
                        onClick={onClose}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                  <style jsx global>{`
                    @keyframes fadeInBg {
                      from { opacity: 0; }
                      to { opacity: 1; }
                    }
                    @keyframes modalIn {
                      0% {
                        opacity: 0;
                        transform: scale(0.85) translateY(40px);
                      }
                      100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                      }
                    }
                  `}</style>
                </div>
              );
            }

            return (
              <>
                <div className="grid md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-white border-0 overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardContent className="p-0 relative">
                        <div className="relative overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                            {service.icon && (
                              <service.icon className="h-8 w-8 text-white" />
                            )}
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-3 mb-6">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center group/item"
                              >
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors duration-300">
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                </div>
                                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300"
                            type="button"
                            onClick={() => setOpenService(index)}
                          >
                            Learn More
                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {openService !== null && (
                  <ServiceModal
                    service={services[openService]}
                    onClose={() => setOpenService(null)}
                  />
                )}
              </>
            );
          })()}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Every property is unique. Let our experts assess your specific
                needs and provide a tailored waterproofing solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                  size="lg"
                  onClick={handleWhatsAppRedirect}
                  type="button"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  onClick={handleWhatsAppRedirect}
                  type="button"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get Quote Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section
        id="process"
        className="py-20 bg-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-36 -translate-y-36 opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full translate-x-48 translate-y-48 opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Step-by-Step <span className="text-orange-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process ensures quality results and complete
              customer satisfaction
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 group`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {step.step}
                      </div>
                      <div className="absolute -inset-2 bg-blue-200 rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed pl-20">
                    {step.description}
                  </p>

                  {/* Process Features */}
                  <div className="pl-20 space-y-2">
                    {index === 0 && (
                      <>
                        <div className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Detailed moisture assessment</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Structural integrity evaluation</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Surface cleaning and repair</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Primer application for better adhesion</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Professional-grade materials</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Multiple layer application</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative group/image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover/image:shadow-3xl transition-all duration-500 group-hover/image:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover/image:from-black/30 transition-all duration-300"></div>

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-gray-800">
                        Step {step.step}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Typical Project Timeline
              </h3>
              <p className="text-gray-600">
                Most projects completed within this timeframe
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { day: 'Day 1', task: 'Inspection & Quote' },
                { day: 'Day 2-3', task: 'Material Procurement' },
                { day: 'Day 4-6', task: 'Surface Preparation' },
                { day: 'Day 7-9', task: 'Application Process' },
                { day: 'Day 10', task: 'Final Testing & Handover' },
              ].map((timeline, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-blue-700 font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="font-semibold text-gray-900">
                    {timeline.day}
                  </div>
                  <div className="text-sm text-gray-600">{timeline.task}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Client Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our <span className="text-orange-400">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by hundreds of satisfied customers across Quetta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-white mb-6 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-white font-semibold">Licensed</div>
              <div className="text-gray-300 text-sm">Fully Certified</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-white font-semibold">Insured</div>
              <div className="text-gray-300 text-sm">Full Coverage</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-white font-semibold">5-Star Rated</div>
              <div className="text-gray-300 text-sm">Top Quality</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div className="text-white font-semibold">Warranty</div>
              <div className="text-gray-300 text-sm">5 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full translate-x-48 -translate-y-48 opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional team"
                  className="rounded-2xl shadow-xl h-64 object-cover hover:shadow-2xl transition-shadow duration-300"
                  draggable={false}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality work"
                  className="rounded-2xl shadow-xl h-64 object-cover mt-8 hover:shadow-2xl transition-shadow duration-300"
                  draggable={false}
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-1">
                    98%
                  </div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Quetta&apos;s Most <span className="text-blue-700">Trusted</span>{' '}
                Waterproofing Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience in waterproofing solutions,
                Quetta Chemical Service has been the trusted choice for property
                owners throughout Quetta. We specialize in advanced ceiling
                waterproofing, comprehensive heatproofing, and complete water
                protection systems.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified professionals uses only the highest
                quality materials and latest techniques to ensure long-lasting
                results that protect your investment. We&apos;re not just
                contractors – we&apos;re your partners in property protection.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">
                    Certified Professionals
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <span className="font-semibold text-gray-800">
                    Premium Materials
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-800">
                    5-Year Warranty
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <span className="font-semibold text-gray-800">
                    24/7 Support
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
                  size="lg"
                  onClick={handleWhatsAppRedirect}
                  type="button"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                  onClick={handleWhatsAppRedirect}
                  type="button"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 backdrop-blur-sm">
              Contact Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Ready to <span className="text-orange-400">Protect</span> Your Property?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
              Get your free consultation today and discover why we&apos;re Quetta&apos;s #1 choice for waterproofing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center mb-8 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20 flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-4">
                Call Us Now
              </h3>
              <p className="text-blue-100 text-base sm:text-lg mb-1 sm:mb-2">+92 0302-3684297</p>
              <p className="text-blue-100 text-base sm:text-lg mb-2 sm:mb-4">+92 0315-8022932</p>
              <p className="text-blue-200 text-xs sm:text-sm">
                Available 24/7 for emergencies
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20 flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-4">
                Email Us
              </h3>
              <p className="text-blue-100 text-base sm:text-lg mb-1 sm:mb-2">
                quettachemical.services@gmail.com
              </p>
              <p className="text-blue-100 text-base sm:text-lg mb-2 sm:mb-4">
                quettachemical.services@gmail.com
              </p>
              <p className="text-blue-200 text-xs sm:text-sm">Response within 2 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20 flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-4">
                Visit Our Office
              </h3>
              <p className="text-blue-100 text-base sm:text-lg mb-1 sm:mb-2">
                Block 13-D2, Gulshan-e-Iqbal, Karachi
              </p>
              <p className="text-blue-100 text-base sm:text-lg mb-2 sm:mb-4">
                Karachi, Pakistan
              </p>
              <p className="text-blue-200 text-xs sm:text-sm">Mon-Sat: 8AM-6PM</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                size="lg"
                onClick={handleWhatsAppRedirect}
                type="button"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Emergency Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white hover:text-blue-700 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                onClick={handleWhatsAppRedirect}
                type="button"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Free Quote
              </Button>
            </div>

            {/* Quick Contact Form */}
            {(() => {
              // Use React hooks in a closure to avoid polluting parent scope
              const React = require("react");
              const [name, setName] = React.useState("");
              const [phone, setPhone] = React.useState("");
              const [email, setEmail] = React.useState("");
              const [service, setService] = React.useState("");
              const [message, setMessage] = React.useState("");
              const [sending, setSending] = React.useState(false);
              const [showEmailOptions, setShowEmailOptions] = React.useState(false);

              // Email recipient
              const emailRecipient = "quettachemical.services@gmail.com";

              // Compose email subject and body
              const subject = encodeURIComponent("New Customer Contact Form Submission from || www.qcswaterproofing.com");
              const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
              const encodedBody = encodeURIComponent(body);

              // Handler for the button
              const handleSendEmail = async (e: React.FormEvent) => {
                e.preventDefault();
                if (!name || !phone || !email || !service) {
                  alert("Please fill in your name, phone, email, and select a service.");
                  return;
                }
                setShowEmailOptions(true);
              };

              // Handler for sending via selected email provider
              const handleProviderClick = (provider: string) => {
                setSending(true);
                let url = "";
                if (provider === "gmail") {
                  url = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${subject}&body=${encodedBody}`;
                } else if (provider === "outlook") {
                  url = `https://outlook.live.com/mail/0/deeplink/compose?to=${emailRecipient}&subject=${subject}&body=${encodedBody}`;
                } else if (provider === "yahoo") {
                  url = `https://compose.mail.yahoo.com/?to=${emailRecipient}&subject=${subject}&body=${encodedBody}`;
                } else {
                  // Default: mailto
                  url = `mailto:${emailRecipient}?subject=${subject}&body=${encodedBody}`;
                }
                window.open(url, "_blank");
                setSending(false);
                setShowEmailOptions(false);
              };

              // Handler to close the popup
              const handleClosePopup = () => {
                setShowEmailOptions(false);
              };

              return (
                <>
                  <form
                    className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                    onSubmit={handleSendEmail}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Quick Contact Form
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                        required
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-3 mb-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                      required
                    />
                    <select
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-black backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4 transition-all duration-300"
                      value={service}
                      onChange={e => setService(e.target.value)}
                      required
                    >
                      <option value="">Select Service Type</option>
                      <option value="Ceiling Waterproofing">Ceiling Waterproofing</option>
                      <option value="Roof Heat Proofing">Roof Heat Proofing</option>
                      <option value="General Water Proofing">General Water Proofing</option>
                      <option value="Emergency Service">Emergency Service</option>
                      <option value="Washroom Leakage Treatment">Washroom Leakage Treatment</option>
                      <option value="Floor Walls WaterProofing Treatment">Floor Walls WaterProofing Treatment</option>
                      <option value="Water Tank Leakage Treatment">Water Tank Leakage Treatment</option>
                    </select>
                    <textarea
                      placeholder="Brief description of your requirements..."
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4 transition-all duration-300 resize-none"
                    ></textarea>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                      type="submit"
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  {showEmailOptions && (
                        <div
                          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300"
                          style={{ animation: "fadeInBg 0.3s" }}
                        >
                          <div
                            className="bg-white rounded-3xl shadow-2xl p-8 max-w-xs w-full relative transform transition-all duration-300 scale-95 opacity-0 animate-popupIn"
                          >
                            <button
                              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
                              onClick={handleClosePopup}
                              aria-label="Close"
                              type="button"
                            >
                              <span className="block transition-transform duration-200 hover:rotate-90">&times;</span>
                            </button>
                            <h4 className="text-xl font-bold mb-6 text-gray-800 text-center tracking-tight">
                              Send Email With
                            </h4>
                            <div className="flex flex-col gap-3">
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                                onClick={() => handleProviderClick("gmail")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><path d="M24 27.5L8 16.5V36C8 37.1046 8.89543 38 10 38H38C39.1046 38 40 37.1046 40 36V16.5L24 27.5Z" fill="#EA4335"/><path d="M38 10H10C8.89543 10 8 10.8954 8 12V16.5L24 27.5L40 16.5V12C40 10.8954 39.1046 10 38 10Z" fill="#4285F4"/><path d="M40 16.5L24 27.5L8 16.5" stroke="#34A853" strokeWidth="2"/><path d="M8 16.5V36C8 37.1046 8.89543 38 10 38H38C39.1046 38 40 37.1046 40 36V16.5" stroke="#FBBC05" strokeWidth="2"/></svg>
                                <span className="font-medium">Gmail</span>
                              </button>
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onClick={() => handleProviderClick("outlook")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><rect x="8" y="14" width="32" height="20" rx="2" fill="#0072C6"/><rect x="8" y="14" width="32" height="20" rx="2" stroke="#005A9E" strokeWidth="2"/></svg>
                                <span className="font-medium">Outlook</span>
                              </button>
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onClick={() => handleProviderClick("yahoo")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><path d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36Z" fill="#6001D2"/><path d="M24 18C21.2386 18 19 20.2386 19 23C19 25.7614 21.2386 28 24 28C26.7614 28 29 25.7614 29 23C29 20.2386 26.7614 18 24 18ZM24 26C22.3431 26 21 24.6569 21 23C21 21.3431 22.3431 20 24 20C25.6569 20 27 21.3431 27 23C27 24.6569 25.6569 26 24 26Z" fill="#6001D2"/></svg>
                                <span className="font-medium">Yahoo</span>
                              </button>
                              <button
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                onClick={() => handleProviderClick("mailto")}
                                type="button"
                                disabled={sending}
                              >
                                <svg width="20" height="20" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="8" fill="white"/><path d="M8 14C8 12.8954 8.89543 12 10 12H38C39.1046 12 40 12.8954 40 14V34C40 35.1046 39.1046 36 38 36H10C8.89543 36 8 35.1046 8 34V14Z" fill="#E0E0E0"/><path d="M8 14L24 26L40 14" stroke="#757575" strokeWidth="2"/><path d="M8 34V14L24 26L40 14V34" stroke="#757575" strokeWidth="2"/></svg>
                                <span className="font-medium">Other Email</span>
                              </button>
                            </div>
                          </div>
                          <style jsx global>{`
                            @keyframes fadeInBg {
                              from { opacity: 0; }
                              to { opacity: 1; }
                            }
                            @keyframes popupIn {
                              0% {
                                opacity: 0;
                                transform: scale(0.92) translateY(40px);
                              }
                              100% {
                                opacity: 1;
                                transform: scale(1) translateY(0);
                              }
                            }
                            .animate-popupIn {
                              animation: popupIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                            }
                          `}</style>
                        </div>
                      )}
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-white pt-16 pb-8 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-cyan-400/10 rounded-full blur-2xl animate-blob"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            {/* Brand & Social */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div className="flex items-center space-x-4 mb-6">
                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-3 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </span>
                <div>
                  <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-300 via-cyan-200 to-orange-200 bg-clip-text text-transparent">
                    Quetta Chemical Service
                  </span>
                  <p className="text-gray-400 text-xs mt-1">
                    Waterproofing & Heatproofing Experts
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-6 max-w-xs">
                Modern, reliable, and affordable waterproofing and heatproofing for homes and businesses in Quetta and beyond.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/></svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-9 h-9 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-300 transition"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.07 9c0 .34.04.67.1.99C7.72 9.8 4.84 8.13 2.98 5.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.95 3.63-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg>
                </a>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500 transition"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.13 6 12 6 12 6s-6.13 0-7.86.06A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.87 18 12 18 12 18s6.13 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
                </a>
              </div>
            </div>
            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white tracking-wide">Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#ceiling-waterproofing" className="flex items-center gap-2 hover:text-blue-300 transition">
                    <Shield className="h-4 w-4 text-blue-400" /> Ceiling Waterproofing
                  </a>
                </li>
                <li>
                  <a href="#heat-proofing" className="flex items-center gap-2 hover:text-blue-300 transition">
                    <Sun className="h-4 w-4 text-yellow-300" /> Heat Proofing
                  </a>
                </li>
                <li>
                  <a href="#water-proofing" className="flex items-center gap-2 hover:text-blue-300 transition">
                    <Droplets className="h-4 w-4 text-cyan-300" /> Water Proofing
                  </a>
                </li>
                <li>
                  <a href="#maintenance" className="flex items-center gap-2 hover:text-blue-300 transition">
                    <CheckCircle className="h-4 w-4 text-green-400" /> Maintenance
                  </a>
                </li>
                <li>
                  <a href="#emergency" className="flex items-center gap-2 hover:text-blue-300 transition">
                    <Phone className="h-4 w-4 text-red-400" /> Emergency Repairs
                  </a>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#about" className="hover:text-blue-300 transition">About Us</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-300 transition">Our Services</a>
                </li>
                <li>
                  <a href="#process" className="hover:text-blue-300 transition">Our Process</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-300 transition">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">Get Quote</a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-lg mb-4 text-white tracking-wide">Contact</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+923023684297</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>quettachemical.services@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Block 13-D2, Gulshan-e-Iqbal, Karachi</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-yellow-300" />
                  <span>Mon-Sat: 8AM-6PM</span>
                </li>
              </ul>
              <div className="mt-6 p-3 bg-gradient-to-r from-red-600/30 to-orange-500/20 border border-red-600/30 rounded-xl shadow-lg flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-red-600/80 p-2">
                  <Phone className="h-5 w-5 text-white" />
                </span>
                <div>
                  <p className="text-red-300 font-semibold text-xs">Emergency 24/7</p>
                  <p className="text-white font-bold text-sm">+92-300-EMERGENCY</p>
                </div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-800 pt-8 pb-4">
            <div className="mb-2 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 <span className="font-semibold text-blue-300">Quetta Chemical Service</span>. All rights reserved.
              </p>
            </div>
     
            <div className="flex space-x-4 text-gray-400 text-xs">
              <a href="#" className="hover:text-blue-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition">Terms</a>
              <a href="#" className="hover:text-blue-300 transition">Warranty</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/923023684297`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 shadow-2xl border-4 border-white/30 hover:scale-110 transition-transform duration-300 animate-bounce-slow">
          <span className="absolute inset-0 rounded-full bg-green-500/20 blur-xl opacity-60 group-hover:opacity-80 transition animate-pulse"></span>
          <MessageCircle className="relative z-10 h-8 w-8 text-white drop-shadow-lg group-hover:scale-125 transition-transform duration-200 animate-float" />
          <span className="absolute -top-2 -right-2 bg-white text-green-600 text-xs font-bold px-2 py-0.5 rounded-full shadow group-hover:bg-green-100 transition animate-pop">Chat</span>
        </span>
        <style jsx global>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s infinite;
          }
          @keyframes float {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.08) translateY(-4px); }
          }
          .animate-float {
            animation: float 2.2s ease-in-out infinite;
          }
          @keyframes pop {
            0% { transform: scale(0.9); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pop {
            animation: pop 1.8s infinite;
          }
        `}</style>
      </a>
    </div>
  );
}