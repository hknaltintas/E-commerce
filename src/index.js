import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

//context
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";

import reportWebVitals from "./reportWebVitals";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthProvider>
          <BasketProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </BasketProvider>
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
