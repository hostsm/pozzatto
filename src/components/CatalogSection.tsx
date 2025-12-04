import { FileText, Download } from 'lucide-react';

const CatalogSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-heebo text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Catálogo Completo de Produtos
          </h2>
          <p className="font-rubik text-base font-light text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Conheça toda nossa linha de produtos e especificações técnicas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-card text-foreground font-rubik font-medium px-6 py-3 rounded flex items-center gap-2 hover:bg-card/90 transition-all duration-300">
              <FileText className="w-5 h-5" />
              Acessar Catálogo Online
            </button>
            <button className="border-2 border-card text-card font-rubik font-medium px-6 py-3 rounded flex items-center gap-2 hover:bg-card hover:text-foreground transition-all duration-300">
              <Download className="w-5 h-5" />
              Download do PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
