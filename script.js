// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Accordion functionality for "Proyecto Detallado"
const accordionData = [
    {
        id: "proyecto-concepto",
        title: "1. Descripción y Concepto del Proyecto",
        content: `
            <p>El colectivo MidiLab propone una instalación inmersiva e interactiva que trasciende la mera observación para convertirse en una experiencia vivida. Fusionamos arte y técnica para escrutar un fenómeno omnipresente: la interconexión entre la urbe, los dispositivos móviles y las sabidurías ancestrales del Buen Vivir y Lo-TEK. Concebimos un entorno envolvente donde los datos, que a menudo percibimos como entidades frías y abstractas, se transmutan en sensaciones tangibles: luces que danzan, sonidos que revelan secretos de la movilidad, ecos de espacios habitados pero rara vez percibidos en su totalidad.</p>
            <p>El núcleo conceptual y técnico de esta obra reside en la "traducción". Tomamos vastos conjuntos de datos – patrones de movilidad, información geoespacial, estadísticas demográficas, flujos de datos de dispositivos móviles – y los convertimos en lenguajes artísticos. Mediante algoritmos (aún en desarrollo), estos datos narrarán una historia emergente, intrínsecamente ligada a los patrones y análisis que revelan. Esta narrativa, arraigada en las perspectivas socioeconómicas y sociodemográficas inherentes a los datos, se entrelazará con los principios del Buen Vivir y Lo-TEK, integrando una cosmología que prioriza la armonía con la naturaleza y la comunidad, y valora las tecnologías resilientes nacidas del conocimiento tradicional. No aspiramos a una simple visualización de datos; buscamos una obra que incite a la reflexión crítica: ¿cómo reconfiguran nuestros dispositivos la ciudad y nuestra existencia en ella? ¿Existen modos de relación con la tecnología que nos arraiguen en lugar de alienarnos, que sean más justos y conscientes del entorno y de las voces ancestrales?</p>
            <p>La interacción, catalizador del diálogo entre la obra y el visitante, se articula a través del dispositivo móvil personal. Mediante una aplicación accesible vía código QR al inicio de la instalación, los datos de los sensores del dispositivo del visitante se compartirán y procesarán en tiempo real. Una inteligencia artificial modulará la atmósfera de la instalación en respuesta a estos datos, creando un espejo sensible que refleja la huella digital y física del individuo en el espacio y el tiempo. La instalación se convierte así en un organismo reactivo, un diálogo constante entre la data masiva preexistente y la presencia singular del visitante.</p>
            <p>La materialización de esta visión se proyecta en proyecciones visuales de 360 grados que abrazan al espectador, luces que pulsan al ritmo de los datos como venas luminosas de la ciudad, and un paisaje sonoro multicanal que sumerge al visitante en las estructuras subyacentes de los datos. La posible inclusión de elementos olfativos añadiría una capa sinestésica, profundizando la conexión visceral with la narrativa emergente and los principios del Buen Vivir and Lo-TEK.</p>
        `
    },
    {
        id: "proyecto-foco",
        title: "2. Cómo la propuesta aborda el foco de la residencia",
        content: `
            <p>La propuesta del colectivo MidiLab se alinea de manera intrínseca with el foco de la residencia "Señal & Flujo". La residencia investiga cómo los teléfonos móviles reconfiguran la vida urbana, la movilidad, la migración and la conectividad. Nuestra instalación se sitúa precisamente en esta intersección, utilizando los conjuntos de datos sobre movilidad, información geoespacial and demográfica proporcionados por la Universidad del Desarrollo como cimiento material and conceptual.</p>
            <p>La "traducción" artística de estos datos busca iluminar los entramados invisibles que configuran nuestros desplazamientos, interacciones and la ocupación del espacio urbano. Es un acto de revelación, de hacer perceptible la compleja red que subyace a la vida en la ciudad contemporánea.</p>
            <p>Al transformar datos abstractos en una experiencia sensorial inmersiva, la instalación hace tangibles los conceptos centrales de la residencia. ¿Cómo influye el dispositivo móvil en el espacio físico que transitamos? ¿De qué manera se manifiestan las redes digitales en el tejido urbano? La interacción, modulada por los datos del propio visitante, genera una conciencia encarnada sobre la huella digital individual and su impacto en la colectividad urbana. Es una invitación a experimentar, desde el cuerpo, la densidad de esta red.</p>
            <p>Además, la obra busca visibilizar las dinámicas urbanas menos evidentes que los datos pueden revelar: la segregación, los cambios demográficos, las fronteras invisibles mediadas por la tecnología. La traducción artística de estos patrones ofrece una perspectiva complementaria a la investigación científica, una mirada que apela a lo emocional and intuitivo.</p>
            <p>La integración del Buen Vivir and Lo-TEK no es un mero complemento, sino un anclaje fundamental que dota a la propuesta de una perspectiva crítica and situada en el contexto sudamericano. Nos impulsa a trascender el análisis puramente tecnológico para cuestionar, desde nuestros saberes and territorios, cómo podemos coexistir with la tecnología de forma más armónica and sostenible, valorando las historias and prácticas arraigadas que buscan la equidad entre todos los seres, humanos and no humanos. Es un compromiso with una visión de la tecnología que sirve a la vida en su sentido más amplio.</p>
        `
    },
    {
        id: "proyecto-metodologia",
        title: "3. Metodología",
        content: `
            <h4>3. ENFOQUE METODOLÓGICO</h4>
            <p>Nuestro proceso es orgánico y transdisciplinario: un tejido donde se entrelazan investigación rigurosa de datos, experimentación artística, desarrollo tecnológico y colaboración activa con expertos y comunidades. No es un camino lineal, sino un ciclo iterativo de descubrimiento, creación y ajuste.</p>
            <h5>3.1. Inmersión en el Ecosistema de Datos</h5>
            <p>Análisis inicial de datos de movilidad, migración y conectividad digital de Fortaleza. Colaboramos con científicos de datos de la Universidad de Fortaleza para identificar patrones relevantes que dialoguen con las realidades vividas del territorio.</p>
            <h5>3.2. Diálogo de Saberes y Co-creación</h5>
            <p>Realizamos talleres y encuentros con comunidades locales, afrodescendientes e indígenas para compartir hallazgos y escuchar experiencias sobre movilidad y conectividad urbana. Estas narrativas orales y mapas cognitivos enriquecen la información cuantitativa.</p>
            <h5>3.3. Alquimia de la Traducción</h5>
            <p>Exploramos algoritmos que transformen patrones de datos en visuales dinámicos, paisajes sonoros envolventes y secuencias lumínicas. Prototipamos rápidamente para testear la potencia poética de cada traducción.</p>
            <h5>3.4. Construcción de la Narrativa Polifónica</h5>
            <p>Entrelazamos los hallazgos de datos con los principios del Buen Vivir y Lo-TEK para tejer una historia crítica sobre tecnología, vida urbana y saberes ancestrales.</p>
            <h5>3.5. Desarrollo Técnico</h5>
            <p>Programamos el software de traducción y control, diseñamos hardware de proyección, sonido multicanal y la app móvil interactiva, en un proceso iterativo de construcción y prueba.</p>
            <h5>3.6. Montaje, Calibración y Exhibición</h5>
            <p>Montamos la instalación, calibramos sistemas visuales, sonoros y lumínicos y realizamos pruebas exhaustivas para asegurar una experiencia inmersiva y fluida para el público.</p>
        `
    },
    {
        id: "proyecto-plan",
        title: "4. Plan and calendario de trabajo tentativo",
        content: `
            <p>El colectivo MidiLab concibe los cinco meses de residencia (septiembre 2025 - febrero 2026) como un período intensivo de investigación, creación and colaboración. Este plan tentativo es una hoja de ruta flexible, susceptible de ajustarse a los ritmos inherentes al proceso creativo and a las dinámicas de la colaboración transdisciplinaria. La estancia presencial en la Universidad del Desarrollo, de al menos cuatro semanas, se proyecta idealmente al inicio para maximizar la inmersión en el contexto local and la interacción with los recursos and expertos.</p>
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
            <p>El colectivo MidiLab estima un presupuesto total de 20.000 EUR para la realización de la residencia, concebido como una suma global ("lump sum") para cubrir todos los aspectos del proyecto. La distribución tentativa de estos fondos, sujeta a ajustes según las necesidades específicas que surjan durante la residencia, es la siguiente:</p>
            <ul>
                <li><strong>Honorarios del colectivo MidiLab:</strong> 7.000 EUR. Este monto representa el 35% del total de la beca, cumpliendo with el mínimo requerido para los honorarios artísticos.</li>
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
    // The p5 sketch initialization will be in hero-sketch.js
    // new p5(heroSketch); // This line is now in hero-sketch.js
});
