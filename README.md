# TechTinder App

This repository showcases a React application built with Vite, Tailwind CSS, DaisyUI, and Redux Toolkit, featuring authentication, routing, and advanced state management. Below are the steps followed in creating and configuring this project.

Features

Setup: Created a Vite + React project and removed unnecessary code.

Styling: Installed and configured Tailwind CSS and DaisyUI for a modern and responsive UI.

Routing: Implemented react-router-dom for client-side routing.

State Management: Integrated Redux Toolkit for global state management and installed Redux DevTools for debugging.

Authentication:

Login and Signup functionality with API calls using Axios.

Handled CORS in the backend with proper middleware configurations.

Token-based authentication to restrict access to certain routes.

Implemented a logout feature.

Feed: Fetched user feed data and displayed user cards.

Connections Management:

View all connections.

View all connection requests.

Accept/Reject connection requests.

Send/Ignore requests directly from the feed.

Profile Management:

Edit profile feature.

Display toast notifications on successful updates.

Testing: Added End-to-End (E2E) testing to ensure a seamless user experience.

Installation

Follow these steps to set up the project locally:

Clone the repository:

git clone https://github.com/your-username/your-repo.git
cd your-repo

Install dependencies:

npm install

Start the development server:

npm run dev

Configuration

Tailwind CSS

Installed Tailwind CSS using Vite configuration and customized it to fit the project's needs.

Added DaisyUI for ready-to-use UI components.

Routing

Installed react-router-dom for routing.

Configured a BrowserRouter with nested routes.

Added an Outlet in the Body component for child route rendering.

Authentication

Installed axios for API calls.

Configured CORS in the backend with middleware settings:

app.use(cors({
origin: 'http://your-frontend-url',
credentials: true
}));

Ensured all API calls include credentials:

axios.defaults.withCredentials = true;

State Management

Installed Redux Toolkit and react-redux.

Configured a Redux store using configureStore.

Integrated the store with Provider.

Created slices for managing state and added reducers to the store.

Verified state updates using Redux DevTo
