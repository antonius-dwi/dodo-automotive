document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");

    const navLinks = mainNav?.querySelectorAll("a");


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (navToggle && mainNav) {

        navToggle.addEventListener("click", () => {

            const isOpen =
                mainNav.classList.toggle("is-open");

            navToggle.classList.toggle(
                "is-open",
                isOpen
            );

            navToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            navToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

            document.body.classList.toggle(
                "nav-open",
                isOpen
            );

        });


        navLinks?.forEach((link) => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("is-open");

                navToggle.classList.remove("is-open");

                navToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                navToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                document.body.classList.remove(
                    "nav-open"
                );

            });

        });

    }

});

const d9ExperienceSlider = document.querySelector(".d9-experience-features");
const d9ExperienceSlides = document.querySelectorAll(".d9-experience-feature");
const d9ExperienceDots = document.querySelectorAll(".d9-experience-dot");

if (
    d9ExperienceSlider &&
    d9ExperienceSlides.length &&
    d9ExperienceDots.length
) {
    const updateD9ExperienceIndicator = () => {
        const slideWidth = d9ExperienceSlider.clientWidth;

        const activeIndex = Math.round(
            d9ExperienceSlider.scrollLeft / slideWidth
        );

        d9ExperienceDots.forEach((dot, index) => {
            const isActive = index === activeIndex;

            dot.classList.toggle("is-active", isActive);

            if (isActive) {
                dot.setAttribute("aria-current", "true");
            } else {
                dot.removeAttribute("aria-current");
            }
        });
    };


    d9ExperienceSlider.addEventListener(
        "scroll",
        updateD9ExperienceIndicator,
        { passive: true }
    );


    d9ExperienceDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            d9ExperienceSlider.scrollTo({
                left:
                    d9ExperienceSlider.clientWidth * index,
                behavior: "smooth"
            });
        });
    });


    updateD9ExperienceIndicator();
}