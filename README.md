# Restaurant Showcase & Ordering Portal

A comprehensive restaurant showcase and ordering portal built with Next.js, Radix UI, and shadcn/ui. This project provides a complete solution for restaurant management, online ordering, and customer engagement.

## 🚀 Features

### Customer Features

- **Menu Showcase**: Beautiful menu presentation with categories and filters
- **Online Ordering**: Seamless ordering experience with cart management
- **Order Tracking**: Real-time order status updates
- **User Accounts**: Customer profiles with order history
- **Loyalty Program**: Points system and rewards
- **Reviews & Ratings**: Customer feedback system

### Restaurant Management

- **Menu Management**: Easy menu item creation and management
- **Order Processing**: Kitchen display system and order management
- **Inventory Tracking**: Real-time inventory management
- **Staff Management**: Employee scheduling and performance tracking
- **Analytics Dashboard**: Sales reports and customer insights
- **Admin Portal**: Comprehensive administrative tools

## 🛠️ Technology Stack

### Frontend

- **Next.js 14**: Full-stack React framework with App Router
- **TypeScript**: Type-safe development
- **Radix UI**: Accessible, unstyled UI primitives (primary)
- **shadcn/ui**: Pre-built components built on Radix UI (secondary)
- **Tailwind CSS**: Utility-first CSS framework
- **Zustand**: Lightweight state management

### Backend

- **Next.js API Routes**: Server-side API endpoints
- **Prisma ORM**: Type-safe database client and migrations
- **PostgreSQL**: Relational database
- **NextAuth.js**: Authentication and authorization
- **Zod**: Schema validation and type inference

### DevOps

- **Vercel**: Deployment and hosting platform
- **Docker**: Containerization for development
- **GitHub Actions**: CI/CD pipeline
- **PostgreSQL**: Cloud database (Vercel Postgres or Supabase)
- **Redis**: Caching and session storage
- **Cloudinary**: Image and media storage

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── (auth)/         # Authentication routes
│   ├── (dashboard)/    # Admin dashboard routes
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
│   ├── ui/            # Radix UI and shadcn/ui components
│   ├── common/        # Shared components
│   ├── layout/        # Layout components
│   └── features/      # Feature-specific components
├── lib/               # Utility libraries
│   ├── utils.ts       # Utility functions
│   ├── auth.ts        # Authentication utilities
│   └── db.ts          # Database utilities
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── styles/            # Component styles and themes
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd restaurant-showcase-ordering-portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/restaurant_db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   STRIPE_SECRET_KEY="your-stripe-secret"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push database schema
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run end-to-end tests

## 🗄️ Database Schema

The project uses Prisma with PostgreSQL and includes the following main entities:

- **Users**: Customer and staff accounts
- **Menu Items**: Restaurant menu with categories and options
- **Orders**: Customer orders with status tracking
- **Kitchen Orders**: Kitchen management system
- **Customer Profiles**: Customer preferences and loyalty
- **Staff**: Employee management
- **Inventory**: Ingredient and stock management

## 🔐 Authentication

The project uses NextAuth.js with the following features:

- Email/password authentication
- Role-based access control (Admin, Staff, Customer)
- JWT session management
- Protected routes and API endpoints

## 🎨 UI Components

The project uses a combination of:

- **Radix UI**: For accessible, unstyled primitives
- **shadcn/ui**: For pre-built, styled components
- **Custom Components**: For restaurant-specific functionality

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop computers
- Tablets
- Mobile phones
- Touch interfaces

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the cursor rules in the `/.cursor` folder

## 🗺️ Roadmap

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with delivery services
- [ ] Multi-location support
- [ ] Advanced loyalty program features
- [ ] Real-time notifications
- [ ] Payment gateway integration
- [ ] Customer feedback system enhancements

---

Built with ❤️ using Next.js, Radix UI, and shadcn/ui
