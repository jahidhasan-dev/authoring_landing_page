/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `SDS Authoring`} />
      <div className="pt-16 lg:pt-20">
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-16 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#5963f8] to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <span className="text-xl font-bold text-white">SDS Authoring</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Professional Safety Data Sheet creation software that helps you stay compliant with global regulations and streamline your chemical safety documentation.
                </p>
                <div className="flex space-x-4">
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">Features</button></li>
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">Pricing</button></li>
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">API</button></li>
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">Integrations</button></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">About</button></li>
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">Blog</button></li>
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">Careers</button></li>
                  <li><button className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer">Contact</button></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8">
              <p className="text-gray-400 text-sm text-center">
                © {new Date().getFullYear()} SDS Manager. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
