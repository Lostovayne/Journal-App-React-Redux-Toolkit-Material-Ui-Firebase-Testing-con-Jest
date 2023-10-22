import React from "react";
import ReactDOM from "react-dom/client";
import { JournalApp } from "./JournalApp.jsx";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <JournalApp />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
