import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import linhaMesa from '@/assets/linha-mesa.png';
import linhaOrganica from '@/assets/linha-organica.png';
import linhaSuplemento from '@/assets/linha-suplemento.png';
import linhaCompostos from '@/assets/linha-compostos.png';
import linhaGranel from '@/assets/linha-granel.png';

const products = [
  {
    image: linhaMesa,
    title: 'Linha Mesa',
    description: 'Mel puro e natural para o dia a dia da sua família.',
  },
  {
    image: linhaOrganica,
    title: 'Linha Orgânica',
    description: 'Mel certificado orgânico, livre de agrotóxicos.',
  },
  {
    image: linhaSuplemento,
    title: 'Linha Suplemento',
    description: 'Produtos apícolas para saúde e bem-estar.',
  },
  {
    image: linhaCompostos,
    title: 'Linha Compostos',
    description: 'Mel combinado com ingredientes naturais funcionais.',
  },
  {
    image: linhaGranel,
    title: 'Linha à Granel',
    description: 'Mel em grandes volumes para indústrias e distribuidores.',
  },
];

const ProductsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      containScroll: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="products" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - 1/3 */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <span className="font-rubik text-sm font-medium text-primary tracking-wider mb-3">
              Linha De Produtos
            </span>
            <h2 className="font-heebo text-[42px] font-bold text-foreground mb-4 leading-tight">
              Conheça Nossa Linha De Produtos Para Exportação
            </h2>
            <p className="font-rubik text-base font-light text-muted-foreground leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn-primary w-fit">
              Nossos Produtos
            </button>
          </div>

          {/* Right Column - 2/3 with Carousel */}
          <div className="lg:w-2/3">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {products.map((product, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_auto] min-w-0"
                    style={{ width: '400px', paddingRight: '30px' }}
                  >
                    <div className="relative rounded-xl overflow-hidden group cursor-pointer" style={{ width: '370px' }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ width: '370px', height: '390px' }}
                      />
                      {/* Overlay Box */}
                      <div className="absolute bottom-0 left-0 right-0 bg-primary p-5 rounded-t-xl">
                        <h3 className="font-heebo text-xl font-bold text-primary-foreground mb-1">
                          {product.title}
                        </h3>
                        <p className="font-rubik text-sm font-light text-primary-foreground/90 mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <a 
                          href="#" 
                          className="font-rubik text-sm font-medium text-primary-foreground hover:underline inline-flex items-center gap-1"
                        >
                          Saiba Mais
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullets/Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
