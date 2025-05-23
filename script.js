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

document.addEventListener('DOMContentLoaded', () => {
    const toggleLogo = document.querySelector('.hero-logo'); // Use the logo in the hero section for toggle
    const mainNav = document.getElementById('mainNav');
    const pageContentWrapper = document.querySelector('.page-content-wrapper');
    let isContentPermanentlyVisible = false; // State variable for logo toggle

    // The .centered-logo is not controlled by this toggle logic and should always be visible based on its CSS.

    if (toggleLogo && mainNav && pageContentWrapper) {
        toggleLogo.style.cursor = 'pointer'; // Indicate it's clickable
        toggleLogo.addEventListener('click', () => {
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
                 initializeScrollObserver();
                 // Hide content sections again for scroll reveal animation
                 document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('visible');
                 });
                 // Reset content wrapper styles
                 pageContentWrapper.style.marginLeft = '0';
                 pageContentWrapper.style.width = '100%';
            }
        });
    }

    // Initialize scroll observer on load if content is initially hidden
    if (!document.body.classList.contains('content-revealed-by-logo')) {
        initializeScrollObserver();
        // Ensure initial content wrapper styles are correct
        const pageContentWrapper = document.querySelector('.page-content-wrapper');
        if (pageContentWrapper) {
             pageContentWrapper.style.marginLeft = '0';
             pageContentWrapper.style.width = '100%';
        }
    }
});

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


// Content Fade-in Animation (Controlled by scroll and reveal logic)
const contentSections = document.querySelectorAll('.content-section');
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
let intersectionObserver; // Declare observer outside to access it in logo toggle

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

// Initialize observer
function initializeScrollObserver() {
    if (!intersectionObserver) {
        intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
        contentSections.forEach(section => intersectionObserver.observe(section));
    }
}

// Disconnect observer
function disconnectScrollObserver() {
    if (intersectionObserver) {
        intersectionObserver.disconnect();
        intersectionObserver = null; // Reset observer
    }
}

// Initial check to reveal hero section if needed (can be adjusted based on desired initial state)
// If you want the hero section to fade in on load even if content is initially hidden,
// you might need a separate initial animation trigger or adjust the observer threshold/rootMargin.
// For now, we rely on the scroll or logo toggle to reveal.


// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Accordion functionality for "Proyecto Detallado"
const accordionData = [
    {
        id: "proyecto-concepto",
        title: "1. Descripción y Concepto del Proyecto",
        content: `
            <p>El colectivo MIDI propone una instalación inmersiva e interactiva que trasciende la mera observación para convertirse en una experiencia vivida. Fusionamos arte y técnica para escrutar un fenómeno omnipresente: la interconexión entre la urbe, los dispositivos móviles y las sabidurías ancestrales del Buen Vivir y Lo-TEK. Concebimos un entorno envolvente donde los datos, que a menudo percibimos como entidades frías y abstractas, se transmutan en sensaciones tangibles: luces que danzan, sonidos que revelan secretos de la movilidad, ecos de espacios habitados pero rara vez percibidos en su totalidad.</p>
            <p>El núcleo conceptual y técnico de esta obra reside en la "traducción". Tomamos vastos conjuntos de datos – patrones de movilidad, información geoespacial, estadísticas demográficas, flujos de datos de dispositivos móviles – y los convertimos en lenguajes artísticos. Mediante algoritmos (aún en desarrollo), estos datos narrarán una historia emergente, intrínsecamente ligada a los patrones y análisis que revelan. Esta narrativa, arraigada en las perspectivas socioeconómicas y sociodemográficas inherentes a los datos, se entrelazará con los principios del Buen Vivir y Lo-TEK, integrando una cosmología que prioriza la armonía con la naturaleza y la comunidad, y valora las tecnologías resilientes nacidas del conocimiento tradicional. No aspiramos a una simple visualización de datos; buscamos una obra que incite a la reflexión crítica: ¿cómo reconfiguran nuestros dispositivos la ciudad y nuestra existencia en ella? ¿Existen modos de relación con la tecnología que nos arraiguen en lugar de alienarnos, que sean más justos y conscientes del entorno y de las voces ancestrales?</p>
            <p>La interacción, catalizador del diálogo entre la obra y el visitante, se articula a través del dispositivo móvil personal. Mediante una aplicación accesible vía código QR al inicio de la instalación, los datos de los sensores del dispositivo del visitante se compartirán y procesarán en tiempo real. Una inteligencia artificial modulará la atmósfera de la instalación en respuesta a estos datos, creando un espejo sensible que refleja la huella digital y física del individuo en el espacio y el tiempo. La instalación se convierte así en un organismo reactivo, un diálogo constante entre la data masiva preexistente y la presencia singular del visitante.</p>
            <p>La materialización de esta visión se proyecta en proyecciones visuales de 360 grados que abrazan al espectador, luces que pulsan al ritmo de los datos como venas luminosas de la ciudad, and un paisaje sonoro multicanal que sumerge al visitante en las estructuras subyacentes de los datos. La posible inclusión de elementos olfativos añadiría una capa sinestésica, profundizando la conexión visceral with la narrativa emergente and los principios del Buen Vivir and Lo-TEK.</p>
        `
    },
    {
        id: "proyecto-foco",
        title: "2. Cómo la propuesta aborda el foco de la residencia",
        content: `
            <p>La propuesta del colectivo MIDI se alinea de manera intrínseca with el foco de la residencia "Señal & Flujo". La residencia investiga cómo los teléfonos móviles reconfiguran la vida urbana, la movilidad, la migración and la conectividad. Nuestra instalación se sitúa precisamente en esta intersección, utilizando los conjuntos de datos sobre movilidad, información geoespacial and demográfica proporcionados por la Universidad del Desarrollo como cimiento material and conceptual.</p>
            <p>La "traducción" artística de estos datos busca iluminar los entramados invisibles que configuran nuestros desplazamientos, interacciones and la ocupación del espacio urbano. Es un acto de revelación, de hacer perceptible la compleja red que subyace a la vida en la ciudad contemporánea.</p>
            <p>Al transformar datos abstractos en una experiencia sensorial inmersiva, la instalación hace tangibles los conceptos centrales de la residencia. ¿Cómo influye el dispositivo móvil en el espacio físico que transitamos? ¿De qué manera se manifiestan las redes digitales en el tejido urbano? La interacción, modulada por los datos del propio visitante, genera una conciencia encarnada sobre la huella digital individual and su impacto en la colectividad urbana. Es una invitación a experimentar, desde el cuerpo, la densidad de esta red.</p>
            <p>Además, la obra busca visibilizar las dinámicas urbanas menos evidentes que los datos pueden revelar: la segregación, los cambios demográficos, las fronteras invisibles mediadas por la tecnología. La traducción artística de estos patrones ofrece una perspectiva complementaria a la investigación científica, una mirada que apela a lo emocional and intuitivo.</p>
            <p>La integración del Buen Vivir and Lo-TEK no es un mero complemento, sino un anclaje fundamental que dota a la propuesta de una perspectiva crítica and situada en el contexto sudamericano. Nos impulsa a trascender el análisis puramente tecnológico para cuestionar, desde nuestros saberes and territorios, cómo podemos coexistir with la tecnología de forma más armónica and sostenible, valorando las historias and prácticas arraigadas que buscan la equidad entre todos los seres, humanos and no humanos. Es un compromiso with una visión de la tecnología que sirve a la vida en su sentido más amplio.</p>
        `
    },
    {
        id: "proyecto-plan",
        title: "4. Plan and calendario de trabajo tentativo",
        content: `
            <p>El colectivo MIDI concibe los cinco meses de residencia (septiembre 2025 - febrero 2026) como un período intensivo de investigación, creación and colaboración. Este plan tentativo es una hoja de ruta flexible, susceptible de ajustarse a los ritmos inherentes al proceso creativo and a las dinámicas de la colaboración transdisciplinaria. La estancia presencial en la Universidad del Desarrollo, de al menos cuatro semanas, se proyecta idealmente al inicio para maximizar la inmersión en el contexto local and la interacción with los recursos and expertos.</p>
            <h4>Mes 1 (Septiembre 2025): Inmersión and Conceptualización Inicial.</h4>
            <ul><li>Reunión de alineación with el Twin and Liaison Mediator: Definición de objetivos, flujo de trabajo, calendario and detalles de la estancia presencial.</li><li>Inicio de la estancia presencial en Santiago (idealmente).</li><li>Inmersión en los conjuntos de datos: Análisis exploratorio inicial with el apoyo de científicos de datos de la UDD.</li><li>Investigación teórica and artística: Profundización en el marco Buen-TEK, data art, visualización/sonificación de datos, Buen Vivir and Lo-TEK en el contexto chileno.</li><li>Sesiones de brainstorming and conceptualización: Desarrollo de ideas iniciales para la traducción artística and la narrativa.</li></ul>
            <h4>Mes 2 (Octubre 2025): Análisis de Datos and Prototipado Artístico.</h4>
            <ul><li>Continuación del análisis de datos: Identificación de patrones and narrativas clave.</li><li>Experimentación with algoritmos de traducción: Desarrollo de prototipos iniciales de visualización, sonificación and control lumínico basados en datos.</li><li>Desarrollo temprano de la aplicación móvil interactiva.</li><li>Posibles encuentros iniciales with comunidades locales.</li></ul>
            <h4>Mes 3 (Noviembre 2025): Desarrollo Técnico and Colaboración Intensiva.</h4>
            <ul><li>Desarrollo avanzado del software de traducción and control.</li><li>Diseño and construcción del hardware de la instalación (proyecciones, luces, sonido).</li><li>Talleres and sesiones de co-creación with comunidades locales: Integración de sus perspectivas en la narrativa and el diseño.</li><li>Colaboración estrecha with expertos translocales and personal técnico de la UDD.</li><li>Pruebas de integración de componentes.</li></ul>
            <h4>Mes 4 (Diciembre 2025): Integración Narrativa and Prototipos a Escala.</h4>
            <ul><li>Integración de la narrativa del Buen Vivir/Lo-TEK with los patrones de datos.</li><li>Desarrollo final de la aplicación móvil.</li><li>Montaje de prototipos a escala reducida para testear la experiencia inmersiva and interactiva.</li><li>Ajustes basados in pruebas and feedback.</li><li>Inicio de la documentación detallada del proceso.</li></ul>
            <h4>Mes 5 (Enero - Febrero 2026): Montaje Final, Calibración and Exhibición.</h4>
            <ul><li>Montaje completo de la instalación en el espacio de exhibición.</li><li>Calibración de todos los sistemas (visual, sonoro, lumínico, interactividad).</li><li>Pruebas finales and ajustes estéticos.</li><li>Entrega del resultado final and la documentación completa del proyecto.</li><li>Participación en eventos de difusión and exhibición organizados por el programa Buen-TEK.</li></ul>
            <p><strong>Este cronograma es una guía. La flexibilidad para adaptarse a los descubrimientos and desafíos que surjan será fundamental para el éxito del proyecto.</strong></p>
        `
    },
    {
        id: "proyecto-presupuesto",
        title: "5. Desglose tentativo del presupuesto",
        content: `
            <p>El colectivo MIDI estima un presupuesto total de 20.000 EUR para la realización de la residencia, concebido como una suma global ("lump sum") para cubrir todos los aspectos del proyecto. La distribución tentativa de estos fondos, sujeta a ajustes según las necesidades específicas que surjan durante la residencia, es la siguiente:</p>
            <ul>
                <li><strong>Honorarios del colectivo MIDI:</strong> 7.000 EUR. Este monto representa el 35% del total de la beca, cumpliendo with el mínimo requerido para los honorarios artísticos.</li>
                <li><strong>Gastos de viaje and manutención:</strong> 6.000 EUR. Incluye los costos de vuelos internacionales de ida and vuelta para los miembros del colectivo, así como los gastos de manutención durante la estancia presencial en Santiago (más allá del alojamiento cubierto por la UDD) and posibles viajes locales relacionados with la investigación or la colaboración comunitaria.</li>
                <li><strong>Costos de investigación and producción:</strong> 5.500 EUR. Destinados a la adquisición de materiales and componentes electrónicos para prototipos and la instalación final, alquiler de equipos técnicos específicos no disponibles en la UDD (si fuera necesario), licencias de software (si aplica) and otros gastos directos asociados al desarrollo técnico and artístico de la obra.</li>
                <li><strong>Contingencia:</strong> 500 EUR. Un fondo reservado para cubrir imprevistos or necesidades no contempladas inicialmente.</li>
            </ul>
            <p><strong>Total estimado:</strong> 20.000 EUR.</p>
            <p>Este desglose es una estimación inicial. La gestión de la suma global permitirá al colectivo asignar los fondos de manera flexible para optimizar la calidad artística and técnica de la instalación, así como la profundidad de la investigación and la colaboración comunitaria.</p>
        `
    },
    {
        id: "proyecto-resultados",
        title: "6. Resultados esperados",
        content: `
            <p>El colectivo MIDI proyecta una serie de resultados tangibles and intangibles derivados de esta residencia, todos orientados a materializar la visión del proyecto and contribuir a los objetivos del programa Buen-TEK.</p>
            <h4>6.1. Instalación Artística Inmersiva and Interactiva (Prototipo Avanzado) / Instalación Operativa:</h4><p>El resultado tangible principal será un prototipo avanzado funcional and, finalmente, la instalación artística en sí misma, completamente desarrollada, montada and funcional. Demostrará la traducción de datos a lenguajes sensoriales and la interactividad móvil, incorporando elementos Lo-TEK and narrativas co-creadas, lista para ser experimentada por el público.</p>
            <h4>6.2. Cuerpo de Investigación and Documentación Conceptual:</h4><p>Se generará un conjunto de textos, ensayos and presentaciones que documenten el proceso de investigación, el marco conceptual, la metodología de traducción de datos, la integración del Buen Vivir and Lo-TEK, and las reflexiones críticas. Servirá para compartir conocimiento and fomentar diálogo transdisciplinario.</p>
            <h4>6.3. Archivo Completo del Proceso:</h4><p>Se compilará un archivo exhaustivo (fotos, videos, diarios, bocetos, diagramas, descripciones técnicas) que documente todas las etapas: investigación, análisis de datos, prototipado, desarrollo técnico, talleres comunitarios, montaje and exhibición.</p>
            <h4>6.4. Fortalecimiento de Redes and Colaboraciones:</h4><p>Un resultado intangible de gran valor será el establecimiento and fortalecimiento de lazos with científicos de datos and especialistas de la UDD, expertos translocales, otros artistas and comunidades locales. Se espera que estas conexiones perduren.</p>
            <h4>6.5. Participación en Eventos de Difusión and Exhibición:</h4><p>El colectivo se compromete a presentar la instalación and resultados en eventos organizados por Buen-TEK, en Chile and otros contextos, para alcanzar un público amplio and dar visibilidad al programa.</p>
            <h4>6.6. Contribución al Programa de Aprendizaje and la Comunidad Buen-TEK:</h4><p>Participaremos activamente en el Programa de Aprendizaje and actividades de la comunidad Buen-TEK, compartiendo experiencias and aprendizajes, buscando contribuir al intercambio de conocimientos and fortalecimiento de la red.</p>
            <p><strong>Estos resultados, tanto artefactos materiales como procesos de conocimiento and conexión, buscan generar un impacto significativo en el cruce entre arte, ciencia, tecnología and sociedad, alineándose with la visión transformadora de Buen-TEK.</strong></p>
        `
    }
];

