import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';

type CaseStudy = Database['case_studies'];

export default function Portfolio() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = async () => {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setCaseStudies(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 pt-20 md:pt-24 pb-8 md:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-black text-gray-950 mb-6 md:mb-8 leading-tight tracking-tight">
              Our Work
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide max-w-2xl mx-auto">
              A collection of digital products we've brought to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 font-medium">Loading projects...</p>
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 font-medium">No projects found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-20">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group block"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden mb-6 bg-gray-100 rounded-sm group-hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={study.image_url}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-950 px-6 py-3 rounded-full font-bold text-sm tracking-tight transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {study.tech_stack.slice(0, 1).map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-blue-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-gray-950 tracking-tighter leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-400 font-bold tracking-widest uppercase">
                      {(study as any).client || 'Featured Partnership'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-gray-950 mb-6 tracking-tighter leading-none">
            Let's build <br /> your next project.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium mb-12 max-w-xl mx-auto tracking-tight">
            We're currently accepting new partnerships for 2026.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-xl bg-gray-950 text-white font-bold rounded-sm hover:bg-blue-600 transition-all duration-500 tracking-tight"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
