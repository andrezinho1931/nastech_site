
import React from "react";
const MadeByHumans = () => {
  return <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        {/* Removed the pulse-chip button/element that was here */}
        
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between" style={{
          backgroundImage: "url('/background-section3-mixed-color.png')"
        }}>
            <div className="flex items-start justify-start text-white self-start -ml-4 -mt-4 sm:-ml-12 sm:-mt-12">
  <img
    src="/jogu.png"
    alt="Nastech Logo"
    className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto"
  />
</div>

            <div className="mt-10 text-center px-2">
  <h2
    className="font-playfair text-white italic font-thin 
               text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
               leading-tight"
  >
    Feita por pessoas, movida por IA.
  </h2>
</div>

            
            {/* White box at the bottom with overflow */}
            <div className="w-[120%] bg-white h-13 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default MadeByHumans;
