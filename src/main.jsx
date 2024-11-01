import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./Components/Common/Routes";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </StrictMode>
);
