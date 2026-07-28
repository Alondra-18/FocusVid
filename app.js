let users = [
    { id: 0, name: "Juan Pérez", role: "Enólogo" },
    { id: 1, name: "María García", role: "Ingeniera Agrónoma" },
    { id: 2, name: "Carlos López", role: "Técnico Vitivinícola" },
    { id: 3, name: "Ana Martínez", role: "Fitopatóloga" },
    { id: 4, name: "Pedro Sánchez", role: "Administrador de Viñedo" }
];

let ZONAS = [
    {
        id: "parral", nombre: "Valle de Santiago - El Parral", municipio: "Hidalgo del Parral",
        altitud: "1650 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["arcilloso", "franco"],
        descripcion: "Zona histórica vitivinícola con tradición desde el siglo XVII. Clima semiárido con lluvias estacionales.",
        weatherLocation: "Hidalgo del Parral, Chihuahua"
    },
    {
        id: "santacruz", nombre: "Santa Cruz de Rosales", municipio: "Santa Cruz de Rosales",
        altitud: "1400 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["arenoso", "calizo"],
        descripcion: "Región con suelos calcáreos ideales para uvas de mesa y vinificación. Clima continental seco.",
        weatherLocation: "Santa Cruz de Rosales, Chihuahua"
    },
    {
        id: "aldama", nombre: "Aldama", municipio: "Aldama",
        altitud: "1200 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["arenoso", "negro"],
        descripcion: "Zona emergente de viticultura moderna con tecnología de riego por goteo. Suelos arenosos bien drenados.",
        weatherLocation: "Aldama, Chihuahua"
    },
    {
        id: "saucillo", nombre: "Saucillo", municipio: "Saucillo",
        altitud: "1100 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["arcilloso", "arenoso"],
        descripcion: "Región cálida con alta insolación. Producción de uvas para elaboración de vinos tintos robustos.",
        weatherLocation: "Saucillo, Chihuahua"
    },
    {
        id: "valle_allende", nombre: "Valle de Allende", municipio: "Allende",
        altitud: "1550 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["franco", "calizo"],
        descripcion: "Zona con microclima favorable para cabernet sauvignon y tempranillo. Suelos francos con buen drenaje.",
        weatherLocation: "Valle de Allende, Chihuahua"
    },
    {
        id: "jimenez", nombre: "Jiménez", municipio: "Jiménez",
        altitud: "1300 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["negro", "arcilloso"],
        descripcion: "Región con suelos ricos en materia orgánica. Ideal para variedades de uva white y garnacha.",
        weatherLocation: "Jiménez, Chihuahua"
    },
    {
        id: "camargo", nombre: "Camargo", municipio: "Camargo",
        altitud: "1050 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["calizo", "arenoso"],
        descripcion: "Zona árida con alto estrés hídrico que favorece la concentración de azúcares en la uva.",
        weatherLocation: "Camargo, Chihuahua"
    },
    {
        id: "santa_isabel", nombre: "Santa Isabel", municipio: "Santa Isabel",
        altitud: "1619 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["arenoso", "franco"],
        descripcion: "Zona en el Valle de San Buenaventura con producción diversificada de uva de mesa y vinífera. Suelos francos-arenosos con buen drenaje natural.",
        weatherLocation: "Santa Isabel, Chihuahua"
    },
    {
        id: "cuauhtemoc", nombre: "Cuauhtémoc", municipio: "Cuauhtémoc",
        altitud: "2060 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["franco", "negro"],
        descripcion: "Zona alta del estado con clima frío y mayor humedad. Suelos ricos en materia orgánica aptos para variedades de clima templado.",
        weatherLocation: "Cuauhtémoc, Chihuahua"
    },
    {
        id: "delicias", nombre: "Delicias", municipio: "Delicias",
        altitud: "1140 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["arenoso", "arcilloso"],
        descripcion: "Zona agrícola intensiva del sur de Chihuahua. Alto potencial vitivinícola con riego tecnizado y clima cálido-seco.",
        weatherLocation: "Delicias, Chihuahua"
    },
    {
        id: "namiquipa", nombre: "Namiquipa", municipio: "Namiquipa",
        altitud: "1880 msnm",
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos: ["franco", "calizo"],
        descripcion: "Región montañosa con microclimas variados. Tradición agrícola incipiente en viticultura con suelos calizos y franqueados.",
        weatherLocation: "Namiquipa, Chihuahua"
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

const PRODUCTO_IMG = {
    "Alto 10 WG": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Azufre micronizado 80 WDG": "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&h=200&fit=crop",
    "Bicarbonato de potasio": "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=200&fit=crop",
    "Aliette WG": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=300&h=200&fit=crop",
    "Cobre hidróxido 77 WG": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop",
    "Mancozeb 80 WDG": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Signum": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Folicur 250 EW": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Serenade ASO": "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=200&fit=crop",
    "Forum Gold": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=300&h=200&fit=crop",
    "Captan 50 WP": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Quelato de hierro Fe-EDDHA": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=300&h=200&fit=crop",
    "Kelatex Fe": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=300&h=200&fit=crop",
    "Plantafol 30-10-10": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=300&h=200&fit=crop",
    "Basfoliar Ca SL": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=300&h=200&fit=crop",
    "Harina de sangre": "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=200&fit=crop",
    "Caolín (Airvol 580)": "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&h=200&fit=crop",
    "Silicato de potasio": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=300&h=200&fit=crop",
    "Belt SC": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Movento SC": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Biocontrol Neem": "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=200&fit=crop",
    "Coragen SC": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Albardón (aceite mineral)": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Crymax GDA": "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=200&fit=crop",
    "Danisaraba CL": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Spinosad 480 SC": "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=300&h=200&fit=crop",
    "Alika": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Amistar Xtra": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop",
    "Flint 50 WG": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=300&h=200&fit=crop"
};

function getProductoImgClass(nombre, tipo) {
    const t = (tipo || "").toLowerCase();
    const n = (nombre || "").toLowerCase();
    if (t.includes("fungicida") || t.includes("fungi")) return "fungicida";
    if (t.includes("herbicida")) return "herbicida";
    if (t.includes("fertilizante") || t.includes("foliar") || t.includes("quelato") || t.includes("nutrición")) return "fertilizante";
    if (t.includes("acaricida")) return "acaricida";
    if (t.includes("insecticida") || n.includes("insecticida")) return "insecticida";
    if (t.includes("biocontrol") || t.includes("biológico") || t.includes("biofungicida") || t.includes("bioinsecticida")) return "biocontrol";
    if (t.includes("protector") || t.includes("solar") || t.includes("protect")) return "protector";
    if (t.includes("trampa") || t.includes("feromona")) return "trampa";
    if (t.includes("coadyuvante")) return "protector";
    return "fungicida";
}

function getProductoIcon(nombre, tipo) {
    const t = (tipo || "").toLowerCase();
    if (t.includes("fungicida") || t.includes("fungi")) return "fa-shield-virus";
    if (t.includes("herbicida")) return "fa-leaf";
    if (t.includes("fertilizante") || t.includes("foliar") || t.includes("quelato") || t.includes("nutrición")) return "fa-seedling";
    if (t.includes("acaricida")) return "fa-bug";
    if (t.includes("insecticida")) return "fa-bugs";
    if (t.includes("biocontrol") || t.includes("biológico") || t.includes("biofungicida") || t.includes("bioinsecticida")) return "fa-dna";
    if (t.includes("protector") || t.includes("solar") || t.includes("protect")) return "fa-sun";
    if (t.includes("trampa") || t.includes("feromona")) return "fa-crosshairs";
    if (t.includes("coadyuvante")) return "fa-vial";
    return "fa-flask";
}

function renderProductImg(producto, height) {
    const h = height || 100;
    const imgClass = getProductoImgClass(producto.nombre, producto.tipo);
    const icon = getProductoIcon(producto.nombre, producto.tipo);
    const imgUrl = PRODUCTO_IMG[producto.nombre];
    if (imgUrl) {
        return `<div class="product-img-container" style="height:${h}px"><img src="${imgUrl}" alt="${producto.nombre}" onerror="this.parentElement.innerHTML='<div class=\\'product-img-placeholder ${imgClass}\\'><i class=\\'fas ${icon}\\'></i>${producto.nombre}</div>'"></div>`;
    }
    return `<div class="product-img-container" style="height:${h}px"><div class="product-img-placeholder ${imgClass}"><i class="fas ${icon}"></i>${producto.nombre}</div></div>`;
}

const ENFERMEDADES = [
    {
        id: "oidio", nombre: "Oídio (Ceniza)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Enfermedad fúngica causada por Uncinula necator. Se manifiesta como polvo blanco sobre hojas, tallos y frutos. Favorecido por clima cálido y humedad moderada.",
        sintomas: ["Manchas blancas polvorientas en hojas", "Deformación de hojas jóvenes", "Grietas en frutos", "Caída prematura de hojas"],
        condiciones: "Temperatura 21-30°C, humedad 40-70%, alta luz UV",
        productos: [
            { nombre: "Alto 10 WG", tipo: "Fungicida sistémico (difenoconazol + trifloxistrobina)", dosis: "0.25 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Azufre micronizado 80 WDG", tipo: "Fungicida de contacto", dosis: "8-12 kg/ha", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Amistar Xtra", tipo: "Fungicida sistémico (azoxistrobina + ciproconazol)", dosis: "0.375 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Bicarbonato de potasio", tipo: "Fungicida de contacto", dosis: "3-5 g/L", organico: true, proveedor: "AgroChimayo", proveedorUrl: "https://agrochimayo.com/" }
        ]
    },
    {
        id: "mildiu", nombre: "Mildiu (Peronospora)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Enfermedad fúngica causada por Plasmopara viticola. Produce aceitunas falsas y moho blanco en el envés de las hojas. Muy destructiva en condiciones de humedad alta.",
        sintomas: ["Amarillamiento en haz de hojas", "Moho blanco en envés", "Aceitunas falsas en racimos", "Marchitez de punta de sarmón"],
        condiciones: "Temperatura 15-25°C, humedad >85%, lluvia frecuente",
        productos: [
            { nombre: "Aliette WG", tipo: "Fungicida sistémico (fosfito de aluminio)", dosis: "2.5-5 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Cobre hidróxido 77 WG", tipo: "Fungicida de contacto", dosis: "2-3 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Forum Gold", tipo: "Fungicida sistémico (fosfonato de potasio)", dosis: "2-3 mL/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Mancozeb 80 WDG", tipo: "Fungicida de contacto multi-sitio", dosis: "2.5 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" }
        ]
    },
    {
        id: "botrytis", nombre: "Botrytis (Moho Gris)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Causada por Botrytis cinerea. Ataca flores, frutos y sarmón. Produce moho gris con esporulación abundante. Especialmente grave en época de maduración.",
        sintomas: ["Moho gris sobre racimos", "Podredumbre blanda en frutos", "Marchitez de flores", "Manchas acuosas en hojas"],
        condiciones: "Temperatura 15-23°C, humedad >90%, poca ventilación",
        productos: [
            { nombre: "Signum", tipo: "Fungicida sistémico (fludioxonil + piraclostrobina)", dosis: "0.3 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Folicur 250 EW", tipo: "Fungicida sistémico (tebuconazol)", dosis: "0.5 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Serenade ASO", tipo: "Biofungicida (Bacillus subtilis)", dosis: "1-2 g/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Flint 50 WG", tipo: "Fungicida sistémico (trifloxistrobina)", dosis: "0.2 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" }
        ]
    },
    {
        id: "negro_negro", nombre: "Negro Negro (Black Rot)", tipo: "fungica", tipoLabel: "Fúngica",
        icono: "🍄",
        descripcion: "Causada por Guignardia bidwellii. Produce manchas marrones circulares y frutos negros y arrugados. Muy destructiva en climas cálidos y húmedos.",
        sintomas: ["Manchas circulares marrones en hojas", "Puntos negros en manchas (picnidios)", "Frutos negros y momificados", "Secado de escobones"],
        condiciones: "Temperatura 20-30°C, humedad alta, lluvia",
        productos: [
            { nombre: "Mancozeb 80 WDG", tipo: "Fungicida de contacto multi-sitio", dosis: "2.5 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Captan 50 WP", tipo: "Fungicida de contacto", dosis: "2-3 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Forum Gold", tipo: "Fungicida sistémico (fosfonato de potasio)", dosis: "2-3 mL/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" },
            { nombre: "Amistar Xtra", tipo: "Fungicida sistémico (azoxistrobina + ciproconazol)", dosis: "0.375 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fungicidas" }
        ]
    },
    {
        id: "clorosis", nombre: "Clorosis Férrica", tipo: "nutricional", tipoLabel: "Nutricional",
        icono: "🌿",
        descripcion: "Deficiencia de hierro causada por pH alto del suelo. Provoca amarillamiento entre nervaduras de hojas jóvenes. Común en suelos calizos.",
        sintomas: ["Amarillamiento entre nervaduras", "Hojas jóvenes más afectadas", "Nervaduras permanecen verdes", "Crecimiento reducido"],
        condiciones: "Suelo con pH >7.5, exceso de cal, suelos calizos",
        productos: [
            { nombre: "Kelatex Fe", tipo: "Fertilizante foliar (quelato de hierro)", dosis: "3-5 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" },
            { nombre: "Quelato de hierro Fe-EDDHA", tipo: "Fertilizante inorgánico", dosis: "3-5 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" },
            { nombre: "Basfoliar Ca SL", tipo: "Fertilizante foliar (calcio + hierro)", dosis: "2-3 mL/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" },
            { nombre: "Alika", tipo: "Fertilizante inorgánico (sulfato de hierro)", dosis: "5-10 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" }
        ]
    },
    {
        id: "deficiencia_n", nombre: "Deficiencia de Nitrógeno", tipo: "nutricional", tipoLabel: "Nutricional",
        icono: "🌿",
        descripcion: "Falta de nitrógeno que provoca amarillamiento generalizado de hojas viejas, crecimiento lento y producción reducida.",
        sintomas: ["Amarillamiento de hojas viejas", "Crecimiento lento del sarmón", "Racimos pequeños", "Hojas caídas prematuramente"],
        condiciones: "Suelos pobres en MO, lixiviación por lluvia, suelos arenosos",
        productos: [
            { nombre: "Plantafol 30-10-10", tipo: "Fertilizante foliar (nitrógeno alto)", dosis: "15-20 g/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" },
            { nombre: "Basfoliar Ca SL", tipo: "Fertilizante foliar (calcio)", dosis: "10-15 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" },
            { nombre: "Harina de sangre", tipo: "Fertilizante orgánico", dosis: "50-100 g/planta", organico: true, proveedor: "AgroChimayo", proveedorUrl: "https://agrochimayo.com/" },
            { nombre: "Alika", tipo: "Fertilizante foliar (nitrógeno + microelementos)", dosis: "10-15 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" }
        ]
    },
    {
        id: "quemadura", nombre: "Quemadura Solar", tipo: "fisiologico", tipoLabel: "Fisiológica",
        icono: "☀️",
        descripcion: "Daño fisiológico por exposición directa al sol. Provoca quemaduras en frutos expuestos, especialmente en variedades de piel clara.",
        sintomas: ["Manchas blanquecinas en frutos", "Arrugamiento de piel expuesta", "Secado parcial de racimos", "Craqueado de epicarpio"],
        condiciones: "Alta radiación UV, temperaturas >35°C, baja cobertura foliar",
        productos: [
            { nombre: "Caolín (Airvol 580)", tipo: "Protector solar foliar", dosis: "30-50 g/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" },
            { nombre: "Silicato de potasio", tipo: "Fortalecedor foliar (silicio + potasio)", dosis: "2-3 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/fertilizantes-foliares" },
            { nombre: "Sombra parcial (mallas)", tipo: "Protección física", dosis: "30-50% reducción UV", organico: true, proveedor: "AgroChimayo", proveedorUrl: "https://agrochimayo.com/" },
            { nombre: "Bicarbonato de potasio", tipo: "Protector de cutícula", dosis: "3-5 g/L", organico: true, proveedor: "AgroChimayo", proveedorUrl: "https://agrochimayo.com/" }
        ]
    },
    {
        id: "acaros", nombre: "Ácaros (Araña Roja)", tipo: "plaga", tipoLabel: "Plaga / Ácaro",
        icono: "🕷️",
        descripcion: "Plaga causada por Tetranychus urticae. Alimenta del contenido celular de hojas, causando decoloración y defoliación severa.",
        sintomas: ["Punteado amarillo en hojas", "Telarañas finas en envés", "Decoloración plateada", "Caída de hojas en infestaciones severas"],
        condiciones: "Clima cálido y seco, humedad <40%, ausencia de enemigos naturales",
        productos: [
            { nombre: "Belt SC", tipo: "Insecticida/Acaricida (flubendiamide)", dosis: "0.75 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Movento SC", tipo: "Insecticida/Acaricida (spirotetramat)", dosis: "0.3 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Biocontrol Neem", tipo: "Acaricida orgánico (azadiractina)", dosis: "5-10 mL/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Phytoseiulus persimilis", tipo: "Control biológico (ácaro depredador)", dosis: "20-30 individuos/planta", organico: true, proveedor: "Unifrut", proveedorUrl: "https://www.unifrut.com.mx/" }
        ]
    },
    {
        id: "cochinilla", nombre: "Cochinilla", tipo: "plaga", tipoLabel: "Plaga / Ácaro",
        icono: "🐛",
        descripcion: "Plaga causada por Planococcus citri. Se adhiere a troncos y ramas, excretando melaza que favorece fumagina.",
        sintomas: ["Masas algodonosas blancas en tronco", "Melaza pegajosa en superficies", "Hollín negro (fumagina)", "Debilitamiento de la planta"],
        condiciones: "Temperaturas de 20-30°C, protección del viento, baja luminosidad",
        productos: [
            { nombre: "Coragen SC", tipo: "Insecticida sistémico (clorantraniliprol)", dosis: "0.25 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Albardón (aceite mineral)", tipo: "Insecticida de contacto (aceite mineral)", dosis: "15-20 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Jabón potásico", tipo: "Insecticida orgánico", dosis: "10-15 mL/L", organico: true, proveedor: "AgroChimayo", proveedorUrl: "https://agrochimayo.com/" },
            { nombre: "Alika", tipo: "Insecticida sistémico (tiametoxam + lambda-cialotrina)", dosis: "0.25 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" }
        ]
    },
    {
        id: "polilla", nombre: "Polilla de la Vid (Lobesia)", tipo: "plaga", tipoLabel: "Plaga / Ácaro",
        icono: "🦋",
        descripcion: "Plaga causada por Lobesia botrana. Las larvas perforan racimos causando pérdidas significativas en producción y calidad.",
        sintomas: ["Hilos de seda en racimos", "Orificios de entrada en frutos", "Excrementos larvae dentro del racimo", "Pudrición secundaria en heridas"],
        condiciones: "Temperatura 15-30°C, varias generaciones por año",
        productos: [
            { nombre: "Crymax GDA", tipo: "Bioinsecticida (Bacillus thuringiensis kurstaki)", dosis: "1-2 g/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Captura con feromonas", tipo: "Trampa de monitoreo", dosis: "5 trampas/ha", organico: true, proveedor: "Unifrut", proveedorUrl: "https://www.unifrut.com.mx/" },
            { nombre: "Coragen SC", tipo: "Insecticida sistémico (clorantraniliprol)", dosis: "0.15 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Spinosad 480 SC", tipo: "Bioinsecticida (spinosad)", dosis: "0.5-1 mL/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" }
        ]
    },
    {
        id: "gusano_descarnador", nombre: "Gusano Descarnador de la Hoja", tipo: "plaga", tipoLabel: "Plaga / Oruga",
        icono: "🐛",
        descripcion: "Plaga causada por larvas de lepidópteros (Spodoptera spp., Harrisina americana) que se alimentan del parénquima foliar, dejando solo las nervaduras (esqueletización). Afecta la capacidad fotosintética de la vid.",
        sintomas: ["Hojas con apariencia de esqueleto (nervaduras visibles)", "Defoliación progresiva desde el envés", "Larvas visibles en el envés de las hojas", "Reducción de la fotosíntesis y vigor de la planta"],
        condiciones: "Temperatura 25-35°C, clima seco, primavera-verano, maleza abundante en el viñedo",
        productos: [
            { nombre: "Crymax GDA", tipo: "Bioinsecticida (Bacillus thuringiensis kurstaki)", dosis: "1-2 g/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Coragen SC", tipo: "Insecticida sistémico (clorantraniliprol)", dosis: "0.15-0.25 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Belt SC", tipo: "Insecticida (flubendiamide)", dosis: "0.25 mL/L", organico: false, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" },
            { nombre: "Spinosad 480 SC", tipo: "Bioinsecticida (spinosad)", dosis: "0.5-1 mL/L", organico: true, proveedor: "Fertilizantes Tepeyac", proveedorUrl: "https://www.ftepeyac.com.mx/insecticidas" }
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
let currentPhotos = [];
let nextId = 1;
let nextUserId = 5;
let weatherLoaded = false;
let weatherInterval = null;
let weatherCountdown = 300;
let weatherCountdownInterval = null;
const WEATHER_REFRESH_SECONDS = 300;
let customZonas = [];
let nextZoneId = 100;
let zoneModalMap = null;
let zoneModalMarker = null;
const DEFAULT_ZONE_IDS = ["parral","santacruz","aldama","saucillo","valle_allende","jimenez","camargo","santa_isabel","cuauhtemoc","delicias","namiquipa"];

function loadCustomZonas() {
    try {
        const saved = localStorage.getItem("focusvid_custom_zonas");
        if (saved) {
            customZonas = JSON.parse(saved);
            nextZoneId = customZonas.length ? Math.max(...customZonas.map(z => parseInt(z.id.replace("custom_","")) || 0)) + 1 : 100;
            ZONAS = [...ZONAS.filter(z => DEFAULT_ZONE_IDS.includes(z.id)), ...customZonas];
        }
    } catch (e) {}
}

function saveCustomZonas() {
    try { localStorage.setItem("focusvid_custom_zonas", JSON.stringify(customZonas)); } catch (e) {}
}

function isCustomZone(id) {
    return !DEFAULT_ZONE_IDS.includes(id);
}

function getAllZoneCoords() {
    const builtIn = {
        parral:{lat:26.93,lng:-105.82}, santacruz:{lat:28.19,lng:-106.04},
        aldama:{lat:28.83,lng:-105.91}, saucillo:{lat:28.03,lng:-105.33},
        valle_allende:{lat:26.93,lng:-105.42}, jimenez:{lat:27.13,lng:-104.93},
        camargo:{lat:27.68,lng:-105.17}, santa_isabel:{lat:28.3422,lng:-106.3683},
        cuauhtemoc:{lat:28.40,lng:-106.85}, delicias:{lat:28.18,lng:-105.47},
        namiquipa:{lat:29.25,lng:-106.46}
    };
    ZONAS.forEach(z => {
        if (z.lat && z.lng) builtIn[z.id] = { lat: z.lat, lng: z.lng };
    });
    return builtIn;
}

window.openZoneModal = function(editId) {
    const modal = document.getElementById("zoneModal");
    const form = document.getElementById("zoneForm");
    const title = document.getElementById("zoneModalTitle");
    form.reset();
    document.getElementById("zoneEditId").value = "";

    document.querySelectorAll('input[name="zoneSuelos"]').forEach(cb => cb.checked = false);

    if (editId) {
        const zona = ZONAS.find(z => z.id === editId);
        if (!zona) return;
        title.textContent = "Editar Zona";
        document.getElementById("zoneEditId").value = zona.id;
        document.getElementById("zoneNombre").value = zona.nombre;
        document.getElementById("zoneMunicipio").value = zona.municipio;
        document.getElementById("zoneAltitud").value = zona.altitud.replace(" msnm","");
        document.getElementById("zoneDescripcion").value = zona.descripcion || "";
        document.getElementById("zoneWeatherLocation").value = zona.weatherLocation || "";
        const lat = getLat(zona.id);
        const lng = getLng(zona.id);
        document.getElementById("zoneLat").value = lat;
        document.getElementById("zoneLng").value = lng;
        if (zona.suelos) {
            zona.suelos.forEach(s => {
                const cb = document.querySelector(`input[name="zoneSuelos"][value="${s}"]`);
                if (cb) cb.checked = true;
            });
        }
        initZoneModalMap(lat, lng);
    } else {
        title.textContent = "Agregar Zona";
        initZoneModalMap(28.0, -106.0);
    }
    modal.classList.add("show");
};

function initZoneModalMap(lat, lng) {
    setTimeout(() => {
        const container = document.getElementById("zoneModalMap");
        if (!container) return;
        if (zoneModalMap) { zoneModalMap.remove(); zoneModalMap = null; }
        zoneModalMap = L.map(container).setView([lat, lng], 8);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; OpenStreetMap', maxZoom: 18
        }).addTo(zoneModalMap);

        const icon = L.divIcon({
            className: "custom-pin",
            html: '<div style="width:16px;height:16px;background:#e74c3c;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.4)"></div>',
            iconSize: [16, 16], iconAnchor: [8, 8], popupAnchor: [0, -12]
        });

        zoneModalMarker = L.marker([lat, lng], { icon, draggable: true }).addTo(zoneModalMap);
        zoneModalMarker.bindPopup("Arrastra para ubicar la zona").openPopup();

        zoneModalMarker.on("dragend", function(e) {
            const pos = e.target.getLatLng();
            document.getElementById("zoneLat").value = pos.lat.toFixed(4);
            document.getElementById("zoneLng").value = pos.lng.toFixed(4);
        });

        zoneModalMap.on("click", function(e) {
            const pos = e.latlng;
            zoneModalMarker.setLatLng(pos);
            document.getElementById("zoneLat").value = pos.lat.toFixed(4);
            document.getElementById("zoneLng").value = pos.lng.toFixed(4);
        });

        setTimeout(() => zoneModalMap.invalidateSize(), 100);
    }, 100);
}

function setupZoneModal() {
    document.getElementById("btnAddZone").addEventListener("click", () => openZoneModal());
    document.getElementById("closeZoneModal").addEventListener("click", () => document.getElementById("zoneModal").classList.remove("show"));
    document.getElementById("cancelZoneEdit").addEventListener("click", () => document.getElementById("zoneModal").classList.remove("show"));
    document.getElementById("zoneModal").addEventListener("click", e => { if (e.target === e.currentTarget) e.target.classList.remove("show"); });
    document.getElementById("zoneForm").addEventListener("submit", saveZone);
}

function saveZone(e) {
    e.preventDefault();
    const editId = document.getElementById("zoneEditId").value;
    const nombre = document.getElementById("zoneNombre").value.trim();
    const municipio = document.getElementById("zoneMunicipio").value.trim();
    const altitud = document.getElementById("zoneAltitud").value.trim();
    const descripcion = document.getElementById("zoneDescripcion").value.trim();
    const weatherLocation = document.getElementById("zoneWeatherLocation").value.trim();
    const lat = parseFloat(document.getElementById("zoneLat").value);
    const lng = parseFloat(document.getElementById("zoneLng").value);
    const suelos = Array.from(document.querySelectorAll('input[name="zoneSuelos"]:checked')).map(cb => cb.value);

    if (!nombre || !municipio) { showToast("Nombre y municipio son obligatorios"); return; }
    if (isNaN(lat) || isNaN(lng)) { showToast("Coordenadas inválidas"); return; }
    if (suelos.length === 0) { showToast("Seleccione al menos un tipo de suelo"); return; }

    const id = editId || `custom_${nextZoneId++}`;
    const zonaData = {
        id, nombre, municipio,
        altitud: `${altitud} msnm`,
        clima: { temp: "—", humedad: "—", viento: "—", uv: "—" },
        suelos, descripcion,
        weatherLocation: weatherLocation || `${municipio}, Chihuahua`,
        lat, lng, custom: true
    };

    if (editId) {
        const idx = ZONAS.findIndex(z => z.id === editId);
        if (idx !== -1) {
            zonaData.clima = ZONAS[idx].clima || zonaData.clima;
            ZONAS[idx] = zonaData;
        }
        const cidx = customZonas.findIndex(z => z.id === editId);
        if (cidx !== -1) customZonas[cidx] = zonaData;
    } else {
        ZONAS.push(zonaData);
        customZonas.push(zonaData);
    }

    saveCustomZonas();
    loadZonas();
    renderMap();
    updateStats();
    document.getElementById("zoneModal").classList.remove("show");
    showToast(editId ? "Zona actualizada" : "Zona agregada");

    if (!editId) fetchWeatherForZone(zonaData);
}

window.deleteZone = function(id) {
    if (!isCustomZone(id)) { showToast("No se pueden eliminar zonas predeterminadas"); return; }
    if (!confirm("¿Está seguro de eliminar esta zona?")) return;
    ZONAS = ZONAS.filter(z => z.id !== id);
    customZonas = customZonas.filter(z => z.id !== id);
    saveCustomZonas();
    loadZonas();
    renderMap();
    updateStats();
    showToast("Zona eliminada");
};

window.editZone = function(id) {
    openZoneModal(id);
};

const WMO_CODES = {
    0:"Despejado",1:"Principalmente despejado",2:"Parcialmente nublado",3:"Nublado",
    45:"Niebla",48:"Niebla con escarcha",51:"Llovizna ligera",53:"Llovizna moderada",
    55:"Llovizna densa",56:"Llovizna helada ligera",57:"Llovizna helada densa",
    61:"Lluvia ligera",63:"Lluvia moderada",65:"Lluvia fuerte",
    66:"Lluvia helada ligera",67:"Lluvia helada fuerte",
    71:"Nevada ligera",73:"Nevada moderada",75:"Nevada fuerte",
    77:"Granizo ligero",80:"Chubascos ligeros",81:"Chubascos moderados",
    82:"Chubascos fuertes",85:"Chubascos de nieve ligeros",86:"Chubascos de nieve fuertes",
    95:"Tormenta",96:"Tormenta con granizo ligero",99:"Tormenta con granizo fuerte"
};

function getLat(id) {
    const c = { parral:26.93, santacruz:28.19, aldama:28.83, saucillo:28.03, valle_allende:26.93, jimenez:27.13, camargo:27.68, santa_isabel:28.3422, cuauhtemoc:28.40, delicias:28.18, namiquipa:29.25 };
    const zona = ZONAS.find(z => z.id === id);
    if (zona && zona.lat) return zona.lat;
    return c[id] || 28.0;
}
function getLng(id) {
    const c = { parral:-105.82, santacruz:-106.04, aldama:-105.91, saucillo:-105.33, valle_allende:-105.42, jimenez:-104.93, camargo:-105.17, santa_isabel:-106.3683, cuauhtemoc:-106.85, delicias:-105.47, namiquipa:-106.46 };
    const zona = ZONAS.find(z => z.id === id);
    if (zona && zona.lng) return zona.lng;
    return c[id] || -106.0;
}

function applyWeatherToZone(zona, data) {
    const c = data.current;
    if (!c) return;
    zona.clima.temp = `${Math.round(c.temperature_2m)}°C`;
    zona.clima.humedad = `${c.relative_humidity_2m}%`;
    zona.clima.viento = `${Math.round(c.wind_speed_10m)} km/h`;
    zona.clima.uv = c.uv_index != null ? String(Math.round(c.uv_index)) : "—";
    zona.clima.weatherDesc = WMO_CODES[c.weather_code] || "—";
    zona.clima.feelsLike = `${Math.round(c.apparent_temperature)}°C`;
    zona.clima.lastUpdate = new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
}

async function fetchWeatherForZone(zona) {
    try {
        const lat = getLat(zona.id);
        const lng = getLng(zona.id);
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index,weather_code,apparent_temperature&timezone=America/Chihuahua`);
        if (!res.ok) return;
        const data = await res.json();
        applyWeatherToZone(zona, data);
        renderZoneCards();
        renderMap();
    } catch (e) {}
}

/* ===== WEATHER API ===== */
async function fetchWeather() {
    const loadingEl = document.getElementById("weatherLoading");
    if (loadingEl) loadingEl.style.display = "flex";

    const fetches = ZONAS.map(async (zona) => {
        try {
            const lat = getLat(zona.id);
            const lng = getLng(zona.id);
            const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index,weather_code,apparent_temperature&timezone=America/Chihuahua`);
            if (!res.ok) return;
            const data = await res.json();
            applyWeatherToZone(zona, data);
        } catch (e) {
            console.warn(`Weather fetch failed for ${zona.municipio}:`, e);
        }
    });

    await Promise.allSettled(fetches);
    weatherLoaded = true;
    if (loadingEl) loadingEl.style.display = "none";

    renderZoneCards();
    renderMap();
    renderDetectionsWeather();
    updateWeatherTimestamp();
    startWeatherCountdown();
}

function updateWeatherTimestamp() {
    const el = document.getElementById("weatherTimestamp");
    if (el) {
        const now = new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        el.textContent = `Última actualización: ${now}`;
    }
}

function startWeatherCountdown() {
    weatherCountdown = WEATHER_REFRESH_SECONDS;
    if (weatherCountdownInterval) clearInterval(weatherCountdownInterval);
    weatherCountdownInterval = setInterval(() => {
        weatherCountdown--;
        const el = document.getElementById("weatherCountdown");
        if (el) {
            const min = Math.floor(weatherCountdown / 60);
            const sec = weatherCountdown % 60;
            el.textContent = `${min}:${String(sec).padStart(2, "0")}`;
        }
        if (weatherCountdown <= 0) {
            clearInterval(weatherCountdownInterval);
            refreshWeather();
        }
    }, 1000);
}

function startWeatherAutoRefresh() {
    if (weatherInterval) clearInterval(weatherInterval);
    weatherInterval = setInterval(() => refreshWeather(), WEATHER_REFRESH_SECONDS * 1000);
}

window.refreshWeather = async function() {
    const btn = document.getElementById("btnRefreshWeather");
    if (btn) { btn.classList.add("spinning"); btn.disabled = true; }
    await fetchWeather();
    if (btn) { btn.classList.remove("spinning"); btn.disabled = false; }
};

function renderDetectionsWeather() {
    document.querySelectorAll(".detection-weather-live, .analysis-weather-live").forEach(el => {
        const zonaId = el.dataset.zonaId;
        const zona = ZONAS.find(z => z.id === zonaId);
        if (zona && zona.clima.lastUpdate) {
            el.innerHTML = `<span class="weather-live-badge">🔴 EN VIVO</span> ${zona.clima.temp} | 💧 ${zona.clima.humedad} | 💨 ${zona.clima.viento}`;
        }
    });
}

function init() {
    loadUsers();
    loadUsersFromStorage();
    loadCustomZonas();
    loadZonas();
    loadEnfermedadesSelect();
    setupNavigation();
    setupUpload();
    setupFilters();
    setupEditModal();
    setupUserModal();
    setupZoneModal();
    loadDetections();
    updateStats();
    renderMap();
    renderRecentDetections();
    renderAllDetections();
    renderUsers();
    fetchWeather();
    startWeatherAutoRefresh();
}

/* ===== USERS ===== */
function loadUsersFromStorage() {
    try {
        const saved = localStorage.getItem("focusvid_users");
        if (saved) {
            users = JSON.parse(saved);
            nextUserId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
        }
    } catch (e) {}
}

function saveUsers() {
    try { localStorage.setItem("focusvid_users", JSON.stringify(users)); } catch (e) {}
}

function loadUsers() {
    const sel = document.getElementById("userSelect");
    sel.innerHTML = "";
    users.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.id;
        opt.textContent = `${u.name} (${u.role})`;
        sel.appendChild(opt);
    });
}

