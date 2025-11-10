import React from "react";

function enviarWhats(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  const telefone = "351928141891";
  const texto = "Olá, gostaria de saber mais sobre seu trabalho.";
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
  window.open(url, "_blank");
}

const Footer = () => {
  return (
    <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          Design feito por{" "}
          <a
            href="#"
            onClick={enviarWhats}
            className="text-pulse-500 hover:underline"
          >
            André Filho Programador
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

