// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Accordion functionality for "Proyecto Detallado"
const accordionData = [
    {
        id: "proyecto-concepto",
        title: "1. Descripción y Concepto del Proyecto",
        content: `
            <p>MIDI LAB propone una instalación inmersiva e interactiva que fusiona arte y técnica para explorar la interconexión entre la ciudad, los dispositivos móviles y las sabidurías ancestrales del Buen Vivir y Lo-TEK en el contexto de la ciudad de Fortaleza. Traducimos datos urbanos y de dispositivos de Fortaleza y los transformamos en experiencias sensoriales (luces, sonidos, visuales) para reflexionar sobre cómo se relaciona la tecnología con el espacio que habitamos y nuestro entorno local.</p>
            <p>El núcleo de la obra es la <strong>traducción</strong> de datos a lenguajes artísticos, entrelazando la narrativa emergente con los principios del Buen Vivir y Lo-TEK. La interacción se realiza a través del dispositivo móvil del visitante, modulando la instalación en tiempo real y creando un espejo sensible de su huella digital y física.</p>
            <p>La materialización incluye proyecciones 360°, luces y sonido multicanal, con posible inclusión de elementos olfativos. La instalación se convierte así en un organismo reactivo: un diálogo constante entre la data masiva preexistente y la presencia singular del visitante.</p>
        `
    },
    {
        id: "proyecto-foco",
        title: "2. Cómo la propuesta aborda el foco de la residencia",
        content: `
            <p>MIDI LAB aborda el foco "Signal &amp; Flow: Mobility Data Shaping Urban Life" utilizando datos de movilidad, migración y conectividad digital de la ciudad de Fortaleza. Exploramos el impacto de la tecnología móvil desde una perspectiva situada que considera las particularidades de este territorio: sus dinámicas migratorias, la riqueza cultural afrodescendiente e indígena y los contrastes socioeconómicos urbanos.</p>
            <p>La traducción de datos inspirada en el concepto Buen-TEK evidencia un uso crítico y arraigado de la tecnología. La interactividad móvil fomenta la conciencia sobre la huella digital y reflexiona sobre la responsabilidad en el ecosistema digital urbano. Al transformar datos abstractos en experiencia sensorial inmersiva, la instalación materializa preguntas centrales: ¿Cómo moldea la migración interna los flujos urbanos de Fortaleza? ¿De qué manera las redes digitales reflejan las desigualdades sociales del territorio?</p>
            <p>La interacción, modulada por los datos del propio visitante, genera una conciencia encarnada sobre la huella digital individual y su impacto en la colectividad urbana. Invitamos a experimentar ‑desde el cuerpo- la densidad de esta red en el contexto de una metrópolis costera que concentra las contradicciones del desarrollo brasileño.</p>
            <p>Nos impulsa a trascender el análisis puramente tecnológico para cuestionar, desde los saberes locales y territorios nordestinos, cómo coexistir con la tecnología de forma más armónica y sostenible, valorando historias y prácticas arraigadas que buscan la equidad entre todos los seres. Es un compromiso con una visión de la tecnología que sirva a la vida en su sentido más amplio.</p>
        `
    },
    {
        id: "proyecto-metodologia",
        title: "3. Metodología",
        content: `
            <p>El enfoque metodológico para esta residencia se concibe como un proceso orgánico y transdisciplinario, un tejido donde se entrelazan la investigación rigurosa de datos, la experimentación artística, el desarrollo tecnológico y la colaboración activa con expertos y comunidades. No es un camino lineal, sino un ciclo iterativo de descubrimiento, creación y ajuste.</p>
            <h5>3.1&nbsp;Inmersión en el Ecosistema de Datos</h5>
            <p>Análisis inicial de datos de movilidad, migración y conectividad digital de Fortaleza, colaborando con científicos de datos de la Universidad de Fortaleza para identificar patrones relevantes. Abordamos desde una perspectiva situada que comprende cómo los datos reflejan las realidades vividas, las desigualdades regionales y los flujos migratorios característicos del territorio.</p>
            <h5>3.2&nbsp;Diálogo de Saberes y Co-creación</h5>
            <p>Talleres y encuentros con comunidades locales para compartir hallazgos y escuchar experiencias sobre movilidad, conectividad y uso del espacio urbano. Incorporamos narrativas orales, mapas cognitivos y tradiciones afrobrasileñas e indígenas para enriquecer la información cuantitativa y co-crear las narrativas de la instalación.</p>
            <h5>3.3&nbsp;Alquimia de la Traducción</h5>
            <p>En paralelo al análisis, exploramos la traducción de datos a lenguajes sensoriales. Experimentamos con algoritmos y lógicas que transforman patrones en visuales dinámicos, paisajes sonoros envolventes y secuencias lumínicas significativas, buscando que los datos dialoguen con los principios del Buen Vivir y Lo-TEK. Prototipamos rápidamente para testear la efectividad artística.</p>
            <h5>3.4&nbsp;Construcción de la Narrativa Polifónica</h5>
            <p>Entrelazamos hallazgos de datos y saberes locales para construir una narrativa crítica sobre tecnología, vida urbana y sabidurías ancestrales, articulando conceptos como interconexión, sostenibilidad, segregación y resiliencia.</p>
            <h5>3.5&nbsp;Desarrollo Técnico</h5>
            <p>Programamos el software de traducción y control, diseñamos hardware de proyección visual y lumínica, el sistema de sonido multicanal y la app móvil interactiva. Integramos y probamos cada componente iterativamente con apoyo técnico de la Universidad.</p>
            <h5>3.6&nbsp;Montaje, Calibración y Exhibición</h5>
            <p>Montamos la instalación en el espacio expositivo, calibramos sistemas visuales, sonoros y lumínicos y realizamos pruebas exhaustivas para garantizar una experiencia inmersiva fluida antes de la apertura al público.</p>
        `
    },
    {
        id: "proyecto-plan",
        title: "4. Plan y calendario de trabajo tentativo",
        content: `
            <p>El plan de trabajo se estructura en <strong>5 meses</strong>, de septiembre de 2025 a febrero de 2026, con un enfoque flexible y adaptativo que prioriza la colaboración y la iteración. Incluye una <strong>estancia presencial mínima de 4&nbsp;semanas</strong> en la Universidad de Fortaleza, programada para las fases de mayor co-creación y prototipado.</p>

            <h4>Mes&nbsp;1 (Septiembre&nbsp;2025): Inmersión y Diálogo Inicial</h4>
            <ul>
                <li>Reunión de alineación con Twin y Liaison Mediator&nbsp;– objetivos, calendario y detalles logísticos.</li>
                <li>Inmersión en los conjuntos de datos de Fortaleza y documentación del contexto urbano.</li>
                <li>Investigación teórica y artística sobre Buen-TEK, data-art y saberes locales afro-indígenas.</li>
                <li>Planificación de talleres y encuentros comunitarios.</li>
                <li>Sesiones de <em>brainstorming</em> y conceptualización para la traducción artística y la narrativa.</li>
            </ul>

            <h4>Mes&nbsp;2 (Octubre&nbsp;2025): Análisis de Datos y Primeros Diálogos Comunitarios &nbsp;<span class="text-sm">(Estancia presencial)</span></h4>
            <ul>
                <li>Estancia presencial de 4&nbsp;semanas en Fortaleza.</li>
                <li>Análisis exploratorio de datos con apoyo de científicos de Unifor.</li>
                <li>Primeros encuentros con comunidades locales; escucha de perspectivas sobre tecnología y territorio.</li>
                <li>Talleres intensivos de co-creación con comunidades afrodescendientes e indígenas.</li>
                <li>Diseño conceptual de la traducción de datos y narrativa artística.</li>
            </ul>

            <h4>Mes&nbsp;3 (Noviembre&nbsp;2025): Desarrollo Participativo y Prototipado</h4>
            <ul>
                <li>Profundización del análisis de datos; identificación de patrones y narrativas clave.</li>
                <li>Prototipos iniciales de visualización, sonificación y control lumínico.</li>
                <li>Desarrollo temprano de la aplicación móvil interactiva.</li>
                <li>Prototipado técnico integrando retroalimentación comunitaria y materiales locales.</li>
                <li>Colaboración estrecha con especialistas de Unifor en aspectos técnicos y conceptuales.</li>
            </ul>

            <h4>Mes&nbsp;4 (Diciembre&nbsp;2025): Refinamiento y Narrativas Arraigadas</h4>
            <ul>
                <li>Refinamiento de algoritmos de traducción y dinámicas de interactividad.</li>
                <li>Desarrollo final de la aplicación móvil.</li>
                <li>Integración profunda de narrativas co-creadas y principios Buen Vivir / Lo-TEK.</li>
                <li>Montaje de prototipos a escala para testear la experiencia inmersiva.</li>
                <li>Documentación del proceso con énfasis en aprendizajes transdisciplinarios.</li>
            </ul>

            <h4>Mes&nbsp;5 (Enero–Febrero&nbsp;2026): Montaje, Presentación y Cierre</h4>
            <ul>
                <li>Montaje completo de la instalación en el espacio de exhibición.</li>
                <li>Ajustes técnicos y artísticos basados en pruebas in-situ.</li>
                <li>Presentación pública de la instalación con participación de comunidades colaboradoras.</li>
                <li>Entrega de la documentación final y archivos del proceso.</li>
                <li>Participación en eventos de difusión y festivales regionales.</li>
            </ul>

            <p class="mt-4"><em>Este calendario es una guía flexible que se adaptará para maximizar la colaboración y asegurar que la obra resuene con el contexto local.</em></p>
        `
    },
    {
        id: "proyecto-presupuesto",
        title: "5. Desglose tentativo del presupuesto",
        content: `
            <p>Estimamos un presupuesto total de <strong>20.000&nbsp;EUR</strong> para la realización de la residencia, concebido como una suma global (<em>lump&nbsp;sum</em>) que cubre todos los aspectos del proyecto. Su distribución tentativa, sujeta a ajustes según necesidades específicas, es la siguiente:</p>
            <ul>
                <li><strong>Honorarios del Colectivo MIDI&nbsp;LAB – 7.000&nbsp;EUR</strong><br/>Representa el 35&nbsp;% del total de la beca, cumpliendo con el mínimo requerido para honorarios artísticos.</li>
                <li><strong>Gastos de Viaje y Manutención – 6.000&nbsp;EUR</strong><br/>Vuelos internacionales ida-vuelta para los integrantes y manutención durante la estancia presencial en Fortaleza (más allá del alojamiento cubierto por Unifor) más posibles desplazamientos locales vinculados a investigación y colaboración comunitaria.</li>
                <li><strong>Costos de Investigación y Producción – 5.500&nbsp;EUR</strong><br/>Adquisición de materiales y componentes electrónicos para prototipos e instalación final, alquiler de equipos técnicos específicos no disponibles en Unifor, licencias de software y otros gastos directos de desarrollo técnico y artístico.</li>
                <li><strong>Documentación y Difusión – 1.000&nbsp;EUR</strong><br/>Registro audiovisual/fotográfico del proceso y la instalación, diseño de materiales de difusión y posibles gastos para participar en eventos de exhibición no cubiertos por la organización anfitriona.</li>
                <li><strong>Contingencia – 500&nbsp;EUR</strong><br/>Fondo reservado para imprevistos o necesidades no contempladas inicialmente.</li>
            </ul>
            <p>Este desglose es una estimación inicial. La gestión flexible de la suma global permitirá al colectivo asignar recursos de forma óptima para garantizar la calidad artística y técnica de la instalación y profundizar la investigación y colaboración comunitaria.</p>
        `
    },
    {
        id: "proyecto-resultados",
        title: "6. Resultados Esperados",
        content: `
            <p>El colectivo MIDI&nbsp;LAB proyecta una serie de resultados tangibles e intangibles derivados de esta residencia, todos orientados a materializar la visión del proyecto y contribuir a los objetivos del programa Buen-TEK.</p>

            <h4>6.1&nbsp;Instalación Artística Inmersiva e Interactiva (Prototipo Avanzado)</h4>
            <p>El resultado tangible principal será un prototipo avanzado de la instalación inmersiva e interactiva. Aunque el alcance final dependerá de los recursos de producción disponibles, se prevé una instalación completamente desarrollada, montada y funcional en el espacio de exhibición y lista para su presentación pública.</p>

            <h4>6.2&nbsp;Cuerpo de Investigación y Documentación Conceptual</h4>
            <p>Se generará un conjunto de textos, ensayos y presentaciones que documenten el proceso de investigación, el marco conceptual de la obra, la metodología de traducción de datos a lenguajes artísticos y las reflexiones críticas surgidas durante la residencia. Este material fomentará el diálogo transdisciplinario y compartirá el conocimiento creado.</p>

            <h4>6.3&nbsp;Archivo Completo del Proceso</h4>
            <p>Se compilará un archivo exhaustivo que documente visual y textualmente todas las etapas de la residencia: investigación inicial, análisis de datos, prototipado, talleres comunitarios, montaje y exhibición. Incluirá fotografías, videos, diarios de campo, bocetos, diagramas y descripciones técnicas.</p>

            <h4>6.4&nbsp;Fortalecimiento de Redes y Colaboraciones</h4>
            <p>Un resultado intangible pero valioso será el establecimiento y fortalecimiento de lazos con los científicos de datos y especialistas de la Universidad de Fortaleza, otros artistas residentes y, fundamentalmente, con las comunidades locales participantes. Se espera que estas conexiones generen futuros proyectos conjuntos.</p>

            <h4>6.5&nbsp;Participación en Eventos de Difusión y Exhibición</h4>
            <p>El colectivo se compromete a presentar la instalación y compartir los resultados de la investigación en los eventos de difusión y exhibición organizados por Buen-TEK, así como en otros contextos que puedan surgir, maximizando el alcance del proyecto.</p>

            <h4>6.6&nbsp;Contribución al Programa de Aprendizaje y la Comunidad Buen-TEK</h4>
            <p>Participaremos activamente en el Programa de Aprendizaje y otras actividades de la comunidad Buen-TEK, compartiendo experiencias, aprendizajes y desafíos para fortalecer la red de artistas, investigadores y organizaciones vinculadas.</p>

            <p>En conjunto, estos resultados —desde los artefactos materiales hasta los procesos de conocimiento y conexión— buscan generar un impacto significativo en el cruce entre arte, ciencia, tecnología y sociedad, alineándose con la visión transformadora de Buen-TEK.</p>
        `
    }
];

