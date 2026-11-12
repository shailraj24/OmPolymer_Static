import { ChevronRight, ArrowLeft, Clock, Calendar, Share2, Tag, BookOpen } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';
import { PRODUCTS } from '../data/products';

interface BlogDetailPageProps {
  blogId: string;
  onNavigate: (hash: string) => void;
}

export function BlogDetailPage({ blogId, onNavigate }: BlogDetailPageProps) {
  const post = BLOG_POSTS.find(b => b.id === blogId) || BLOG_POSTS[0];
  const relatedProducts = PRODUCTS.filter(p => post.relatedProductIds.includes(p.id));

  return (
    <article className="py-10 sm:py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <button onClick={() => onNavigate('#')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('#blog')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
            Insights
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 dark:text-white font-bold truncate">
            {post.category}
          </span>
        </nav>

        {/* Back Link */}
        <div>
          <button
            onClick={() => onNavigate('#blog')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                OM
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  {post.author}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Manufacturing & Technical Insights
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight pt-2">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2 pl-4 border-l-2 border-blue-500/50 my-4 text-xs sm:text-sm">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="text-slate-800 dark:text-slate-200">
                      · {bp}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Keywords */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400">Tags:</span>
          {post.keywords.map((kw, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Related Product Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map(p => (
                <div
                  key={p.id}
                  onClick={() => onNavigate(`#product-${p.id}`)}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer transition-all"
                >
                  <img src={p.image} alt={p.alt} className="w-full h-28 object-cover rounded-lg mb-2" />
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{p.name}</p>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 mt-1 font-medium">View Technical Specs →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-8 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => onNavigate('#blog')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← View All Articles
          </button>
          <button
            onClick={() => onNavigate('#contact')}
            className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            Contact Technical Team →
          </button>
        </div>

      </div>
    </article>
  );
}
