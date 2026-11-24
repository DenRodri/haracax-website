(function () {
  const config = window.HARACAX_CONFIG || {};
  const email = config.email || "REPLACE_WITH_YOUR_BUSINESS_EMAIL";
  const phone = config.phone || "REPLACE_WITH_YOUR_PHONE";
  const location = config.location || "Wyoming, USA";

  document.querySelectorAll("[data-email]").forEach(el => el.textContent = email);
  document.querySelectorAll("[data-email-link], [data-contact-link]").forEach(el => {
    el.href = email.includes("@") && !email.startsWith("REPLACE_")
      ? "mailto:" + email
      : "#contact";
  });
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = phone);
  document.querySelectorAll("[data-phone-link]").forEach(el => {
    el.href = phone.startsWith("REPLACE_") ? "#contact" : "tel:" + phone.replace(/[^\d+]/g, "");
  });
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = location);
  document.getElementById("year").textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }
})();
