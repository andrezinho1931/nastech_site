import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companySize: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createWhatsAppMessage = () => {
    return `🤖 *Nova Solicitação - AutomateIA*

👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.phone}
🏢 *Tamanho da Empresa:* ${formData.companySize}

${formData.message ? `💬 *Mensagem:*\n${formData.message}` : ''}

---
Solicitação enviada através do site AutomateIA`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.companySize) {
      toast({
        title: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const whatsappMessage = createWhatsAppMessage();
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Sua mensagem foi preparada e será enviada via WhatsApp."
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        companySize: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="bg-white py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="pulse-chip mb-6 opacity-0 fade-in-element">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Contato</span>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">Fale com nosso especialista</h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Nossa equipe está pronta para entender suas necessidades e criar a solução perfeita para sua empresa.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Vamos conversar sobre sua automação?</h3>
              <p className="text-gray-600 mb-8">
                Agende uma conversa gratuita e descubra como a automação pode revolucionar seus resultados em apenas 30 dias.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-gray-600">Resposta imediata</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">contato@automateIA.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-4">Benefícios inclusos:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Diagnóstico gratuito e sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Plano personalizado para sua empresa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Resultados garantidos em 30 dias</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Seu email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Seu WhatsApp"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700"
                    required
                  >
                    <option value="">Tamanho da sua empresa</option>
                    <option value="1-10">1 a 10 funcionários</option>
                    <option value="11-50">11 a 50 funcionários</option>
                    <option value="51-200">51 a 200 funcionários</option>
                    <option value="200+">Mais de 200 funcionários</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre os processos que gostaria de automatizar"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700 resize-vertical"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico Gratuito"}
                  {!isSubmitting && <span className="text-xl">🚀</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;