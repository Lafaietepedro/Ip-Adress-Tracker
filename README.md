# IP Address Tracker

A portfolio-ready IP geolocation dashboard built with React, Vite, Leaflet, and the IPify Geolocation API.

This project started as a Frontend Mentor challenge and was refactored into a more professional product-style experience. The goal of the refresh was to move beyond a challenge submission and turn it into something that communicates stronger frontend structure, better UX decisions, and cleaner presentation for junior full stack interviews.

## Highlights

- Modern dashboard-style UI with a stronger visual hierarchy
- IP and domain lookup with validation
- Reverse-domain and ASN context surfaced in the interface
- Loading, error, and empty states designed intentionally
- Session-based recent search history
- Componentized React structure with dedicated service and utility layers
- Responsive layout for mobile and desktop

## Tech Stack

- React 18
- Vite
- Axios
- Leaflet + React Leaflet
- CSS with custom design tokens and responsive layouts
- IPify Geolocation API

## Project Structure

The application lives inside [`ipadresstracker/`](./ipadresstracker).

```text
ipadresstracker/
├── public/
├── src/
│   ├── components/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── package.json
└── vite.config.js
```

## Running Locally

1. Go to the app folder:

   ```bash
   cd ipadresstracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your environment file:

   ```bash
   cp .env.example .env
   ```

4. Add your IPify key:

   ```bash
   VITE_IPIFY_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

## Why This Refactor Matters

For portfolio purposes, the refresh focused on the kind of decisions recruiters and hiring teams usually notice:

- clearer code organization
- more realistic UI states
- better content hierarchy
- more thoughtful responsive behavior
- documentation that reflects the actual project

## Notes

- The app uses live IPify data, so a valid API key is required for searches.
- The map uses Leaflet with a CARTO light basemap and proper attribution.
