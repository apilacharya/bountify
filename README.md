# BountiFy - Ticket Bounty Platform

BountiFy is a modern web application built with Next.js and Prisma that allows users to create, manage, and track bounty tickets. It provides a platform for users to post tasks with bounties and track their progress.

## Features

- 🔐 **Authentication System**

  - Secure user authentication with Lucia
  - Protected routes for authenticated users
  - User profile management

- 🎫 **Ticket Management**

  - Create and manage bounty tickets
  - Set deadlines and bounty amounts
  - Track ticket status (Open, In Progress, Done)
  - Search functionality for tickets

- 💰 **Bounty System**

  - Set bounty amounts for tickets
  - Track bounty status
  - Currency handling in cents for precise amounts

- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark/Light theme support
  - Smooth animations and transitions
  - Intuitive navigation with breadcrumbs

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Lucia
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide Icons
- **Form Handling**: React Server Actions
- **State Management**: React Hooks
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bountify.git
cd bountify
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Fill in the required environment variables in `.env`

4. Set up the database:

```bash
pnpm prisma generate
pnpm prisma db push
```

5. Run the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # Reusable UI components
├── features/             # Feature-based modules
│   ├── auth/            # Authentication related code
│   └── ticket/          # Ticket management
├── lib/                 # Utility libraries and configurations
└── utils/              # Helper functions
```

## Key Features Implementation

### Authentication

- Server-side authentication with Lucia
- Protected routes using middleware
- Session management with cookies

### Ticket System

- CRUD operations for tickets
- Status management (Open, In Progress, Done)
- Search functionality with debouncing
- Bounty amount handling

### UI/UX

- Responsive sidebar navigation
- Theme switching (dark/light mode)
- Loading states and error handling
- Form validation and error messages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Radix UI for accessible components
- All contributors and users of the project