// Portfolio Data
const portfolioData = [
    {
        title: "MIDI4all",
        image: "imagesPortfolio/midilab1.jpg",
        description: `
            <p>Proyecto artístico audiovisual concebido como un espacio de experimentación contemporánea y creación multidisciplinaria. MIDI4all surge como una propuesta de búsqueda colaborativa dentro de nuestro colectivo MIDILab, con el objetivo de habilitar nuevas formas de expresión y encuentro entre diversas disciplinas artísticas.</p>
            <p>La propuesta es de carácter abierto, orientada a artistas que encuentren en MIDI4all un espacio de participación activa y desarrollo colectivo. En cada presentación, los integrantes del proyecto realizamos una selección previa de piezas que sirven como punto de partida para la construcción de un paisaje sonoro en vivo. La experiencia combina sonido, visuales, pintura y otras expresiones, integrando dispositivos MIDI, instrumentos musicales y diversos softwares de producción y proyección audiovisual.</p>
            <p>Proponemos sostener y expandir este espacio de intercambio con otros artistas, teniendo como eje principal la colaboración y la búsqueda de una expresión artística común, construida a partir de la improvisación individual como parte de un todo. Espacio de presentación: 990 Arte Club, Córdoba, Argentina</p>
        `,
        links: [
            { text: "Instagram", url: "https://www.instagram.com/midi4all/" },
            { text: "Google Drive", url: "https://drive.google.com/drive/folders/10SI2K8dsHT0i4MtASAAicAsaMGFGmgsi" }
        ]
    },
    {
        title: "“CELEBRACIÓN”",
        image: "imagesPortfolio/OsvaldoPons.png",
        description: `
            <p>100 años de luz y forma de Osvaldo Pons. Exhibición temporal abierta al público que conserva, revaloriza, expone y difunde la obra del arquitecto y artista Osvaldo Pons. Toda su obra presente en formato documental, video arte 360, estaciones de realidad aumentada y, también, en documentación de archivo.</p>
            <p>Participación como equipo encargado de la digitalización y preservación de bocetos, planos, documentación y registro fotográfico analógico capturado por el mismo. Éstos fueron utilizados en la producción documental y forman parte también de la exposición. Presentada en el Centro de Arte Contemporáneo Chateau Carreras - Antonio Seguí, Córdoba, Argentina. 12 de marzo al 8 de junio 2025</p>
        `,
        links: [
            { text: "Diario Alfil", url: "https://diarioalfil.com.ar/contenido/12055/celebracion-100-anos-de-luz-y-forma-de-osvaldo-pons" },
            { text: "Arq Pons", url: "https://arqpons.com.ar/index.html" },
            { text: "Instagram", url: "https://www.instagram.com/arq.osvaldopons/?hl=es" }
        ]
    },
    {
        title: "COIL 2025 (México-Argentina)",
        image: "imagesPortfolio/Coil.png",
        description: `
            <p>2025 – Collaborative Online International Learning (COIL). Departamento de Estudios Socioculturales del Instituto de Estudios Superiores de Occidente. México. FAD</p>
            <p>A través de actividades diseñadas en conjunto por los profesores participantes, los estudiantes trabajamos en equipos internacionales, desarrollando competencias digitales, habilidades comunicativas y una comprensión más profunda de diversas perspectivas culturales. Esta experiencia enriquece el currículo académico al incorporar una dimensión global y promueve la formación de ciudadanos con conciencia intercultural y habilidades para desenvolverse en contextos internacionales.</p>
            <p>Esta pieza surge de querer explorar los vínculos culturales entre México y Argentina por medio de una propuesta que habla de paisajes y animalidades, partiendo de lo cotidiano y expandiéndose a lo imaginario. Desde una realidad donde la globalización se ve atravesada por imágenes que han transformado nuestras formas de habitar el mundo y de vincularnos.</p>
            <p>La pieza plantea un escenario donde la distancia física deja de ser un obstáculo para la creación colectiva. Entonces, desde este punto, construimos un espacio visual hecho de fragmentos que recopilamos de nuestro entorno para, con algo que ya existe, crear un nuevo espacio dandole una "nueva vida" a estos fragmentos a través de un montaje visual.</p>
            <p>La obra presenta un video collage que está en constante transformación, donde cada segundo genera una imagen distinta y a través de este movimiento logra un espacio mutable en el que se cruza lo estático y lo dinámico, lo físico y lo simbólico, todo esto reunido en un solo lugar para representar la dualidad que hay entre tiempo-espacio, caos-orden. Este espacio imaginario que creamos no es una evasión de lo real, sino una recomposición de lo cotidiano, mostrando cómo, incluso en lo fragmentario, puede haber cohesión. El paisaje que se construye no existe en un sentido geográfico, sino como una posibilidad simbólica donde convergen distintas culturas, experiencias y memorias, convirtiéndolo en un espacio colectivo, construido desde las experiencias y lugares que nos conectan, que aunque todo esto este separado geográficamente, se enlazan a través del vínculo.</p>
        `,
        links: [
            { text: "Google Drive", url: "https://drive.google.com/drive/u/0/folders/1lgtoiXZVOfy6V-HOkSPV4wWVczeOIglu" }
        ]
    },
    {
        title: "“MORPHEAS”",
        image: "imagesPortfolio/Morpheas.png",
        description: `
            <p>Colectivo Desvariadas. Colectivo autogestivo conformado por artistas latinoamericanxs (Argentina, Colombia, Chile) formadxs en Universidades Públicas y Nacionales de Argentina desde Abril del año 2023. Hemos participado en festivales de Arte Independiente y Exposiciones de obras de Performance.</p>
            <p>Actualmente, trabajamos mediante un proceso de laboratorio y exploración escénica que integra enfoques postdramáticos y performativos. Para ello, empleamos diversas técnicas como el Teatro Suzuki, la danza contemporánea y la performance artística, desarrollando un método propio de investigación escénica. Este proceso, que el grupo ha denominado "Metafísica de la Sombra", ha dado lugar a un entramado de recursos innovadores para la creación.</p>
            <p>"MORPHEAS" – Fragmentos de un desvarío es una obra de teatro-instalación intervenida por diversos lenguajes artísticos: performance, videomapping, música y teatro. La pieza narra la historia de varias entidades delirantes, desbordadas y desenfrenadas, que habitan mundos oníricos llenos de metáforas. Envuelta en una atmósfera de ensueños y pesadillas, la obra entrelaza estas dimensiones para revelar los mundos internos de estas entidades, explorando sus ilusiones y, de manera más profunda, sus sombras. La obra se estructura en tres textos, ubicados en tres espacios instalativos diferentes. Cada momento contará con un entorno específico (site-specific), diseñado para reflejar un estado particular del sueño, lo que permitirá al público no solo observar, sino también tocar, oler y participar activamente en la construcción del significado de este desvarío.</p>
        `,
        links: [
            { text: "YouTube", url: "https://www.youtube.com/watch?v=hbbilKXQe1s" }
        ]
    },
    {
        title: "“AUTODRAMA 2G”",
        image: "imagesPortfolio/Autodrama 2g.jpg",
        description: `
            <p>"Réquiem para el Cabaret Voltaire" Festival de Performance. 9° Edición. 25 de octubre de 2024 - Bastón del Moro, Córdoba, Argentina</p>
            <p>Performance transmedial y tecnopoética que explora las complejas relaciones entre el cuerpo, la medicación crónica y los procesos de diagnóstico. La obra integra imágenes, palabras, sonidos y movimientos en una narrativa hipertextual que combina poesía y tecnología, creando una experiencia estética híbrida. A través de la fusión de medios técnicos, la performance adquiere una materialidad específica, configurándose como un videoarte analógico que reflexiona sobre las tensiones entre el cuerpo biológico y su representación mediada. La obra ofrece una mirada crítica hacia estos procesos y sus efectos sobre la corporalidad, mientras la propia artista transita entre la fragilidad del cuerpo y la imposición de la medicalización permanente.</p>
        `,
        links: [
            { text: "YouTube", url: "https://www.youtube.com/watch?v=S2hP9M7C_AM" }
        ]
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
                <div class="p-0">${item.content}</div>
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

    // Flip card functionality
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

function renderPortfolioGallery() {
    const galleryContainer = document.getElementById('portfolioGallery');
    if (!galleryContainer) return;

    // Clear existing items before rendering
    galleryContainer.innerHTML = '';

    portfolioData.forEach(function(project, index) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.index = index;
        galleryItem.innerHTML = `<img src="${project.image}" alt="${project.title}" class="gallery-img">`;
        galleryContainer.appendChild(galleryItem);
    });

    galleryContainer.querySelectorAll('.gallery-item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            const index = event.currentTarget.dataset.index;
            const project = portfolioData[index];

            const dialogOverlay = document.getElementById('portfolioDialogOverlay');
            const dialogTitle = document.getElementById('dialogTitle');
            const dialogDescription = document.getElementById('dialogDescription');
            const dialogLinks = document.getElementById('dialogLinks');

            if (dialogTitle && dialogDescription && dialogLinks && dialogOverlay) {
                dialogTitle.textContent = project.title;
                dialogDescription.innerHTML = project.description;
                dialogLinks.innerHTML = '';
                project.links.forEach(function(link) {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.textContent = link.text;
                    a.target = "_blank";
                    dialogLinks.appendChild(a);
                });
                dialogOverlay.classList.add('visible');
            }
        });
    });

    const dialogCloseButton = document.getElementById('dialogCloseButton');
    const dialogOverlay = document.getElementById('portfolioDialogOverlay');

    if (dialogCloseButton && dialogOverlay) {
        dialogCloseButton.addEventListener('click', function() {
            dialogOverlay.classList.remove('visible');
        });

        dialogOverlay.addEventListener('click', function(event) {
            if (event.target === dialogOverlay) {
                dialogOverlay.classList.remove('visible');
            }
        });
    }
}


// Initial setup on DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    renderAccordionItems();
    renderPortfolioGallery(); // Render the new gallery

    /* --- Reposicionar Manifiesto al final --- */
    const manifiestoSection = document.getElementById('manifiesto');
    if (manifiestoSection) {
        const mainEl = manifiestoSection.closest('main');
        if (mainEl) {
            mainEl.appendChild(manifiestoSection); // lo envía al final del flujo de secciones
        }
    }

    /* Mover enlace Manifiesto al final del menú lateral */
    const manifiestoLink = document.querySelector('nav.main-nav a[href="#manifiesto"]');
    if (manifiestoLink) {
        const li = manifiestoLink.parentElement;
        const navUl = manifiestoLink.closest('nav').querySelector(':scope > ul');
        if (li && navUl) {
            navUl.appendChild(li); // lo coloca como último elemento principal
        }
    }

    // The p5 sketch initialization will be in hero-sketch.js
    // new p5(heroSketch); // This line is now in hero-sketch.js
});
