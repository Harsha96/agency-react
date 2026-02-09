import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';

type Blog = Database['blogs'];

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setBlogs(data);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4" />
              <span className="tracking-wide uppercase text-xs font-bold">Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-950 mb-8 leading-tight tracking-tight">
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8 max-w-2xl mx-auto">
              Expert advice on AI, web development, SEO, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                >
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-6 uppercase tracking-widest font-bold">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-blue-500" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{formatDate(blog.created_at)}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3 text-base flex-grow">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform duration-300 border-t border-gray-50 pt-6">
                      Read more
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
