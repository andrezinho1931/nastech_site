
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChartLineUpIcon, ClipboardTextIcon, EnvelopeSimpleIcon, PhoneCallIcon, PlugsConnectedIcon, RocketLaunchIcon } from "@phosphor-icons/react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="mb-10 sm:mb-16">
          <div className="pulse-chip mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Casos de Uso</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element text-left">
            Veja como outras empresas estão <br className="hidden sm:block" />economizando tempo
          </h2>
          <p className="section-subtitle opacity-0 fade-in-element text-left">
            Descubra as automações que mais geram resultados para empresas como a sua.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<PhoneCallIcon weight="duotone" size={22} />}
            title="Atendimento Automático"
            description="Responda clientes no WhatsApp 24/7, qualifique leads e agende reuniões automaticamente. Resultado: 80% menos tempo no atendimento."
            index={0}
          />
          <FeatureCard
            icon={<ChartLineUpIcon weight="duotone" size={22} />}
            title="Relatórios Inteligentes"
            description="Gere relatórios de vendas, estoque e financeiro automaticamente todos os dias. Resultado: 15 horas economizadas por semana."
            index={1}
          />
          <FeatureCard
            icon={<EnvelopeSimpleIcon weight="duotone" size={22} />}
            title="Email Marketing Personalizado"
            description="Envie emails personalizados baseados no comportamento de cada cliente. Resultado: 3x mais conversões."
            index={2}
          />
          <FeatureCard
            icon={<ClipboardTextIcon weight="duotone" size={22} />}
            title="Gestão de Pedidos"
            description="Processe pedidos do site direto para o estoque e financeiro automaticamente. Resultado: Zero erros de digitação."
            index={3}
          />
          <FeatureCard
            icon={<PlugsConnectedIcon weight="duotone" size={22} />}
            title="Integração Total"
            description="Conecte todas suas ferramentas em um fluxo único. WhatsApp, email, CRM, planilhas e muito mais."
            index={4}
          />
          <FeatureCard
            icon={<RocketLaunchIcon weight="duotone" size={22} />}
            title="Implementação Rápida"
            description="Desenvolvemos e testamos suas automações em até 30 dias, com acompanhamento total da nossa equipe."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
