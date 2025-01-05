import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Default from "./pages/default/Default.tsx";
import Map from "./pages/map/Map.tsx";
import Manage from "./pages/manage/Manage.tsx";
import connectDB from './config/db.js'; // Import the database connection
import "./index.css";

console.log("Starting the application...");

console.log("connectDB is about to be called...");
connectDB(); // Call the database connection function
console.log("connectDB has been called successfully!");

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Default />
            },
        ],
    },
    {
        path: "/map",
        element: <App />,
        children: [
            {
                index: true,
                element: <Map />
            },
        ],
    },
    {
        path: "/manage",
        element: <App />,
        children: [
            {
                index: true,
                element: <Manage />
            },
        ],
    }
]);

const rootElement = document.getElementById("root");

if (rootElement) {
    console.log("Rendering the application...");
    createRoot(rootElement).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
} else {
    console.error("Root element not found");
}
