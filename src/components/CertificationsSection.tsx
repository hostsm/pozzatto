import SessaoTitle from './SessaoTitle';
import seloSif from '@/assets/selo-sif.png';
import seloOrganico from '@/assets/selo-organico.png';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Coluna Esquerda - 45% */}
          <div className="lg:w-[45%] flex flex-col justify-center">
            <SessaoTitle
              label="Qualidade Certificada"
              title="Certificações Que Fortalecem Nossa Credibilidade"
            />
            <p className="font-rubik text-base font-light text-muted-foreground leading-relaxed mt-4 mb-6">
              Nossas certificações garantem a qualidade e segurança dos nossos produtos, atendendo aos mais rigorosos padrões nacionais e internacionais.
            </p>
            <button className="btn-primary w-fit">
              Ver todas as certificações
            </button>
          </div>

          {/* Coluna Direita - 55% com Imagens dos Certificados */}
          <div className="lg:w-[55%] flex items-center justify-center gap-8 lg:gap-12">
            <img 
              src={seloSif} 
              alt="Selo SIF - Ministério da Agricultura" 
              className="max-h-[120px] object-contain"
            />
            <img 
              src={seloOrganico} 
              alt="Selo Produto Orgânico Brasil" 
              className="max-h-[120px] object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
