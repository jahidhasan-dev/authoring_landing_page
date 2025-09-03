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
  Database
} from "lucide-react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [certificationRef, certificationInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activePricingPanel, setActivePricingPanel] = React.useState('exactsds')
  const [selectedTier, setSelectedTier] = React.useState(0)

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
          buttonStyle: 'bg-blue-600 hover:bg-blue-700'
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
          buttonStyle: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
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
          buttonStyle: 'bg-blue-600 hover:bg-blue-700'
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
          buttonStyle: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700',
          isContactOnly: true
        }
      ]
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="hero py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[400px] lg:min-h-[450px]"
          >
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-left h-full flex flex-col justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="mb-6"
              >
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 backdrop-blur-sm rounded-full border border-blue-600/20 mb-6">
                  <Star className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-600">SDS AUTHORING SOFTWARE</span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
              >
                Create your own
                  SDS today!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed"
              >
                Use our SDS authoring to support you in creating, maintaining, and distributing compliant Safety Data Sheets (SDS) for free.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 items-endb"
              >
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScDmCvkwwIrbh-bRW9OIzYDt_Uxk-GNVznykMepfrXHVjZjEg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary btn-lg flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </motion.div>
              
            </motion.div>

            {/* Right Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative h-full flex items-center justify-center"
            >
              {/* Video Container with Clean Styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-full max-h-[320px] min-h-[280px] bg-white">
                {/* Video Frame */}
                <div className="relative w-full h-full">
                  <iframe
                    src="https://www.youtube.com/embed/wQnDf-74ysY?start=3&autoplay=0&rel=0&modestbranding=1&showinfo=0&controls=1"
                    title="Introduction to SDS Manager"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Simple Video Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-300 mb-1">1 minute</div>
                    <div className="text-sm font-medium text-white">Introduction to SDS Manager</div>
                  </div>
                </div>
                
                {/* Bottom Branding */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-xs text-gray-300">www.sdsmanager.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        

      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Orbs */}
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 10 }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/25 to-blue-200/25 rounded-full blur-3xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 text-blue-600 rounded-full mb-8 border border-blue-600/20 backdrop-blur-md shadow-lg"
            >
              <Zap className="w-6 h-6 mr-3 text-blue-600" />
              <span className="font-bold text-lg tracking-wide">OUR PRODUCTS</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Choose the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Perfect Solution
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              From AI-powered creation to professional services, we have the right tool for every SDS need.
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Product 1: ExactSDS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/25 transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 h-full flex flex-col border border-gray-200/50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                

                
                {/* Card Content */}
                <div className="relative p-10 flex-1 flex flex-col z-10">
                  {/* Enhanced Icon with Glow */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-500">
                      <Database className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">ExactSDS</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Create SDSs for your own unique chemical mixtures in minutes with our AI-powered Authoring tool. It automatically applies GHS classifications, checks against current regulations, and builds a complete, editable SDS in minutes.
                  </p>
                </div>
                
                {/* Corner Glow Effect */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-cyan-500/20"></div>
              </div>
            </motion.div>

            {/* Product 2: Author Lite */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/25 transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 h-full flex flex-col border border-gray-200/50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                

                
                {/* Card Content */}
                <div className="relative p-10 flex-1 flex flex-col z-10">
                  {/* Enhanced Icon with Glow */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-500">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">Author Lite</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Author Lite is a fast, flexible way to revise and update existing Safety Data Sheets. It is designed to help your team edit, customize, and bring your SDSs up to date.
                  </p>
                </div>
                
                {/* Corner Glow Effect */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-indigo-500/20"></div>
              </div>
            </motion.div>

            {/* Product 3: SDS Service */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 h-full flex flex-col border border-gray-200/50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                

                
                {/* Card Content */}
                <div className="relative p-10 flex-1 flex flex-col z-10">
                  {/* Enhanced Icon with Glow */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">SDS Service</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our SDS service will create your SDS for you. Contact us and our team will create a fully compliant Safety Data Sheet which is accurate, regulation-checked, and ready to distribute.
                  </p>
                </div>
                
                {/* Corner Glow Effect */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-purple-500/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Certification Section */}
      <section ref={certificationRef} className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Elegant background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.04),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/3 to-amber-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={certificationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={certificationInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl mb-8 shadow-xl border border-indigo-500/20"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold tracking-wider text-sm uppercase">INTERNATIONAL STANDARDS</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={certificationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Trusted by{" "}
              <span className="text-blue-600 bg-clip-text">
                Industry Leaders
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={certificationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Our platform meets the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-bold">highest international standards</span> with{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent font-bold">four critical ISO certifications</span> ensuring{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">comprehensive security and quality</span>
            </motion.p>
          </motion.div>

          {/* Certification Badges Display - Compact Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={certificationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {/* ISO 27017 - Cloud Management */}
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
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
            </motion.div>

            {/* ISO 27018 - Personal Data Protection */}
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="group relative"
            >
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
            </motion.div>

            {/* ISO 9001 - Quality Management */}
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="group relative"
            >
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
            </motion.div>

            {/* ISO 27001 - Information Security Management */}
            <motion.div
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="group relative"
            >
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
            </motion.div>
          </motion.div>

          {/* Trusted by Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={certificationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full">
                {/* Left Side - Text */}
                <div className="text-center lg:text-left w-full lg:w-1/5">
                  <div className="text-2xl font-bold text-slate-800 mb-2"> <span className="text-blue-600 bg-clip-text">SDSManager</span> is trusted by</div>
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
          </motion.div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-blue-600/10 text-blue-600 rounded-full mb-6 border border-blue-600/20 backdrop-blur-sm"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              <span className="font-semibold">PRICING PLANS</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Choose Your{" "}
              <span className="text-blue-600">
                Perfect Plan
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Flexible pricing options designed to grow with your business needs.
            </motion.p>
          </motion.div>

          {/* Product Switcher Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="relative bg-gray-100 rounded-2xl p-2 shadow-inner">
              {/* Carved Panel Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-60"></div>
              
              {/* Product Tabs */}
              <div className="relative flex space-x-1">
                {[
                  { id: 'exactsds', name: 'ExactSDS', icon: Database },
                  { id: 'authoringlite', name: 'Author Lite', icon: FileText },
                  { id: 'sdsservices', name: 'SDS Services', icon: Users }
                ].map((product, index) => (
                  <motion.button
                    key={product.id}
                    onClick={() => setActivePricingPanel(product.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                      activePricingPanel === product.id
                        ? 'text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {activePricingPanel === product.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center space-x-3">
                      <product.icon className={`w-5 h-5 ${activePricingPanel === product.id ? 'text-white' : 'text-gray-500'}`} />
                      <span>{product.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

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
