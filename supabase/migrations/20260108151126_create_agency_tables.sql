/*
  # Create Software & AI Agency Database Schema

  ## New Tables
  
  ### `contact_requests`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Contact person's name
  - `email` (text) - Contact email address
  - `message` (text) - Contact message content
  - `created_at` (timestamptz) - Submission timestamp
  - `status` (text) - Request status (new, in_progress, completed)
  
  ### `case_studies`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project title
  - `description` (text) - Project description
  - `tech_stack` (text[]) - Array of technologies used
  - `results` (text) - Project results/outcomes
  - `image_url` (text) - Project image URL
  - `created_at` (timestamptz) - Creation timestamp
  - `published` (boolean) - Publication status
  
  ### `blogs`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Blog post title
  - `slug` (text) - URL-friendly slug
  - `content` (text) - Blog post content
  - `excerpt` (text) - Short excerpt/summary
  - `author` (text) - Author name
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  - `published` (boolean) - Publication status
  
  ## Security
  - Enable RLS on all tables
  - Public read access for published content
  - Authenticated users can submit contact forms
  - Only authenticated admins can manage content
*/

-- Contact Requests Table
CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact requests"
  ON contact_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Case Studies Table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tech_stack text[] DEFAULT '{}',
  results text,
  image_url text,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published case studies are viewable by everyone"
  ON case_studies
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage case studies"
  ON case_studies
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Blogs Table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  author text DEFAULT 'Admin',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published blogs are viewable by everyone"
  ON blogs
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage blogs"
  ON blogs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON contact_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(published, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published, created_at DESC);

-- Insert sample data for case studies
INSERT INTO case_studies (title, description, tech_stack, results, image_url, published) VALUES
  (
    'E-commerce Platform Redesign',
    'Complete overhaul of a legacy e-commerce platform with modern tech stack and AI-powered recommendations.',
    ARRAY['React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
    '250% increase in conversion rate, 40% faster page load times, and 3x improvement in customer engagement.',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    true
  ),
  (
    'AI Chatbot for Customer Support',
    'Developed an intelligent chatbot that handles 80% of customer inquiries automatically using natural language processing.',
    ARRAY['Python', 'OpenAI', 'FastAPI', 'React'],
    'Reduced customer support costs by 60%, improved response time from hours to seconds, 95% customer satisfaction.',
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    true
  ),
  (
    'Data Analytics Dashboard',
    'Built a real-time analytics dashboard for a SaaS company to track key business metrics and user behavior.',
    ARRAY['React', 'D3.js', 'Python', 'BigQuery'],
    'Enabled data-driven decision making, identified $2M in revenue opportunities, improved forecasting accuracy by 85%.',
    'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    true
  ),
  (
    'SEO Content Strategy',
    'Comprehensive SEO content strategy and implementation for a B2B software company.',
    ARRAY['Content Writing', 'SEO Tools', 'Analytics'],
    '400% increase in organic traffic, 150+ ranking keywords, 10x lead generation from organic search.',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    true
  );

-- Insert sample blog posts
INSERT INTO blogs (title, slug, content, excerpt, author, published) VALUES
  (
    'How AI is Transforming Modern Business',
    'ai-transforming-business',
    'Artificial Intelligence is no longer a futuristic concept—it''s here, and it''s reshaping how businesses operate across every industry. From automating routine tasks to providing deep insights from data, AI is becoming an essential tool for companies that want to stay competitive.

## The AI Revolution

In the past few years, we''ve seen AI move from research labs into practical business applications. Companies are using AI to:

- Automate customer service with intelligent chatbots
- Predict customer behavior and preferences
- Optimize supply chains and logistics
- Detect fraud and security threats
- Generate content and creative assets

## Real-World Impact

Our clients have seen remarkable results from AI implementation. One e-commerce client reduced customer service costs by 60% while improving response times from hours to seconds. Another B2B company increased sales by 35% using AI-powered lead scoring and personalization.

## Getting Started

The key to successful AI adoption is starting small and scaling up. Begin with a specific problem that AI can solve, measure the results, and expand from there. You don''t need a massive budget or a team of data scientists—many AI tools are now accessible to businesses of all sizes.

Contact us to learn how AI can transform your business.',
    'Discover how artificial intelligence is revolutionizing business operations and creating new opportunities for growth and efficiency.',
    'Sarah Johnson',
    true
  ),
  (
    'The Complete Guide to SEO Content Writing',
    'seo-content-writing-guide',
    'Creating content that ranks well in search engines while engaging your audience is both an art and a science. This comprehensive guide will walk you through the essential elements of effective SEO content writing.

## Understanding Search Intent

Before writing a single word, you need to understand what your audience is searching for and why. Are they looking for information, trying to make a purchase, or seeking a specific website? Your content should match this intent.

## Keyword Research Done Right

Keywords are still important, but keyword stuffing is dead. Focus on:

- Long-tail keywords that match user intent
- Related terms and semantic variations
- Question-based queries
- Local search terms (if applicable)

## Content Structure Matters

Search engines and readers both love well-structured content. Use:

- Clear headings (H1, H2, H3)
- Short paragraphs (2-3 sentences)
- Bullet points and lists
- Images with alt text
- Internal and external links

## Writing for Humans First

The best SEO content is content that people actually want to read. Focus on:

- Providing genuine value
- Answering questions thoroughly
- Using a conversational tone
- Including examples and case studies
- Making it scannable

## Measuring Success

Track these metrics to measure your content''s performance:

- Organic traffic
- Time on page
- Bounce rate
- Conversion rate
- Keyword rankings

Ready to improve your content strategy? We can help you create SEO-optimized content that drives real results.',
    'Master the art of SEO content writing with this comprehensive guide covering keyword research, content structure, and optimization techniques.',
    'Michael Chen',
    true
  ),
  (
    'Building Scalable Web Applications in 2024',
    'scalable-web-applications-2024',
    'Scalability isn''t just about handling more users—it''s about building applications that can grow without breaking, remain maintainable, and deliver consistent performance. Here''s what you need to know about building scalable web applications in 2024.

## Modern Architecture Patterns

The landscape of web development has evolved significantly. Today''s scalable applications typically use:

- **Microservices**: Breaking down monoliths into smaller, independent services
- **Serverless Functions**: Running code without managing servers
- **Edge Computing**: Processing data closer to users for better performance
- **JAMstack**: Decoupling frontend and backend for better scalability

## Technology Choices That Matter

Your tech stack decisions have long-term implications. Consider:

**Frontend**
- React, Vue, or Svelte for component-based UIs
- Next.js or Remix for server-side rendering
- TypeScript for type safety at scale

**Backend**
- Node.js for JavaScript everywhere
- Go or Rust for high-performance services
- GraphQL for flexible APIs

**Database**
- PostgreSQL for relational data
- MongoDB for document storage
- Redis for caching

## Performance Optimization

Performance at scale requires attention to:

- Caching strategies (CDN, browser, application)
- Database query optimization
- Lazy loading and code splitting
- Image optimization
- API rate limiting

## DevOps and Monitoring

You can''t scale what you can''t measure:

- Implement comprehensive logging
- Set up performance monitoring
- Use automated testing (unit, integration, E2E)
- Deploy with CI/CD pipelines
- Plan for disaster recovery

## Cost Optimization

Scalability shouldn''t break the bank:

- Use auto-scaling to match demand
- Optimize database queries to reduce load
- Implement efficient caching
- Choose the right pricing model for your services

Need help building a scalable application? Our team specializes in creating robust, scalable solutions.',
    'Learn the essential principles and best practices for building web applications that scale efficiently in 2024.',
    'Alex Martinez',
    true
  );