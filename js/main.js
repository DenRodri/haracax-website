(() => {
  const config = window.HARACAX_CONFIG || {};
  const email = config.email || "info@haracax.com";
  const phone = config.phone || "+1 000 000 0000";
  const location = config.location || "Wyoming, USA";
  const subject = config.contactSubject || "Haracax website enquiry";
  const emailHref = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

  document.querySelectorAll("[data-contact-email]").forEach((el) => {
    el.href = emailHref;
    if (el.tagName !== "A" || !el.textContent.trim()) el.textContent = email;
    else if (el.closest(".footer-contact")) el.textContent = email;
  });
  document.querySelectorAll("[data-contact-phone]").forEach((el) => {
    el.href = phoneHref;
    el.textContent = phone;
  });
  document.querySelectorAll("[data-contact-location]").forEach((el) => {
    el.textContent = location;
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !expanded);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    }));
  }
})();
