/**
 * ZENBAO - Configuración de Firebase en la Nube
 * 
 * Instrucciones:
 * 1. Ve a https://console.firebase.google.com/ (Es 100% Gratis)
 * 2. Crea un proyecto llamado "Zenbao Menu"
 * 3. En la sección "Firestore Database", crea una base de datos en Modo Prueba (Test Mode).
 * 4. Copia las credenciales de tu app Web de Firebase y pégalas a continuación:
 */

const ZENBAO_FIREBASE_CONFIG = {
    apiKey: "AIzaSyBy00_8NE5POaumeCaKripnM6LyYr3YzRs",
    authDomain: "zenbao-menu.firebaseapp.com",
    projectId: "zenbao-menu",
    storageBucket: "zenbao-menu.firebasestorage.app",
    messagingSenderId: "149522437626",
    appId: "1:149522437626:web:ba2ca70957ecb876d38043",
    measurementId: "G-CW0YHEXHTV"
};

// Variable para activar o desactivar la nube (Nube conectada)
const USE_FIREBASE_CLOUD = true;