function renderUsers() {
    const grid = document.getElementById("usersGrid");
    if (users.length === 0) {
        grid.innerHTML = '<div class="empty-state"><i class="fas fa-users"></i><p>No hay usuarios registrados.</p></div>';
        return;
    }
    grid.innerHTML = users.map(u => `
        <div class="user-card" id="user-card-${u.id}">
            <div class="user-card-avatar">${u.name.split(" ").map(n => n[0]).join("").substring(0, 2)}</div>
            <h3>${u.name}</h3>
            <p>${u.role}</p>
            <div class="user-card-actions">
                <button class="btn btn-sm btn-secondary" onclick="editUser(${u.id})"><i class="fas fa-edit"></i> Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteUser(${u.id})"><i class="fas fa-trash"></i> Eliminar</button>
            </div>
        </div>
    `).join("");
}

window.editUser = function(id) {
    const u = users.find(u => u.id === id);
    if (!u) return;
    document.getElementById("userModalTitle").textContent = "Editar Usuario";
    document.getElementById("editUserId").value = u.id;
    document.getElementById("userName").value = u.name;
    document.getElementById("userRole").value = u.role;
    document.getElementById("userModal").classList.add("show");
};

window.deleteUser = function(id) {
    if (users.length <= 1) { showToast("Debe haber al menos un usuario registrado"); return; }
    if (!confirm("¿Está seguro de eliminar este usuario?")) return;
    users = users.filter(u => u.id !== id);
    saveUsers();
    loadUsers();
    renderUsers();
    showToast("Usuario eliminado");
};

