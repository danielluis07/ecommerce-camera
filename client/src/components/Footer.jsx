import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Inscreva-se em nosso Newsletter
          </h2>
          <p className="text-white/70">
            Seja o primeiro a ter notícias sobre nossa marca
          </p>
        </div>
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14">
          <input type="text" placeholder="Seu email" className="input" />
          <button className="btn btn-accent min-w-[150px]">Cadastrar</button>
        </form>
        <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
          <a href="#" className="hover:text-white transition-all">
            Política de devolução
          </a>
          <a href="#" className="hover:text-white transition-all">
            Acompanhe seu pedido
          </a>
          <a href="#" className="hover:text-white transition-all">
            Entregas
          </a>
        </div>
        <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16">
          <a href="#" className="hover:text-white transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Todos os direitos reservados
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
