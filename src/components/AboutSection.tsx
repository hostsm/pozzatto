import beekeepingImage from '@/assets/beekeeping.jpg';

const AboutSection = () => {
  return (
<section id="about" className="section-spacing pt-52">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heebo text-3xl md:text-4xl font-bold text-foreground mb-6">
              50 Anos de Tradição, Naturalidade e Qualidade Que Atravessam Fronteiras.
            </h2>
            <p className="font-rubik text-base font-light text-muted-foreground leading-relaxed mb-8">
              A Pozzatto é o braço internacional do tradicional Apiário Padre Assis, que há mais de 50 anos cultiva abelhas com respeito ao meio ambiente e produz mel de alta qualidade. Unimos tecnologia, experiência e manejo sustentável para atender mercados globais com excelência.
            </p>
            <a href="#about" className="btn-primary inline-block">
              Conheça a Pozzatto
            </a>
          </div>
          <div className="relative">
            <img 
              src={beekeepingImage} 
              alt="Apiário Pozzatto - Manejo sustentável de abelhas" 
              className="w-full rounded shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
