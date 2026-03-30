import React from 'react';
import { IoCheckmarkDone } from "react-icons/io5";

const PlaneCards = () => {
    return (
        <div className="bg-white py-10 md:py-16 px-4 sm:px-6 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Card */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col h-full shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Starter</h3>
                        <p className="text-gray-500 mt-1 text-sm md:text-base">Perfect for getting started</p>

                        <div className="mt-6 md:mt-8 mb-6">
                            <span className="text-3xl md:text-5xl font-bold text-gray-900">$0</span>
                            <span className="text-gray-500 text-lg md:text-xl">/Month</span>
                        </div>

                        <ul className="space-y-3 md:space-y-4 mb-8 flex-1 text-sm md:text-base">
                            <li className="flex items-center gap-2">
                                <IoCheckmarkDone /> Access to 10 free tools
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmarkDone /> Basic templates
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmarkDone /> Community support
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmarkDone /> 1 project per month
                            </li>
                        </ul>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 md:py-4 rounded-xl transition-all duration-300 active:scale-95">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Card */}
                    <div className="bg-[#4f39f6] text-white rounded-3xl p-6 md:p-8 flex flex-col h-full shadow-xl relative transition-all duration-300 hover:scale-105 hover:shadow-2xl">

                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs md:text-sm font-bold px-4 py-1 rounded-full">
                            Most Popular
                        </div>

                        <h3 className="text-xl md:text-2xl font-semibold">Pro</h3>
                        <p className="text-purple-200 mt-1 text-sm md:text-base">Best for professionals</p>

                        <div className="mt-6 md:mt-8 mb-6">
                            <span className="text-3xl md:text-5xl font-bold">$29</span>
                            <span className="text-purple-200 text-lg md:text-xl">/Month</span>
                        </div>

                        <ul className="space-y-3 md:space-y-4 mb-8 flex-1 text-sm md:text-base text-white">
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> All premium tools
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> Unlimited templates
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone />
                                Priority support
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> Unlimited projects
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> Cloud sync
                            </li>
                            <li className="flex items-center gap-3"> <IoCheckmarkDone />
                                Advanced analytics
                            </li>
                        </ul>

                        <button className="w-full bg-white text-purple-700 hover:bg-purple-100 font-semibold py-3 md:py-4 rounded-xl transition-all duration-300 active:scale-95">
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise Card */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col h-full shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">

                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Enterprise</h3>
                        <p className="text-gray-500 mt-1 text-sm md:text-base">For teams and businesses</p>

                        <div className="mt-6 md:mt-8 mb-6">
                            <span className="text-3xl md:text-5xl font-bold text-gray-900">$99</span>
                            <span className="text-gray-500 text-lg md:text-xl">/Month</span>
                        </div>

                        <ul className="space-y-3 md:space-y-4 mb-8 flex-1 text-sm md:text-base">
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone />
                                Everything in Pro
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> Team collaboration
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> Custom integrations
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> Dedicated support
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> SLA guarantee
                            </li>
                            <li className="flex items-center gap-3">
                                <IoCheckmarkDone /> Custom branding
                            </li>
                        </ul>
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 md:py-4 rounded-xl transition-all duration-300 active:scale-95">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlaneCards;