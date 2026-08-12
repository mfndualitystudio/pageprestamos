(function () {
  "use strict";

  // --- Config: único número de WhatsApp utilizado en toda la página ---
  var WHATSAPP_NUMBER = "5493644838342";
  var WHATSAPP_MESSAGE = "Hola Nestor, quiero consultar por un crédito personal. Te envío mi recibo de sueldo para que puedas asesorarme.";
  var WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

  // Enhance every WhatsApp link with the prefilled message.
  document.querySelectorAll("[data-whatsapp-link]").forEach(function (el) {
    el.setAttribute("href", WHATSAPP_URL);
  });

  // Subtle scroll-reveal for benefit cards.
  var cards = document.querySelectorAll(".benefit-card");
  if ("IntersectionObserver" in window && cards.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(function (card) { observer.observe(card); });
  } else {
    cards.forEach(function (card) { card.classList.add("is-visible"); });
  }
})();
