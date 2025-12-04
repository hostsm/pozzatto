import beesHoneycombImage from '@/assets/bees-honeycomb.png';
import qualityControlImage from '@/assets/quality-control.jpg';
import iconHoney from '@/assets/icon-honey.png';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing pt-52">
      <div className="container-custom">
        {/* Top Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Title and CTA */}
          <div>
            <span className="font-rubik text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Quem Somos
            </span>
            <h2 className="font-heebo text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase leading-tight">
              50 Anos de Tradição, Naturalidade e Qualidade Que Atravessam Fronteiras.
            </h2>
            <a href="#about" className="btn-primary inline-block">
              Conheça a Pozzatto
            </a>
          </div>
          
          {/* Right Column - Text */}
          <div className="text-right flex flex-col justify-center">
            <p className="font-rubik text-base font-light text-muted-foreground leading-relaxed mb-4">
              A Pozzatto é o braço internacional do tradicional Apiário Padre Assis, que há mais de 50 anos cultiva abelhas com respeito ao meio ambiente e produz mel de alta qualidade. Unimos tecnologia, experiência e manejo sustentável para atender mercados globais com excelência.
            </p>
            <p className="font-rubik text-base font-light text-muted-foreground leading-relaxed">
              Nosso compromisso é levar o melhor mel brasileiro para o mundo, mantendo a tradição familiar e os mais altos padrões de qualidade em cada etapa do processo produtivo.
            </p>
          </div>
        </div>

        {/* Images Area */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Image */}
            <div className="relative" style={{ width: '374px', height: '344px' }}>
              <img 
                src={beesHoneycombImage} 
                alt="Abelhas produzindo mel no favo" 
                className="w-full h-full object-cover rounded"
              />
              {/* Decorative hexagon */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rotate-45 -z-10" />
            </div>
            
            {/* Second Image with Badge */}
            <div className="relative">
              <img 
                src={qualityControlImage} 
                alt="Apicultor cuidando das colmeias" 
                className="w-full h-80 object-cover rounded"
              />
              
              {/* Badge Element */}
              <div className="absolute -bottom-8 -right-4 md:right-8 bg-primary rounded px-6 py-6 text-center max-w-[200px] shadow-lg">
                <img src={iconHoney} alt="" className="w-10 h-10 mx-auto mb-3 brightness-0 invert" />
                <h4 className="font-heebo text-lg font-bold text-primary-foreground mb-2">
                  100% Natural
                </h4>
                <p className="font-rubik text-sm text-primary-foreground/90 leading-relaxed">
                  Mel puro, sem aditivos ou conservantes artificiais.
                </p>
              </div>
              
              {/* Decorative hexagon */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rotate-45 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
