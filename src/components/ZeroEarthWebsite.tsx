import React, { useState } from 'react';
import { ChevronDown, Play, Search, Plus, X, RefreshCw, Volume2 } from 'lucide-react';

// Sample data for regions/locations
const locationsData = [
  { name: 'North America', color: 'bg-green-200' },
  { name: 'Europe', color: 'bg-green-300' },
  { name: 'Asia Pacific', color: 'bg-green-200' },
  { name: 'Latin America', color: 'bg-green-300' },
  { name: 'Middle East', color: 'bg-green-200' },
  { name: 'Africa', color: 'bg-green-300' },
  { name: 'Australia', color: 'bg-green-200' }
];

// Knowledge hub data
const knowledgeHubData = [
      {
      title: "Sustainable Energy Solutions Through Advanced Analytics",
      image: "https://placehold.co/300x200/9DC88D/1A472A?text=Energy+Analytics",
      category: "analytics"
    },
    {
      title: "Carbon Footprint Reduction in Manufacturing",
      description: "Environmental Engineering, Green Technology Institute",
      image: "https://placehold.co/300x200/9DC88D/1A472A?text=Carbon+Reduction",
      category: "analytics"
    },
    {
      title: "Zero Waste Management Systems",
      description: "A comprehensive approach for Zero Waste implementation (ZWI)",
      image: "https://placehold.co/300x200/9DC88D/1A472A?text=Zero+Waste",
      category: "analytics"
    },
    {
      title: "Environmental Monitoring and Visualization",
      description: "Real-time environmental data tracking and analysis solutions",
      image: "https://placehold.co/300x200/9DC88D/1A472A?text=Environmental+Monitoring",
      category: "analytics"
    },
    {
      title: "Using technology for a sustainable future",
      description: "Technology-driven approaches are offering new possibilities for sustainable systems to tackle environmental challenges",
      image: "https://placehold.co/300x200/9DC88D/1A472A?text=Sustainable+Tech",
      category: "article"
    },
    {
      title: "How can green financing help small businesses achieve sustainability goals?",
      description: "EcoFinance explains how organizations can invest in sustainable practices and environmental conservation while maintaining profitability.",
      image: "https://placehold.co/300x200/9DC88D/1A472A?text=Green+Finance",
      category: "article"
    },
    {
      title: "Compendium of Environmental Best Practices",
      description: "Collection of proven environmental practices that organizations are implementing worldwide",
      image: "https://placehold.co/300x200/9DC88D/1A472A?text=Best+Practices",
      category: "article"
    }
];

