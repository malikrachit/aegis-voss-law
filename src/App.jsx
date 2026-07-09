import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-ivory selection:bg-gold selection:text-ink">
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
