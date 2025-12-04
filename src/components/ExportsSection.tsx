import { Sparkles, BadgeCheck, Search, Truck, Factory, BarChart3 } from 'lucide-react';

const features = [
  { icon: Sparkles, label: 'Pureza superior' },
  { icon: BadgeCheck, label: 'Certificações reconhecidas' },
  { icon: Search, label: 'Rastreabilidade total' },
  { icon: Truck, label: 'Logística facilitada' },
  { icon: Factory, label: 'Produção própria' },
  { icon: BarChart3, label: 'Capacidade de alto volume' },
];

const ExportsSection = () => {
  return (
    <section id="exports" className="section-spacing bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heebo text-3xl md:text-4xl font-bold mb-6">
              Exportamos qualidade para o mundo
            </h2>
            <p className="font-rubik text-base font-light opacity-90 leading-relaxed mb-8">
              A Pozzatto fornece mel e derivados para distribuidores e indústrias em vários países, com processos rigorosos de qualidade e documentação completa para exportação.
            </p>
            <button className="bg-card text-foreground font-rubik font-medium px-6 py-3 rounded hover:bg-card/90 transition-all duration-300">
              Saiba mais sobre exportação
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div 
                key={feature.label}
                className="bg-card/10 backdrop-blur-sm rounded p-4 flex items-center gap-3"
              >
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="font-rubik text-sm font-light">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportsSection;
