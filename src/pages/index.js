import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  FileText, 
  Shield, 
  Zap, 
  CheckCircle, 
  Users, 
  ArrowRight,
  Star,
  BarChart3,
  Database,
  ShieldCheck,
  Settings
} from "lucide-react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [certificationRef, certificationInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activePricingPanel, setActivePricingPanel] = React.useState('exactsds')
  const [selectedTier, setSelectedTier] = React.useState(0)
  const [showVideo, setShowVideo] = React.useState(false)

  // Pricing data for each product
  const pricingData = {
    exactsds: {
      name: 'ExactSDS',
      icon: Database,
      plans: [
        {
          name: 'Pay As You Go',
          price: '$199',
          period: '/SDS',
          description: 'Perfect for occasional SDS creation',
          features: [
            'Create SDSs from any chemical mixture',
            'Generates hazard codes from our 16M+ SDS database',
            'Applies up-to-date GHS classifications and regulatory checks',
            'Instant AI suggestions for each section (to reduce manual guesswork)',
            'SDS delivered via email after generation'
          ],
          buttonText: 'Get Early Access',
          buttonStyle: 'bg-[#5963f8] hover:bg-blue-700'
        },
        {
          name: 'Standard',
          price: 'From $499',
          period: '/year',
          description: 'Ideal for regular SDS creation',
          features: [
            'Everything in Pay-As-You-Go, plus:',
            'Access to your own SDS Library',
            'Editable SDSs for future updates and changes',
            'Personal branding (logos, headers, etc.) on all SDSs you generate',
            'Ability to customize and revise your SDS anytime',
            'Store and manage multiple SDSs in one dashboard',
            'Easier team collaboration and document control'
          ],
          buttonText: 'Get Early Access',
          buttonStyle: 'bg-gradient-to-r from-[#5963f8] to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
          recommended: true,
          hasTierSelector: true,
          tiers: [
            { range: '1-4 SDS', price: '$499' },
            { range: '5-10 SDS', price: '$899' },
            { range: '11–20 SDS', price: '$1,499' },
            { range: '21–40 SDS', price: '$2,499' },
            { range: '41-60 SDS', price: '$3,499' },
            { range: '61-80 SDS', price: '$4,499' },
            { range: '81-100 SDS', price: '$5,499' }
          ]
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: '',
          description: 'For 100+ SDSs',
          features: [
            'Everything in Standard, plus:',
            'Custom pricing for bulk SDS generation',
            'Dedicated account management',
            'Custom compliance reporting and analytics',
            '24/7 dedicated technical support',
            'On-site training and implementation support',
            'Unlimited SDS generation with premium AI suggestions',
          ],
          buttonText: 'Contact Us',
          buttonStyle: 'bg-[#5963f8] hover:bg-blue-700'
        }
      ]
    },
    authoringlite: {
      name: 'Author Lite',
      icon: FileText,
      plans: [
        {
          name: 'Author Lite',
          price: 'From $199',
          period: '/year',
          description: 'Create compliant SDSs in minutes',
          features: [
            'Create SDSs in 25 different languages',
            'Localize Safety Data Sheets with 70% auto-conversion',
            'Create new revisions from existing PDF files',
            'Clone existing SDSs by importing PDF files',
            'Update and publish new revisions in minutes',
            'Professional SDS authoring interface',
            'Compliance checks and validation',
            'PDF export and distribution'
          ],
          buttonText: 'Start Free Trial',
          buttonStyle: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700',
          secondaryButton: {
            text: 'Book Live Demo',
            style: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
          },
          hasTierSelector: true,
          tiers: [
            { range: '1 - 4 SDS', price: '$199' },
            { range: '5 - 19 SDS', price: '$399' },
            { range: '20 - 99 SDS', price: '$799' },
            { range: '100 - 499 SDS', price: '$1,499' },
            { range: '500+ SDS', price: 'Custom' }
          ]
        }
      ]
    },
    sdsservices: {
      name: 'SDS Services',
      icon: Users,
      plans: [
        {
          name: 'Professional SDS Services',
          price: 'Custom Pricing',
          period: '',
          description: 'Expert SDS creation and management services tailored to your needs',
          features: [
            'Expert consultation and guidance',
            'Custom SDS creation and revision',
            'Regulatory compliance review',
            'Multi-language SDS support',
            'Quality assurance and validation',
            'Fast turnaround and delivery',
            'Dedicated account management',
            'Ongoing maintenance and updates'
          ],
          buttonText: 'Contact Us',
          buttonStyle: 'bg-gradient-to-r from-[#5963f8] via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700',
          isContactOnly: true
        }
      ]
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-white py-15 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center px-8 py-2 bg-[#5963f8]/10 backdrop-blur-sm rounded-full border border-[#5963f8]/20">
                  <Star className="w-5 h-5 text-[#5963f8] mr-3" />
                  <span className="text-sm font-semibold text-[#5963f8] tracking-wide">SDS AUTHORING SOFTWARE</span>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8 text-gray-900 text-spacing-wide">
              Smarter, Faster SDS Authoring for Global Compliance
              </h1>
              
              {/* Sub-headline */}
              <p className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
                Create professional, regulation-ready Safety Data Sheets in minutes — not hours. Stay ahead of changing legislation with automation you can trust.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://exactsds.sdsmanager.com/register"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#5963f8] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start free Trial
                  <ArrowRight className="ml-3 w-6 h-6" />
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScDmCvkwwIrbh-bRW9OIzYDt_Uxk-GNVznykMepfrXHVjZjEg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1"
                >
                  Book a demo
                </a>
              </div>
            </div>

            {/* Right Side - Video Thumbnail */}
            <div className="relative h-full flex items-center justify-center">
              {/* Decorative Elements Outside Video - All Four Sides */}
              {/* Top-left gradient */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#5963f8]/10 via-[#5963f8]/5 to-transparent rounded-2xl z-10"></div>
              
              {/* Top-right gradient */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-bl from-[#5963f8]/10 via-[#5963f8]/5 to-transparent rounded-2xl z-10"></div>
              
              {/* Bottom-left gradient */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#5963f8]/10 via-[#5963f8]/5 to-transparent rounded-2xl z-10"></div>
              
              {/* Bottom-right gradient */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-[#5963f8]/10 via-[#5963f8]/5 to-transparent rounded-2xl z-10"></div>
              
              {/* Additional accent elements - All corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#5963f8]/15 rounded-full blur-sm z-10"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#5963f8]/15 rounded-full blur-sm z-10"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#5963f8]/15 rounded-full blur-sm z-10"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#5963f8]/15 rounded-full blur-sm z-10"></div>
              
              {/* Side accent elements */}
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#5963f8]/12 rounded-full blur-sm z-10"></div>
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-[#5963f8]/12 rounded-full blur-sm z-10"></div>
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#5963f8]/12 rounded-full blur-sm z-10"></div>
              <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-[#5963f8]/12 rounded-full blur-sm z-10"></div>
              
              {!showVideo ? (
                /* Video Thumbnail Container */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-full max-h-[450px] min-h-[380px] z-20">
                  {/* Thumbnail Image */}
                  <img 
                    src={require("../images/thumbnail.png").default} 
                    alt="SDS Manager Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/2">
                    <button 
                      onClick={() => setShowVideo(true)}
                      className="group bg-white/95 hover:bg-white rounded-2xl px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-4"
                    >
                      {/* Play Icon */}
                      <div className="w-16 h-16 bg-[#5963f8] rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      
                      {/* Text */}
                      <div className="text-left">
                        <div className="text-lg font-bold text-gray-900 group-hover:text-[#5963f8] transition-colors duration-300">
                          How ExactSDS Works
                        </div>
                        <div className="text-sm text-gray-600">Watch our demo video</div>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                /* Video Player */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-full max-h-[450px] min-h-[380px] bg-white z-20">
                  <iframe
                    src="https://www.youtube.com/embed/wQnDf-74ysY?start=3&autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1"
                    title="Introduction to SDS Manager"
                    className="w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>


          {/* Features Section */}
          <div className="mt-20 mb-8" style={{ marginTop: '6.5rem' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                {/* Icon on the left */}
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                
                {/* Content on the right */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fast, Accurate, and Globally Compliant SDSs
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Create regulation-ready Safety Data Sheets for 80+ markets in just minutes.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                {/* Icon on the left */}
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                
                {/* Content on the right */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Effortless Compliance, Worldwide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Easily create high-quality SDSs that meet regulations in 80+ countries.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                {/* Icon on the left */}
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
                
                {/* Content on the right */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    AI-Powered SDS Intelligence
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Trained on 16M SDSs with 2.4B parameters for smarter, faster compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trusted by Section */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left w-full lg:w-1/5">
              <div className="text-2xl font-bold text-slate-800 mb-2"> <span className="text-[#5963f8] bg-clip-text">SDSManager</span> is trusted by</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-2xl font-bold text-slate-800">Safety Managers</div>
            </div>
            
            {/* Right Side - Company Logos */}
            <div className="flex items-center justify-center w-full lg:w-4/5">
              {/* Unilever */}
              <div className="flex items-center justify-center w-1/5 h-24">
                <img 
                  src={require("../images/unilever.png").default} 
                  alt="Unilever"
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: '90px' }}
                />
              </div>
              
              {/* DeLonghi */}
              <div className="flex items-center justify-center w-1/5 h-24">
                <img 
                  src={require("../images/delonghi.png").default} 
                  alt="DeLonghi"
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: '90px' }}
                />
              </div>
              
              {/* THULE */}
              <div className="flex items-center justify-center w-1/5 h-24">
                <img 
                  src={require("../images/thule.png").default} 
                  alt="THULE"
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: '90px' }}
                />
              </div>
              
              {/* DHL */}
              <div className="flex items-center justify-center w-1/5 h-24">
                <img 
                  src={require("../images/DHL-Emblem.png").default} 
                  alt="DHL"
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: '90px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#5963f8]/10 rounded-full border border-[#5963f8]/20 mb-6">
              <Zap className="w-4 h-4 mr-2 text-[#5963f8]" />
              <span className="font-medium text-sm text-[#5963f8] tracking-wide">OUR PRODUCTS</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose the{" "}
              <span className="text-[#5963f8]">Perfect Solution</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From AI-powered creation to professional services, we have the right tool for every SDS need.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Product 1: ExactSDS */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-[#5963f8] rounded-xl flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">ExactSDS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create SDSs for unique chemical mixtures with AI-powered authoring. Automatically applies GHS classifications and regulatory checks.
                  </p>
                </div>
              </div>
            </div>

            {/* Product 2: Author Lite */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Author Lite</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fast, flexible way to revise and update existing Safety Data Sheets. Edit, customize, and bring your SDSs up to date.
                  </p>
                </div>
              </div>
            </div>

            {/* Product 3: SDS Service */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-gray-100">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-[#5963f8] rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">SDS Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team creates fully compliant Safety Data Sheets that are accurate, regulation-checked, and ready to distribute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-[#5963f8]/10 rounded-full border border-[#5963f8]/20 mb-6">
              <Settings className="w-4 h-4 mr-2 text-[#5963f8]" />
              <span className="font-medium text-sm text-[#5963f8] tracking-wide">Authoring Tools</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tools Designed to{" "}
              <span className="text-[#5963f8]">Simplify SDS Creation</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Keeping SDSs compliant often requires hours of tracking chemical updates and shifting regulations. Our ISO 9001–certified platform simplifies the process so you can focus less on paperwork and more on productivity — while ensuring accuracy every time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-5xl mx-auto">
            {/* First Row - 3 features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-8 bg-purple-100 border border-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-semibold text-xs">DB</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-base">Access Over 122M Substances</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Tap into one of the largest chemical databases to ensure accuracy and up-to-date classifications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-8 bg-teal-100 border border-teal-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-semibold text-xs">SDS</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-base">16M SDS Records at Your Fingertips</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Leverage insights from a massive SDS database to improve accuracy and speed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-8 bg-yellow-100 border border-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-semibold text-xs">TRK</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-base">Stay on Top of Every Change</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Track updates seamlessly with built-in version history and compliance-ready audit trails.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 2 features centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                {/* Feature 4 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-8 bg-purple-100 border border-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-semibold text-xs">LNG</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-base">Instant SDS Translation in 39 Languages</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Automatically translate extracted text for global markets without losing accuracy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-8 bg-teal-100 border border-teal-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 font-semibold text-xs">LBL</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 text-base">Create Compliant Labels in One Click</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Turn SDS data into ready-to-print, regulation-compliant labels instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section ref={certificationRef} className="py-12 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-[#5963f8] text-white rounded-xl mb-6">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold tracking-wider text-xs uppercase">INTERNATIONAL STANDARDS</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Trusted by{" "}
              <span className="text-[#5963f8]">Industry Leaders</span>
            </h2>
            
            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Our platform meets the{" "}
              <span className="text-[#5963f8] font-bold">highest international standards</span> with{" "}
              <span className="text-indigo-600 font-bold">four critical ISO certifications</span> ensuring{" "}
              <span className="text-[#5963f8] font-bold">comprehensive security and quality</span>
            </p>
          </div>

          {/* Certification Badges Display - Compact Design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* ISO 27017 - Cloud Management */}
            <div className="group relative">
              <div className="relative bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                {/* Badge Image */}
                <div className="relative mb-3">
                  <div className="w-20 h-20 mx-auto relative flex items-center justify-center">
                    <img 
                      src={require("../images/27017.png").default} 
                      alt="ISO 27017 Cloud Management Certification"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      style={{ maxHeight: '80px', maxWidth: '80px' }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-sm font-bold text-slate-800 mb-1">Cloud Management</h3>
                <p className="text-xs text-slate-600 leading-tight mb-2">
                  Cloud security controls and ensuring guidelines
                </p>
                
                {/* Status Badge */}
                <div className="inline-flex items-center px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                </div>
              </div>
            </div>

            {/* ISO 27018 - Personal Data Protection */}
            <div className="group relative">
              <div className="relative bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                {/* Badge Image */}
                <div className="relative mb-3">
                  <div className="w-20 h-20 mx-auto relative flex items-center justify-center">
                    <img 
                      src={require("../images/27018.png").default} 
                      alt="ISO 27018 Data Protection Certification"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      style={{ maxHeight: '80px', maxWidth: '80px' }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-sm font-bold text-slate-800 mb-1">Data Protection</h3>
                <p className="text-xs text-slate-600 leading-tight mb-2">
                  Personal data protection controls for PII
                </p>
                
                {/* Status Badge */}
                <div className="inline-flex items-center px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                </div>
              </div>
            </div>

            {/* ISO 9001 - Quality Management */}
            <div className="group relative">
              <div className="relative bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                {/* Badge Image */}
                <div className="relative mb-3">
                  <div className="w-20 h-20 mx-auto relative flex items-center justify-center">
                    <img 
                      src={require("../images/9001.png").default} 
                      alt="ISO 9001 Quality Management Certification"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      style={{ maxHeight: '80px', maxWidth: '80px' }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-sm font-bold text-slate-800 mb-1">Quality Management</h3>
                <p className="text-xs text-slate-600 leading-tight mb-2">
                  Quality management systems excellence
                </p>
                
                {/* Status Badge */}
                <div className="inline-flex items-center px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                </div>
              </div>
            </div>

            {/* ISO 27001 - Information Security Management */}
            <div className="group relative">
              <div className="relative bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center">
                {/* Badge Image */}
                <div className="relative mb-3">
                  <div className="w-20 h-20 mx-auto relative flex items-center justify-center">
                    <img 
                      src={require("../images/27001.png").default} 
                      alt="ISO 27001 Information Security Certification"
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      style={{ maxHeight: '80px', maxWidth: '80px' }}
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-sm font-bold text-slate-800 mb-1">Information Security</h3>
                <p className="text-xs text-slate-600 leading-tight mb-2">
                  Information security management systems
                </p>
                
                {/* Status Badge */}
                <div className="inline-flex items-center px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-[#5963f8]/10 text-[#5963f8] rounded-full mb-4 border border-[#5963f8]/20">
              <BarChart3 className="w-4 h-4 mr-2" />
              <span className="font-semibold text-sm">PRICING PLANS</span>
            </div>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
              Choose Your{" "}
              <span className="text-[#5963f8]">Perfect Plan</span>
            </h2>
            
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Flexible pricing options designed to grow with your business needs.
            </p>
          </div>

          {/* Product Switcher Panel */}
          <div className="flex justify-center mb-10">
            <div className="flex space-x-1 bg-gray-50 rounded-xl p-1 border border-gray-200">
              {[
                { id: 'exactsds', name: 'ExactSDS', icon: Database },
                { id: 'authoringlite', name: 'Author Lite', icon: FileText },
                { id: 'sdsservices', name: 'SDS Services', icon: Users }
              ].map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActivePricingPanel(product.id)}
                  className={`relative px-7 py-4 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 text-sm ${
                    activePricingPanel === product.id
                      ? 'text-[#5963f8] border border-[#5963f8] bg-white shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <product.icon className={`w-4 h-4 ${activePricingPanel === product.id ? 'text-[#5963f8]' : 'text-gray-500'}`} />
                  <span>{product.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Pricing Cards */}
          <motion.div
            key={activePricingPanel}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-6 ${
              activePricingPanel === 'authoringlite' 
                ? 'grid-cols-1 max-w-2xl mx-auto' 
                : activePricingPanel === 'sdsservices'
                ? 'grid-cols-1 max-w-2xl mx-auto'
                : 'grid-cols-1 lg:grid-cols-3'
            }`}
          >
            {pricingData[activePricingPanel].plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative ${plan.recommended ? 'lg:scale-105' : ''}`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Recommended
                    </div>
                  </div>
                )}
                
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.recommended ? 'border-2 border-blue-200 shadow-xl' : 'border border-gray-100'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {plan.hasTierSelector && plan.tiers ? plan.tiers[selectedTier].price : plan.price}
                      {plan.period && <span className="text-lg text-gray-500">{plan.period}</span>}
                    </div>
                    <p className="text-gray-600 mb-2">{plan.description}</p>
                    {plan.pricingNote && (
                      <p className="text-sm text-gray-500 italic">{plan.pricingNote}</p>
                    )}
                  </div>

                  {/* Tier Selector for Standard Plan */}
                  {plan.hasTierSelector && plan.tiers && (
                    <div className="mb-6">
                      <label className="block text-xs font-medium text-gray-600 mb-2 text-center uppercase tracking-wide">Select SDS Quantity</label>
                      <div className="relative">
                        <select
                          value={selectedTier}
                          onChange={(e) => setSelectedTier(parseInt(e.target.value))}
                          className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 cursor-pointer"
                        >
                          {plan.tiers.map((tier, tierIndex) => (
                            <option key={tierIndex} value={tierIndex}>
                              {tier.range} - {tier.price}
                            </option>
                          ))}
                        </select>
                        {/* Custom dropdown arrow */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Buttons */}
                  {plan.secondaryButton && !(plan.hasTierSelector && plan.tiers && plan.tiers[selectedTier].price === 'Custom') ? (
                    // Two-button layout for Authoring Lite (except for Custom tier)
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 ${plan.buttonStyle} text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
                      >
                        {plan.buttonText}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 ${plan.secondaryButton.style} py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
                      >
                        {plan.secondaryButton.text}
                      </motion.button>
                    </div>
                  ) : plan.isContactOnly || (plan.hasTierSelector && plan.tiers && plan.tiers[selectedTier].price === 'Custom') ? (
                    // Eye-catching Contact Us button for SDS Services and Custom tier in Author Lite
                    <motion.a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScDmCvkwwIrbh-bRW9OIzYDt_Uxk-GNVznykMepfrXHVjZjEg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full ${plan.buttonStyle} text-white py-6 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl block text-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        {plan.hasTierSelector && plan.tiers && plan.tiers[selectedTier].price === 'Custom' ? 'Contact Us' : plan.buttonText}
                        <ArrowRight className="w-6 h-6 ml-3" />
                      </span>
                    </motion.a>
                  ) : (plan.buttonText === 'Get Early Access' || plan.buttonText === 'Contact Us') ? (
                    // Single button with link for other sections
                    <motion.a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScDmCvkwwIrbh-bRW9OIzYDt_Uxk-GNVznykMepfrXHVjZjEg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full ${plan.buttonStyle} text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg block text-center`}
                    >
                      {plan.buttonText}
                    </motion.a>
                  ) : (
                    // Single button for other sections
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full ${plan.buttonStyle} text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      {plan.buttonText}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trial Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >

          </motion.div>
        </div>
      </section>

    </Layout>
  )
}

export const Head = () => <Seo title="SDS Authoring Software | Professional Safety Data Sheet Creation" />

export default IndexPage
