console.log('include.js loaded');
// assets/js/include.js
async function inject(selector, url) {
  const mount = document.querySelector(selector);
  if (!mount) return;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    mount.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

// Load header into any element with data-include="header"
inject('[data-include="header"]', './partials/header.html');