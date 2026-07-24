const USERS = [
    { id: 0, name: "Juan Pérez", role: "Enólogo" },
    { id: 1, name: "María García", role: "Ingeniera Agrónoma" },
    { id: 2, name: "Carlos López", role: "Técnico Vitivinícola" },
    { id: 3, name: "Ana Martínez", role: "Fitopatóloga" },
    { id: 4, name: "Pedro Sánchez", role: "Administrador de Viñedo" }
];

const ZONAS = [
    {
        id: "parral", nombre: "Valle de Santiago - El Parral", municipio: "Hidalgo del Parral",
        coord: { x: 32, y: 45 }, altitud: "1650 msnm",
        clima: { temp: "18°C", humedad: "45%", viento: "12 km/h", uv: "8" },
        suelos: ["arcilloso", "franco"],
        descripcion: "Zona histórica vitivinícola con tradición desde el siglo XVII. Clima semiárido con lluvias estacionales."
    },
    {
        id: "santacruz", nombre: "Santa Cruz de Rosales", municipio: "Santa Cruz de Rosales",
        coord: { x: 22, y: 22 }, altitud: "1400 msnm",
        clima: { temp: "20°C", humedad: "38%", viento: "15 km/h", uv: "9" },
        suelos: ["arenoso", "calizo"],
        descripcion: "Región con suelos calcáreos ideales para uvas de mesa y vinificación. Clima continental seco."
    },
    {
        id: "aldama", nombre: "Aldama", municipio: "Aldama",
        coord: { x: 30, y: 20 }, altitud: "1200 msnm",
        clima: { temp: "22°C", humedad: "35%", viento: "18 km/h", uv: "10" },
        suelos: ["arenoso", "negro"],
        descripcion: "Zona emergente de viticultura moderna con tecnología de riego por goteo. Suelos arenosos bien drenados."
    },
    {
        id: "saucillo", nombre: "Saucillo", municipio: "Saucillo",
        coord: { x: 28, y: 38 }, altitud: "1100 msnm",
        clima: { temp: "24°C", humedad: "30%", viento: "20 km/h", uv: "11" },
        suelos: ["arcilloso", "arenoso"],
        descripcion: "Región cálida con alta insolación. Producción de uvas para elaboración de vinos tintos robustos."
    },
    {
        id: "valle_allende", nombre: "Valle de Allende", municipio: "Allende",
        coord: { x: 30, y: 30 }, altitud: "1550 msnm",
        clima: { temp: "19°C", humedad: "42%", viento: "14 km/h", uv: "8" },
        suelos: ["franco", "calizo"],
        descripcion: "Zona con microclima favorable para cabernet sauvignon y tempranillo. Suelos francos con buen drenaje."
    },
    {
        id: "jimenez", nombre: "Jiménez", municipio: "Jiménez",
        coord: { x: 35, y: 22 }, altitud: "1300 msnm",
        clima: { temp: "21°C", humedad: "40%", viento: "16 km/h", uv: "9" },
        suelos: ["negro", "arcilloso"],
        descripcion: "Región con suelos ricos en materia orgánica. Ideal para variedades de uva white y garnacha."
    },
    {
        id: "camargo", nombre: "Camargo", municipio: "Camargo",
        coord: { x: 40, y: 15 }, altitud: "1050 msnm",
        clima: { temp: "25°C", humedad: "28%", viento: "22 km/h", uv: "11" },
        suelos: ["calizo", "arenoso"],
        descripcion: "Zona árida con alto estrés hídrico que favorece la concentración de azúcares en la uva."
    }
];

const SUELOS_DATA = {
    arcilloso: {
        nombre: "Arcilloso",
        composicion: [
            { comp: "Arcilla", val: "40-60%" }, { comp: "Limo", val: "20-30%" },
            { comp: "Arena", val: "5-15%" }, { comp: "MO", val: "2-4%" },
            { comp: "pH", val: "7.5-8.5" }, { comp: "CEC", val: "25-40 meq/100g" }
        ],
        ph: "7.5 - 8.5", conductividad: "2.5 dS/m",
        nutrientes: { n: "Alto", p: "Medio", k: "Alto", ca: "Alto", mg: "Alto", fe: "Bajo", mn: "Bajo", zn: "Bajo" }
    },
    arenoso: {
        nombre: "Arenoso",
        composicion: [
            { comp: "Arena", val: "70-85%" }, { comp: "Limo", val: "10-20%" },
            { comp: "Arcilla", val: "2-8%" }, { comp: "MO", val: "0.5-1.5%" },
            { comp: "pH", val: "6.0-7.0" }, { comp: "CEC", val: "5-10 meq/100g" }
        ],
        ph: "6.0 - 7.0", conductividad: "0.8 dS/m",
        nutrientes: { n: "Bajo", p: "Bajo", k: "Bajo", ca: "Medio", mg: "Bajo", fe: "Medio", mn: "Medio", zn: "Alto" }
    },
    franco: {
        nombre: "Franco",
        composicion: [
            { comp: "Arena", val: "30-40%" }, { comp: "Limo", val: "30-40%" },
            { comp: "Arcilla", val: "20-30%" }, { comp: "MO", val: "3-5%" },
            { comp: "pH", val: "6.5-7.5" }, { comp: "CEC", val: "15-25 meq/100g" }
        ],
        ph: "6.5 - 7.5", conductividad: "1.5 dS/m",
        nutrientes: { n: "Medio", p: "Medio", k: "Medio", ca: "Medio", mg: "Medio", fe: "Alto", mn: "Alto", zn: "Medio" }
    },
    calizo: {
        nombre: "Calizo",
        composicion: [
            { comp: "CaCO₃", val: "30-50%" }, { comp: "Arena", val: "25-35%" },
            { comp: "Arcilla", val: "10-20%" }, { comp: "MO", val: "1-2%" },
            { comp: "pH", val: "8.0-9.0" }, { comp: "CEC", val: "20-30 meq/100g" }
        ],
        ph: "8.0 - 9.0", conductividad: "3.0 dS/m",
        nutrientes: { n: "Bajo", p: "Bajo", k: "Medio", ca: "Muy Alto", mg: "Alto", fe: "Muy Bajo", mn: "Bajo", zn: "Bajo" }
    },
    negro: {
        nombre: "Negro (Orgánico)",
        composicion: [
            { comp: "MO", val: "8-15%" }, { comp: "Arcilla", val: "25-35%" },
            { comp: "Limo", val: "30-40%" }, { comp: "Arena", val: "10-20%" },
            { comp: "pH", val: "6.0-7.0" }, { comp: "CEC", val: "30-50 meq/100g" }
        ],
        ph: "6.0 - 7.0", conductividad: "1.8 dS/m",
        nutrientes: { n: "Muy Alto", p: "Alto", k: "Alto", ca: "Medio", mg: "Medio", fe: "Alto", mn: "Alto", zn: "Medio" }
    }
};

