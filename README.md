# Where Is Brian?
![Logo](public/logo.svg) \
This repository contains the source code for the [Where Is Brian?](https://whereisbrian.org) website. \
It is built using [Astro](https://astro.build) and [Firebase](https://firebase.google.com).
## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                                                             |
| `npm start`            | Basic dev server (without emulators)                                              |
| `npm run dev`          | Starts local dev server with firebase and cms emulator at `localhost:3000`        |
| `npm run build`        | Build the production site to `./dist/`                                            |
| `npm run preview`      | Build the preview site to `./dist/`(the cms is not rebuilt)                       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`                                  |
| `npm run astro --help` | Get help using the Astro CLI                                                      |

## 👀 Want to learn more?

Feel free to check [our website](https://whereisbrian.org).
