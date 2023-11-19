# Book Library App

## How to run

First, run the development server:

```bash
npm start
```

To build the application for production usage

```
npm run build
```

To run all tests for the project

```
npm run test
```

## HTML semantic

This App is structured with semantic HTML elements to improve accessibility and SEO.

## Use Tailwind CSS

### Pros

1. Faster development cycles
2. Easy to reuse existing classes
3. Less custom CSS
4. Easy to create responsive designs
5. Unused CSS can be strip out with PurgeCSS resulting in smaller bundle sizes

### Cons

1. Steep learning curve
2. Long CSS class name, making it less readable

## Directory & file layout

```
book-library/
├── public/                    # Static files
│   ├── favicon.ico            # Favicon
│   └── images/                # Images assets
├── app/                       # Nextjs 13 feature. Supports async React component
│   ├── component/             # UI components
│   │   ├── Navbar.ts
│   │   └── ...
│   ├── form/
│   │   ├── form.tsx           # The form page. Nextjs 13 app base routing
│   │   └── ...
│   ├── api/                   # Rest API routes
│   │   └── book/
│   ├── data/                  # Client side data
│   ├── page.tsx               # Index page of the app
│   ├── global.css             # Global CSS file
│   ├── layout.tsx             # Html template
│   └── ...
└── ...                        # Config files
```

## Book metadata

All book metadata including title, author, description and cover image are generated by ChatGPT.

## Data fetching

This application leverages the fetchData function for early data retrieval, initiating the fetch process prior to the start of rendering. On the client side, this function is utilised within an async React component. This async component in React is capable of pausing the rendering of UI components, allowing it to await the completion of the data fetching process. This capability represents a new feature introduced in Next.js 13.

Within it's parent component, the React Suspense is used to prevent the async component from blocking the UI's responsiveness. Instead, it displays a fallback loading component during data fetching. This strategy significantly enhances the UI's loading speed, ensuring a smoother and more efficient user experience and improves the First Contentful Paint (FCP) as well as the Time to Interactive (TTI) metric.

# Database

Use SQLite as a in memory SQL db to serve the backend API. The downside of this solution is the data get lost when the server stops running.

An alternative solution is using a stand alone SQL DB like Postgres.

To improve the read performance, we can replicate the db and use a load balancer to distributes the traffic evenly. Adding a cache layer (such as Redis) to cache the popular data can further optimise the read performance.

To improve the write performance, we can add a message queue like Kafka to avoid loading the DB.

## ToDo

- Use a in memory db
- Build the CRUD API for books
- Build the admin page to manage books
- Build a read more button on the book description section

## Future Improvement

- Add storybook
- Implement design library
