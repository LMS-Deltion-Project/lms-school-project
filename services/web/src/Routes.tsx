import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fourofour from "./pages/404";
import App from "./App";
import Index from "./pages/home/index";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Fourofour />} />
        </Routes>
      </BrowserRouter>
    );
}