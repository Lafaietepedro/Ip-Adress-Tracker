# IP Address Tracker App

Modern React + Vite application for IP and domain geolocation lookups.

## Features

- Search by IPv4, IPv6, or domain
- Detect the visitor's current public IP
- View geolocation details on an interactive map
- Inspect reverse domains and ASN metadata when available
- Re-run recent searches from the current session
- Friendly loading and error handling

## Setup

```bash
npm install
cp .env.example .env
```

Add your API key to `.env`:

```bash
VITE_IPIFY_API_KEY=your_api_key_here
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
