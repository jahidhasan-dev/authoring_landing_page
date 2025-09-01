import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  FileText, 
  Shield, 
  Globe, 
  Zap, 
  CheckCircle, 
  Users, 
  ArrowRight,
  Play,
  Star,
  BarChart3,
  Database,
  Cloud,
  Award,
  Lock
} from "lucide-react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [certificationRef, certificationInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="hero py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch min-h-[450px] lg:min-h-[530px]"
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
                Create your own{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  SDS today!
                </span>
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary btn-lg flex items-center bg-blue-600 text-white hover:bg-blue-700 font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
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
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
              </section>

        {/* Products Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 bg-blue-600/10 text-blue-600 rounded-full mb-8 border border-blue-600/20 backdrop-blur-sm"
              >
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">OUR PRODUCTS</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Choose the{" "}
                <span className="text-blue-600">
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
                From basic SDS creation to enterprise-level solutions, we have the perfect tool for your needs.
              </motion.p>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Product 1: ExactSDS - Modern Split Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Top Accent Bar */}
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                  
                  {/* Animated Bubbles */}
                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 left-6 w-8 h-8 bg-gradient-to-br from-blue-300/40 to-indigo-300/40 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, -5, 0], x: [0, 4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-32 right-8 w-6 h-6 bg-gradient-to-br from-indigo-300/50 to-purple-300/50 rounded-full blur-sm"
                  />
                  
                  {/* Card Content */}
                  <div className="p-8 flex-1 flex flex-col relative z-10">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">ENTERPRISE</span>
                      </div>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">ExactSDS</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Enterprise-grade SDS management platform with advanced compliance features and team collaboration.
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Advanced compliance tracking</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Team collaboration tools</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>API integration</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                    >
                      Get Started
                    </motion.button>
                  </div>
                  
                  {/* Bottom Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Product 2: Authoring Lite - Modern Minimalist Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  {/* Animated Bubbles */}
                  <motion.div
                    animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 left-4 w-20 h-20 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-16 right-6 w-12 h-12 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute top-40 left-8 w-10 h-10 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-sm"
                  />
                  
                  {/* Card Content */}
                  <div className="relative p-8 flex-1 flex flex-col z-10">
                    {/* Icon with Modern Ring */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                        <FileText className="w-8 h-8 text-indigo-600" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-indigo-600">LITE</span>
                      </div>
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Authoring Lite</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Simple and intuitive SDS creation tool perfect for small teams and individual users.
                    </p>
                    
                    {/* Features with Modern Dots */}
                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></div>
                        <span>Easy-to-use interface</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></div>
                        <span>Template library</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></div>
                        <span>Basic compliance checks</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                    >
                      Start Free Trial
                    </motion.button>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-indigo-100"></div>
                </div>
              </motion.div>

              {/* Product 3: SDS Services - Modern Service Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Top Service Banner */}
                  <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">PROFESSIONAL SERVICES</span>
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Animated Bubbles */}
                  <motion.div
                    animate={{ y: [0, -6, 0], x: [0, 8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-16 right-4 w-14 h-14 bg-gradient-to-br from-blue-300/40 to-indigo-300/40 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-24 left-4 w-16 h-16 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0], x: [0, 3, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-32 left-8 w-8 h-8 bg-gradient-to-br from-indigo-300/50 to-blue-300/50 rounded-full blur-sm"
                  />
                  
                  {/* Card Content */}
                  <div className="p-8 flex-1 flex flex-col relative z-10">
                    {/* Icon with Background */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">SDS Services</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Professional SDS creation and consulting services for complex chemical requirements.
                    </p>
                    
                    {/* Features with Icons */}
                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mr-3">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                        </div>
                        <span>Expert consultation</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mr-3">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                        </div>
                        <span>Custom SDS creation</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mr-3">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                        </div>
                        <span>Regulatory expertise</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                    >
                      Contact Us
                    </motion.button>
                  </div>
                  
                  {/* Bottom Gradient Line */}
                  <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-400"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="inline-flex items-center px-6 py-3 bg-blue-600/10 text-blue-600 rounded-full mb-8 border border-blue-600/20 backdrop-blur-sm"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                <span className="font-semibold">PRICING PLANS</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
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
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
              className="flex justify-center mb-16"
            >
              <div className="relative bg-gray-100 rounded-2xl p-2 shadow-inner">
                {/* Carved Panel Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-60"></div>
                
                {/* Product Tabs */}
                <div className="relative flex space-x-1">
                  {[
                    { id: 'exactsds', name: 'ExactSDS', icon: Database, active: true },
                    { id: 'authoringlite', name: 'Authoring Lite', icon: FileText, active: false },
                    { id: 'sdsservices', name: 'SDS Services', icon: Users, active: false }
                  ].map((product, index) => (
                    <motion.button
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                        product.active 
                          ? 'text-white shadow-lg' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {product.active && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <div className="relative z-10 flex items-center space-x-3">
                        <product.icon className={`w-5 h-5 ${product.active ? 'text-white' : 'text-gray-500'}`} />
                        <span>{product.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              
              {/* Basic Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">$19<span className="text-lg text-gray-500">/month</span></div>
                    <p className="text-gray-600">Perfect for small teams</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Mobile access for all users</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>GHS labels included</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Upload your own SDS</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Secondary Container Labeling</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg mb-4"
                  >
                    Start Free Trial
                  </motion.button>
                  
                  <div className="text-center">
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">See all features →</a>
                  </div>
                </div>
              </motion.div>

              {/* Premium Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Recommended Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Recommended
                  </div>
                </div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-200">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">$39<span className="text-lg text-gray-500">/month</span></div>
                    <p className="text-gray-600">Ideal for growing businesses</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>All Basic features +</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>QR-code SDS library access</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Automatic revision alerts</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Location-based organization</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Offline mobile app access</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg mb-4"
                  >
                    Start Free Trial
                  </motion.button>
                  
                  <div className="text-center">
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">See all features →</a>
                  </div>
                </div>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">$59<span className="text-lg text-gray-500">/month</span></div>
                    <p className="text-gray-600">For enterprise solutions</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>All Premium features +</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Risk assessment tools</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Hazardous product alerts</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Usage & disposal tracking</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>Advanced reporting & exports</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg mb-4"
                  >
                    Start Free Trial
                  </motion.button>
                  
                  <div className="text-center">
                    <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">See all features →</a>
                  </div>
                </div>
              </motion.div>
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

        {/* Certification Section */}
        <section ref={certificationRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
          {/* Elegant background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.04),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/3 to-amber-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white rounded-full mb-8 shadow-lg"
              >
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold tracking-wide">INTERNATIONAL STANDARDS</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={certificationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
              >
                SDS Manager is{" "}
                <span className="bg-gradient-to-r from-blue-700 via-amber-600 to-blue-700 bg-clip-text text-transparent">
                  ISO Certified
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={certificationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              >
                Achieving the highest standards in{" "}
                <strong className="text-slate-800">four critical ISO certifications</strong> for comprehensive security and quality management
              </motion.p>
            </motion.div>

            {/* Certification Badges Display */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={certificationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            >
              {/* ISO 27017 - Cloud Management */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center">
                                     {/* Badge Image */}
                   <div className="relative mb-6">
                     <div className="w-40 h-40 mx-auto relative">
                       {/* ISO 27017 Badge - Stylized to match real certification badge */}
                       <div className="w-full h-full relative">
                         {/* Outer golden ring with jagged edges */}
                         <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-lg">
                           <div className="absolute inset-1 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 rounded-full"></div>
                         </div>
                         
                         {/* Inner white circle */}
                         <div className="absolute inset-4 bg-white rounded-full shadow-inner">
                           {/* Top arc text */}
                           <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             CLOUD MANAGEMENT
                           </div>
                           
                           {/* Stars */}
                           <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                             {[...Array(5)].map((_, i) => (
                               <div key={i} className="w-1 h-1 bg-black transform rotate-45"></div>
                             ))}
                           </div>
                           
                           {/* Central ISO band */}
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-7 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-sm font-black text-black">ISO 27017</span>
                           </div>
                           
                           {/* CERTIFIED banner */}
                           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-xs font-bold text-black">CERTIFIED</span>
                           </div>
                           
                           {/* Bottom arc text */}
                           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             SECURITY CONTROLS
                           </div>
                         </div>
                       </div>
                       
                       {/* Golden glow effect */}
                       <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full opacity-30 blur-lg"></div>
                     </div>
                   </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Cloud Management</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Cloud security controls and guidelines for cloud service providers and customers
                  </p>
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                  </div>
                </div>
              </motion.div>

              {/* ISO 27018 - Personal Data Protection */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center">
                                     {/* Badge Image */}
                   <div className="relative mb-6">
                     <div className="w-40 h-40 mx-auto relative">
                       {/* ISO 27018 Badge - Stylized to match real certification badge */}
                       <div className="w-full h-full relative">
                         {/* Outer golden ring with jagged edges */}
                         <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-lg">
                           <div className="absolute inset-1 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 rounded-full"></div>
                         </div>
                         
                         {/* Inner white circle */}
                         <div className="absolute inset-4 bg-white rounded-full shadow-inner">
                           {/* Top arc text */}
                           <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             DATA PROTECTION
                           </div>
                           
                           {/* Stars */}
                           <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                             {[...Array(5)].map((_, i) => (
                               <div key={i} className="w-1 h-1 bg-black transform rotate-45"></div>
                             ))}
                           </div>
                           
                           {/* Central ISO band */}
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-7 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-sm font-black text-black">ISO 27018</span>
                           </div>
                           
                           {/* CERTIFIED banner */}
                           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-xs font-bold text-black">CERTIFIED</span>
                           </div>
                           
                           {/* Bottom arc text */}
                           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             PRIVACY CONTROLS
                           </div>
                         </div>
                       </div>
                       
                       {/* Golden glow effect */}
                       <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full opacity-30 blur-lg"></div>
                     </div>
                   </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Data Protection</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Personal data protection controls for cloud service providers handling PII
                  </p>
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                  </div>
                </div>
              </motion.div>

              {/* ISO 9001 - Quality Management */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center">
                                     {/* Badge Image */}
                   <div className="relative mb-6">
                     <div className="w-40 h-40 mx-auto relative">
                       {/* ISO 9001 Badge - Stylized to match real certification badge */}
                       <div className="w-full h-full relative">
                         {/* Outer golden ring with jagged edges */}
                         <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-lg">
                           <div className="absolute inset-1 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 rounded-full"></div>
                         </div>
                         
                         {/* Inner white circle */}
                         <div className="absolute inset-4 bg-white rounded-full shadow-inner">
                           {/* Top arc text */}
                           <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             QUALITY MANAGEMENT
                           </div>
                           
                           {/* Stars */}
                           <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                             {[...Array(5)].map((_, i) => (
                               <div key={i} className="w-1 h-1 bg-black transform rotate-45"></div>
                             ))}
                           </div>
                           
                           {/* Central ISO band */}
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-7 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-sm font-black text-black">ISO 9001</span>
                           </div>
                           
                           {/* CERTIFIED banner */}
                           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-xs font-bold text-black">CERTIFIED</span>
                           </div>
                           
                           {/* Bottom arc text */}
                           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             MANAGEMENT SYSTEM
                           </div>
                         </div>
                       </div>
                       
                       {/* Golden glow effect */}
                       <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full opacity-30 blur-lg"></div>
                     </div>
                   </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Quality Management</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Quality management systems ensuring consistent product and service excellence
                  </p>
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                  </div>
                </div>
              </motion.div>

              {/* ISO 27001 - Information Security Management */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center">
                                     {/* Badge Image */}
                   <div className="relative mb-6">
                     <div className="w-40 h-40 mx-auto relative">
                       {/* ISO 27001 Badge - Stylized to match real certification badge */}
                       <div className="w-full h-full relative">
                         {/* Outer golden ring with jagged edges */}
                         <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-lg">
                           <div className="absolute inset-1 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 rounded-full"></div>
                         </div>
                         
                         {/* Inner white circle */}
                         <div className="absolute inset-4 bg-white rounded-full shadow-inner">
                           {/* Top arc text */}
                           <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             INFORMATION SECURITY
                           </div>
                           
                           {/* Stars */}
                           <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                             {[...Array(5)].map((_, i) => (
                               <div key={i} className="w-1 h-1 bg-black transform rotate-45"></div>
                             ))}
                           </div>
                           
                           {/* Central ISO band */}
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-7 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-sm font-black text-black">ISO 27001</span>
                           </div>
                           
                           {/* CERTIFIED banner */}
                           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded flex items-center justify-center">
                             <span className="text-xs font-bold text-black">CERTIFIED</span>
                           </div>
                           {/* Bottom arc text */}
                           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black tracking-wider px-2">
                             MANAGEMENT SYSTEM
                           </div>
                         </div>
                       </div>
                       
                       {/* Golden glow effect */}
                       <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full opacity-30 blur-lg"></div>
                     </div>
                   </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Information Security</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Information security management systems for comprehensive data protection
                  </p>
                  
                  {/* Status Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-700 text-xs font-semibold">CERTIFIED</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
    </Layout>
  )
}

export const Head = () => <Seo title="SDS Authoring Software | Professional Safety Data Sheet Creation" />

export default IndexPage
