# Sample Node Application

This repository contains a minimal Node-based backend with a React-based admin panel.
The admin panel now lives inside the `frontend/admin` folder as a regular React application.

## Running the Server

1. Build the admin panel:

```bash
cd frontend/admin
npm install
npm run build
```

2. Install backend dependencies:

```bash
cd ../../backend
npm install
```

3. Start the server:

```bash
npm start
```
4. Open `http://localhost:3000/admin` in your browser to view the React admin panel.

The admin panel is a React app whose production build is served from `frontend/admin/build`.