/* ===== USER MODAL ===== */
function setupUserModal() {
    document.getElementById("btnAddUser").addEventListener("click", () => {
        if (users.length >= 5) { showToast("Máximo 5 usuarios permitidos"); return; }
        document.getElementById("userModalTitle").textContent = "Agregar Usuario";
        document.getElementById("userForm").reset();
        document.getElementById("editUserId").value = "";
        document.getElementById("userModal").classList.add("show");
    });
    document.getElementById("closeUserModal").addEventListener("click", () => document.getElementById("userModal").classList.remove("show"));
    document.getElementById("cancelUserEdit").addEventListener("click", () => document.getElementById("userModal").classList.remove("show"));
    document.getElementById("userModal").addEventListener("click", e => { if (e.target === e.currentTarget) e.target.classList.remove("show"); });
    document.getElementById("userForm").addEventListener("submit", saveUser);
}

function saveUser(e) {
    e.preventDefault();
    const editId = document.getElementById("editUserId").value;
    const name = document.getElementById("userName").value.trim();
    const role = document.getElementById("userRole").value;
    if (!name || !role) { showToast("Complete todos los campos"); return; }

    if (editId) {
        const idx = users.findIndex(u => u.id === parseInt(editId));
        if (idx !== -1) { users[idx].name = name; users[idx].role = role; }
    } else {
        if (users.length >= 5) { showToast("Máximo 5 usuarios permitidos"); return; }
        users.push({ id: nextUserId++, name, role });
    }
    saveUsers();
    loadUsers();
    renderUsers();
    document.getElementById("userModal").classList.remove("show");
    showToast(editId ? "Usuario actualizado" : "Usuario agregado");
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
    const previewGrid = document.getElementById("photoPreviewGrid");

    area.addEventListener("click", () => input.click());
    area.addEventListener("dragover", e => { e.preventDefault(); area.classList.add("dragover"); });
    area.addEventListener("dragleave", () => area.classList.remove("dragover"));
    area.addEventListener("drop", e => {
        e.preventDefault();
        area.classList.remove("dragover");
        handleFiles(e.dataTransfer.files);
    });
    input.addEventListener("change", e => handleFiles(e.target.files));

    document.getElementById("btnAnalyze").addEventListener("click", analyzePhoto);
    document.getElementById("detectionForm").addEventListener("submit", saveDetection);
    document.getElementById("btnNewDetection").addEventListener("click", () => {
        document.getElementById("uploadCard").scrollIntoView({ behavior: "smooth" });
    });

    function handleFiles(files) {
        const remaining = 5 - currentPhotos.length;
        if (remaining <= 0) { showToast("Máximo 5 fotografías permitidas"); return; }
        const toAdd = Array.from(files).slice(0, remaining);
        toAdd.forEach(file => {
            if (!file.type.startsWith("image/")) return;
            const reader = new FileReader();
            reader.onload = e => {
                currentPhotos.push(e.target.result);
                renderPhotoPreview();
            };
            reader.readAsDataURL(file);
        });
        if (files.length > remaining) showToast(`Solo se agregaron ${remaining} de ${files.length} fotos (máx. 5)`);
    }

    function renderPhotoPreview() {
        if (currentPhotos.length === 0) {
            previewGrid.style.display = "none";
            area.style.display = "block";
            currentDetection.photos = [];
            currentDetection.photo = null;
            document.getElementById("btnSaveDetection").disabled = true;
            document.getElementById("analysisCard").style.display = "none";
            return;
        }
        previewGrid.style.display = "grid";
        area.style.display = currentPhotos.length >= 5 ? "none" : "block";
        previewGrid.innerHTML = currentPhotos.map((src, i) => `
            <div class="photo-preview-item">
                <img src="${src}" alt="Foto ${i + 1}">
                <button type="button" class="btn-remove-photo" onclick="removePhoto(${i})"><i class="fas fa-times"></i></button>
            </div>
        `).join("");
        currentDetection.photos = [...currentPhotos];
        currentDetection.photo = currentPhotos[0];
    }

    window.removePhoto = function(index) {
        currentPhotos.splice(index, 1);
        renderPhotoPreview();
    };
}

