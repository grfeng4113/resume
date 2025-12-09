// Main site interactions
document.addEventListener("DOMContentLoaded", function () {
    /* ========== Mobile navigation toggle ========== */
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    /* ========== Theme toggle (light / dark) ========== */
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

    /* ========== Smooth scroll for same-page anchors ========== */
    // 只对 href="#xxx" 的链接生效（比如 index 里如果有锚点）
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });

                // 关闭手机菜单
                if (nav && nav.classList.contains("open")) {
                    nav.classList.remove("open");
                }
            }
        });
    });

    /* ========== Contact form validation (Contact 页面) ========== */
    const contactForm = document.querySelector("#contact-form");
    const formMsg = document.querySelector("#form-message");

    if (contactForm && formMsg) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = contactForm.elements["name"].value.trim();
            const email = contactForm.elements["email"].value.trim();
            const message = contactForm.elements["message"].value.trim();

            // 简单前端验证
            if (!name || !email || !message) {
                formMsg.textContent = "Please fill in all required fields.";
                formMsg.style.color = "crimson";
                return;
            }

            // 很简单的 email 形态检查
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMsg.textContent = "Please enter a valid email address.";
                formMsg.style.color = "crimson";
                return;
            }

            // 通过验证：显示成功消息，重置表单
            formMsg.textContent = "Thank you! Your message has been recorded.";
            formMsg.style.color = "green";
            contactForm.reset();
        });
    }
});
