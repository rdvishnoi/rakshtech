# Raksh Tech - Website

This is a React + Vite + TypeScript website. To run and edit it on your own computer in VS Code, follow the steps below.

## What you need first

1. **Node.js** (version 18 or newer) - download it from https://nodejs.org and install it. This also installs `npm`, which is used to download the project's libraries.
2. **Visual Studio Code** - download it from https://code.visualstudio.com

## How to open and run the project

1. Download / copy this project folder to your computer.
2. Open the folder in VS Code (File > Open Folder).
3. Open the Terminal in VS Code (Terminal > New Terminal) and run:

```bash
npm install
```

   This downloads all the libraries the project needs (the list is already in `package.json` - this file plays the same role a `requirements.txt` plays for Python projects).

4. Start the website locally:

```bash
npm run dev
```

   Then open the local address shown in the terminal (usually http://localhost:5173) in your browser.

## Other useful commands

| Command         | What it does                                |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Runs the site locally while you edit        |
| `npm run build` | Creates a production-ready version (dist/)  |
| `npm run preview` | Previews the production build             |
| `npm run lint`  | Checks the code for problems                |

## Important notes

- The contact form saves inquiries to a Supabase database. For that to work on your computer, create a `.env` file in the project root with these two lines (ask the project owner for the values, they are in the hosted environment):

```
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

- Recommended VS Code extensions: **ESLint** and **Prettier** for code help while editing.
- Main files to look at:
  - `index.html` - page title, SEO tags
  - `src/config/business.ts` - phone, address, rating, links
  - `src/data/content.ts` - services, products, FAQs, menu
  - `src/components/sections/` - each visible section of the page