function renderAccordionItems() {
    const container = document.querySelector('.accordion-container');
    if (!container) return;
    accordionData.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        accordionItem.innerHTML = `
            <button class="accordion-button" aria-expanded="false" aria-controls="content-${item.id}">
                <span>${item.title}</span>
                <span class="icon">+</span>
            </button>
            <div id="content-${item.id}" class="accordion-content" aria-hidden="true">
                <div class="p-4">${item.content}</div>
            </div>
        `;
        container.appendChild(accordionItem);
    });

    container.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const expanded = button.getAttribute('aria-expanded') === 'true' || false;

            // Close all other accordions
            // container.querySelectorAll('.accordion-button').forEach(otherButton => {
            //     if (otherButton !== button) {
            //         otherButton.setAttribute('aria-expanded', 'false');
            //         otherButton.querySelector('.icon').textContent = '+';
            //         const otherContent = otherButton.nextElementSibling;
            //         otherContent.style.maxHeight = null;
            //         otherContent.classList.remove('open');
            //         otherContent.setAttribute('aria-hidden', 'true');
            //     }
            // });

            button.setAttribute('aria-expanded', !expanded);
            button.querySelector('.icon').textContent = expanded ? '+' : '−';
            content.setAttribute('aria-hidden', expanded);
            if (!expanded) {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
                content.classList.remove('open');
            }
        });
    });
}

// Initial setup on DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    renderAccordionItems();
    // The p5 sketch initialization will be in hero-sketch.js
    // new p5(heroSketch); // This line is now in hero-sketch.js
    updateActiveNavLink(); // Initial check for active link

});

// --- Artistic Concealment and Reveal Logic ---
// Removed conflicting initial visibility settings and mouseover reveal logic.
// The logo click toggle, scroll reveal, and mouse proximity sidebar reveal
// will be implemented here.

// Sidebar Reveal on Mouse Proximity
const sidebarThreshold = 50; // Distance from left edge in pixels

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
