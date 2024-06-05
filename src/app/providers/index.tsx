import React, { FC } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { queryClient } from "./query-client";
import { ErrorBoundaryProvider } from "./error-boundary";


export default function Providers(App: FC) {
    return (
        <ErrorBoundaryProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <QueryClientProvider client={queryClient}>
                        {<App />}
                        <ReactQueryDevtools initialIsOpen={false} />
                        <ToastContainer />
                    </QueryClientProvider>
                </BrowserRouter>
            </React.StrictMode>
        </ErrorBoundaryProvider>
    )
}