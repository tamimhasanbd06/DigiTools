import React from 'react';
import icom1 from '../assets/user.png'
import icom2 from '../assets/package.png'
import icom3 from '../assets/rocket.png'

const StaticCardSection = () => {
    return (
        <section className="w-full bg-gray-100 px-12 py-20">

            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="text-gray-500 text-lg">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            {/* Cards Container */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">

                {/* Card 1 */}
                <div className="w-full md:w-1/3 h-96 bg-white rounded-2xl border border-gray-200 shadow flex flex-col
                 items-center justify-center relative transform transition duration-300 ease-in-out hover:scale-105">

                    <span className="absolute top-5 right-5 bg-indigo-600 text-white text-xs font-bold w-6 h-6
                     rounded-full flex items-center justify-center">
                        01
                    </span>

                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                        <img src={icom1} alt="" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                        Create Account
                    </h3>

                    <p className="text-gray-500 text-sm text-center px-5">
                        Sign up for free in seconds. No credit card <br /> required to get started.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-full md:w-1/3 h-96 bg-white rounded-2xl border border-gray-200 shadow flex flex-col 
                items-center justify-center relative transform transition duration-300 ease-in-out hover:scale-105">

                    <span className="absolute top-5 right-5 bg-indigo-600 text-white text-xs font-bold w-6 h-6 
                    rounded-full flex items-center justify-center">
                        02
                    </span>

                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                        <img src={icom2} alt="" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                        Choose Products
                    </h3>

                    <p className="text-gray-500 text-sm text-center px-5">
                        Browse our catalog and select the tools <br /> that fit your needs.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="w-full md:w-1/3 h-96 bg-white rounded-2xl border border-gray-200 shadow flex flex-col
                 items-center justify-center relative transform transition duration-300 ease-in-out hover:scale-105">

                    <span className="absolute top-5 right-5 bg-indigo-600 text-white text-xs font-bold w-6 h-6
                     rounded-full flex items-center justify-center">
                        03
                    </span>

                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                        <img src={icom3} alt="" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                        Start Creating
                    </h3>

                    <p className="text-gray-500 text-sm text-center px-5">
                        Download and start using your premium <br /> tools immediately.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default StaticCardSection;