# SmartServeAI - AI Automation Agency Website

## Overview

SmartServeAI is a modern, responsive website for an AI automation agency targeting South African businesses. The platform showcases premium AI solutions including advanced automation bots, WhatsApp integrations, and custom AI workflows. Built with a tech-inspired design featuring cool tones, gradients, and futuristic aesthetics, the site emphasizes professional service delivery and executive-level implementation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing with support for Home and Pricing pages
- **Styling**: Tailwind CSS with custom design system featuring premium color palette (navy, platinum, electric blue gradients)
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API structure with `/api` prefix routing
- **Middleware**: Custom logging middleware for request/response tracking
- **Error Handling**: Centralized error handling with status code management

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: PostgreSQL schema with user management structure
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Validation**: Zod integration for runtime type validation

### Component Architecture
- **Design System**: Modular component structure with consistent theming
- **Layout Components**: Navigation, Hero, Services, Process, Testimonials, Contact, Footer sections
- **UI Components**: Comprehensive set of reusable components (buttons, cards, forms, modals)
- **Responsive Design**: Mobile-first approach with glass morphism effects and premium animations

### Development Architecture
- **Monorepo Structure**: Shared schema and types between client and server
- **Path Aliases**: Configured TypeScript paths for clean imports (@/, @shared/)
- **Development Tools**: Hot module replacement with Vite, TypeScript checking
- **Code Organization**: Separation of concerns with dedicated folders for pages, components, hooks, and utilities

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of accessible UI primitives for advanced component functionality
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Class Variance Authority**: Type-safe variant management for component styling
- **Lucide React**: Modern icon library for consistent iconography

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database for scalable data storage
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect configuration
- **Drizzle Zod**: Runtime validation integration for database schemas

### Development and Build
- **Vite**: Frontend build tool with React plugin and development server
- **TypeScript**: Static type checking across the entire codebase
- **ESBuild**: Fast bundling for production server builds

### Forms and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for external validation libraries
- **Zod**: Runtime type validation and schema definition

### External Services
- **Calendly Integration**: Booking system for consultation scheduling (smartservesa1/30min)
- **WhatsApp Business**: Direct messaging integration (+27 82 333 3775)
- **Email Contact**: Business communication (smartservesa1@gmail.com)
- **Unsplash Images**: Professional stock photography for visual content
- **Google Fonts**: Inter font family for modern typography
- **Font Awesome**: Icon library for enhanced visual elements

### Replit-Specific
- **Replit Vite Plugins**: Runtime error overlay and cartographer for development environment
- **Development Banner**: Replit development environment integration