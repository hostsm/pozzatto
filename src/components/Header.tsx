import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoPozzatto from '@/assets/logo-pozzatto.png';

const Topbar = () => (
  <div className="bg-foreground/20 backdrop-blur-sm py-2">
    <div className="container-custom flex justify-end items-center gap-4">
      <span className="font-rubik text-sm font-light text-card/80">
        Atendimento ao Cliente: +55 99 99999-99
      </span>
      <span className="text-card/50">|</span>
      <div className="flex items-center gap-2">
        <button className="text-xl hover:scale-110 transition-transform" title="Português">
          🇧🇷
        </button>
        <button className="text-xl hover:scale-110 transition-transform" title="Español">
          🇪🇸
        </button>
        <button className="text-xl hover:scale-110 transition-transform" title="English">
          🇺🇸
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header transparent over hero */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card shadow-lg' 
          : 'bg-transparent'
      }`}>
        {!isScrolled && <Topbar />}
        <div className="container-custom flex items-center justify-between py-4">
          <a href="#" className="flex-shrink-0">
            <img 
              src={logoPozzatto} 
              alt="Pozzatto - Apiário Padre Assis" 
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`} 
            />
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
                  className={`font-rubik text-sm font-normal transition-colors flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-card hover:text-primary'
                  }`}
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
            <button className={`font-rubik font-medium text-sm px-6 py-2.5 rounded border-2 transition-all duration-300 ${
              isScrolled 
                ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                : 'border-primary bg-primary text-primary-foreground hover:bg-primary/90'
            }`}>
              Baixar Catálogo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen 
              ? <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-card'}`} /> 
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-card'}`} />
            }
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