const ENFERMEDADES = [
    {
        id: "oidio", nombre: "Oídio (Ceniza)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Enfermedad fúngica causada por Uncinula necator. Se manifiesta como polvo blanco sobre hojas, tallos y frutos. Favorecido por clima cálido y humedad moderada.",
        sintomas: ["Manchas blancas polvorientas en hojas", "Deformación de hojas jóvenes", "Grietas en frutos", "Caída prematura de hojas"],
        condiciones: "Temperatura 21-30°C, humedad 40-70%, alta luz UV",
        productos: [
            { nombre: "Azufre mojable", tipo: "Fungicida de contacto", dosis: "3-5 kg/ha", organico: false },
            { nombre: "Azufre micronizado", tipo: "Fungicida de contacto", dosis: "8-12 kg/ha", organico: true },
            { nombre: "Myclobutanil", tipo: "Fungicida sistémico", dosis: "0.25 mL/L", organico: false },
            { nombre: "Bicarbonato de potasio", tipo: "Fungicida de contacto", dosis: "3-5 g/L", organico: true }
        ]
    },
    {
        id: "mildiu", nombre: "Mildiu (Peronospora)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Enfermedad fúngica causada por Plasmopara viticola. Produce aceitunas falsas y moho blanco en el envés de las hojas. Muy destructiva en condiciones de humedad alta.",
        sintomas: ["Amarillamiento en haz de hojas", "Moho blanco en envés", "Aceitunas falsas en racimos", "Marchitez de punta de sarmón"],
        condiciones: "Temperatura 15-25°C, humedad >85%, lluvia frecuente",
        productos: [
            { nombre: "Cobre hidróxido", tipo: "Fungicida de contacto", dosis: "2-3 g/L", organico: false },
            { nombre: "Cobre oxicloruro", tipo: "Fungicida de contacto", dosis: "3-4 g/L", organico: false },
            { nombre: "Fosfito de potasio", tipo: "Fungicida sistémico", dosis: "2-3 mL/L", organico: true },
            { nombre: "Mancozeb", tipo: "Fungicida de contacto", dosis: "2.5 g/L", organico: false }
        ]
    },
    {
        id: "botrytis", nombre: "Botrytis (Moho Gris)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Causada por Botrytis cinerea. Ataca flores, frutos y sarmón. Produce moho gris con esporulación abundante. Especialmente grave en época de maduración.",
        sintomas: ["Moho gris sobre racimos", "Podredumbre blanda en frutos", "Marchitez de flores", "Manchas acuosas en hojas"],
        condiciones: "Temperatura 15-23°C, humedad >90%, poca ventilación",
        productos: [
            { nombre: "Fludioxonil", tipo: "Fungicida de contacto", dosis: "0.3 mL/L", organico: false },
            { nombre: "Pirimetanil", tipo: "Fungicida sistémico", dosis: "0.5 g/L", organico: false },
            { nombre: "Bacillus subtilis", tipo: "Biofungicida", dosis: "1-2 g/L", organico: true },
            { nombre: "Clorotalonil", tipo: "Fungicida de contacto", dosis: "2 mL/L", organico: false }
        ]
    },
    {
        id: "negro_negro", nombre: "Negro Negro (Black Rot)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Causada por Guignardia bidwellii. Produce manchas marrones circulares y frutos negros y arrugados. Muy destructiva en climas cálidos y húmedos.",
        sintomas: ["Manchas circulares marrones en hojas", "Puntos negros en manchas (picnidios)", "Frutos negros y momificados", "Secado de escobones"],
        condiciones: "Temperatura 20-30°C, humedad alta, lluvia",
        productos: [
            { nombre: "Mancozeb", tipo: "Fungicida de contacto", dosis: "2.5 g/L", organico: false },
            { nombre: "Captan", tipo: "Fungicida de contacto", dosis: "2-3 g/L", organico: false },
            { nombre: "Fosfito de potasio", tipo: "Fungicida sistémico", dosis: "2-3 mL/L", organico: true },
            { nombre: "Cobre + Azufre", tipo: "Mezcla de contacto", dosis: "Según etiqueta", organico: false }
        ]
    },
    {
        id: "clorosis", nombre: "Clorosis Férrica", tipo: "nutricional", tipoLabel: "Nutricional",
        icono: "🌿",
        descripcion: "Deficiencia de hierro causada por pH alto del suelo. Provoca amarillamiento entre nervaduras de hojas jóvenes. Común en suelos calizos.",
        sintomas: ["Amarillamiento entre nervaduras", "Hojas jóvenes más afectadas", "Nervaduras permanecen verdes", "Crecimiento reducido"],
        condiciones: "Suelo con pH >7.5, exceso de cal, suelos calizos",
        productos: [
            { nombre: "Sulfato de hierro", tipo: "Fertilizante inorgánico", dosis: "5-10 g/L", organico: false },
            { nombre: "Quelato de hierro Fe-EDDHA", tipo: "Fertilizante inorgánico", dosis: "3-5 g/L", organico: false },
            { nombre: "Extracto de algas marinas", tipo: "Fertilizante orgánico", dosis: "2-3 mL/L", organico: true },
            { nombre: "Humato de potasio + Fe", tipo: "Fertilizante orgánico", dosis: "2 mL/L", organico: true }
        ]
    },
    {
        id: "deficiencia_n", nombre: "Deficiencia de Nitrógeno", tipo: "nutricional", tipoLabel: "Nutricional",
        icono: "🌿",
        descripcion: "Falta de nitrógeno que provoca amarillamiento generalizado de hojas viejas, crecimiento lento y producción reducida.",
        sintomas: ["Amarillamiento de hojas viejas", "Crecimiento lento del sarmón", "Racimos pequeños", "Hojas caídas prematuramente"],
        condiciones: "Suelos pobres en MO, lixiviación por lluvia, suelos arenosos",
        productos: [
            { nombre: "Nitrato de calcio", tipo: "Fertilizante inorgánico", dosis: "15-20 g/L", organico: false },
            { nombre: "Urea foliar", tipo: "Fertilizante inorgánico", dosis: "5-10 g/L", organico: false },
            { nombre: "Harina de sangre", tipo: "Fertilizante orgánico", dosis: "50-100 g/planta", organico: true },
            { nombre: "Baba de caracol", tipo: "Fertilizante orgánico", dosis: "5 mL/L", organico: true }
        ]
    },
    {
        id: "quemadura", nombre: "Quemadura Solar", tipo: "fisiologico", tipoLabel: "Fisiológica",
        icono: "☀️",
        descripcion: "Daño fisiológico por exposición directa al sol. Provoca quemaduras en frutos expuestos, especialmente en variedades de piel clara.",
        sintomas: ["Manchas blanquecinas en frutos", "Arrugamiento de piel expuesta", "Secado parcial de racimos", "Craqueado de epicarpio"],
        condiciones: "Alta radiación UV, temperaturas >35°C, baja cobertura foliar",
        productos: [
            { nombre: "Sulfato de calcio (yeso)", tipo: "Protector foliar", dosis: "10-15 g/L", organico: true },
            { nombre: "Caolín", tipo: "Protector solar", dosis: "30-50 g/L", organico: true },
            { nombre: "Sombra parcial (mallas)", tipo: "Protección física", dosis: "30-50% reducción UV", organico: true },
            { nombre: "Silicato de potasio", tipo: "Fortalecedor foliar", dosis: "2-3 mL/L", organico: false }
        ]
    },
    {
        id: "acaros", nombre: "Ácaros (Araña Roja)", tipo: "plaga", tipoLabel: "Plaga / Ácaro",
        icono: "🕷️",
        descripcion: "Plaga causada por Tetranychus urticae. Alimenta del contenido celular de hojas, causando decoloración y defoliación severa.",
        sintomas: ["Punteado amarillo en hojas", "Telarañas finas en envés", "Decoloración plateada", "Caída de hojas en infestaciones severas"],
        condiciones: "Clima cálido y seco, humedad <40%, ausencia de enemigos naturales",
        productos: [
            { nombre: "Abamectina", tipo: "Acaricida sistémico", dosis: "0.75 mL/L", organico: false },
            { nombre: "Spirodiclofen", tipo: "Acaricida sistémico", dosis: "0.3 mL/L", organico: false },
            { nombre: "Aceite de neem", tipo: "Acaricida orgánico", dosis: "5-10 mL/L", organico: true },
            { nombre: "Phytoseiulus persimilis", tipo: "Control biológico", dosis: "20-30 individuos/planta", organico: true }
        ]
    },
    {
        id: "cochinilla", nombre: "Cochinilla", tipo: "plaga", tipoLabel: "Plaga / Ácaro",
        icono: "🐛",
        descripcion: "Plaga causada por Planococcus citri. Se adhiere a troncos y ramas, excretando melaza que favorece fumagina.",
        sintomas: ["Masas algodonosas blancas en tronco", "Melaza pegajosa en superficies", "Hollín negro (fumagina)", "Debilitamiento de la planta"],
        condiciones: "Temperaturas de 20-30°C, protección del viento, baja luminosidad",
        productos: [
            { nombre: "Aceite mineral (verano)", tipo: "Insecticida de contacto", dosis: "15-20 mL/L", organico: false },
            { nombre: "Piretrinas naturales", tipo: "Insecticida de contacto", dosis: "1-2 mL/L", organico: true },
            { nombre: "Jabón potásico", tipo: "Insecticida orgánico", dosis: "10-15 mL/L", organico: true },
            { nombre: "Imidacloprid", tipo: "Insecticida sistémico", dosis: "0.25 mL/L", organico: false }
        ]
    },
    {
        id: "polilla", nombre: "Polilla de la Vid (Lobesia)", tipo: "plaga", tipoLabel: "Plaga / Ácaro",
        icono: "🦋",
        descripcion: "Plaga causada por Lobesia botrana. Las larvas perforan racimos causando pérdidas significativas en producción y calidad.",
        sintomas: ["Hilos de seda en racimos", "Orificios de entrada en frutos", "Excrementos larvae dentro del racimo", "Pudrición secundaria en heridas"],
        condiciones: "Temperatura 15-30°C, varias generaciones por año",
        productos: [
            { nombre: "Bacillus thuringiensis", tipo: "Bioinsecticida", dosis: "1-2 g/L", organico: true },
            { nombre: "Captura con feromonas", tipo: "Trampa", dosis: "5 trampas/ha", organico: true },
            { nombre: "Clorpirifós", tipo: "Insecticida sistémico", dosis: "1.5 mL/L", organico: false },
            { nombre: "Spinosad", tipo: "Bioinsecticida", dosis: "0.5-1 mL/L", organico: true }
        ]
    }
];

