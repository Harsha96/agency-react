# AI Agency Website

A modern, full-featured Software & AI Agency website built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

### Frontend
- **Modern UI**: Clean, professional design with smooth animations and responsive layout
- **Multiple Pages**: Home, About, Services, Portfolio, Blog, Contact
- **Service Pages**: Dedicated pages for SEO, AI Services, Web Development, Data Analytics, and Software Development
- **Blog System**: Dynamic blog with individual post pages
- **Portfolio**: Case studies showcase with detailed project information
- **Contact Form**: Functional contact form that stores submissions in Supabase

### Backend (Supabase)
- **Database**: PostgreSQL with Row Level Security
- **Authentication**: Email/password authentication for admin access
- **Tables**:
  - `contact_requests`: Store contact form submissions
  - `case_studies`: Portfolio items with tech stack and results
  - `blogs`: Blog posts with rich content and metadata

### Admin Dashboard
- **Protected Routes**: Secure admin area with authentication
- **Contact Management**: View and manage contact requests with status updates
- **Content Management**: Toggle publish status for case studies and blog posts
- **Statistics**: Quick overview of key metrics

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx       # Navigation header with dropdown menus
│   ├── Footer.tsx       # Site footer with links
│   └── ProtectedRoute.tsx # Authentication guard for admin routes
├── contexts/
│   └── AuthContext.tsx  # Authentication state management
├── lib/
│   └── supabase.ts      # Supabase client configuration
├── pages/
│   ├── Home.tsx         # Homepage with hero, services, portfolio preview
│   ├── About.tsx        # About page with team and values
│   ├── Services.tsx     # Services overview
│   ├── services/        # Individual service pages
│   │   ├── SEOService.tsx
│   │   ├── AIService.tsx
│   │   ├── WebService.tsx
│   │   ├── DataService.tsx
│   │   └── DevService.tsx
│   ├── Portfolio.tsx    # Case studies gallery
│   ├── Blog.tsx         # Blog listing
│   ├── BlogPost.tsx     # Individual blog post
│   ├── Contact.tsx      # Contact form
│   ├── Login.tsx        # Admin login
│   └── Admin.tsx        # Admin dashboard
└── App.tsx              # Main app with routing

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Icons**: Lucide React
- **Deployment Ready**: Production build optimized

## Database Schema

### contact_requests
- id (uuid)
- name (text)
- email (text)
- message (text)
- status (enum: 'new', 'in_progress', 'completed')
- created_at (timestamp)

### case_studies
- id (uuid)
- title (text)
- description (text)
- tech_stack (text array)
- results (text)
- image_url (text)
- published (boolean)
- created_at (timestamp)

### blogs
- id (uuid)
- title (text)
- slug (text, unique)
- content (text)
- excerpt (text)
- author (text)
- published (boolean)
- created_at (timestamp)
- updated_at (timestamp)

## Sample Data

The database comes pre-populated with:
- 4 case studies showcasing different services
- 3 blog posts covering AI, SEO, and web development topics

## Routes

- `/` - Home
- `/about` - About Us
- `/services` - Services Overview
- `/services/seo` - SEO Content Writing
- `/services/ai` - AI Services
- `/services/web` - Website Building
- `/services/data` - Data Analytics
- `/services/dev` - Software Development
- `/portfolio` - Portfolio & Case Studies
- `/blog` - Blog Listing
- `/blog/:slug` - Individual Blog Post
- `/contact` - Contact Page
- `/login` - Admin Login
- `/admin` - Admin Dashboard (Protected)

## Security Features

- Row Level Security (RLS) enabled on all tables
- Public can view published content
- Authentication required for admin operations
- Protected routes for admin dashboard
- Secure form submissions

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized images and assets

## Getting Started

The project is ready to run. The Supabase connection is already configured in the `.env` file.

To start development:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

## Admin Access

To access the admin dashboard:
1. Create a user account in Supabase Auth
2. Navigate to `/login`
3. Sign in with your credentials
4. Access the dashboard at `/admin`

## Customization

- **Colors**: Modify Tailwind config for brand colors
- **Content**: Update text and images in page components
- **Services**: Add/remove services by editing services array
- **Images**: All stock photos are from Pexels (free to use)

## Production Ready

The site is fully functional and ready for deployment with:
- Optimized production build
- SEO-friendly structure
- Fast loading times
- Clean, maintainable code
- TypeScript for type safety