/* ===== ANALYZE ===== */
function analyzePhoto() {
    if (!currentDetection.photo) { showToast("Primero suba al menos una fotografía"); return; }
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

    const photosHtml = currentDetection.photos && currentDetection.photos.length > 0
        ? `<div class="analysis-photos-grid">${currentDetection.photos.map((p, i) => `<img src="${p}" alt="Foto ${i + 1}">`).join("")}</div>`
        : `<img src="${currentDetection.photo}" alt="Foto analizada">`;

    const weatherBadge = zona.clima.lastUpdate
        ? `<span class="weather-live-badge">🔴 EN VIVO</span>`
        : `<span class="weather-static-badge">📊 Datos estáticos</span>`;

    const card = document.getElementById("analysisCard");
    card.style.display = "block";
    document.getElementById("analysisResult").innerHTML = `
        <div class="analysis-left">
            ${photosHtml}
            <div class="analysis-item"><h4>Fecha y Hora</h4><p>${currentDetection.fecha} - ${currentDetection.hora}</p></div>
        </div>
        <div class="analysis-right">
            <div class="analysis-item"><h4>Zona Detectada</h4><p>${zona.nombre}, ${zona.municipio}</p></div>
            <div class="analysis-item"><h4>Clima Actual ${weatherBadge}</h4>
                <p>🌡 ${zona.clima.temp} ${zona.clima.feelsLike ? `(Sensación: ${zona.clima.feelsLike})` : ''} | 💧 ${zona.clima.humedad} | 💨 ${zona.clima.viento} | ☀️ UV ${zona.clima.uv}</p>
                ${zona.clima.weatherDesc ? `<p style="font-size:11px;color:#555;margin-top:2px">Condición: ${zona.clima.weatherDesc}</p>` : ''}
                ${zona.clima.lastUpdate ? `<p style="font-size:10px;color:#999;margin-top:2px">Última observación: ${zona.clima.lastUpdate}</p>` : ''}
                <p style="font-size:10px;color:#999;margin-top:2px">Fuente: <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a> (The Weather Channel / NOAA)</p>
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
                ${renderProductImg(recommended, 100)}
                <div class="product-card">
                    <span class="prod-type">${recommended.tipo}</span>
                    <h4>${recommended.nombre}</h4>
                    <p style="font-size:12px">Dosis: ${recommended.dosis}</p>
                    <p style="font-size:11px;color:#555">${recommended.orgánico ? "✅ Producto orgánico" : "⚗️ Producto inorgánico/sintético"}</p>
                    ${recommended.proveedor ? `<p style="font-size:10px;color:#1a3a5c;margin-top:4px"><i class="fas fa-store"></i> Proveedor: <a href="${recommended.proveedorUrl}" target="_blank" rel="noopener" style="color:#1a3a5c;font-weight:600">${recommended.proveedor}</a></p>` : ''}
                </div>
            </div>
            <div class="analysis-item"><h4>Nutrientes del Suelo</h4>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:4px">
                    ${Object.entries(suelo.nutrientes).map(([k, v]) => `<span style="font-size:11px"><b>${k.toUpperCase()}:</b> ${v}</span>`).join("")}
                </div>
            </div>
            <div class="analysis-item" style="margin-top:8px">
                <p style="font-size:10px;color:#999">Todos los productos están disponibles en: <a href="https://www.ftepeyac.com.mx/" target="_blank" rel="noopener" style="color:#1a3a5c">Fertilizantes Tepeyac</a> | <a href="https://www.unifrut.com.mx/" target="_blank" rel="noopener" style="color:#1a3a5c">Unifrut</a> | <a href="https://agrochimayo.com/" target="_blank" rel="noopener" style="color:#1a3a5c">AgroChimayo</a></p>
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
    document.getElementById("photoPreviewGrid").style.display = "none";
    document.getElementById("photoPreviewGrid").innerHTML = "";
    document.getElementById("uploadArea").style.display = "block";
    document.getElementById("analysisCard").style.display = "none";
    document.getElementById("btnSaveDetection").disabled = true;
    currentDetection = {};
    currentPhotos = [];
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
        const weatherLine = z.clima.lastUpdate
            ? `<span style="font-size:11px;color:#e74c3c;font-weight:600">🔴 EN VIVO: ${z.clima.temp} | 💧 ${z.clima.humedad} | 💨 ${z.clima.viento}</span><br>`
            : `<span style="font-size:11px">Cargando clima...</span><br>`;
        marker.bindPopup(`
            <div style="font-family:Inter,sans-serif;min-width:200px">
                <strong style="font-size:13px;color:#1a3a5c">${z.nombre}</strong><br>
                <span style="font-size:11px;color:#555">${z.municipio} — ${z.altitud}</span><br>
                ${weatherLine}
                <span style="font-size:10px;color:#999">Fuente: Open-Meteo</span><br>
                <a href="#" onclick="event.preventDefault();showZoneDetail('${z.id}')" style="font-size:11px;color:#1a3a5c;font-weight:600">Ver detalles →</a>
            </div>
        `);
        marker.bindTooltip(z.municipio, { permanent: true, direction: "top", offset: [0, -8], className: "zone-label" });
    });

    setTimeout(() => map.invalidateSize(), 100);
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
        const soils = z.suelos.map(s => SUELOS_DATA[s]).filter(Boolean);
        const weatherBadge = z.clima.lastUpdate
            ? `<span class="weather-live-badge">🔴 EN VIVO</span>`
            : (weatherLoaded ? `<span class="weather-static-badge">⏳ Sin datos</span>` : `<span class="weather-loading-badge">⏳ Cargando...</span>`);
        const custom = isCustomZone(z.id);
        return `
        <div class="zone-card ${custom ? 'zone-card-custom' : ''}" id="zone-${z.id}">
            <div class="zone-card-header">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
                    <div>
                        <h3>${z.nombre} ${custom ? '<span style="font-size:9px;background:#27ae60;color:#fff;padding:1px 5px;border-radius:3px;vertical-align:middle">Personalizada</span>' : ''}</h3>
                        <p>${z.municipio} — Altitud: ${z.altitud}</p>
                    </div>
                    ${custom ? `
                    <div style="display:flex;gap:4px;flex-shrink:0">
                        <button class="btn btn-sm btn-secondary" onclick="editZone('${z.id}')" title="Editar zona"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-sm btn-danger" onclick="deleteZone('${z.id}')" title="Eliminar zona"><i class="fas fa-trash"></i></button>
                    </div>` : ''}
                </div>
            </div>
            <div class="zone-card-body">
                <p style="font-size:13px;color:#555;margin-bottom:12px">${z.descripcion}</p>
                <div class="zone-climate">
                    <div class="climate-item"><i class="fas fa-thermometer-half"></i><span class="val">${z.clima.temp}</span><span class="lbl">Temperatura</span></div>
                    <div class="climate-item"><i class="fas fa-tint"></i><span class="val">${z.clima.humedad}</span><span class="lbl">Humedad</span></div>
                    <div class="climate-item"><i class="fas fa-wind"></i><span class="val">${z.clima.viento}</span><span class="lbl">Viento</span></div>
                    <div class="climate-item"><i class="fas fa-sun"></i><span class="val">UV ${z.clima.uv}</span><span class="lbl">Radiación UV</span></div>
                </div>
                <div style="text-align:center;margin:6px 0">${weatherBadge}</div>
                ${z.clima.weatherDesc ? `<p style="font-size:11px;color:#555;text-align:center;margin-bottom:6px">Condición: ${z.clima.weatherDesc}</p>` : ''}
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
                            ${renderProductImg(p, 70)}
                            <b>${p.nombre}</b> — ${p.tipo}<br>
                            Dosis: ${p.dosis} ${p.orgánico ? '🌱' : '⚗️'}
                            ${p.proveedor ? `<br><a href="${p.proveedorUrl}" target="_blank" rel="noopener" style="color:#1a3a5c;font-size:10px"><i class="fas fa-store"></i> ${p.proveedor}</a>` : ''}
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
        const img = d.photos && d.photos.length > 0 ? d.photos[0] : d.photo;
        return `
        <div class="detection-list-item">
            <img src="${img}" alt="detección">
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
    const user = users.find(u => u.id === d.userId);
    const photosHtml = d.photos && d.photos.length > 1
        ? `<div class="detection-photos">${d.photos.map((p, i) => `<img src="${p}" alt="Foto ${i + 1}">`).join("")}</div>`
        : `<img src="${d.photo}" alt="detección">`;

    const weatherLine = zona && zona.clima.lastUpdate
        ? `<span class="weather-live-badge">🔴 EN VIVO</span> ${zona.clima.temp} | 💧 ${zona.clima.humedad}`
        : '';

    return `
    <div class="detection-card" id="detection-${d.id}">
        ${photosHtml}
        <div class="detection-card-body">
            <h3>${enf ? enf.icono + ' ' + enf.nombre : 'Enfermedad desconocida'}</h3>
            <div class="detection-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${zona ? zona.nombre.split(" - ")[0] : ''}</span>
                <span><i class="fas fa-layer-group"></i> ${d.sueloId ? SUELOS_DATA[d.sueloId].nombre : ''}</span>
                <span><i class="fas fa-calendar"></i> ${d.fecha}</span>
                <span><i class="fas fa-clock"></i> ${d.hora}</span>
                <span><i class="fas fa-user"></i> ${user ? user.name : ''}</span>
            </div>
            ${weatherLine ? `<div style="margin:4px 0"><span style="font-size:11px">${weatherLine}</span></div>` : ''}
            ${enf ? `<span class="enf-tag ${enf.tipo}">${enf.tipoLabel}</span>` : ''}
            ${d.productoRecomendado ? `
            <div style="margin-top:8px">
                ${renderProductImg(d.productoRecomendado, 80)}
                <div class="product-card">
                    <span class="prod-type">${d.productoRecomendado.tipo}</span>
                    <h4>${d.productoRecomendado.nombre}</h4>
                    <p style="font-size:11px">Dosis: ${d.productoRecomendado.dosis}</p>
                    ${d.productoRecomendado.proveedor ? `<a href="${d.productoRecomendado.proveedorUrl}" target="_blank" rel="noopener" style="font-size:10px;color:#1a3a5c"><i class="fas fa-store"></i> ${d.productoRecomendado.proveedor}</a>` : ''}
                </div>
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
            const user = users.find(u => u.id === d.userId);
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
                    ${zona && zona.clima.lastUpdate ? `<p><i class="fas fa-cloud-sun"></i> Clima al momento: ${zona.clima.temp} | 💧 ${zona.clima.humedad}</p>` : ''}
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
