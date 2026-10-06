import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Index from "./pages/Index.tsx";
import DashboardPage from "./pages/dashboard/page.tsx";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter><Routes><Route path="/" element={<Index />} /><Route path="/dashboard" element={<DashboardPage />} /></Routes></BrowserRouter>
);
