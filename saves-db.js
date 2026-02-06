/**
 * Saves Database v1.0
 * Gestisce il salvataggio locale delle partite usando IndexedDB
 */

const SavesDB = {
    DB_NAME: 'TransportSavesDB',
    DB_VERSION: 1,
    STORE_NAME: 'gameplays',

    // Apri connessione al database
    async openDataStore() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

            request.onerror = (event) => {
                console.error("SavesDB Error:", event.target.error);
                reject("Impossibile aprire il database dei salvataggi");
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    const objectStore = db.createObjectStore(this.STORE_NAME, { keyPath: 'id' });
                    objectStore.createIndex("lastSaveTime", "lastSaveTime", { unique: false });
                }
            };

            request.onsuccess = (event) => {
                resolve(event.target.result);
            };
        });
    },

    // Salva una partita
    async saveGame(saveData) {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);

            // Assicurati che ci sia un ID e un timestamp
            if (!saveData.id) {
                saveData.id = `save_${Date.now()}`;
            }
            saveData.lastSaveTime = new Date().toISOString();

            const request = store.put(saveData);

            request.onsuccess = () => resolve(saveData.id);
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Ottieni tutti i salvataggi (solo metadati per la lista)
    async getAllSaves() {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => {
                // Ritorna solo le info essenziali per la lista
                const saves = request.result.map(save => ({
                    id: save.id,
                    name: save.name || 'Partita Senza Nome',
                    lastSaveTime: save.lastSaveTime,
                    preview: save.preview || null // Opzionale: screenshot o info brevi
                }));
                // Ordina per data decrescente
                saves.sort((a, b) => new Date(b.lastSaveTime) - new Date(a.lastSaveTime));
                resolve(saves);
            };
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Carica una partita completa
    async loadGame(id) {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.get(id);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    reject("Salvataggio non trovato");
                }
            };
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Elimina una partita
    async deleteGame(id) {
        const db = await this.openDataStore();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = () => resolve(true);
            request.onerror = (e) => reject(e.target.error);
        });
    },

    // Esporta salvataggio come JSON (per il download)
    async exportSave(id) {
        const save = await this.loadGame(id);
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(save));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `transport_save_${id}.json`);
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },

    // Esporta come Mappa (.tranmap o .txt) per la condivisione
    async exportMap(id, extension = 'tranmap') {
        const save = await this.loadGame(id);
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(save));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `${save.name.replace(/\s+/g, '_')}.${extension}`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },

    // Importa salvataggio da JSON (upload)
    async importSave(jsonContent) {
        try {
            const saveData = JSON.parse(jsonContent);
            // Validazione basica
            if (!saveData.stations && !saveData.metroLines) {
                throw new Error("Formato salvataggio non valido");
            }
            // Rigenera ID per evitare conflitti
            saveData.id = `imported_${Date.now()}`;
            saveData.name = (saveData.name || "Imported Map") + " (Imported)";

            await this.saveGame(saveData);
            return true;
        } catch (e) {
            console.error("Import failed:", e);
            throw e;
        }
    }
};

window.SavesDB = SavesDB;
