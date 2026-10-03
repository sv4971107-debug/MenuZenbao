/**
 * ZENBAO - Data Store, WebP Compression & Firebase Cloud Sync
 */

const ZENBAO_STORAGE_KEY = 'zenbao_menu_data_v1';
const ZENBAO_HISTORY_KEY = 'zenbao_menu_history_v1';

// Datos predeterminados de la página
const DEFAULT_ZENBAO_DATA = {
    categories: [
        { id: 'especialidades', name: 'Especialidades', subtitle: '★ Lo Mejor de Zenbao', image: 'img/categorias/especialidades.jpg', isSpecial: true, href: 'especialidades.html' },
        { id: 'entradas', name: 'Entradas', subtitle: 'Para Iniciar la Experiencia', image: 'img/categorias/entradas.jpg', isSpecial: false, href: 'entradas.html' },
        { id: 'clasicos', name: 'Clásicos', subtitle: 'Los Favoritos de Siempre', image: 'img/categorias/Clasicos.jpg', isSpecial: false, href: 'clasicos.html' },
        { id: 'naturales', name: 'Naturales', subtitle: 'Frescos y Deliciosos', image: 'img/categorias/Natural.jpg', isSpecial: false, href: 'naturales.html' },
        { id: 'horneados', name: 'Horneados', subtitle: 'Sabor Gratinado', image: 'img/categorias/Horno.jpg', isSpecial: false, href: 'horneados.html' },
        { id: 'boneless', name: 'Boneless y Alitas', subtitle: 'Crujientes y Bañados', image: 'img/categorias/bonelescate.jpg', isSpecial: false, href: 'boneless.html' },
        { id: 'bebidas', name: 'Bebidas', subtitle: 'Refrescos y Jarras', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800', isSpecial: false, href: 'bebidas.html' }
    ],
    products: {
        clasicos: [
            { id: 'c1', name: 'Mar & Tierra', price: '$129.00', description: '250grs de arroz, aguacate, queso Philadelphia, res y camarón.', image: 'img/clasicos/Mar y Tierra (1).jpg' },
            { id: 'c2', name: 'California Spicy', price: '$179.00', description: '250grs de arroz, aguacate, Philadelphia, camarón y pepino. Por fuera Philadelphia, kanicama spicy y salsa de anguila.', image: 'img/clasicos/California Spicy (2) (2).jpg' },
            { id: 'c3', name: 'Inda Roll', price: '$189.00', description: '250grs de arroz, aguacate, queso philadelphia, res y camarón empanizado. Coronado de Tampico, salsa anguila y chipotle.', image: 'img/especialidades/Inda Roll (1).jpg' },
            { id: 'c4', name: 'Cordón Blue', price: '$169.00', description: '250grs de arroz, aguacate, Philadelphia, pollo y tocino. Por fuera gratinado de quesos.', image: 'img/clasicos/Cordon Blue (1).jpg' },
            { id: 'c5', name: 'Three Cheeses', price: '$189.00', description: '250grs de arroz, aguacate, philadelphia, res y camaron. Por fuera queso americano, chester y philadelphia.', image: 'img/clasicos/Three Chesees (1).jpg' },
            { id: 'c6', name: 'Guamuchilito', price: '$169.00', description: '250grs de arroz, aguacate, Philadelphia, camarón, pulpo y Surimi. Por fuera Tampico, aguacate y salsa de anguila.', image: 'img/clasicos/Guamuchilito (1).jpg' }
        ],
        especialidades: [
            { id: 'e1', name: 'Cheese Chipotle', price: '$189.00', description: '250grs de arroz, aguacate, queso Philadelphia, camarón empanizado y tocino. Bañado en cremosa salsa de queso chipotle de la casa y toque de cebollín.', image: 'img/especialidades/Cheese Chipotle (1).jpg' },
            { id: 'e2', name: 'Beef Roll', price: '$189.00', description: '250grs de arroz, aguacate, queso Philadelphia y filete de res sazonado al sartén. Empanizado crujiente y bañado en aderezo de la casa.', image: 'img/especialidades/Beef Roll (1).jpg' },
            { id: 'e3', name: 'Mouyou', price: '$189.00', description: '250grs de arroz, philadelphia, aguacate, res, pepino y surimi. Por fuera philadelphia, surimi, tempura bañado en anguila spicy y cebollin.', image: 'img/especialidades/Mouyou (1).jpg' },
            { id: 'e4', name: 'Inda Roll', price: '$189.00', description: '250grs de arroz, aguacate, queso philadelphia, res y camarón empanizado. Coronado de Tampico, salsa anguila y chipotle.', image: 'img/especialidades/Inda Roll (1).jpg' },
            { id: 'e5', name: 'Bao Roll', price: '$219.00', description: '250grs de arroz, aguacate, queso philadelphia, res y camarón. Por fuera gratinado con queso americano, Chester y Philadelphia. Coronado con topping de camarón empanizado, aderezo chipotle y cambray. Bañado en salsa de anguila y cebollín.', image: 'img/especialidades/Bao Roll (1).jpg' },
            { id: 'e6', name: 'Zen Especial', price: '$219.00', description: '250grs de arroz, aguacate, queso philadelphia, tocino y camarones empanizados. Gratinado con queso chester, philadelphia, aderezo chipotle, sriracha y res, Coronado con topping de tampico bañado en salsa anguila.', image: 'img/especialidades/Zen Especial (1).jpg' }
        ],
        entradas: [
            { id: 'en1', name: 'Chiles Zen', price: '$169.00', description: 'Relleno a elegir: Philadelphia con camarón, Philadelphia con res o Philadelphia con tampico.', image: 'img/entradas/Chiles Zen (1).jpg' },
            { id: 'en2', name: 'Wontons Fritos', price: '$129.00', description: 'Son pequeñas bolsas de masa wonton, Con relleno a elegir: Philadelphia con camaron, Philadelphia con res, Philadelphia con tampico.', image: 'img/entradas/Wontons Fritos.jpg' }
        ],
        naturales: [
            { id: 'n1', name: 'Guamuchilito', price: '$169.00', description: '250grs de arroz, aguacate, Philadelphia, camarón, pulpo y Surimi. Por fuera Tampico, aguacate y salsa de anguila.', image: 'img/clasicos/Guamuchilito (1).jpg' },
            { id: 'n2', name: 'California Spicy', price: '$179.00', description: '250grs de arroz, aguacate, Philadelphia, camarón y pepino. Por fuera Philadelphia, kanicama spicy y salsa de anguila.', image: 'img/clasicos/California Spicy (2) (2).jpg' },
            { id: 'n3', name: 'Spicy Roll', price: '$219.00', description: '250grs de arroz, pollo, res, aguacate y Philadelphia. Por fuera gratinado de quesos con cebolla cambray y serrano. Coronado con kanikama spicy, aderezo chipotle, salsa de anguila y cebollín.', image: 'img/horneados/Spicy Roll (1).jpg' },
            { id: 'n4', name: 'Zenbao Roll', price: '$189.00', description: '250grs de arroz, pepino, aguacate, philadelphia, camaron surimi y pepino. Por fuera gratinado de quesos, serrano y cebollin.', image: 'img/clasicos/Zenbao Roll (1).jpg' },
            { id: 'n5', name: 'Mouyou', price: '$189.00', description: '250grs de arroz, philadelphia, aguacate, res, pepino y surimi. Por fuera philadelphia, surimi, tempura bañado en anguila spicy y cebollin.', image: 'img/especialidades/Mouyou (1).jpg' }
        ],
        horneados: [
            { id: 'h1', name: 'Spicy Roll', price: '$219.00', description: '250grs de arroz, pollo, res, aguacate y Philadelphia. Por fuera gratinado de quesos con cebolla cambray y serrano. Coronado con kanikama spicy, aderezo chipotle, salsa de anguila y cebollín.', image: 'img/horneados/Spicy Roll (1).jpg' },
            { id: 'h2', name: 'Beef Phila Spicy', price: '$189.00', description: '250grs de arroz, aguacate, queso Philadelphia, camarones empanizados y tocino. Por fuera Beef phila spicy con sriracha y anguila.', image: 'img/horneados/Beef Roll (2).jpg' },
            { id: 'h3', name: 'El Greñudo', price: '$219.00', description: '250grs de arroz, pollo, res aguacate y philadelphia. Gratinado con queso chester, philadelphia, aderezo chipotle, serrano y tocino. Coronado con surimi frito bañado en anguila hot, cebollin y salsa de anguila.', image: 'img/horneados/Greñudo Roll (2).jpg' },
            { id: 'h4', name: 'Zen Especial', price: '$219.00', description: '250grs de arroz, aguacate, queso Philadelphia, tocino y camarones empanizados. Gratinado con queso Chester, Philadelphia, aderezo chipotle, sriracha y res. Coronado con topping de Tampico bañado en salsa de anguila.', image: 'img/horneados/Zen Especial (2).jpg' },
            { id: 'h5', name: 'Cheeses Chipotle', price: '$189.00', description: '250grs de arroz, aguacate, queso Philadelphia, camarón y tocino. Por fuera gratinado de quesos con aderezo chipotle, camarones y cebollín.', image: 'img/horneados/Cheese Chipotle (2).jpg' }
        ],
        boneless: [
            { id: 'b1', name: 'Boneless 8 Piezas (300g)', price: '$135.00', description: '300g de jugosos trozos de pechuga empanizados (incluye papas). Bañados en tu salsa favorita (BBQ, Búfalo o Mango Habanero).', image: 'img/entradas/bonneles (1).jpg', subSection: 'boneless' },
            { id: 'b2', name: 'Boneless 10 Piezas (370g)', price: '$145.00', description: '370g de jugosos trozos de pechuga empanizados (incluye papas). Bañados en tu salsa favorita (BBQ, Búfalo o Mango Habanero).', image: 'img/entradas/bonneles (1).jpg', subSection: 'boneless' },
            { id: 'b3', name: 'Boneless 14 Piezas (440g)', price: '$175.00', description: '440g de jugosos trozos de pechuga empanizados (incluye papas). Bañados en tu salsa favorita (BBQ, Búfalo o Mango Habanero).', image: 'img/entradas/bonneles (1).jpg', subSection: 'boneless' },
            { id: 'b4', name: 'Boneless 18 Piezas (600g)', price: '$255.00', description: '600g de jugosos trozos de pechuga empanizados (incluye papas). Bañados en tu salsa favorita (BBQ, Búfalo o Mango Habanero).', image: 'img/entradas/bonneles (1).jpg', subSection: 'boneless' },
            { id: 'b_s1', name: 'BBQ', price: 'Incluida', description: 'Dulce y ahumada', image: '', subSection: 'sauce' },
            { id: 'b_s2', name: 'Búfalo', price: 'Incluida', description: 'Clásica, picante y llena de sabor', image: '', subSection: 'sauce' },
            { id: 'b_s3', name: 'Mango Habanero', price: 'Incluida', description: 'Dulce, frutal y picante', image: '', subSection: 'sauce' },
            { id: 'b5', name: 'Papas Fritas (1/2 Orden 150g)', price: '$45.00', description: '150g de papas crujientes por fuera y suaves por dentro.', image: 'img/entradas/Papas Fritas (1).jpg', subSection: 'papas' },
            { id: 'b6', name: 'Papas Fritas (Orden Completa 400g)', price: '$85.00', description: '400g de papas crujientes por fuera y suaves por dentro.', image: 'img/entradas/Papas Fritas (1).jpg', subSection: 'papas' }
        ],
        bebidas: [
            { id: 'beb1', name: 'Coca-Cola / Sabores', price: '$30.00', description: 'Lata o botella 355ml', image: '', subSection: 'refrescos' },
            { id: 'beb2', name: 'Té Jaztea', price: '$30.00', description: 'Helado embotellado 500ml', image: '', subSection: 'refrescos' },
            { id: 'beb3', name: 'Agua Embotellada', price: '$20.00', description: 'Purificada 500ml', image: '', subSection: 'refrescos' },
            { id: 'beb4', name: 'Jarra de Limón Natural', price: '$90.00', description: '2 Litros - Preparada al momento', image: '', subSection: 'jarras' },
            { id: 'beb5', name: 'Jarra Té de la Casa', price: '$90.00', description: '2 Litros - Té helado especial', image: '', subSection: 'jarras' }
        ]
    }
};

// Inicialización de Firebase (si está cargado en la página)
let firebaseDb = null;
let isFirebaseReady = false;

function initFirebaseIfAvailable() {
    if (typeof firebase !== 'undefined' && typeof ZENBAO_FIREBASE_CONFIG !== 'undefined' && typeof USE_FIREBASE_CLOUD !== 'undefined' && USE_FIREBASE_CLOUD) {
        if (ZENBAO_FIREBASE_CONFIG.apiKey && !ZENBAO_FIREBASE_CONFIG.apiKey.includes("YOUR_API_KEY")) {
            try {
                if (!firebase.apps.length) {
                    firebase.initializeApp(ZENBAO_FIREBASE_CONFIG);
                }
                firebaseDb = firebase.firestore();
                isFirebaseReady = true;
                console.log("☁️ Firebase Nube activado para Zenbao Menu.");
            } catch (e) {
                console.warn("No se pudo conectar a Firebase, usando almacenamiento local de respaldo:", e);
            }
        }
    }
}

initFirebaseIfAvailable();

const ZenbaoStore = {
    currentStatus: { status: isFirebaseReady ? 'connecting' : 'offline', message: isFirebaseReady ? 'Conectando a la nube...' : 'Modo local (Sin Firebase)' },
    statusListeners: [],

    addStatusListener: function(fn) {
        if (typeof fn === 'function') {
            this.statusListeners.push(fn);
            fn(this.currentStatus);
        }
    },

    notifyStatus: function(status, message, error = null) {
        this.currentStatus = { status, message, error, timestamp: new Date().toISOString() };
        this.statusListeners.forEach(fn => {
            try { fn(this.currentStatus); } catch(e) {}
        });
    },

    // Obtener todos los datos
    getData: function() {
        try {
            const stored = localStorage.getItem(ZENBAO_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                let updated = false;
                if (parsed.products && parsed.products.boneless && parsed.products.boneless.length === 1 && parsed.products.boneless[0].name === 'Boneless Tradicionales') {
                    parsed.products.boneless = JSON.parse(JSON.stringify(DEFAULT_ZENBAO_DATA.products.boneless));
                    updated = true;
                }
                if (updated) {
                    this.saveData(parsed);
                }
                if (this.getHistory().length === 0) {
                    this.pushHistoryRecord('Estado inicial del menú', parsed);
                }
                return parsed;
            }
        } catch (e) {
            console.error('Error al leer de localStorage:', e);
        }
        // Guardar default si no existe
        this.saveData(DEFAULT_ZENBAO_DATA);
        if (this.getHistory().length === 0) {
            this.pushHistoryRecord('Estado inicial del menú', DEFAULT_ZENBAO_DATA);
        }
        return JSON.parse(JSON.stringify(DEFAULT_ZENBAO_DATA));
    },

    // Escuchar cambios en la nube en tiempo real (Sincronización en vivo)
    subscribeData: function(callback) {
        // Ejecutar inmediatamente con datos locales
        callback(this.getData());

        // Si Firebase está listo, suscribirse a cambios en vivo
        if (isFirebaseReady && firebaseDb) {
            this.notifyStatus('connecting', 'Conectando con la nube de Firebase...');
            firebaseDb.collection('zenbao_menu').doc('main_data').onSnapshot(doc => {
                if (doc.exists) {
                    const cloudData = doc.data();
                    localStorage.setItem(ZENBAO_STORAGE_KEY, JSON.stringify(cloudData));
                    callback(cloudData);
                    this.notifyStatus('connected', 'Sincronizado en tiempo real con la nube');
                } else {
                    // Si el documento en la nube aún no existe, crearlo con los datos por defecto
                    this.saveData(this.getData());
                }
            }, err => {
                console.warn("Error en la suscripción en vivo a la nube:", err);
                let msg = err.message || 'Error de conexión a Firebase.';
                if (err.code === 'permission-denied') {
                    msg = 'Las reglas de seguridad de Firestore en Firebase expiraron o deniegan acceso.';
                }
                this.notifyStatus('error', msg, err);
            });
        } else {
            this.notifyStatus('offline', 'Modo local (Sin Firebase)');
        }
    },

    // Guardar todos los datos (Local + Nube Firebase)
    saveData: function(data) {
        try {
            localStorage.setItem(ZENBAO_STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Error al guardar en localStorage:', e);
        }

        // Si Firebase está activo, enviar a la nube
        if (isFirebaseReady && firebaseDb) {
            const dataString = JSON.stringify(data);
            const sizeInBytes = new Blob([dataString]).size;
            if (sizeInBytes > 950000) {
                console.warn("⚠️ Los datos superan los 950KB. Se recomienda reducir el tamaño de las fotos.");
            }

            firebaseDb.collection('zenbao_menu').doc('main_data').set(data)
                .then(() => {
                    console.log("☁️ Guardado en la nube con éxito.");
                    this.notifyStatus('connected', 'Cambios guardados y sincronizados en tiempo real');
                })
                .catch(err => {
                    console.error("Error al guardar en la nube:", err);
                    let msg = err.message || 'Error al guardar en la nube';
                    if (err.code === 'permission-denied') {
                        msg = 'Error de permisos: Las reglas de Firestore en Firebase expiran por defecto a los 30 días.';
                    } else if (msg.includes('exceeds maximum size')) {
                        msg = 'Error de tamaño: Los platillos con foto superan el límite de 1MB por documento de Firestore.';
                    }
                    this.notifyStatus('error', msg, err);
                });
        }
    },

    // HISTORIAL DE EDICIONES CON FECHA Y HORA
    getHistory: function() {
        try {
            const stored = localStorage.getItem(ZENBAO_HISTORY_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.error('Error al leer historial:', e);
        }
        return [];
    },

    pushHistoryRecord: function(description, customSnapshot = null) {
        const history = this.getHistory();
        const snapshotData = customSnapshot || this.getData();
        const now = new Date();
        const formattedDate = now.toLocaleDateString('es-MX', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }) + ', ' + now.toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        const newRecord = {
            id: 'hist_' + Date.now(),
            timestamp: formattedDate,
            dateISO: now.toISOString(),
            description: description,
            snapshot: JSON.parse(JSON.stringify(snapshotData))
        };

        history.unshift(newRecord);
        if (history.length > 50) {
            history.pop();
        }

        try {
            localStorage.setItem(ZENBAO_HISTORY_KEY, JSON.stringify(history));
        } catch (e) {
            console.error('Error al guardar historial:', e);
        }
    },

    restoreHistorySnapshot: function(historyId) {
        const history = this.getHistory();
        const record = history.find(item => item.id === historyId);
        if (record && record.snapshot) {
            const snapshotCopy = JSON.parse(JSON.stringify(record.snapshot));
            this.saveData(snapshotCopy);
            this.pushHistoryRecord('Se restauró el menú a la versión del ' + record.timestamp, snapshotCopy);
            return true;
        }
        return false;
    },

    clearHistory: function() {
        try {
            localStorage.removeItem(ZENBAO_HISTORY_KEY);
        } catch (e) {}
    },

    // Resetear a datos por defecto (conservando las ediciones de precio y descripción del usuario)
    resetToDefault: function() {
        const currentData = this.getData();
        const defaultCopy = JSON.parse(JSON.stringify(DEFAULT_ZENBAO_DATA));

        if (currentData && currentData.products) {
            Object.keys(currentData.products).forEach(catId => {
                if (!defaultCopy.products[catId]) {
                    defaultCopy.products[catId] = currentData.products[catId];
                } else {
                    currentData.products[catId].forEach(curProd => {
                        const defIdx = defaultCopy.products[catId].findIndex(p => p.id === curProd.id);
                        if (defIdx !== -1) {
                            // Mantener precio, descripción, nombre e imagen editados por el usuario
                            defaultCopy.products[catId][defIdx] = { ...defaultCopy.products[catId][defIdx], ...curProd };
                        } else {
                            // Mantener productos nuevos creados por el usuario
                            defaultCopy.products[catId].push(curProd);
                        }
                    });
                }
            });
        }

        this.saveData(defaultCopy);
        this.pushHistoryRecord('Se restableció la estructura del menú (conservando tus precios y ediciones actuales)', defaultCopy);
        return defaultCopy;
    },

    // Categorías
    getCategories: function() {
        const data = this.getData();
        return data.categories || [];
    },

    saveCategory: function(catData) {
        const data = this.getData();
        let isNew = false;
        if (!catData.id) {
            isNew = true;
            catData.id = 'cat_' + Date.now();
            if (!catData.href) catData.href = 'categoria.html?id=' + catData.id;
            data.categories.push(catData);
            if (!data.products[catData.id]) {
                data.products[catData.id] = [];
            }
        } else {
            const index = data.categories.findIndex(c => c.id === catData.id);
            if (index !== -1) {
                data.categories[index] = { ...data.categories[index], ...catData };
            } else {
                data.categories.push(catData);
            }
        }
        this.saveData(data);
        this.pushHistoryRecord(isNew ? `Se creó la categoría: ${catData.name}` : `Se editó la categoría: ${catData.name}`);
        return catData;
    },

    deleteCategory: function(catId) {
        const data = this.getData();
        const cat = data.categories.find(c => c.id === catId);
        const catName = cat ? cat.name : catId;
        data.categories = data.categories.filter(c => c.id !== catId);
        delete data.products[catId];
        this.saveData(data);
        this.pushHistoryRecord(`Se eliminó la categoría: ${catName}`);
    },

    moveCategory: function(index, direction) {
        const data = this.getData();
        const targetIndex = index + direction;
        if (targetIndex >= 0 && targetIndex < data.categories.length) {
            const catName = data.categories[index] ? data.categories[index].name : '';
            const temp = data.categories[index];
            data.categories[index] = data.categories[targetIndex];
            data.categories[targetIndex] = temp;
            this.saveData(data);
            this.pushHistoryRecord(`Se reordenó la categoría: ${catName}`);
        }
    },

    // Formateador automático de precios
    formatPrice: function(priceStr) {
        if (priceStr === undefined || priceStr === null) return '$0.00';
        let raw = String(priceStr).trim();
        if (!raw) return '$0.00';
        if (raw.toLowerCase() === 'incluida' || raw.toLowerCase() === 'gratis') return raw;

        // Reemplazar comas por puntos (ej: 150,50 -> 150.50)
        raw = raw.replace(/,/g, '.');

        // Extraer número válido (deteniéndose antes de un segundo punto decimal si existiera)
        const match = raw.match(/\d+(?:\.\d+)?/);
        if (!match) {
            return raw;
        }

        const numVal = parseFloat(match[0]);
        if (isNaN(numVal)) return raw;

        // Formatear siempre con 2 decimales y signo '$'
        return '$' + numVal.toFixed(2);
    },

    // Productos
    getProducts: function(catId) {
        const data = this.getData();
        return data.products[catId] || [];
    },

    saveProduct: function(catId, prodData) {
        const data = this.getData();
        let isNew = false;
        if (!data.products[catId]) {
            data.products[catId] = [];
        }

        if (prodData.price !== undefined && prodData.price !== 'Incluida') {
            prodData.price = this.formatPrice(prodData.price);
        }

        if (!prodData.id) {
            isNew = true;
            prodData.id = 'prod_' + Date.now();
            data.products[catId].push(prodData);
        } else {
            const index = data.products[catId].findIndex(p => p.id === prodData.id);
            if (index !== -1) {
                data.products[catId][index] = { ...data.products[catId][index], ...prodData };
            } else {
                data.products[catId].push(prodData);
            }
        }

        this.saveData(data);
        this.pushHistoryRecord(isNew ? `Se agregó el platillo: ${prodData.name}` : `Se editó el platillo: ${prodData.name}`);
        return prodData;
    },

    deleteProduct: function(catId, prodId) {
        const data = this.getData();
        if (data.products[catId]) {
            const prod = data.products[catId].find(p => p.id === prodId);
            const prodName = prod ? prod.name : prodId;
            data.products[catId] = data.products[catId].filter(p => p.id !== prodId);

            this.saveData(data);
            this.pushHistoryRecord(`Se eliminó el platillo: ${prodName}`);
        }
    },

    moveProduct: function(catId, index, direction) {
        const data = this.getData();
        if (data.products[catId]) {
            const targetIndex = index + direction;
            if (targetIndex >= 0 && targetIndex < data.products[catId].length) {
                const prodName = data.products[catId][index] ? data.products[catId][index].name : '';
                const temp = data.products[catId][index];
                data.products[catId][index] = data.products[catId][targetIndex];
                data.products[catId][targetIndex] = temp;
                this.saveData(data);
                this.pushHistoryRecord(`Se reordenó el platillo: ${prodName}`);
            }
        }
    },

    toggleProductVisibility: function(catId, prodId) {
        const data = this.getData();
        if (data.products && data.products[catId]) {
            const prod = data.products[catId].find(p => p.id === prodId);
            if (prod) {
                prod.hidden = !prod.hidden;
                this.saveData(data);
                const statusStr = prod.hidden ? 'ocultó (agotado)' : 'volvió a hacer visible';
                this.pushHistoryRecord(`Se ${statusStr} el platillo: ${prod.name}`);
                return prod.hidden;
            }
        }
        return false;
    },

    /**
     * CONVERSOR DE IMAGEN A WEBP EN EL NAVEGADOR
     * Recibe un archivo File (PNG, JPG, HEIC, etc.), lo redimensiona y devuelve un DataURL .webp comprimido
     */
    convertImageToWebP: function(file, maxWidth = 550, quality = 0.70) {
        return new Promise((resolve, reject) => {
            if (!file) return resolve('');
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    if (width > maxWidth || height > maxWidth) {
                        if (width > height) {
                            height = Math.round((height * maxWidth) / width);
                            width = maxWidth;
                        } else {
                            width = Math.round((width * maxWidth) / height);
                            height = maxWidth;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    // Convertir a WebP
                    try {
                        const webpDataUrl = canvas.toDataURL('image/webp', quality);
                        resolve(webpDataUrl);
                    } catch (err) {
                        // Fallback a JPEG
                        resolve(canvas.toDataURL('image/jpeg', quality));
                    }
                };
                img.onerror = function() {
                    reject(new Error('No se pudo cargar la imagen seleccionada.'));
                };
                img.src = e.target.result;
            };
            reader.onerror = function() {
                reject(new Error('Error al leer el archivo de la imagen.'));
            };
            reader.readAsDataURL(file);
        });
    }
};

// Utilidad global para ocultar la barra al hacer scroll hacia abajo
function initScrollHideHeader() {
    let lastScrollTop = 0;
    const header = document.querySelector('.menu-header');
    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initScrollHideHeader();
});
