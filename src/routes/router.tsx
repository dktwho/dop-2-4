import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {Error404} from "../components/pages/Error404";
import App from "../App";
import {Page} from "../components/pages/Page";
import {dataState} from "../dataState/dataState";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/page/:id",
                element: (
                    <Page pages={dataState.pages}/>
                ),
            },
            {
                path: "/protected",
                element: (
                    <ProtectedRoute>
                        <ProtectedPage />
                    </ProtectedRoute>

                ),
            },

        ],
    },
]);