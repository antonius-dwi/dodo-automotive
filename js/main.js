document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = mainNav?.querySelectorAll('a');

    /* =====================================================
       MOBILE DEVICE DETECTION
    ===================================================== */

    const isMobileDevice = window.matchMedia('(pointer: coarse)').matches;

    document.body.classList.toggle('is-mobile-device', isMobileDevice);

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('is-open');

            navToggle.classList.toggle('is-open', isOpen);

            navToggle.setAttribute('aria-expanded', String(isOpen));

            navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');

            document.body.classList.toggle('nav-open', isOpen);
        });

        navLinks?.forEach((link) => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-open');

                navToggle.classList.remove('is-open');

                navToggle.setAttribute('aria-expanded', 'false');

                navToggle.setAttribute('aria-label', 'Open navigation');

                document.body.classList.remove('nav-open');
            });
        });
    }

    /* =====================================================
       Z9 INTEREST FORM → WHATSAPP
    ===================================================== */

    const z9Form = document.querySelector('.denza-z9-form');

    if (z9Form) {
        z9Form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = z9Form.elements.name?.value.trim() || '';
            const whatsapp = z9Form.elements.whatsapp?.value.trim() || '';
            const email = z9Form.elements.email?.value.trim() || '';

            const message = [
                'Hi Dodo, I’m interested in the DENZA Z9.',
                '',
                `Name: ${name}`,
                `WhatsApp: ${whatsapp}`,
                email ? `Email: ${email}` : '',
                '',
                'I’d like to register my interest and receive more information about the Z9.',
            ]
                .filter(Boolean)
                .join('\n');

            const whatsappUrl = `https://wa.me/6288294745477?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
});

/* =====================================================
   D9 EXPERIENCE SLIDER
===================================================== */

const d9ExperienceSlider = document.querySelector('.d9-experience-features');
const d9ExperienceSlides = document.querySelectorAll('.d9-experience-feature');
const d9ExperienceDots = document.querySelectorAll('.d9-experience-dot');

if (d9ExperienceSlider && d9ExperienceSlides.length && d9ExperienceDots.length) {
    const updateD9ExperienceIndicator = () => {
        const slideWidth = d9ExperienceSlider.clientWidth;

        const activeIndex = Math.round(d9ExperienceSlider.scrollLeft / slideWidth);

        d9ExperienceDots.forEach((dot, index) => {
            const isActive = index === activeIndex;

            dot.classList.toggle('is-active', isActive);

            if (isActive) {
                dot.setAttribute('aria-current', 'true');
            } else {
                dot.removeAttribute('aria-current');
            }
        });
    };

    d9ExperienceSlider.addEventListener('scroll', updateD9ExperienceIndicator, { passive: true });

    d9ExperienceDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            d9ExperienceSlider.scrollTo({
                left: d9ExperienceSlider.clientWidth * index,
                behavior: 'smooth',
            });
        });
    });

    updateD9ExperienceIndicator();
}
