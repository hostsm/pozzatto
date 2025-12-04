import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoPozzatto from '@/assets/logo-pozzatto.png';

const Topbar = () => (
  <div className="bg-cream-dark py-2">
    <div className="container-custom flex justify-end items-center gap-4">
      <span className="font-rubik text-sm font-light text-muted-foreground">
        Atendimento ao Cliente: +55 99 99999-99
      </span>
      <span className="text-muted-foreground">|</span>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 text-sm font-light hover:text-primary transition-colors">
          🇧🇷 PT
        </button>
        <button className="flex items-center gap-1 text-sm font-light hover:text-primary transition-colors">
          🇪🇸 ES
        </button>
        <button className="flex items-center gap-1 text-sm font-light hover:text-primary transition-colors">
          🇺🇸 EN
        </button>
      </div>
    </div>
  </div>
);

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'A Pozzatto', href: '#about' },
  { 
    label: 'Produtos', 
    href: '#products',
    submenu: ['Granel', 'Orgânicos', 'Compostos', 'Private Label']
  },
  { label: 'Exportação', href: '#exports' },
  { label: 'Qualidade & Rastreabilidade', href: '#quality' },
  { label: 'Certificações', href: '#certifications' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <>
      <Topbar />
      <header className="bg-card sticky top-0 z-50 shadow-sm">
        <div className="container-custom flex items-center justify-between py-4">
          <a href="#" className="flex-shrink-0">
            <img src={logoPozzatto} alt="Pozzatto - Apiário Padre Assis" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a 
                  href={item.href}
                  className="font-rubik text-sm font-normal text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </a>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-card shadow-lg rounded py-2 min-w-[160px]">
                    {item.submenu.map((sub) => (
                      <a 
                        key={sub}
                        href="#"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button className="btn-primary text-sm">
              Baixar Catálogo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <nav className="container-custom py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="font-rubik text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary text-sm mt-4">
                Baixar Catálogo
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
