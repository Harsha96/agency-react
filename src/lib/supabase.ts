import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// console.log(supabaseUrl, supabaseAnonKey,"test connection");
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  contact_requests: {
    id: string;
    name: string;
    email: string;
    message: string;
    status: 'new' | 'in_progress' | 'completed';
    created_at: string;
  };
  case_studies: {
    id: string;
    title: string;
    description: string;
    tech_stack: string[];
    results: string;
    image_url: string;
    published: boolean;
    created_at: string;
  };
  blogs: {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    author: string;
    published: boolean;
    created_at: string;
    updated_at: string;
  };
};
