# Widget Template for acm-widgets

This is a template to build a widget for the [ACM Widgets](https://github.com/me-julian/acm-widgets) challenge conducted at [Austin Code Mentorship](https://www.meetup.com/austin-code-mentorship/).

It's intended as a simple coding exercise for two or more people to work on together and finish in a short period of time.

## Prerequisites

-   Git
-   Node.js/NPM
-   [An NPM Account](#publishing-to-npm) (Optional)

## Getting Started

This project is built so all widgets can be built independently, published to NPM, and imported into the main repo/site with minimal changes.

This is all handled by the project setup for you, but pay attention to the instructions for where and what changes you should make when building your widget.

> Also be mindful of what you check into source control and publish to NPM. Don't hardcode personal information, tokens, or any other sensitive data.

A basic [Prettier](https://prettier.io/) auto-formatting config is provided (`/.prettierrc`). It may be best not to use it unless everyone working on your widget does. Enabling format on save is recommended.

1. Clone this template repository.

Click the green "Use this template" button in the top-right of the repo's Github page and create your own repo.

If you have any collaborators make sure you go to your repo's Settings > Collaborators > Add people and invite them so they can make changes.

2. If you want your widget to be imported into the main site for demonstration, follow the instructions in [Publishing to NPM](#publishing-to-npm).

3. Run `npm install`

4. Run `npm run dev:backend` and `npm run dev:frontend` in separate terminals to start the dev servers.

5. Open `localhost:5173` to view the site.

6. Edit files in `/frontend/src/widget` to work on the frontend and add API route handlers in `/backend/router.js` on the backend.

More details [below](#tech-stack-details).

## Important Project Structure

Files/directories wrapped in \*\* \*\* are safe to edit.

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

The frontend is written using vanilla ReactJS using Vite. There is a copy of the site for testing, but you will build your widget in the `/frontend/src/widget` folder. A basic example component is provided.

Don't rename the Widget component and make sure everything you make or change is within that component.

When making calls to the backend, use the provided global variable to get the correct URL, as seen in the example widget code. Example:

```js
const response = await fetch(`${__API_URL__}/users/1`, options);
```

This will get replaced with the correct string by Vite automatically.

#### Styling

The project uses standard CSS. The provided styling is written using the [Block Element Modifier](https://getbem.com/) method, but this method is specifically made to be modular so you should be able to change and add styles however you like without much worry.

### Backend

-   [Express.js](https://expressjs.com/)
-   [SQLite3](https://github.com/TryGhost/node-sqlite3/wiki)

The backend is comprised of an Express.js REST API server and an in-memory SQLite database.

`api.js` and `db.js` are mostly mirrors of those in the main repository. You shouldn't make any changes here.

Instead, add all of your REST endpoint handlers in `router.js`. An example POST endpoint is already provided.

## Publishing to NPM

Publishing to NPM will allow us to show all of the widgets together on the same page, even during development! It should only take a few simple steps.

1. Create/log in to your [NPM account](https://www.npmjs.com/)

> **Only do this on a trusted machine.** This will authenticate your local NPM install to act as this user.

Run `npm adduser`, which should prompt you to log in/sign up via your browser.

2. Have Julian invite your account to the @acm-widgets organization

3. Initialize your package

In the root of the project, run `node init.js` and pick a unique, all lowercase, alphabetic widget name. This will automatically replace the name throughout the project and prepare the package for publishing.

4. Publish the package

Run `npm publish --access public`, and your local code will be published to NPM! Now the package can be imported into the main repo.
