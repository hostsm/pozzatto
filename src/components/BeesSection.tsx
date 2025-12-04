import { Leaf, Heart, TreePine, Droplets } from 'lucide-react';
import beekeepingImage from '@/assets/beekeeping.jpg';

const features = [
  { icon: Leaf, label: 'Manejo sustentável' },
  { icon: Heart, label: 'Colmeias saudáveis' },
  { icon: TreePine, label: 'Ambientes preservados' },
  { icon: Droplets, label: 'Pureza da matéria-prima' },
];

const BeesSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={beekeepingImage} 
              alt="Cuidado com as abelhas" 
              className="w-full rounded shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heebo text-3xl md:text-4xl font-bold text-foreground mb-6">
              O cuidado começa pelas abelhas
            </h2>
            <p className="font-rubik text-base font-light text-muted-foreground leading-relaxed mb-8">
              Nosso mel nasce do respeito às abelhas e à natureza. Mantemos colmeias saudáveis em regiões preservadas, manejadas com responsabilidade pelos nossos apicultores. Esse cuidado garante pureza, sabor e segurança em cada lote produzido.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div 
                  key={feature.label}
                  className="bg-card rounded p-4 flex items-center gap-3 shadow-sm card-hover"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-rubik font-medium text-sm text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeesSection;
