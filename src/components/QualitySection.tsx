import { Users, Beaker, Microscope, ClipboardCheck, Truck, ShieldCheck } from 'lucide-react';
import qualityImage from '@/assets/quality-control.jpg';
import SessaoTitle from './SessaoTitle';

const steps = [
  { icon: Users, label: 'Apicultor' },
  { icon: Beaker, label: 'Controle de matéria-prima' },
  { icon: Microscope, label: 'Laboratório próprio' },
  { icon: ClipboardCheck, label: 'Inspeção' },
  { icon: Truck, label: 'Logística' },
  { icon: ShieldCheck, label: 'Auditorias' },
];

const QualitySection = () => {
  return (
    <section id="quality" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SessaoTitle
            title="Qualidade Garantida Em Cada Etapa"
            centered
            className="mb-4"
          />
          <p className="font-rubik text-base font-light text-muted-foreground max-w-2xl mx-auto">
            Monitoramos cada etapa com rigor técnico e transparência, garantindo segurança e precisão em todo o processo produtivo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.label}
              className="bg-card rounded shadow-sm p-4 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-rubik text-xs font-medium text-foreground">{step.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn-primary">
            Nosso Processo
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
