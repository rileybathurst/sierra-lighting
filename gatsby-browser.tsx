import "@fontsource-variable/josefin-sans";

// * as minimal as possible pull of the font
import "@fontsource/biz-udpmincho/latin-400.css";

import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

import "./src/styles/app.css";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const analyticsId = process.env.GATSBY_GA;

function loadGoogleAnalytics() {
  if (!analyticsId || window.gtag) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", analyticsId, {
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
  document.head.append(script);
}

function configureCookieConsent() {
  void CookieConsent.run({
    mode: "opt-in",
    cookie: {
      name: "sierra_cookie_consent",
      expiresAfterDays: 182,
    },
    guiOptions: {
      consentModal: {
        layout: "box wide",
        position: "bottom center",
        equalWeightButtons: true,
      },
      preferencesModal: {
        layout: "box",
        position: "right",
        equalWeightButtons: true,
      },
    },
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        autoClear: {
          cookies: [
            { name: /^_ga/ },
            { name: /^_gid/ },
          ],
        },
        services: {
          googleAnalytics: {
            label: "Google Analytics",
            onAccept: loadGoogleAnalytics,
          },
        },
      },
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "Cookie preferences",
            description: "We use essential services to make this site work and optional analytics services to understand how it is used.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject optional",
            showPreferencesBtn: "Manage preferences",
          },
          preferencesModal: {
            title: "Cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject optional",
            savePreferencesBtn: "Save preferences",
            sections: [
              {
                title: "Cookie usage",
                description: "You can choose which optional services Sierra Lighting may use. You can change your choice at any time.",
              },
              {
                title: "Essential services",
                description: "These services are required for the site to function and cannot be disabled. Netlify hosts this site and processes contact and enquiry forms. Sentry helps us detect and fix technical errors. Mux delivers project videos and processes playback, browser, device, and network information required to provide video.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics services",
                description: "Google Analytics measures visits and interactions.",
                linkedCategory: "analytics",
              },
            ],
          },
        },
      },
    },
  });

  window.addEventListener("sierra:show-cookie-preferences", () => {
    CookieConsent.showPreferences();
  });
}

function syncDocumentTitleFromHead() {
  // Gatsby can leave document.title stale if multiple head title nodes exist.
  const titles = Array.from(document.head.querySelectorAll("title"));
  const preferred = titles.find((title) => title.getAttribute("data-gatsby-head") === "true");
  const fallback = titles.find((title) => (title.textContent ?? "").trim().length > 0);
  const nextTitle = (preferred?.textContent ?? fallback?.textContent ?? "").trim();

  if (nextTitle && document.title !== nextTitle) {
    document.title = nextTitle;
  }
}

export const onInitialClientRender = () => {
  configureCookieConsent();
  window.requestAnimationFrame(syncDocumentTitleFromHead);
};

export const onRouteUpdate = () => {
  window.requestAnimationFrame(syncDocumentTitleFromHead);

  if (window.gtag && analyticsId) {
    window.gtag("config", analyticsId, {
      page_path: window.location.pathname + window.location.search,
    });
  }
};
