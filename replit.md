# Workplace Korean Translator App

## Overview

This is a full-stack web application called "속뜻 번역기 – 회사편" (Workplace Hidden Meaning Translator). It's a humorous Korean language application that translates common workplace phrases to reveal their hidden meanings. The app categorizes workplace communication into different types (boss statements, casual remarks, work-related comments, and ambiguous statements) and provides funny "real meaning" translations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Theme**: Dark/light mode support with custom CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Data Storage Solutions
- **Database**: PostgreSQL with Neon Database (serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle migrations in `./migrations` directory
- **Development Storage**: In-memory storage implementation for development/testing

### Authentication and Authorization
- Basic user schema defined with username/password fields
- Session management configured with connect-pg-simple for PostgreSQL sessions
- Zod schema validation for user input

## Key Components

### Frontend Components
1. **CategoryTabs**: Allows users to select different workplace communication categories
2. **TranslationInput**: Text input with character limits and random phrase generation
3. **TranslationResult**: Displays translated results with sharing functionality
4. **SamplePhrases**: Shows example phrases for each category
5. **ThemeProvider**: Manages light/dark theme switching

### Translation System
- **Categories**: Boss statements, casual remarks, work comments, ambiguous statements
- **Sample Phrases**: Pre-defined examples for each category
- **Translation Logic**: Hardcoded funny translations for workplace phrases
- **Fallback**: Generic responses for unmatched phrases

### UI System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels and semantic HTML structure

## Data Flow

1. **User Input**: User selects category and enters workplace phrase
2. **Translation**: Frontend matches input against predefined translations
3. **Result Display**: Translated "hidden meaning" is displayed with category context
4. **Persistence**: Last translation saved to localStorage
5. **Sharing**: Native Web Share API with clipboard fallback

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with drizzle-zod for schema validation
- **UI**: Extensive Radix UI component set for accessible primitives
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **State**: @tanstack/react-query for server state management

### Development Dependencies
- **Build**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full TypeScript support across client/server/shared
- **Development Tools**: Replit-specific plugins for cartographer and error handling

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: tsx runs server with hot reload via Vite middleware
- **Production**: Node.js serves bundled server with static file serving
- **Database**: Environment variable `DATABASE_URL` required for PostgreSQL connection

### File Structure
```
├── client/          # React frontend
├── server/          # Express backend  
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migrations
└── dist/           # Production build output
```

## Changelog
- August 15, 2025. Complete Firebase migration ready for production deployment
  - Added comprehensive Firebase configuration (hosting, functions, Firestore)
  - Implemented SEO optimization with meta tags, structured data, and sitemaps
  - Created PWA manifest for mobile app experience
  - Configured Google AdSense monetization infrastructure
  - Added comprehensive deployment guide and automation scripts
- June 28, 2025. Initial setup
- February 2, 2025. Added home button in header linking to https://kindtool.ai/

## Firebase Deployment Architecture

### Production Infrastructure
- **Hosting**: Firebase Hosting with global CDN
- **Backend**: Firebase Functions for serverless API
- **Database**: Firestore for user sessions and analytics
- **Authentication**: Firebase Auth for future user features

### SEO and Monetization
- **SEO**: Complete meta tags, Open Graph, structured data
- **PWA**: Manifest file for mobile app installation
- **AdSense**: Infrastructure ready for Google AdSense integration
- **Analytics**: Firebase Analytics integration points prepared

### Deployment Process
- Automated via `./deploy.sh` script
- Build configuration: `vite.firebase.config.ts`
- Functions source: `functions/src/index.ts`
- Hosting config: `firebase.json`

## User Preferences

Preferred communication style: Simple, everyday language.