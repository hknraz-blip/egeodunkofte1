import { createRoot } from "react-dom/client";
import { APP_LOGO, APP_TITLE } from "./const";
import App from "./App";
import "./index.css";

const injectAnalytics = () => {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!endpoint || !websiteId) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = `${endpoint.replace(/\/$/, "")}/umami`;
  script.dataset.websiteId = websiteId;

  document.head.appendChild(script);
};

const applyBranding = () => {
  if (typeof document === "undefined") return;

  const title = APP_TITLE?.trim() || "Ege Odun Köfte 1969";
  const icon = APP_LOGO?.trim() || "/logo.svg";

  if (title && document.title !== title) {
    document.title = title;
  }

  const ensureIcon = (rel: string) => {
    const existing = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);

    if (existing) {
      existing.href = icon;
      return;
    }

    const link = document.createElement("link");
    link.rel = rel;
    link.href = icon;
    document.head.appendChild(link);
  };

  ensureIcon("icon");
  ensureIcon("apple-touch-icon");
};

injectAnalytics();
applyBranding();

createRoot(document.getElementById("root")!).render(<App />);
