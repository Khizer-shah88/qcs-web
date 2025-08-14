'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Shield, Droplets, Sun, Phone, Mail, MapPin, CheckCircle, Star, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const heroImages = [
    "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Ceiling Waterproofing",
      description: "Complete ceiling protection with advanced waterproofing solutions to prevent water damage and leakage.",
      image: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Leak Prevention", "Mold Protection", "Long-lasting Results"]
    },
    {
      icon: Sun,
      title: "Heat Proofing",
      description: "Advanced thermal insulation services to keep your building cool and reduce energy consumption.",
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Energy Efficient", "Temperature Control", "Cost Effective"]
    },
    {
      icon: Droplets,
      title: "Water Proofing",
      description: "Comprehensive waterproofing solutions for all types of structures and surfaces.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Moisture Control", "Structural Protection", "Quality Materials"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Site Inspection",
      description: "Thorough assessment of the area to identify problem areas and determine the best solution approach.",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: 2,
      title: "Surface Preparation",
      description: "Cleaning and preparing the surface by removing old materials and ensuring proper adhesion base.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: 3,
      title: "Application Process",
      description: "Professional application of waterproofing materials using industry-standard techniques and equipment.",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Comprehensive testing to ensure complete waterproofing effectiveness and long-term durability.",
      image: "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: 5,
      title: "Final Inspection",
      description: "Final quality check and customer walkthrough to ensure complete satisfaction with the work.",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Property Owner",
      content: "Excellent service! They solved our ceiling leakage problem completely. Professional team and quality work.",
      rating: 5
    },
    {
      name: "Fatima Ali",
      role: "Building Manager",
      content: "Outstanding heatproofing service. Our electricity bills reduced significantly after their work.",
      rating: 5
    },
    {
      name: "Muhammad Khan",
      role: "Contractor",
      content: "Reliable and professional. We regularly recommend Quetta Chemical Service to our clients.",
      rating: 5
    }
  ];

  const navItems = [
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Ceiling Waterproofing', href: '#ceiling-waterproofing' },
        { name: 'Heat Proofing', href: '#heat-proofing' },
        { name: 'Water Proofing', href: '#water-proofing' },
        { name: 'Maintenance', href: '#maintenance' }
      ]
    },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <Shield className={`h-10 w-10 transition-all duration-300 ${
                  isScrolled ? 'text-blue-700' : 'text-white'
                } group-hover:scale-110 group-hover:rotate-12`} />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
              <div>
                <span className={`font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Quetta Chemical Service
                </span>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-blue-100'
                }`}>
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
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
              <Button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
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
              <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700">
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
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Waterproofing service ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
          ))}
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-200 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                  🏆 #1 Waterproofing Service in Quetta
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
                Expert ceiling waterproofing, heatproofing, and comprehensive water protection services in Quetta. 
                <span className="text-blue-300 font-semibold">Protect your property</span> with our advanced solutions and professional expertise.
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
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-4 w-4" />
                  +92-300-1234567
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

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative lg:block hidden">
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Quick Service Request</h3>
                    <p className="text-gray-300">Get your free quote in 24 hours</p>
                  </div>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="">Select Service</option>
                      <option value="ceiling">Ceiling Waterproofing</option>
                      <option value="heat">Heat Proofing</option>
                      <option value="water">Water Proofing</option>
                    </select>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
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
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-blue-200">Emergency Service</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Animation */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Specialized <span className="text-blue-700">Waterproofing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your waterproofing needs with cutting-edge technology and expert craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-white border-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group/item">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors duration-300">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Every property is unique. Let our experts assess your specific needs and provide a tailored waterproofing solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Quote Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section id="process" className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-36 -translate-y-36 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full translate-x-48 translate-y-48 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Step-by-Step <span className="text-orange-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process ensures quality results and complete customer satisfaction
            </p>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 group`}>
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
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover/image:shadow-3xl transition-all duration-500 group-hover/image:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover/image:from-black/30 transition-all duration-300"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-gray-800">Step {step.step}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Typical Project Timeline</h3>
              <p className="text-gray-600">Most projects completed within this timeframe</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { day: "Day 1", task: "Inspection & Quote" },
                { day: "Day 2-3", task: "Material Procurement" },
                { day: "Day 4-6", task: "Surface Preparation" },
                { day: "Day 7-9", task: "Application Process" },
                { day: "Day 10", task: "Final Testing & Handover" }
              ].map((timeline, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-blue-700 font-bold">{index + 1}</span>
                  </div>
                  <div className="font-semibold text-gray-900">{timeline.day}</div>
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
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
              <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
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
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-300 text-sm">{testimonial.role}</p>
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
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full translate-x-48 -translate-y-48 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional team" 
                  className="rounded-2xl shadow-xl h-64 object-cover hover:shadow-2xl transition-shadow duration-300"
                />
                <img 
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Quality work" 
                  className="rounded-2xl shadow-xl h-64 object-cover mt-8 hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700 mb-1">98%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Quetta's Most <span className="text-blue-700">Trusted</span> Waterproofing Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience in waterproofing solutions, Quetta Chemical Service has been the trusted choice 
                for property owners throughout Quetta. We specialize in advanced ceiling waterproofing, comprehensive heatproofing, 
                and complete water protection systems.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified professionals uses only the highest quality materials and latest techniques to ensure 
                long-lasting results that protect your investment. We're not just contractors – we're your partners in property protection.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold text-gray-800">Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <span className="font-semibold text-gray-800">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-gray-800">5-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <span className="font-semibold text-gray-800">24/7 Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Contact Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to <span className="text-orange-400">Protect</span> Your Property?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get your free consultation today and discover why we're Quetta's #1 choice for waterproofing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Call Us Now</h3>
              <p className="text-blue-100 text-lg mb-2">+92-300-1234567</p>
              <p className="text-blue-100 text-lg mb-4">+92-81-2345678</p>
              <p className="text-blue-200 text-sm">Available 24/7 for emergencies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Email Us</h3>
              <p className="text-blue-100 text-lg mb-2">info@quettachemical.com</p>
              <p className="text-blue-100 text-lg mb-4">services@quettachemical.com</p>
              <p className="text-blue-200 text-sm">Response within 2 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Visit Our Office</h3>
              <p className="text-blue-100 text-lg mb-2">Shahrah-e-Iqbal, Quetta</p>
              <p className="text-blue-100 text-lg mb-4">Balochistan, Pakistan</p>
              <p className="text-blue-200 text-sm">Mon-Sat: 8AM-6PM</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Call for Emergency Service
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Request Free Quote
              </Button>
            </div>
            
            {/* Quick Contact Form */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact Form</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                />
              </div>
              <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4 transition-all duration-300">
                <option value="">Select Service Type</option>
                <option value="ceiling">Ceiling Waterproofing</option>
                <option value="heat">Heat Proofing</option>
                <option value="water">General Water Proofing</option>
                <option value="emergency">Emergency Service</option>
              </select>
              <textarea 
                placeholder="Brief description of your requirements..." 
                rows={3}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4 transition-all duration-300 resize-none"
              ></textarea>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Shield className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div>
                  <span className="font-bold text-xl">Quetta Chemical Service</span>
                  <p className="text-gray-400 text-sm">Professional Waterproofing</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Professional waterproofing and heatproofing solutions for residential and commercial properties.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-300 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">y</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Ceiling Waterproofing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Heat Proofing Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Complete Water Proofing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Maintenance Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Emergency Repairs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-300">Our Services</a></li>
                <li><a href="#process" className="hover:text-white transition-colors duration-300">Our Process</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Get Quote</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-400" />
                  +92-300-1234567
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-400" />
                  info@quettachemical.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                  Shahrah-e-Iqbal, Quetta
                </li>
                <li className="flex items-center">
                  <Sun className="h-4 w-4 mr-2 text-blue-400" />
                  Mon-Sat: 8AM-6PM
                </li>
              </ul>
              
              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-red-600/20 border border-red-600/30 rounded-xl">
                <p className="text-red-400 font-semibold text-sm mb-1">Emergency Service</p>
                <p className="text-white font-bold">+92-300-EMERGENCY</p>
                <p className="text-gray-400 text-xs">Available 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2024 Quetta Chemical Service. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Warranty</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}