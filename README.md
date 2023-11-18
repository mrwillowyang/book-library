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
├── app/                       # Nextjs 13 latest. Support async React component
│   ├── component/             # UI components
│   │   ├── Navbar.ts
│   │   └── ...
│   ├── pages/                 # Web pages
│   │   ├── _app.tsx           # html template
│   │   ├── index.tsx
│   │   ├── form.tsx
│   │   └── ...
│   ├── api/                   # Rest API routes
│   │   └── book/
│   ├── data/                  # Client side data
│   └── ...
└── ...                        # Config files
```
