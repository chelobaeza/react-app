We are building a Single Page Application (SPA) for users to view physiotherapy video routines to purchase and view already purchased routines, sourced from a backend. The app must follow:

Use React, TypeScript, Vite, and React Router. Prioritize clean, maintainable code and modern UI/UX best practices.

- Use Tailwind CSS for styling.
- Use React Router v7 for navigation.
- Use TypeScript for type safety.
- Use Vite for fast development and build processes.
- Use React Query for data fetching and state management.
- Use React Hook Form for form handling.
- fetch and follow React Router docs from https://reactrouter.com/home.
- follow strict code quality and React router best practices.
- Style must be responsive to support large screens and mobile devices.

## Architecture

Follow a modular architecture with clear separation of concerns:
i.e.

app/
├── components/ # Reusable UI components (buttons, cards, etc.)
├── layouts/ # Route-based layout components (e.g. MainLayout, AuthLayout)
├── routes/ # Top-level route views
│ ├── home/
│ │ ├── home.tsx
│ ├── about/
│ ├── dashboard/
│ │ ├── dashboard.tsx
│ │ └── components/ # Dashboard-specific components

## Features

- User authentication (sign up, log in, log out).
- View available physiotherapy routines.
- Purchase routines.
- View purchased routines.
