(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var cards = document.querySelectorAll(".strength-card[data-reveal]");
  if (!cards.length) return;

  document.documentElement.classList.add("js-enhanced");

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealAll() {
    cards.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (prefersReduced) {
    revealAll();
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();
