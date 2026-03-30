import React from 'react';

const Transform = () => {
    return (
        <section className="w-full bg-[#8629dd] py-24 px-6 text-center text-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Ready To Transform Your Workflow?
                </h2>

                {/* Subtext */}
                <p className="text-lg opacity-90 max-w-2xl leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br className="hidden md:block" /> Start your free trial today.
                </p>

                {/* Button Group */}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <button className="bg-white cursor-pointer text-[#7026e8] font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all">
                        Explore Products
                    </button>
                    <button className="border-2 cursor-pointer border-white border-opacity-50 text-white font-semibold py-3 px-8 rounded-full
                     hover:bg-white hover:text-[#7026e8] transition-all">
                        View Pricing
                    </button>
                </div>

                {/* Footer Note */}
                <p className="text-sm opacity-80 mt-2">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
                
            </div>
        </section>
    );
};

export default Transform;