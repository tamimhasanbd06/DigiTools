import React from 'react';

const Price = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#38399b] to-[#a855f7] py-12 px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white text-center">

        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold">
            50K+
          </h2>
          <p className="text-sm sm:text-base md:text-[15px] opacity-90 mt-1">
            Active Users
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold">
            200+
          </h2>
          <p className="text-sm sm:text-base md:text-[15px] opacity-90 mt-1">
            Premium Tools
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold">
            4.9
          </h2>
          <p className="text-sm sm:text-base md:text-[15px] opacity-90 mt-1">
            Rating
          </p>
        </div>

      </div>
    </section>
  );
};

export default Price;