# Cloudflare-API

A Linktree-style personal landing page that dynamically renders links and fetches movie data from the [OMDB API](https://www.omdbapi.com/). Originally built as a take-home assignment for Cloudflare.

## Features

- Animated gradient background
- Dynamic link rendering driven by a data file (`store.js`)
- Live movie data fetched from the OMDB API using the native `fetch()` API (no jQuery)
- Error handling for failed API requests
- Responsive layout with Bootstrap 4

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript (ES Modules)
- Bootstrap 4 (layout and responsive design)
- [OMDB API](https://www.omdbapi.com/) for external movie data

## Live Demo

> _Coming soon — deploy to [Cloudflare Pages](https://pages.cloudflare.com/) and add URL here_

## How It Works

1. User lands on the page and sees a profile card with a call-to-action button
2. Clicking the button renders the link list (sourced from `assets/store.js`) and fetches movie data from the OMDB API
3. Links open in a new tab; the movie table displays title, year, and cast

## Assignment

Based on the [Cloudflare 2020 General Engineering Assignment](https://github.com/cloudflare-hiring/cloudflare-2020-general-engineering-assignment/).