const SUELO_COLORS = {
    arcilloso: "#8B4513", arenoso: "#F4A460", franco: "#8B7355", calizo: "#D3D3D3", negro: "#2F2F2F"
};
const TIPO_COLORS = {
    fungica: "#d4e6f1", nutricional: "#d5f5e3", fisiologico: "#fdebd0", plaga: "#d6eaf8"
};

let detections = [];
let currentDetection = {};
let nextId = 1;

function init() {
    loadUsers();
    loadZonas();
    loadEnfermedadesSelect();
    setupNavigation();
    setupUpload();
    setupFilters();
    setupEditModal();
    loadDetections();
    updateStats();
    renderMap();
    renderRecentDetections();
    renderAllDetections();
}

/* ===== USERS ===== */
function loadUsers() {
    const sel = document.getElementById("userSelect");
    USERS.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.id;
        opt.textContent = `${u.name} (${u.role})`;
        sel.appendChild(opt);
    });
}

/* ===== ZONAS DROPDOWNS ===== */
function loadZonas() {
    const selects = ["filterZona", "selectZona", "historyFilterZona", "editZona"];
    selects.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const first = el.options[0] ? el.options[0].outerHTML : '<option value="">Todas las Zonas</option>';
        el.innerHTML = first;
        ZONAS.forEach(z => {
            const opt = document.createElement("option");
            opt.value = z.id;
            opt.textContent = `${z.nombre} (${z.municipio})`;
            el.appendChild(opt);
        });
    });
    renderZoneCards();
}

