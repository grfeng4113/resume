// Main site interactions
document.addEventListener("DOMContentLoaded", function () {
    // Mobile navigation toggle
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // Theme toggle (light / dark)
    const themeToggleBtn = document.querySelector(".theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("cg-theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark-theme");
            const mode = body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("cg-theme", mode);
        });
    }

    // Smooth scroll for internal links (href starts with "#")
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });

                // Close mobile nav after click
                if (nav && nav.classList.contains("open")) {
                    nav.classList.remove("open");
                }
            }
        });
    });
});
