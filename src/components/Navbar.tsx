
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
                                 <header
  className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center",
    isScrolled 
      ? "bg-white/80 backdrop-blur-md shadow-sm" 
      : "bg-transparent"
  )}
  style={{ height: "72px" }} // 👈 ajuste aqui a altura exata
>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        {/* Logo: o container tem altura completa (h-full) e a imagem usa max-h-full */}
       <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    scrollToTop();
  }}
  className="flex items-center h-full justify-center"
  aria-label="Nastech"
>
  <div
    className="relative flex items-center justify-center"
   style={{
  height: "100%",
  transform: "scale(2.2)",
  transformOrigin: "center",
  paddingLeft: "8px",
  paddingRight: "8px",
}}

  >
    <img
      src="/logoHead.png"
      alt="Nastech Logo"
      className="object-contain h-full w-auto"
      draggable="false"
    />
  </div>
</a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
         <a href="#hero" className="nav-link">Início</a>
          <a href="#why-humanoid" className="nav-link">Benefícios</a>
          <a href="#features" className="nav-link">Casos de Uso</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Início
          </a>
          <a 
            href="#why-humanoid" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Benefícios
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Casos de Uso
          </a>
          <a 
            href="#contato" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
