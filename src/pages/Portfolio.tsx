import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 pt-24 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 md:mb-8">
              <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
              <span className="tracking-wide uppercase text-[10px] md:text-xs font-bold">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-950 mb-6 md:mb-8 leading-tight tracking-tight">
              Portfolio
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide max-w-2xl mx-auto">
              Real projects, real results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No case studies available yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                >
                  <div className="relative h-80 overflow-hidden bg-gray-200">
                    <img
                      src={study.image_url}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-8 right-8">
                      <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{study.title}</h2>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow">
                      {study.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xs font-bold text-gray-950 mb-4 uppercase tracking-widest">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.tech_stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-xl border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-50 pt-8 mt-auto">
                      <h3 className="text-xs font-bold text-gray-950 mb-4 uppercase tracking-widest">
                        Results Achieved
                      </h3>
                      <div className="flex items-start space-x-4">
                        <div className="p-1 bg-green-50 rounded-full mt-1">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-gray-700 leading-relaxed font-medium">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl opacity-50" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Want Results Like These?</h2>
          <p className="text-lg md:text-xl mb-12 text-slate-400">
            Let's discuss how we can help you achieve similar success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
