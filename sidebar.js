document.addEventListener('DOMContentLoaded', () => {
    // Content Fade-in Animation (Controlled by scroll and reveal logic)
    const contentSections = document.querySelectorAll('.content-section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    const observerCallback = (entries, obs) => {
        const isContentPermanentlyVisible = document.body.classList.contains('content-revealed-by-logo');
        entries.forEach(entry => {
            if (entry.isIntersecting && !isContentPermanentlyVisible) {
                entry.target.classList.add('visible');
                 // Optional: Unobserve after animation if you don't need re-animation on scroll up/down
                 // obs.unobserve(entry.target);
            }
        });
    };

    let intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Initialize observer
    function initializeScrollObserver() {
        contentSections.forEach(section => {
            intersectionObserver.observe(section);
        });
    }

    // Disconnect observer
    function disconnectScrollObserver() {
        if (intersectionObserver) {
            intersectionObserver.disconnect();
        }
    }

    // Smooth Scroll & Active Nav Link
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = targetId === '#hero' ? 0 : 0; // No offset for fixed nav
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const toggleLogo = document.querySelector('.hero-logo'); // Use the logo in the hero section for toggle
    const mainNav = document.getElementById('mainNav');
    const pageContentWrapper = document.querySelector('.page-content-wrapper');
    let isContentPermanentlyVisible = false; // State variable for logo toggle

    if (toggleLogo && mainNav && pageContentWrapper) {
        toggleLogo.style.cursor = 'pointer'; // Indicate it's clickable
        toggleLogo.addEventListener('click', () => {
            // Disable logo toggle on mobile sizes (assuming breakpoint at 768px)
            if (window.innerWidth > 768) {
                isContentPermanentlyVisible = !isContentPermanentlyVisible;
                document.body.classList.toggle('content-revealed-by-logo', isContentPermanentlyVisible);

                // If content is permanently revealed, ensure scroll observer is disconnected
                if (isContentPermanentlyVisible) {
                     // Disconnect scroll observer if it exists
                     if (intersectionObserver) {
                        intersectionObserver.disconnect();
                     }
                     // Ensure all content sections are visible when toggled by logo
                     document.querySelectorAll('.content-section').forEach(section => {
                        section.classList.add('visible');
                     });
                     // Adjust content wrapper styles
                     pageContentWrapper.style.marginLeft = 'var(--nav-width)';
                     pageContentWrapper.style.width = 'calc(100% - var(--nav-width))';

                } else {
                     // If content is hidden by logo toggle, reconnect scroll observer
                     disconnectScrollObserver(); // Disconnect before re-initializing
                     initializeScrollObserver();
                     // Hide content sections again for scroll reveal animation
                     document.querySelectorAll('.content-section').forEach(section => {
                        section.classList.remove('visible');
                     });
                     // Reset content wrapper styles
                     pageContentWrapper.style.marginLeft = '0';
                     pageContentWrapper.style.width = '100%';
                }
            }
        });
    }

    // Initialize scroll observer on load if content is initially hidden
    if (!document.body.classList.contains('content-revealed-by-logo')) {
        initializeScrollObserver();
        // Ensure initial content wrapper styles are correct - Removed direct style manipulation
        // const pageContentWrapper = document.querySelector('.page-content-wrapper');
        // if (pageContentWrapper) {
        //      pageContentWrapper.style.marginLeft = '0';
        //      pageContentWrapper.style.width = '100%';
        // }
    }

    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const pageSections = document.querySelectorAll('.page-content-wrapper section[id], .page-content-wrapper header[id]');

    function updateActiveNavLink() {
        let currentSectionId = 'hero'; // Default to hero

        pageSections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust offset as needed
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Special handling for nested sections under "Nuestra Propuesta" and "Proyecto Detallado"
        if (currentSectionId.startsWith('nuestra-propuesta-')) {
             currentSectionId = 'nuestra-propuesta';
        } else if (currentSectionId.startsWith('proyecto-')) {
             // Check if it's one of the main sub-items
             const mainProjectSubItems = ['proyecto-concepto', 'proyecto-foco', 'proyecto-metodologia', 'proyecto-plan', 'proyecto-presupuesto', 'proyecto-resultados'];
             if (!mainProjectSubItems.includes(document.querySelector('.page-content-wrapper section[id="' + currentSectionId + '"]').getAttribute('id'))) {
                currentSectionId = 'proyecto-detallado';
             }
        }


        navLinks.forEach(link => {
            link.classList.remove('active');
            // Handle parent and sub-menu active states
            const href = link.getAttribute('href').substring(1);
            if (href === currentSectionId) {
                link.classList.add('active');
                // If it's a sub-menu item, also activate its parent
                const parentLi = link.closest('ul.sub-menu')?.closest('li');
                if (parentLi) {
                    parentLi.querySelector('a.nav-link').classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', updateActiveNavLink);


    // Sidebar Reveal on Mouse Proximity
    const sidebarThreshold = 100; // Distance from left edge in pixels - Increased for testing

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const isContentPermanentlyVisible = document.body.classList.contains('content-revealed-by-logo');
        const mainNav = document.getElementById('mainNav');

        if (mainNav) {
            // Check if mouse is within the proximity threshold OR hovering over the nav
            const isMouseNearLeftEdge = mouseX < sidebarThreshold;
            const isMouseOverNav = mainNav.contains(event.target);

            if ((isMouseNearLeftEdge || isMouseOverNav) && !isContentPermanentlyVisible) {
                // Reveal sidebar on mouse proximity or hover if not permanently visible
                mainNav.classList.add('hover-revealed');
                document.body.classList.add('nav-revealed-by-hover'); // Add new class
            } else {
                // Hide sidebar if mouse leaves threshold and is not over nav, and content is not permanently visible
                if (!isContentPermanentlyVisible) {
                     mainNav.classList.remove('hover-revealed');
                     document.body.classList.remove('nav-revealed-by-hover'); // Remove new class
                }
            }
        }
    });

    // Initial check to reveal hero section if needed (can be adjusted based on desired initial state)
    // If you want the hero section to fade in on load even if content is initially hidden,
    // you might need a separate initial animation trigger or adjust the observer threshold/rootMargin.
    // For now, we rely on the scroll or logo toggle to reveal.
    // This part might need adjustment depending on how the initial state is handled in CSS/HTML.
    // For now, assuming content is initially hidden and scroll observer needs to be active.
    // Ensure scroll observer is initialized on load
    initializeScrollObserver();
});
