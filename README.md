#  Next.js Project Setup and Basics.

This project is a simple web application built with Next.js, using TypeScript, Tailwind CSS, and various reusable components. The application demonstrates basic routing, dynamic data fetching, and component reusability.

## Features

- **Basic Routing**: Navigation between pages like Home, About, Posts, and Users.
- **Reusable Components**: Components such as `PostCard`, `UserCard`, `Button`, and `Header` are built and reused across multiple pages.
- **Dynamic Data Fetching**: The app fetches data from external APIs (JSONPlaceholder) to display posts and user details.
- **Tailwind CSS**: The app is styled using Tailwind CSS for a fast and flexible design.

## Pages

- **Home Page** (`/home`): Displays a welcome message.
- **About Page** (`/about`): Displays information about the application.
- **Posts Page** (`/posts`): Fetches and displays a list of posts from the JSONPlaceholder API using the `PostCard` component.
- **Users Page** (`/users`): Fetches and displays a list of users from the JSONPlaceholder API using the `UserCard` component.

## Project Structure

```bash
├── components
│   ├── common
│   │   ├── Button.tsx          # Reusable Button component
│   │   ├── Card.tsx            # Reusable Card component
│   │   ├── PostCard.tsx        # Reusable PostCard component
│   │   ├── UserCard.tsx        # Reusable UserCard component
│   └── layout
│       ├── Header.tsx          # Header component with navigation
├── interfaces
│   └── index.ts                # TypeScript interfaces for props
├── pages
│   ├── about.tsx               # About page
│   ├── home.tsx                # Home page
│   ├── posts.tsx               # Posts page with dynamic data
│   ├── users.tsx               # Users page with dynamic data
│   └── _app.tsx                # Main app component
├── public
│   └── assets                  # Public static assets (images, etc.)
├── styles
│   ├── globals.css             # Global styles
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # NPM dependencies and scripts
```

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
```bash
git clone https://github.com/LimitlexTechnology/alx-project-0x02-setup.git
cd alx-project-0x02-setup
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

3. **Open the app in your browser**:
```bash
Go to http://localhost:5500 in your browser.  
```

## Tools & Libraries Used

- **Next.js**: React framework for server-side rendering, routing, and static site generation.
- **TypeScript**: A superset of JavaScript for static type checking.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **JSONPlaceholder**: A free fake API used to fetch posts and user data.

## License

This project is open-source and available under the MIT License.
