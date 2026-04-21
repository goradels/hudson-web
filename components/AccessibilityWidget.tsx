"use client";

import Script from "next/script";

export default function AccessibilityWidget() {
  function applyTheme() {
    const widget = document.querySelector<HTMLElement>(".asw-widget");
    const menu = document.querySelector<HTMLElement>(".asw-menu");
    // Override the widget's --asw-primary CSS variable inline so it beats
    // the adoptedStyleSheet declaration (#0848ca → Hudson gold)
    const gold = "#b8903a";
    if (widget) widget.style.setProperty("--asw-primary", gold);
    if (menu) menu.style.setProperty("--asw-primary", gold);

    // Also recolour the trigger button directly — it uses a hardcoded gradient
    const btn = document.querySelector<HTMLElement>(".asw-menu-btn");
    if (btn) {
      btn.style.background =
        "linear-gradient(135deg, #b8903a 0%, #8a6820 100%)";
      btn.style.outline = "5px solid #8a6820";
      btn.style.boxShadow =
        "0 5px 15px rgba(184,144,58,0.35), 0 2px 4px rgba(138,104,32,0.25)";
    }

    // Watch for the slide-in menu panel (rendered on first open)
    const observer = new MutationObserver(() => {
      const m = document.querySelector<HTMLElement>(".asw-menu");
      if (m) {
        m.style.setProperty("--asw-primary", gold);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js"
      strategy="lazyOnload"
      onLoad={applyTheme}
    />
  );
}
