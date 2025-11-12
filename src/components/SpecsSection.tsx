import React from "react";

const SpecsSection = () => {
  // Cores do gradiente baseadas em #007B83 e no perfil da imagem de fundo:
  // Cor 1 (Escura): Uma variação escura de #007B83, próxima ao canto superior esquerdo da imagem.
  const colorDark = "#004D52"; // Escurecido e dessaturado de #007B83
  // Cor 2 (Clara): Uma variação clara e saturada de #007B83, próxima ao canto inferior direito da imagem.
  const colorLight = "#00C8C8"; // Mais claro e saturado que #007B83

  // O gradiente será aplicado usando a propriedade 'style' no elemento <span>
  const gradientStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${colorDark}, ${colorLight})`,
  };

  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">4</span>
              <span>Contato</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            {/* O atributo style foi adicionado ao span para aplicar o gradiente */}
            <span 
              className="block bg-clip-text text-transparent bg-cover bg-center"
              style={gradientStyle} // Aplicação do gradiente
            >
              A NAS impulsiona o seu negócio com automação inteligente — reduzindo tarefas manuais, custos e aumentando a produtividade gerando mais valor e lucro de forma inteligente.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
