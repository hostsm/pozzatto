import { Award } from 'lucide-react';

const certifications = [
  'ISO 22000',
  'HACCP',
  'Orgânico BR',
  'Kosher',
  'Halal',
  'EU Organic',
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heebo text-3xl md:text-4xl font-bold text-foreground">
            Certificações que fortalecem nossa credibilidade
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {certifications.map((cert) => (
            <div 
              key={cert}
              className="bg-card rounded shadow-sm px-8 py-6 flex items-center gap-3 card-hover"
            >
              <Award className="w-6 h-6 text-primary" />
              <span className="font-rubik font-medium text-foreground">{cert}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn-outline">
            Ver todas as certificações
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
