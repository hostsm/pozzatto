import { Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Benefícios do mel para a saúde',
    excerpt: 'Descubra como o mel pode melhorar sua qualidade de vida e fortalecer sua imunidade.',
    date: '28 Nov 2024',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=250&fit=crop',
  },
  {
    title: 'Exportação de mel brasileiro cresce',
    excerpt: 'Brasil se destaca no mercado internacional com produtos de alta qualidade.',
    date: '22 Nov 2024',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=250&fit=crop',
  },
  {
    title: 'Sustentabilidade na apicultura',
    excerpt: 'Como práticas sustentáveis garantem a preservação das abelhas e do meio ambiente.',
    date: '15 Nov 2024',
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400&h=250&fit=crop',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="sessao-title">
            <div className="label">
              {/* Label futura */}
            </div>
            <div className="subtitle">
              <h2 className="font-heebo text-[42px] font-bold text-foreground leading-tight">
                Blog & Notícias
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {posts.map((post) => (
            <article 
              key={post.title}
              className="bg-card rounded shadow-md overflow-hidden card-hover"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-rubik text-xs">{post.date}</span>
                </div>
                <h3 className="font-heebo text-lg font-bold text-foreground mb-2">
                  {post.title}
                </h3>
                <p className="font-rubik text-sm font-light text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn-outline">
            Ver mais artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
