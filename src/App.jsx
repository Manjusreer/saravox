import { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AIChatbot from "./components/AIChatbot";
import CookieBanner from "./components/CookieBanner";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ToolsPage from "./pages/ToolsPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";

export default function SaravoxApp() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Home": return <HomePage setPage={setPage} />;
      case "About": return <AboutPage />;
      case "Services": return <ServicesPage setPage={setPage} />;
      case "Tools": return <ToolsPage />;
      case "Blog": return <BlogPage />;
      case "FAQ": return <FAQPage />;
      case "Contact": return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <NavBar activePage={page} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
      <WhatsAppButton />
      <AIChatbot />
      <CookieBanner />
    </>
  );
}
