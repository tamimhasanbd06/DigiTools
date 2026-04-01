import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#0a0f1a] text-[#94a3b8] py-16 px-6 md:px-20 font-sans tracking-tight">
            <div className="max-w-300 mx-auto">

                {/* Main Content Grid */}
                <div className="flex flex-col items-center min-[1024px]:items-start gap-12 mb-20">

                    {/* TOP SECTION (4 columns) */}
                    <div className="flex flex-col items-center text-center 
                                    min-[768px]:items-center min-[768px]:text-center
                                    min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:text-left
                                    min-[1024px]:justify-between w-full gap-12">

                        {/* Brand Section */}
                        <div className="max-w-xs">
                            <h2 className="text-white text-[32px] font-bold mb-4 tracking-tight text-center min-[1024px]:text-left">
                                DigiTools
                            </h2>
                            <p className="text-[15px] leading-[1.6] text-slate-400 text-center min-[1024px]:text-left">
                                Premium digital tools for creators, professionals, and businesses. 
                                Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col items-center gap-12
                                        min-[768px]:flex-row min-[768px]:justify-center
                                        min-[1024px]:flex-row min-[1024px]:gap-20">

                            {/* Product */}
                            <div className="text-center min-[1024px]:text-left">
                                <h3 className="text-white text-[16px] font-medium mb-6">Product</h3>
                                <ul className="space-y-3 text-[14px]">
                                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="text-center min-[1024px]:text-left">
                                <h3 className="text-white text-[16px] font-medium mb-6">Company</h3>
                                <ul className="space-y-3 text-[14px]">
                                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div className="text-center min-[1024px]:text-left">
                                <h3 className="text-white text-[16px] font-medium mb-6">Resources</h3>
                                <ul className="space-y-3 text-[14px]">
                                    <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* SOCIAL (ALWAYS BOTTOM CENTER in lg) */}
                    <div className="flex flex-col items-center text-center w-full">
                        <h3 className="text-white text-[16px] font-medium mb-6">Social Links</h3>
                        <div className="flex gap-3 justify-center">
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0a0f1a] hover:bg-slate-200 transition-all">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0a0f1a] hover:bg-slate-200 transition-all">
                                <FaFacebook size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0a0f1a] hover:bg-slate-200 transition-all">
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/50 pt-10 flex flex-col items-center text-[13px] text-slate-500">
                    <div className="w-full flex flex-col items-center gap-4 
                                    min-[768px]:flex-row min-[768px]:justify-between">
                        <p className="text-center min-[768px]:text-left">
                            © 2026 Digitools. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;