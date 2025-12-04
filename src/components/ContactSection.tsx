import { Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heebo text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale com nosso time internacional
          </h2>
          <p className="font-rubik text-base font-light text-muted-foreground mb-8">
            Entre em contato conosco para saber mais sobre nossos produtos e serviços de exportação.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contato Comercial
            </button>
            <button className="bg-green-600 text-white font-rubik font-medium px-6 py-3 rounded flex items-center gap-2 hover:bg-green-700 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
