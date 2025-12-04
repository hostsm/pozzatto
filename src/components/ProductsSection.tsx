import { Package, Beaker, Tag, Building2 } from 'lucide-react';

const products = [
  {
    icon: Package,
    title: 'Mel a Granel',
    description: 'Ideal para indústrias alimentícias, farmacêuticas e cosméticas.',
    cta: 'Ver produtos',
  },
  {
    icon: Beaker,
    title: 'Mel Convencional',
    description: 'Produção rastreada, segura e de alta qualidade.',
    cta: 'Ver produtos',
  },
  {
    icon: Tag,
    title: 'Compostos / Blends',
    description: 'Desenvolvidos para aplicações específicas.',
    cta: 'Ver produtos',
  },
  {
    icon: Building2,
    title: 'Private Label',
    description: 'Soluções personalizadas para marcas internacionais.',
    cta: 'Ver produtos',
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heebo text-3xl md:text-4xl font-bold text-foreground">
            Nossas Linhas de Produtos
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.title}
              className="bg-card rounded shadow-md p-6 text-center card-hover group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="font-rubik text-sm font-light text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>
              <button className="btn-outline text-sm w-full">
                {product.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
