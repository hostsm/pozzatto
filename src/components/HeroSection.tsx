import heroImage from '@/assets/hero-honey.jpg';
import iconBee from '@/assets/icon-bee.png';
import iconHoney from '@/assets/icon-honey.png';
import iconBarcode from '@/assets/icon-barcode.svg';

const features = [
  { icon: iconBee, label: 'Alta Tecnologia', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: iconHoney, label: 'Qualidade Comprovada', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: iconBarcode, label: 'Rastreabilidade Completa', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-[50px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mel brasileiro de alta qualidade" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-heebo text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in text-left">
            Mel brasileiro de alta qualidade para o mercado global.
          </h1>
          <p className="font-rubik text-lg md:text-xl font-light text-card/90 mb-8 leading-relaxed animate-fade-in text-left" style={{ animationDelay: '0.2s' }}>
            Produtos derivados do mel com alto padrão de pureza para indústrias e distribuidores de todo o mundo.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#products" className="btn-primary">
              Conheça nossos produtos
            </a>
            <button className="border-2 border-card text-card font-rubik font-medium px-6 py-3 rounded hover:bg-card hover:text-foreground transition-all duration-300">
              Baixar Catálogo
            </button>
          </div>
        </div>

        {/* Feature Cards - Glassmorphism Style */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {features.map((feature, index) => (
            <div 
              key={feature.label}
              className="backdrop-blur-md bg-white/15 border border-white/20 rounded-lg shadow-lg p-6 animate-fade-in text-center"
              style={{ 
                animationDelay: `${0.6 + index * 0.1}s`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
              }}
            >
              <div className="h-11 mb-4 flex justify-center">
                <img src={feature.icon} alt={feature.label} className="h-11 w-auto object-contain" />
              </div>
              <h3 className="font-heebo font-semibold text-2xl text-card mb-2">{feature.label}</h3>
              <p className="font-rubik text-base font-light text-card/80" style={{ lineHeight: '1.3' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