/* ===== ENFERMEDADES SELECT ===== */
function loadEnfermedadesSelect() {
    const selects = ["selectEnfermedad", "editEnfermedad"];
    selects.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const first = el.options[0] ? el.options[0].outerHTML : '<option value="">Seleccionar...</option>';
        el.innerHTML = first;
        ENFERMEDADES.forEach(e => {
            const opt = document.createElement("option");
            opt.value = e.id;
            opt.textContent = `${e.icono} ${e.nombre} (${e.tipoLabel})`;
            el.appendChild(opt);
        });
    });
    renderEnfermedadCards();
}

/* ===== NAVIGATION ===== */
function setupNavigation() {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            const section = link.dataset.section;
            document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
            document.getElementById(section).classList.add("active");
        });
    });
    document.getElementById("navToggle").addEventListener("click", () => {
        document.getElementById("navMenu").classList.toggle("show");
        document.querySelector(".nav-filters").classList.toggle("show");
    });
}

/* ===== UPLOAD ===== */
function setupUpload() {
    const area = document.getElementById("uploadArea");
    const input = document.getElementById("photoUpload");
    const preview = document.getElementById("photoPreview");
    const previewImg = document.getElementById("previewImage");
    const removeBtn = document.getElementById("removePhoto");

    area.addEventListener("click", () => input.click());
    area.addEventListener("dragover", e => { e.preventDefault(); area.classList.add("dragover"); });
    area.addEventListener("dragleave", () => area.classList.remove("dragover"));
    area.addEventListener("drop", e => {
        e.preventDefault();
        area.classList.remove("dragover");
        if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
    });
    input.addEventListener("change", e => { if (e.target.files.length) handleFile(e.target.files[0]); });
    removeBtn.addEventListener("click", () => {
        preview.style.display = "none";
        area.style.display = "block";
        input.value = "";
        currentDetection = {};
        document.getElementById("btnSaveDetection").disabled = true;
        document.getElementById("analysisCard").style.display = "none";
    });

    document.getElementById("btnAnalyze").addEventListener("click", analyzePhoto);
    document.getElementById("detectionForm").addEventListener("submit", saveDetection);
    document.getElementById("btnNewDetection").addEventListener("click", () => {
        document.getElementById("uploadCard").scrollIntoView({ behavior: "smooth" });
    });

    function handleFile(file) {
        if (!file.type.startsWith("image/")) { showToast("Seleccione un archivo de imagen válido"); return; }
        const reader = new FileReader();
        reader.onload = e => {
            previewImg.src = e.target.result;
            preview.style.display = "block";
            area.style.display = "none";
            currentDetection.photo = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

/* ===== ANALYZE ===== */
function analyzePhoto() {
    if (!currentDetection.photo) { showToast("Primero suba una fotografía"); return; }
    const zonaId = document.getElementById("selectZona").value;
    const sueloId = document.getElementById("selectSuelo").value;
    let enfId = document.getElementById("selectEnfermedad").value;

    if (!zonaId) { showToast("Seleccione una zona"); return; }
    if (!sueloId) { showToast("Seleccione un tipo de suelo"); return; }

    if (!enfId) {
        enfId = ENFERMEDADES[Math.floor(Math.random() * ENFERMEDADES.length)].id;
    }

    const zona = ZONAS.find(z => z.id === zonaId);
    const enfermedad = ENFERMEDADES.find(e => e.id === enfId);
    const suelo = SUELOS_DATA[sueloId];
    const now = new Date();

    currentDetection = {
        ...currentDetection,
        zonaId, sueloId, enfId,
        fecha: now.toLocaleDateString("es-MX"),
        hora: now.toLocaleTimeString("es-MX"),
        timestamp: now.toISOString(),
        userId: parseInt(document.getElementById("userSelect").value)
    };

    const recommended = enfermedad.productos[Math.floor(Math.random() * enfermedad.productos.length)];

    const card = document.getElementById("analysisCard");
    card.style.display = "block";
    document.getElementById("analysisResult").innerHTML = `
        <div class="analysis-left">
            <img src="${currentDetection.photo}" alt="Foto analizada">
            <div class="analysis-item"><h4>Fecha y Hora</h4><p>${currentDetection.fecha} - ${currentDetection.hora}</p></div>
        </div>
        <div class="analysis-right">
            <div class="analysis-item"><h4>Zona Detectada</h4><p>${zona.nombre}, ${zona.municipio}</p></div>
            <div class="analysis-item"><h4>Clima Actual</h4>
                <p>🌡 ${zona.clima.temp} | 💧 ${zona.clima.humedad} | 💨 ${zona.clima.viento} | ☀️ UV ${zona.clima.uv}</p>
            </div>
            <div class="analysis-item"><h4>Tipo de Suelo</h4>
                <p>${suelo.nombre} — pH: ${suelo.ph}</p>
                <p style="font-size:12px;color:#555;margin-top:4px">Conductividad: ${suelo.conductividad}</p>
            </div>
            <div class="analysis-item"><h4>Composición del Suelo</h4>
                <div class="soil-comp" style="margin-top:6px">
                    ${suelo.composicion.map(c => `<div class="soil-comp-item"><span class="comp-val">${c.val}</span>${c.comp}</div>`).join("")}
                </div>
            </div>
            <div class="analysis-item"><h4>Enfermedad Detectada</h4>
                <p>${enfermedad.icono} ${enfermedad.nombre}</p>
                <span class="enf-tag ${enfermedad.tipo}">${enfermedad.tipoLabel}</span>
                <p style="font-size:12px;color:#555;margin-top:6px">${enfermedad.descripcion}</p>
            </div>
            <div class="analysis-item"><h4>Síntomas Identificados</h4>
                <ul style="font-size:12px;padding-left:16px;margin-top:4px">
                    ${enfermedad.sintomas.map(s => `<li>${s}</li>`).join("")}
                </ul>
            </div>
            <div class="analysis-item"><h4>Condiciones Favorables a la Enfermedad</h4><p style="font-size:12px">${enfermedad.condiciones}</p></div>
            <div class="analysis-item">
                <h4>Producto Recomendado</h4>
                <div class="product-card">
                    <span class="prod-type">${recommended.tipo}</span>
                    <h4>${recommended.nombre}</h4>
                    <p style="font-size:12px">Dosis: ${recommended.dosis}</p>
                    <p style="font-size:11px;color:#555">${recommended.orgánico ? "✅ Producto orgánico" : "⚗️ Producto inorgánico/sintético"}</p>
                </div>
            </div>
            <div class="analysis-item"><h4>Nutrientes del Suelo</h4>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:4px">
                    ${Object.entries(suelo.nutrientes).map(([k, v]) => `<span style="font-size:11px"><b>${k.toUpperCase()}:</b> ${v}</span>`).join("")}
                </div>
            </div>
        </div>
    `;

    card.scrollIntoView({ behavior: "smooth" });
    document.getElementById("btnSaveDetection").disabled = false;
    showToast("Análisis completado exitosamente");
}

/* ===== SAVE DETECTION ===== */
function saveDetection(e) {
    e.preventDefault();
    if (!currentDetection.photo) { showToast("Primero analice una fotografía"); return; }
    currentDetection.id = nextId++;
    currentDetection.userId = parseInt(document.getElementById("userSelect").value);

    const enf = ENFERMEDADES.find(e => e.id === currentDetection.enfId);
    if (enf) currentDetection.productoRecomendado = enf.productos[0];

    detections.unshift(currentDetection);
    saveDetections();
    updateStats();
    renderRecentDetections();
    renderAllDetections();
    renderHistory();
    resetForm();
    showToast("Detección guardada correctamente");
}

function resetForm() {
    document.getElementById("detectionForm").reset();
    document.getElementById("photoPreview").style.display = "none";
    document.getElementById("uploadArea").style.display = "block";
    document.getElementById("analysisCard").style.display = "none";
    document.getElementById("btnSaveDetection").disabled = true;
    currentDetection = {};
}

/* ===== RENDER MAP ===== */
function renderMap() {
    const container = document.getElementById("mapContainer");
    container.innerHTML = '<div id="leafletMap" style="width:100%;height:100%;min-height:500px"></div>';

    const map = L.map("leafletMap").setView([28.0, -106.0], 6);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    const navyIcon = L.divIcon({
        className: "custom-pin",
        html: '<div style="width:14px;height:14px;background:#1a3a5c;border:2.5px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.35)"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -10]
    });

    ZONAS.forEach(z => {
        const lat = getLat(z.id);
        const lng = getLng(z.id);
        const marker = L.marker([lat, lng], { icon: navyIcon }).addTo(map);
        marker.bindPopup(`
            <div style="font-family:Inter,sans-serif;min-width:180px">
                <strong style="font-size:13px;color:#1a3a5c">${z.nombre}</strong><br>
                <span style="font-size:11px;color:#555">${z.municipio} — ${z.altitud}</span><br>
                <span style="font-size:11px">🌡 ${z.clima.temp} | 💧 ${z.clima.humedad}</span><br>
                <span style="font-size:11px">💨 ${z.clima.viento} | ☀️ UV ${z.clima.uv}</span><br>
                <a href="#" onclick="event.preventDefault();showZoneDetail('${z.id}')" style="font-size:11px;color:#1a3a5c;font-weight:600">Ver detalles →</a>
            </div>
        `);
        marker.bindTooltip(z.municipio, { permanent: true, direction: "top", offset: [0, -8], className: "zone-label" });
    });

    setTimeout(() => map.invalidateSize(), 100);
}

function getLat(id) {
    const c = { parral:26.93, santacruz:28.19, aldama:28.83, saucillo:28.03, valle_allende:26.93, jimenez:27.13, camargo:27.68 };
    return c[id] || 28.0;
}
function getLng(id) {
    const c = { parral:-105.82, santacruz:-106.04, aldama:-105.91, saucillo:-105.33, valle_allende:-105.42, jimenez:-104.93, camargo:-105.17 };
    return c[id] || -106.0;
}

window.showZoneDetail = function(zoneId) {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    document.querySelector('[data-section="zonas"]').classList.add("active");
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById("zonas").classList.add("active");
    setTimeout(() => {
        const el = document.getElementById("zone-" + zoneId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
};

/* ===== RENDER ZONE CARDS ===== */
function renderZoneCards() {
    const grid = document.getElementById("zonesGrid");
    grid.innerHTML = ZONAS.map(z => {
        const soils = z.suelos.map(s => SUELOS_DATA[s]);
        return `
        <div class="zone-card" id="zone-${z.id}">
            <div class="zone-card-header">
                <h3>${z.nombre}</h3>
                <p>${z.municipio} — Altitud: ${z.altitud}</p>
            </div>
            <div class="zone-card-body">
                <p style="font-size:13px;color:#555;margin-bottom:12px">${z.descripcion}</p>
                <div class="zone-climate">
                    <div class="climate-item"><i class="fas fa-thermometer-half"></i><span class="val">${z.clima.temp}</span><span class="lbl">Temp. Promedio</span></div>
                    <div class="climate-item"><i class="fas fa-tint"></i><span class="val">${z.clima.humedad}</span><span class="lbl">Humedad</span></div>
                    <div class="climate-item"><i class="fas fa-wind"></i><span class="val">${z.clima.viento}</span><span class="lbl">Viento</span></div>
                    <div class="climate-item"><i class="fas fa-sun"></i><span class="val">UV ${z.clima.uv}</span><span class="lbl">Radiación UV</span></div>
                </div>
                ${soils.map(s => `
                <div class="soil-section">
                    <h4>Tipo de Suelo: ${s.nombre}</h4>
                    <p style="font-size:12px;color:#555">pH: ${s.ph} | Conductividad: ${s.conductividad}</p>
                    <div class="soil-comp">
                        ${s.composicion.map(c => `<div class="soil-comp-item"><span class="comp-val">${c.val}</span>${c.comp}</div>`).join("")}
                    </div>
                    <div style="margin-top:8px;display:grid;grid-template-columns:repeat(4,1fr);gap:4px">
                        ${Object.entries(s.nutrientes).map(([k, v]) => `<span style="font-size:10px;text-align:center;padding:3px;background:#f9f9f9;border-radius:4px"><b>${k.toUpperCase()}</b>: ${v}</span>`).join("")}
                    </div>
                </div>
                `).join("")}
            </div>
        </div>`;
    }).join("");
}

/* ===== RENDER ENFERMEDAD CARDS ===== */
function renderEnfermedadCards() {
    const grid = document.getElementById("enfermedadesGrid");
    grid.innerHTML = ENFERMEDADES.map(e => `
        <div class="enf-card">
            <div class="enf-card-img">${e.icono}</div>
            <div class="enf-card-body">
                <h3>${e.nombre}</h3>
                <span class="enf-tag ${e.tipo}">${e.tipoLabel}</span>
                <p class="enf-desc">${e.descripcion}</p>
                <div style="margin-top:8px">
                    <strong style="font-size:12px">Síntomas:</strong>
                    <ul style="font-size:11px;padding-left:14px;color:#555;margin-top:2px">
                        ${e.sintomas.map(s => `<li>${s}</li>`).join("")}
                    </ul>
                </div>
                <div style="margin-top:10px">
                    <strong style="font-size:12px">Productos de Tratamiento:</strong>
                    ${e.productos.map(p => `
                        <div style="font-size:11px;padding:6px;margin-top:4px;background:#f9f9f9;border-radius:6px;border-left:3px solid ${p.orgánico ? '#27ae60' : '#1a3a5c'}">
                            <b>${p.nombre}</b> — ${p.tipo}<br>
                            Dosis: ${p.dosis} ${p.orgánico ? '🌱' : '⚗️'}
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

/* ===== FILTERS ===== */
function setupFilters() {
    ["filterZona", "filterSuelo", "filterEnfermedad"].forEach(id => {
        document.getElementById(id).addEventListener("change", applyFilters);
    });
    ["historyFilterZona", "historyFilterEnfermedad", "historyFilterSuelo"].forEach(id => {
        document.getElementById(id).addEventListener("change", renderHistory);
    });
}

function applyFilters() {
    renderAllDetections();
    renderRecentDetections();
}

function getFilteredDetections(list) {
    let result = [...list];
    const zona = document.getElementById("filterZona").value;
    const suelo = document.getElementById("filterSuelo").value;
    const enf = document.getElementById("filterEnfermedad").value;
    if (zona) result = result.filter(d => d.zonaId === zona);
    if (suelo) result = result.filter(d => d.sueloId === suelo);
    if (enf) {
        const enfIds = ENFERMEDADES.filter(e => e.tipo === enf).map(e => e.id);
        result = result.filter(d => enfIds.includes(d.enfId));
    }
    return result;
}

/* ===== RENDER DETECTIONS ===== */
function renderAllDetections() {
    const filtered = getFilteredDetections(detections);
    const container = document.getElementById("allDetections");
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-camera"></i><p>No hay detecciones registradas. Suba una fotografía para comenzar.</p></div>';
        return;
    }
    container.innerHTML = filtered.map(d => renderDetectionCard(d)).join("");
}

function renderRecentDetections() {
    const filtered = getFilteredDetections(detections).slice(0, 5);
    const container = document.getElementById("recentDetections");
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-clock"></i><p>No hay detecciones recientes.</p></div>';
        return;
    }
    container.innerHTML = filtered.map(d => {
        const enf = ENFERMEDADES.find(e => e.id === d.enfId);
        const zona = ZONAS.find(z => z.id === d.zonaId);
        return `
        <div class="detection-list-item">
            <img src="${d.photo}" alt="detección">
            <div class="info">
                <h4>${enf ? enf.icono + ' ' + enf.nombre : 'Desconocida'}</h4>
                <p>${zona ? zona.nombre : ''} — ${d.fecha} ${d.hora}</p>
            </div>
        </div>`;
    }).join("");
}

function renderDetectionCard(d) {
    const enf = ENFERMEDADES.find(e => e.id === d.enfId);
    const zona = ZONAS.find(z => z.id === d.zonaId);
    const user = USERS.find(u => u.id === d.userId);
    return `
    <div class="detection-card" id="detection-${d.id}">
        <img src="${d.photo}" alt="detección">
        <div class="detection-card-body">
            <h3>${enf ? enf.icono + ' ' + enf.nombre : 'Enfermedad desconocida'}</h3>
            <div class="detection-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${zona ? zona.nombre.split(" - ")[0] : ''}</span>
                <span><i class="fas fa-layer-group"></i> ${d.sueloId ? SUELOS_DATA[d.sueloId].nombre : ''}</span>
                <span><i class="fas fa-calendar"></i> ${d.fecha}</span>
                <span><i class="fas fa-clock"></i> ${d.hora}</span>
                <span><i class="fas fa-user"></i> ${user ? user.name : ''}</span>
            </div>
            ${enf ? `<span class="enf-tag ${enf.tipo}">${enf.tipoLabel}</span>` : ''}
            ${d.productoRecomendado ? `
            <div class="product-card" style="margin-top:8px">
                <span class="prod-type">${d.productoRecomendado.tipo}</span>
                <h4>${d.productoRecomendado.nombre}</h4>
                <p style="font-size:11px">Dosis: ${d.productoRecomendado.dosis}</p>
            </div>` : ''}
            <div class="detection-actions">
                <button class="btn btn-sm btn-secondary" onclick="editDetection(${d.id})"><i class="fas fa-edit"></i> Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteDetection(${d.id})"><i class="fas fa-trash"></i> Eliminar</button>
            </div>
        </div>
    </div>`;
}

/* ===== EDIT MODAL ===== */
function setupEditModal() {
    document.getElementById("closeModal").addEventListener("click", closeEditModal);
    document.getElementById("cancelEdit").addEventListener("click", closeEditModal);
    document.getElementById("editModal").addEventListener("click", e => { if (e.target === e.currentTarget) closeEditModal(); });
    document.getElementById("editForm").addEventListener("submit", saveEdit);
}

function closeEditModal() { document.getElementById("editModal").classList.remove("show"); }

window.editDetection = function(id) {
    const d = detections.find(d => d.id === id);
    if (!d) return;
    document.getElementById("editId").value = d.id;
    document.getElementById("editZona").value = d.zonaId;
    document.getElementById("editSuelo").value = d.sueloId;
    document.getElementById("editEnfermedad").value = d.enfId;

    const enf = ENFERMEDADES.find(e => e.id === d.enfId);
    const prodSel = document.getElementById("editProducto");
    prodSel.innerHTML = "";
    if (enf) {
        enf.productos.forEach((p, i) => {
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = `${p.nombre} (${p.tipo})`;
            prodSel.appendChild(opt);
        });
    }

    document.getElementById("editModal").classList.add("show");
};

function saveEdit(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById("editId").value);
    const idx = detections.findIndex(d => d.id === id);
    if (idx === -1) return;

    detections[idx].zonaId = document.getElementById("editZona").value;
    detections[idx].sueloId = document.getElementById("editSuelo").value;
    detections[idx].enfId = document.getElementById("editEnfermedad").value;

    const enf = ENFERMEDADES.find(e => e.id === detections[idx].enfId);
    const prodIdx = parseInt(document.getElementById("editProducto").value);
    if (enf && enf.productos[prodIdx]) detections[idx].productoRecomendado = enf.productos[prodIdx];

    saveDetections();
    renderAllDetections();
    renderRecentDetections();
    updateStats();
    closeEditModal();
    showToast("Detección actualizada");
}

window.deleteDetection = function(id) {
    if (!confirm("¿Está seguro de eliminar esta detección?")) return;
    detections = detections.filter(d => d.id !== id);
    saveDetections();
    renderAllDetections();
    renderRecentDetections();
    updateStats();
    showToast("Detección eliminada");
};

/* ===== HISTORY ===== */
function renderHistory() {
    const zonaFilter = document.getElementById("historyFilterZona").value;
    const enfFilter = document.getElementById("historyFilterEnfermedad").value;
    const sueloFilter = document.getElementById("historyFilterSuelo").value;

    let filtered = [...detections];
    if (zonaFilter) filtered = filtered.filter(d => d.zonaId === zonaFilter);
    if (sueloFilter) filtered = filtered.filter(d => d.sueloId === sueloFilter);
    if (enfFilter) {
        const enfIds = ENFERMEDADES.filter(e => e.tipo === enfFilter).map(e => e.id);
        filtered = filtered.filter(d => enfIds.includes(d.enfId));
    }

    const container = document.getElementById("historyContent");
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-history"></i><p>No hay historial para los filtros seleccionados.</p></div>';
        return;
    }

    const grouped = {};
    filtered.forEach(d => {
        const date = d.fecha || "Sin fecha";
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(d);
    });

    let html = "";
    Object.entries(grouped).sort((a, b) => b[0].localeCompare(a[0])).forEach(([date, items]) => {
        items.forEach(d => {
            const enf = ENFERMEDADES.find(e => e.id === d.enfId);
            const zona = ZONAS.find(z => z.id === d.zonaId);
            const suelo = SUELOS_DATA[d.sueloId];
            const user = USERS.find(u => u.id === d.userId);
            const parts = d.fecha ? d.fecha.split("/") : [];
            html += `
            <div class="history-entry">
                <div class="history-date">
                    <span class="day">${parts[0] || '--'}</span>
                    <span class="month">${parts[1] || '--'}</span>
                    <span class="year">${parts[2] || ''}</span>
                </div>
                <div class="history-info">
                    <h3>${enf ? enf.icono + ' ' + enf.nombre : 'Desconocida'}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${zona ? zona.nombre + ', ' + zona.municipio : ''}</p>
                    <p><i class="fas fa-layer-group"></i> Suelo: ${suelo ? suelo.nombre : ''} (pH ${suelo ? suelo.ph : ''})</p>
                    <p><i class="fas fa-clock"></i> ${d.hora} — Registrado por: ${user ? user.name : ''}</p>
                    ${d.productoRecomendado ? `<p><i class="fas fa-pills"></i> Producto: ${d.productoRecomendado.nombre} (${d.productoRecomendado.tipo})</p>` : ''}
                    <div class="history-tags">
                        ${enf ? `<span class="history-tag enf-tag ${enf.tipo}">${enf.tipoLabel}</span>` : ''}
                    </div>
                </div>
                <div style="display:flex;gap:6px">
                    <button class="btn btn-sm btn-secondary" onclick="editDetection(${d.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteDetection(${d.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
        });
    });
    container.innerHTML = html;
}

/* ===== STATS ===== */
function updateStats() {
    document.getElementById("statZonas").textContent = ZONAS.length;
    document.getElementById("statEnfermedades").textContent = detections.length;
    document.getElementById("statFotos").textContent = detections.filter(d => d.photo).length;
    document.getElementById("statTratamientos").textContent = detections.filter(d => d.productoRecomendado).length;
}

/* ===== PERSISTENCE ===== */
function saveDetections() {
    try { localStorage.setItem("focusvid_detections", JSON.stringify(detections)); } catch (e) {}
}
function loadDetections() {
    try {
        const saved = localStorage.getItem("focusvid_detections");
        if (saved) { detections = JSON.parse(saved); nextId = detections.length ? Math.max(...detections.map(d => d.id)) + 1 : 1; }
    } catch (e) {}
}

/* ===== TOAST ===== */
function showToast(msg) {
    const t = document.getElementById("toast");
    document.getElementById("toastMessage").textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3000);
}

document.addEventListener("DOMContentLoaded", init);
