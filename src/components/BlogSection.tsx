import { Calendar, ArrowRight } from 'lucide-react';
import SessaoTitle from './SessaoTitle';
import blogMel from '@/assets/blog-mel.png';
import blogAbelhas from '@/assets/blog-abelhas.png';
import blogApicultor from '@/assets/blog-apicultor.png';

const posts = [
  {
    title: 'Benefícios do Mel Para a Saúde',
    excerpt: 'Descubra como o mel pode melhorar sua qualidade de vida e fortalecer sua imunidade.',
    date: '28 Nov 2024',
    category: 'Saúde',
    image: blogMel,
  },
  {
    title: 'Exportação de Mel Brasileiro Cresce',
    excerpt: 'Brasil se destaca no mercado internacional com produtos de alta qualidade.',
    date: '22 Nov 2024',
    category: 'Notícias',
    image: blogAbelhas,
  },
  {
    title: 'Sustentabilidade na Apicultura',
    excerpt: 'Como práticas sustentáveis garantem a preservação das abelhas e do meio ambiente.',
    date: '15 Nov 2024',
    category: 'Apicultura',
    image: blogApicultor,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SessaoTitle
            title="Blog & Notícias"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article 
              key={post.title}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 bg-white text-primary px-4 py-1 rounded-sm font-rubik text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h3 className="font-heebo text-lg font-bold text-foreground mb-3">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-2 text-primary mb-3">
                <Calendar className="w-4 h-4" />
                <span className="font-rubik text-sm">{post.date}</span>
              </div>
              
              <p className="font-rubik text-sm font-light text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-primary font-rubik text-sm font-medium hover:gap-2 transition-all"
              >
                Leia Mais <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn-primary">
            Ver Mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