// Partners data
const partnersData = [
  { name: "Green Tech Alliance", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Green+Tech" },
  { name: "EcoSolutions Inc", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=EcoSolutions" },
  { name: "Sustainable Future Fund", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Future+Fund" },
  { name: "Environmental Institute", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Env+Institute" },
  { name: "Clean Energy Foundation", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Clean+Energy" },
  { name: "Global Sustainability Network", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Global+Net" },
  { name: "Zero Waste Initiative", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Zero+Waste" },
  { name: "Carbon Neutral Alliance", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Carbon+Neutral" },
  { name: "Renewable Energy Consortium", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Renewable" },
  { name: "Environmental Research Hub", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Research+Hub" },
  { name: "Green Innovation Lab", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Innovation" },
  { name: "Sustainability Tech", logo: "https://placehold.co/120x80/E5F5E0/1A472A?text=Sus+Tech" }
];

interface ProjectForm {
  name: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  url: string;
  image: string;
  userName: string;
  email: string;
  captcha: string;
}

export const ZeroEarthWebsite = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUseCaseModal, setShowUseCaseModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  const [formData, setFormData] = useState<ProjectForm>({
    name: '',
    type: '',
    shortDescription: '',
    longDescription: '',
    url: '',
    image: '',
    userName: '',
    email: '',
    captcha: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new item to knowledgeHubData
    const newItem = {
      title: formData.name,
      description: formData.shortDescription,
      category: formData.type.toLowerCase(),
      image: formData.image || "https://placehold.co/300x200/9DC88D/1A472A?text=New+Project",
    };
    
    knowledgeHubData.unshift(newItem);
    setShowAddModal(false);
    // Reset form
    setFormData({
      name: '',
      type: '',
      shortDescription: '',
      longDescription: '',
      url: '',
      image: '',
      userName: '',
      email: '',
      captcha: ''
    });
  };

  // Handle view more click
  const handleViewMore = (item: any) => {
    setSelectedItem(item);
    setShowUseCaseModal(true);
  };

  // Handle video loading
  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Force load the video
      const handleLoadedData = () => {
        video.play().catch(() => {
          // Autoplay failed, but that's okay
        });
      };
      video.addEventListener('loadeddata', handleLoadedData);
      return () => video.removeEventListener('loadeddata', handleLoadedData);
    }
  }, []);

  // Handle smooth scroll
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('explore-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle parallax effect
  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Parallax elements
      const heroContent = document.querySelector('.hero-content');
      const heroOverlay = document.querySelector('.hero-overlay');
      
      if (heroContent) {
        (heroContent as HTMLElement).style.transform = `translateY(${offset * 0.3}px)`;
      }
      if (heroOverlay) {
        (heroOverlay as HTMLElement).style.transform = `translateY(${offset * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredData = activeTab === 'All' 
    ? knowledgeHubData 
    : knowledgeHubData.filter(item => item.category === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/favicon-32x32.png" 
                  alt="Zero Earth Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">Zero Earth</div>
                <div className="text-sm">Sustainable Solutions for Tomorrow</div>
              </div>
            </div>
            <button 
              onClick={() => {
                const exploreSection = document.getElementById('explore-section');
                if (exploreSection) {
                  exploreSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2 group"
            >
              <span>Explore Solutions</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with Parallax */}
        <div className="absolute inset-0 transform transition-transform duration-300 bg-black/20">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute w-full h-full object-cover scale-110 transition-opacity duration-300"
          >
            <source src="/videos/nature.mp4" type="video/mp4" />
          </video>
          {/* Overlay with Parallax */}
          <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-green-900/30 transform transition-all duration-300"></div>
        </div>
        
        {/* Content with Parallax */}
        <div className="hero-content relative z-10 flex flex-col justify-center items-center min-h-screen text-center text-white max-w-4xl mx-auto px-4 transform transition-transform duration-300">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text">
              Sustainable Solutions for a Zero Impact Future
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Zero Earth's Innovation Revolution: Empowering Communities with Sustainable Technologies.
            </p>
          </div>
          
          {/* Scroll Down Button */}
          <div className="mb-16">
            <button 
              onClick={scrollToNextSection}
              className="group flex flex-col items-center space-y-2 transition-transform hover:-translate-y-1"
            >
              <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Explore More</span>
              <div className="relative">
                <ChevronDown className="w-8 h-8 animate-bounce opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-white rounded-full opacity-10 scale-150 group-hover:scale-175 transition-transform"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Explore Solutions Section */}
      <section id="explore-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Explore Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {locationsData.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group"
              >
                <div className={`h-32 ${location.color} group-hover:opacity-80 transition-opacity`}>
                  {/* Location shape placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-600 opacity-50 rounded-lg"></div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-green-800">{location.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
            {/* Thumbnail Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/image.png')",
                filter: "brightness(0.85)",
                backgroundPosition: "center 30%"
              }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
              <div className="flex items-start">
                <div className="bg-red-600/90 text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm">
                  Featured
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold max-w-2xl">
                  Sustainable Farming: Nurturing Earth's Future
                </h2>
                <p className="text-lg opacity-90 max-w-3xl">
                  Discover how traditional wisdom and modern technology combine to create sustainable agricultural practices that protect our planet
                </p>
              </div>
            </div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                {/* Red circle background */}
                <div className="absolute inset-0 bg-red-600 rounded-full scale-[1.8] opacity-20 group-hover:opacity-30 transition-opacity" />
                {/* Main play button */}
                <button className="relative flex items-center justify-center w-20 h-20 bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-colors">
                  <Play className="w-8 h-8 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
              >
                <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub Section */}
      <section 
        className="py-24 bg-cover bg-center bg-fixed relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, 
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.8) 20%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.8) 80%,
            rgba(0, 0, 0, 0.95) 100%
          ), url('/innovation-hub.jpg')`
        }}>
        {/* Premium overlay effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-transparent to-black/20"
          style={{ mixBlendMode: 'overlay' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-white">Innovation Hub</h2>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add</span>
            </button>
          </div>
          
          <p className="text-white text-lg mb-8 max-w-4xl">
            Here, you will discover a treasure trove of articles, reports, and use cases dedicated to sustainable technology and environmental solutions. 
            Dive into our comprehensive collection of resources and gain valuable insights into innovative practices and cutting-edge technologies. 
            Stay informed, inspired, and empowered as you explore the wealth of knowledge within Zero Earth.
          </p>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-1 w-fit shadow-xl">
            {['All', 'Article', 'Analytics', 'Projects', 'News'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md transition-all duration-200 font-semibold ${
                  activeTab === tab
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-white hover:bg-white/20 hover:shadow-md'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Knowledge Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200">
                  {item.image && (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <span className="text-gray-500">Image Placeholder</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-green-800 mb-2 text-lg leading-tight">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  )}
                  <button 
                    onClick={() => handleViewMore(item)}
                    className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors"
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Zero Earth Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">About Zero Earth</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed">
                Zero Earth is a pioneering organization dedicated to creating sustainable solutions for environmental challenges. 
                We provide innovative technologies and data-driven approaches to help communities achieve zero environmental impact. 
                Our comprehensive platform offers open access to cutting-edge research, sustainable practices, and environmental 
                technologies validated through collaborative efforts of scientists and environmental experts worldwide. The insights 
                and solutions emerging from Zero Earth are aimed towards strengthening evidence-driven policy making for sustainable 
                development and environmental conservation.
              </p>
              <p className="text-lg leading-relaxed">
                Zero Earth is guided by principles of open innovation, sustainable development, transparency, and community empowerment. 
                We believe in the power of collaborative action to create meaningful environmental change.
              </p>
              <p className="text-lg leading-relaxed">
                If you have any questions or comments about Zero Earth, please reach out to us through our contact channels or 
                join our community discussions for collaborative environmental solutions.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-green-200 flex items-center justify-center">
                  <span className="text-gray-600">Environmental Solutions Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/favicon-32x32.png" 
                  alt="Zero Earth Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">Zero Earth</div>
                <div className="text-sm opacity-80">Sustainable Solutions for Tomorrow</div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-sm">Committed to Zero Environmental Impact</span>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">🌱</span>
                </div>
              </div>
              <div className="text-sm opacity-80">© Zero Earth 2025 - All Rights Reserved</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Add Project</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Project name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="Article">Article</option>
                    <option value="Analytics">Analytics</option>
                    <option value="Projects">Projects</option>
                    <option value="News">News</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                <input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleFormChange}
                  placeholder="Short Description"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Long Description</label>
                <textarea
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleFormChange}
                  placeholder="Long Description"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleFormChange}
                    placeholder="Project url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">https://www.example.com</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleFormChange}
                    placeholder="Image URL"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleFormChange}
                    placeholder="User Name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email ID"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Captcha</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
                    <span className="text-purple-600 font-mono text-lg">vqXXNF</span>
                  </div>
                  <button type="button" className="p-2 text-gray-600 hover:text-gray-800">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button type="button" className="p-2 text-gray-600 hover:text-gray-800">
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleFormChange}
                  placeholder="Enter captcha"
                  required
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Use Case Modal */}
      {showUseCaseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Projects</h3>
              <button
                onClick={() => setShowUseCaseModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-blue-400 rounded-lg p-6 text-white mb-6">
              <div className="mb-6">
                {selectedItem?.image && (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-2">{selectedItem?.title || 'Project Details'}</h4>
                <h5 className="text-lg font-semibold mb-4">{selectedItem?.category}</h5>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start text-sm">
                  <div className="space-y-2">
                    <p><strong>Category:</strong> {selectedItem?.category}</p>
                    <p><strong>Status:</strong> Active</p>
                  </div>
                  <div>
                    <p><strong>Created on:</strong> {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <h6 className="font-semibold mb-2">Description</h6>
                  <p className="text-sm leading-relaxed">
                    {selectedItem?.description || 'No description available'}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <h6 className="font-semibold mb-2">Impact & Outcomes</h6>
                  <ul className="text-sm space-y-1">
                    <li>• Environmental sustainability improvements</li>
                    <li>• Resource optimization</li>
                    <li>• Community engagement</li>
                    <li>• Technology integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};