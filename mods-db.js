/**
 * Mods Database v1.0
 * Gestisce il salvataggio locale delle mod usando IndexedDB
 */

const ModsDB = {
    DB_NAME: 'TransportModsDB',
    DB_VERSION: 1,
    STORE_NAME: 'mods',

    // Apri connessione al database
    async openDataStore() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

            request.onerror = (event) => {
                console.error("ModsDB Error:", event.target.error);
                reject("Impossibile aprire il database delle mod");
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    const objectStore = db.createObjectStore(this.STORE_NAME, { keyPath: 'name' });
                    objectStore.createIndex("uploadedAt", "uploadedAt", { unique: false });
                }
            };

            request.onsuccess = (event) => {
                resolve(event.target.result);
            };
        });
    },

    // Salva una mod
    async saveMod(name, code) {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);

            const modData = {
                name: name,
                code: code,
                uploadedAt: new Date().toISOString(),
                size: code.length
            };

            const request = store.put(modData);

            request.onsuccess = () => resolve(true);
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Ottieni tutte le mod
    async getAllMods() {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Ottieni una mod specifica
    async getMod(name) {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.get(name);

            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Elimina una mod
    async deleteMod(name) {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.delete(name);

            request.onsuccess = () => resolve(true);
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Inizializza con le mod di default se necessario
    async init() {
        // Placeholder se servono inizializzazioni future
        console.log("ModsDB inizializzato");
    }
};

// Esporta globalmente
window.ModsDB = ModsDB;
