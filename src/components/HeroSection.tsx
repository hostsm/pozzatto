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
    <section className="relative min-h-screen flex items-center pt-32">
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
          <h1 className="font-heebo text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-in">
            Mel brasileiro de alta qualidade para o mercado global.
          </h1>
          <p className="font-rubik text-lg md:text-xl font-light text-card/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
      </div>

      {/* Feature Cards */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-3/4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.label}
                className="bg-card rounded shadow-lg p-8 flex flex-col items-center text-center card-hover animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img src={feature.icon} alt={feature.label} className="w-14 h-14 object-contain" />
                </div>
                <h3 className="font-heebo font-bold text-xl text-foreground mb-2">{feature.label}</h3>
                <p className="font-rubik text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
