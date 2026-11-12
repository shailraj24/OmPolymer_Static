import { useState, useMemo } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';

interface BlogPageProps {
  onNavigate: (hash: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    BLOG_POSTS.forEach(b => set.add(b.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.keywords.some(k => k.toLowerCase().includes(query));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <a href="#" className="hover:underline">Home</a>
            <span aria-hidden="true">/</span>
            <span>Insights & Technical Articles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Industry Insights & Polymer Guides
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Technical guides, material selection insights, and manufacturing perspectives published by OM GROUP OF COMPANIES.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Featured Post (First Mandatory Article) */}
        {selectedCategory === 'All' && !searchQuery && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 bg-slate-100 dark:bg-slate-800 relative aspect-16/10 lg:aspect-auto">
              <img
                src="/assets/images/hero-factory.jpg"
                alt="13 Years of Manufacturing Excellence by OM GROUP OF COMPANIES"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold">
                Featured Article
              </div>
            </div>
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-blue-600 dark:text-blue-400">{BLOG_POSTS[0].category}</span>
                  <span>·</span>
                  <span>{BLOG_POSTS[0].date}</span>
                  <span>·</span>
                  <span>{BLOG_POSTS[0].readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {BLOG_POSTS[0].title}
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  By {BLOG_POSTS[0].author}
                </p>
              </div>

              <div>
                <button
                  onClick={() => onNavigate(`#blog-${BLOG_POSTS[0].id}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Read Full Journey
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* All Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-6 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href={`#blog-${post.id}`} onClick={(e) => { e.preventDefault(); onNavigate(`#blog-${post.id}`); }}>
                    {post.title}
                  </a>
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  By {post.author}
                </span>
                <button
                  onClick={() => onNavigate(`#blog-${post.id}`)}
                  className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
