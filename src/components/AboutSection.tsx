import beesHoneycombImage from '@/assets/bees-honeycomb.png';
import beekeeperImage from '@/assets/beekeeper.png';
import iconHoney from '@/assets/icon-honey.png';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing pt-52">
      <div className="container-custom">
        {/* Top Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-16" style={{ gap: '40px' }}>
          {/* Left Column - Title and CTA */}
          <div>
            <span className="font-rubik text-sm font-medium text-primary tracking-wider mb-4 block">
              Quem Somos
            </span>
            <h2 className="font-heebo text-[42px] font-bold text-foreground mb-8 leading-tight">
              50 Anos de Tradição, Naturalidade e Qualidade Que Atravessam Fronteiras.
            </h2>
            <a href="#about" className="btn-primary inline-block">
              Conheça a Pozzatto
            </a>
          </div>
          
          {/* Right Column - Text */}
          <div className="text-left flex flex-col justify-center">
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
          <div className="flex flex-wrap" style={{ gap: '30px' }}>
            {/* First Image */}
            <div className="relative" style={{ width: '374px', height: '344px' }}>
              <img 
                src={beesHoneycombImage} 
                alt="Abelhas produzindo mel no favo" 
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Decorative hexagon */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rotate-45 -z-10" />
            </div>
            
            {/* Second Image with Badge */}
            <div className="relative" style={{ width: '510px', height: '344px' }}>
              <img 
                src={beekeeperImage} 
                alt="Apicultor cuidando das colmeias" 
                className="w-full h-full object-cover rounded-xl"
              />
              
              {/* Badge Element */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-[170px] bg-primary rounded-xl text-center shadow-lg" style={{ padding: '40px' }}>
                <img src={iconHoney} alt="" className="w-10 h-10 mx-auto mb-3 brightness-0 invert" />
                <h4 className="font-heebo font-bold mb-2" style={{ fontSize: '22px', color: '#000000' }}>
                  100% Natural
                </h4>
                <p className="font-rubik text-primary-foreground/90 leading-relaxed" style={{ fontSize: '16px', fontWeight: 300 }}>
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
