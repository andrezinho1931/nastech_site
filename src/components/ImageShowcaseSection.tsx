
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experimente o futuro hoje
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Nossos agentes de IA de última geração foram desenvolvidos para transformar a maneira como interagimos com a tecnologia e otimizamos processos no dia a dia.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/1484a603-6d39-4450-b17b-07bb768d5aa0_recolor.png" 
              alt="Advanced humanoid robot with orange and white design" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">A nova geração da automação inteligente</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Com IA sofisticada e design inteligente, nossos agentes se adaptam a diferentes realidades de negócio — clínicas, transportadoras, corretoras e muito mais — automatizando processos e elevando a eficiência operacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
