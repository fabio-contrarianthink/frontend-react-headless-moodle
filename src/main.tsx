import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import AppContent from "@/components/AppContent";
import Layout from "@/components/Layout";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Layout>
        <AppContent />
      </Layout>
    </Auth0Provider>
  </StrictMode>,
);
