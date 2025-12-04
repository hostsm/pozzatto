import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoPozzatto from '@/assets/logo-pozzatto.png';
import flagBrazil from '@/assets/flag-brazil.png';
import flagSpain from '@/assets/flag-spain.png';
import flagUsa from '@/assets/flag-usa.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <img src={logoPozzatto} alt="Pozzatto" className="h-12 mb-4 brightness-0 invert" />
            <p className="font-rubik text-sm font-light opacity-80 leading-relaxed">
              Mel brasileiro de alta qualidade para o mercado global. Tradição e inovação desde 1973.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heebo font-bold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="font-rubik text-sm font-light opacity-80 hover:opacity-100 transition-opacity">A Pozzatto</a>
              <a href="#products" className="font-rubik text-sm font-light opacity-80 hover:opacity-100 transition-opacity">Produtos</a>
              <a href="#exports" className="font-rubik text-sm font-light opacity-80 hover:opacity-100 transition-opacity">Exportação</a>
              <a href="#quality" className="font-rubik text-sm font-light opacity-80 hover:opacity-100 transition-opacity">Qualidade</a>
              <a href="#certifications" className="font-rubik text-sm font-light opacity-80 hover:opacity-100 transition-opacity">Certificações</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heebo font-bold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="font-rubik text-sm font-light opacity-80">
                  Rua das Abelhas, 123<br />São Paulo - SP, Brasil
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-rubik text-sm font-light opacity-80">+55 99 99999-99</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-rubik text-sm font-light opacity-80">contato@pozzatto.com.br</span>
              </div>
            </div>
          </div>

          {/* Languages & Social */}
          <div>
            <h4 className="font-heebo font-bold mb-4">Idiomas</h4>
            <div className="flex gap-3 mb-6">
              <button className="hover:scale-110 transition-transform" title="Português">
                <img src={flagBrazil} alt="Português" className="w-6 h-auto" />
              </button>
              <button className="hover:scale-110 transition-transform" title="Español">
                <img src={flagSpain} alt="Español" className="w-6 h-auto" />
              </button>
              <button className="hover:scale-110 transition-transform" title="English">
                <img src={flagUsa} alt="English" className="w-6 h-auto" />
              </button>
            </div>
            <h4 className="font-heebo font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-solid border-card/10">
        <div className="container-custom py-6 text-center">
          <p className="font-rubik text-sm font-light opacity-60">
            © 2024 Pozzatto - Apiário Padre Assis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
