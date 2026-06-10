// gatsby-plugin-web-font-loader is pull fonts as well
import "@fontsource-variable/josefin-sans";

// TODO: can i pull just the quotemark
import "@fontsource/biz-udpmincho/400.css" // TODO: 400 or 500 ? Weight 500 with all styles included.

import "./src/styles/app.css";

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
  window.requestAnimationFrame(syncDocumentTitleFromHead);
};

export const onRouteUpdate = () => {
  window.requestAnimationFrame(syncDocumentTitleFromHead);
};
