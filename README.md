# acm-widgets

This is a template to build a widget for the [ACM Widgets](https://github.com/me-julian/acm-widgets) project, associated with [Austin Code Mentorship](https://www.meetup.com/austin-code-mentorship/). It's intended as a simple coding challenge for two or more people to work on together and finish in a short period of time.

## Getting Started

This repo is intended to be published as an NPM package and used in the main repo without changes to the overall site structure. As such, pay attention to the instructions for where and what changes you should make when building your widget [below](#tech-stack-details).

First, if building in parallel with another developer, it's recommended that you both setup [Prettier](https://prettier.io/) with auto-formatting on save. A basic config is already provided if you already have that set up.

If one of you doesn't want to use auto-formatting, it may be best if you delete the config and don't use it at all.

Open two terminals in the project root and run `npm run dev:backend` and `npm run dev:frontend` in order to start the Express and Vite dev servers.

## Important Project Structure

```bash
├── backend
│ ├── api.js
│ ├── db.js
│ ├── **router.js** # All of your API endpoints go here
├── frontend
│ ├── src
│ ├───── **widget** # All of your frontend code goes here
│ │ │ ├── Widget.jsx
│ │ │ ├── widget.css
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── main.jsx
│ ├── index.html
├── .prettierrc # Auto-formatting, recommended if everyone uses it.
├── config.js # Shared frontend & backend config
├── index.js # Exports your code when publishing on NPM
├── package.json
└── vite.config.js
```

## Tech Stack Details

### Frontend

-   [ReactJS](https://react.dev/)
-   [Vite](https://vitejs.dev/)

The frontend is written using vanilla ReactJS and Vite. There is a copy of the site for testing, but your widget will be developed in the `/frontend/src/widget` folder. A basic example component is provided.

Don't rename the Widget component and make sure everything you make or change is within that component.

When making calls to the backend, use the provided global variable to get the correct URL, as seen in the example widget code. Example:

```js
const response = fetch(`${__API_URL__}/users/1`, options);
```

This will get replaced by Vite automatically.

Run `npm run dev:frontend` in the root directory to start the Vite dev server. You will also need another terminal running `npm run dev:backend` in order to reach the API.

#### Styling

The project uses standard CSS. The provided styling is written using the [Block Element Modifier](https://getbem.com/) method, but this method is specifically made to be modular so you should be able to change and add styles however you like without much worry.

### Backend

-   [Express.js](https://expressjs.com/)
-   [SQLite3](https://github.com/TryGhost/node-sqlite3/wiki)

The backend is comprised of an Express.js REST API server and an in-memory SQLite database.

`api.js` and `db.js` are mirrors of those in the main repository. Please don't change them as you might break something.

Instead, add all of your REST endpoint handlers in `router.js`. An example POST endpoint is already provided.

Run `npm run dev:backend` in the root directory to start the Vite dev server.
