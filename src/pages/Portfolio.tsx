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
      <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Briefcase className="w-4 h-4" />
              <span className="tracking-wide">Our Work</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Portfolio & Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed tracking-wide mb-8 max-w-2xl mx-auto">
              Real projects, real results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
                >
                  <div className="relative h-72 overflow-hidden bg-gray-200">
                    <img
                      src={study.image_url}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-3xl font-bold text-white mb-2">{study.title}</h2>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {study.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.tech_stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Results Achieved
                      </h3>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 leading-relaxed">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want Results Like These?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how we can help you achieve similar success.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
