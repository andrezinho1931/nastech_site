import React, { useState, useEffect, useRef } from "react";
import { toast } from "@/components/ui/use-toast";
import { Check, Instagram, Mail, MessageCircleX } from "lucide-react";

const CTA = () => {

    const specs = [
    {
      title: "Implementação Rápida",
      description: "Automações funcionais em até 30 dias"
    },
    {
      title: "Suporte Dedicado",
      description: "Equipe de especialistas disponível 24/7"
    },
    {
      title: "Tecnologia de Ponta",
      description: "Uso de IA e Machine Learning para máxima eficiência"
    },
    {
      title: "Integração Total",
      description: "Conexão com mais de 500 ferramentas de mercado"
    }
  ];
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const createWhatsAppMessage = () => {
    return `🤖 *Nova Solicitação*

👤 *Nome:* ${formData.fullName}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.phone}
🏢 *Nome da Empresa:* ${formData.company}

${formData.message ? `💬 *Mensagem:*\n${formData.message}` : ''}

---
Solicitação enviada através do Nastech Site`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email || !formData.phone) {
       toast({
        title: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    setTimeout(() => {
      const whatsappMessage = createWhatsAppMessage();
      const whatsappUrl = `https://wa.me/351928141891?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Sua mensagem foi preparada e será enviada via WhatsApp."
      });

    

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    setIsSubmitting(false);
    }, 1000);
  };


  
  return <section id="contato" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3-mixed-color.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                Fale com nosso especialista
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                Nossa equipe está pronta para entender suas necessidades e criar a solução perfeita para sua empresa.
              </h3>

                            {/* Specs list */}
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-slate-900">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {spec.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

               {/* Contatos Adicionais */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6">
                {/* Instagram */}
                <a 
                  href="https://instagram.com/nastech.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-700 hover:text-pulse-500 transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6 text-slate-900" />
                  <span className="text-base font-medium">@nastech.ai</span>
                </a>
                
                {/* Email */}
                <a 
              
                  className="flex items-center gap-3 text-gray-700 hover:text-pulse-500 transition-colors duration-200"
                >
                  <Mail className="h-6 w-6 text-slate-900" />
                  <span className="text-base font-medium">geral.nastech@gmail.com</span>
                </a>

                  {/* Whats */}
                <a 
                  href="https://wa.me/351928141891?text=Olá!%20Quero%20automatizar%20minha%20empresa." 
                  className="flex items-center gap-3 text-gray-700 hover:text-pulse-500 transition-colors duration-200"
                >
                  <MessageCircleX  className="h-6 w-6 text-slate-900" />
                  <span className="text-base font-medium">contato</span>
                </a>
              </div>
              {/* Fim Contatos Adicionais */}

            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1-mixed-color-v2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Solicite uma demonstração
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Veja você mesmo
              </h2>
            </div>
            
            {/* Card Content - Form */}
            <div className="bg-white p-4 sm:p-8" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Nome" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>

                    <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Seu WhatsApp"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Nome da Empresa" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Solicitar demonstração
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
};

export default CTA;
