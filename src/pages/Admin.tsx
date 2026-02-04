import { useState, useEffect } from 'react';
import { Mail, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';

type ContactRequest = Database['contact_requests'];
type CaseStudy = Database['case_studies'];
type Blog = Database['blogs'];

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'portfolio' | 'blog'>('contacts');
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalCaseStudies: 0,
    totalBlogs: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [contactsRes, caseStudiesRes, blogsRes] = await Promise.all([
      supabase.from('contact_requests').select('*').order('created_at', { ascending: false }),
      supabase.from('case_studies').select('*').order('created_at', { ascending: false }),
      supabase.from('blogs').select('*').order('created_at', { ascending: false }),
    ]);

    if (contactsRes.data) setContacts(contactsRes.data);
    if (caseStudiesRes.data) setCaseStudies(caseStudiesRes.data);
    if (blogsRes.data) setBlogs(blogsRes.data);

    setStats({
      totalContacts: contactsRes.data?.length || 0,
      totalCaseStudies: caseStudiesRes.data?.length || 0,
      totalBlogs: blogsRes.data?.length || 0,
    });

    setLoading(false);
  };

  const updateContactStatus = async (id: string, status: 'new' | 'in_progress' | 'completed') => {
    await supabase.from('contact_requests').update({ status }).eq('id', id);
    loadData();
  };

  const togglePublished = async (table: 'case_studies' | 'blogs', id: string, currentState: boolean) => {
    await supabase.from(table).update({ published: !currentState }).eq('id', id);
    loadData();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your content and contacts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Contact Requests</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalContacts}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Case Studies</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalCaseStudies}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Blog Posts</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalBlogs}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'contacts'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Contact Requests
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'portfolio'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Case Studies
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'blog'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Blog Posts
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">No contact requests yet.</p>
                ) : (
                  contacts.map((contact) => (
                    <div key={contact.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{contact.email}</p>
                          <p className="text-xs text-gray-500 mt-1">{formatDate(contact.created_at)}</p>
                        </div>
                        <select
                          value={contact.status}
                          onChange={(e) => updateContactStatus(contact.id, e.target.value as any)}
                          className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                        >
                          <option value="new">New</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{contact.message}</p>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="space-y-4">
                {caseStudies.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">No case studies yet.</p>
                ) : (
                  caseStudies.map((study) => (
                    <div key={study.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{study.title}</h3>
                          <p className="text-gray-600 mb-3">{study.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {study.tech_stack.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => togglePublished('case_studies', study.id, study.published)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${study.published
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                            }`}
                        >
                          {study.published ? 'Published' : 'Draft'}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'blog' && (
              <div className="space-y-4">
                {blogs.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">No blog posts yet.</p>
                ) : (
                  blogs.map((blog) => (
                    <div key={blog.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{blog.title}</h3>
                          <p className="text-gray-600 mb-2">{blog.excerpt}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>By {blog.author}</span>
                            <span>{formatDate(blog.created_at)}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => togglePublished('blogs', blog.id, blog.published)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${blog.published
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                            }`}
                        >
                          {blog.published ? 'Published' : 'Draft'}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
