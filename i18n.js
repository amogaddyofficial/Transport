// Sistema di traduzione i18n
const i18n = {
    it: {
        // Index.html
        index: {
            title: "TRASPORTI",
            subtitle: "Gestisci la tua rete metropolitana",
            play: "Gioca",
            settings: "Impostazioni"
        },
        // Settings.html
        settings: {
            title: "Impostazioni",
            language: "Lingua",
            saved: "Impostazioni salvate!"
        },
        // Game.html
        game: {
            title: "Gioco",
            save: "Salva",
            back: "Menu",
            stations: {
                title: "Stazioni e Reti",
                autoLoad: "Caricamento automatico attivo",
                autoLoadDesc: "Stazioni, strade e binari si caricano automaticamente",
                reloadStations: "Ricarica Stazioni",
                reloadRoads: "Ricarica Strade e Binari",
                loaded: "Stazioni caricate",
                train: "Treno/Metro",
                bus: "Bus",
                tram: "Tram"
            },
            tracks: {
                title: "Costruzione Binari",
                create: "Crea Binari",
                finish: "Termina Binario",
                cancel: "Annulla",
                clickToAdd: "Clicca sulla mappa per aggiungere punti al binario"
            },
            customStations: {
                title: "Stazioni Personalizzate",
                add: "Aggiungi Stazione",
                clickToPlace: "Clicca sulla mappa per posizionare la stazione"
            },
            lines: {
                title: "Linee Trasporto",
                create: "Crea Linea",
                confirm: "Conferma",
                cancel: "Annulla",
                clickStations: "Clicca sulle stazioni per creare la linea"
            },
            pathfinding: {
                title: "Pathfinding",
                find: "Trova Percorso",
                clickStart: "Clicca su una stazione di partenza"
            },
            vehicles: {
                title: "Veicoli",
                add: "Aggiungi Veicolo",
                start: "Avvia Veicoli",
                stop: "Ferma Veicoli",
                delete: "Elimina Veicolo",
                total: "Veicoli totali"
            },
            time: {
                title: "Velocità Simulazione",
                time: "Tempo"
            },
            info: {
                position: "Posizione"
            }
        },
        // Common
        common: {
            back: "Indietro",
            save: "Salva",
            cancel: "Annulla",
            confirm: "Conferma"
        }
    },
    en: {
        index: {
            title: "TRANSPORT",
            subtitle: "Manage your metro network",
            play: "Play",
            settings: "Settings"
        },
        settings: {
            title: "Settings",
            language: "Language",
            saved: "Settings saved!"
        },
        game: {
            title: "Game",
            save: "Save",
            back: "Menu",
            stations: {
                title: "Stations and Networks",
                autoLoad: "Automatic loading active",
                autoLoadDesc: "Stations, roads and tracks load automatically",
                reloadStations: "Reload Stations",
                reloadRoads: "Reload Roads and Tracks",
                loaded: "Stations loaded",
                train: "Train/Metro",
                bus: "Bus",
                tram: "Tram"
            },
            tracks: {
                title: "Track Construction",
                create: "Create Tracks",
                finish: "Finish Track",
                cancel: "Cancel",
                clickToAdd: "Click on the map to add track points"
            },
            customStations: {
                title: "Custom Stations",
                add: "Add Station",
                clickToPlace: "Click on the map to place the station"
            },
            lines: {
                title: "Transport Lines",
                create: "Create Line",
                confirm: "Confirm",
                cancel: "Cancel",
                clickStations: "Click on stations to create the line"
            },
            pathfinding: {
                title: "Pathfinding",
                find: "Find Path",
                clickStart: "Click on a starting station"
            },
            vehicles: {
                title: "Vehicles",
                add: "Add Vehicle",
                start: "Start Vehicles",
                stop: "Stop Vehicles",
                delete: "Delete Vehicle",
                total: "Total vehicles"
            },
            time: {
                title: "Simulation Speed",
                time: "Time"
            },
            info: {
                position: "Position"
            }
        },
        common: {
            back: "Back",
            save: "Save",
            cancel: "Cancel",
            confirm: "Confirm"
        }
    },
    es: {
        index: {
            title: "TRANSPORTE",
            subtitle: "Gestiona tu red de metro",
            play: "Jugar",
            settings: "Configuración"
        },
        settings: {
            title: "Configuración",
            language: "Idioma",
            saved: "¡Configuración guardada!"
        },
        game: {
            title: "Juego",
            save: "Guardar",
            back: "Menú",
            stations: {
                title: "Estaciones y Redes",
                autoLoad: "Carga automática activa",
                autoLoadDesc: "Las estaciones, carreteras y vías se cargan automáticamente",
                reloadStations: "Recargar Estaciones",
                reloadRoads: "Recargar Carreteras y Vías",
                loaded: "Estaciones cargadas",
                train: "Tren/Metro",
                bus: "Autobús",
                tram: "Tranvía"
            },
            tracks: {
                title: "Construcción de Vías",
                create: "Crear Vías",
                finish: "Terminar Vía",
                cancel: "Cancelar",
                clickToAdd: "Haz clic en el mapa para agregar puntos de vía"
            },
            customStations: {
                title: "Estaciones Personalizadas",
                add: "Agregar Estación",
                clickToPlace: "Haz clic en el mapa para colocar la estación"
            },
            lines: {
                title: "Líneas de Transporte",
                create: "Crear Línea",
                confirm: "Confirmar",
                cancel: "Cancelar",
                clickStations: "Haz clic en las estaciones para crear la línea"
            },
            pathfinding: {
                title: "Búsqueda de Ruta",
                find: "Encontrar Ruta",
                clickStart: "Haz clic en una estación de inicio"
            },
            vehicles: {
                title: "Vehículos",
                add: "Agregar Vehículo",
                start: "Iniciar Vehículos",
                stop: "Detener Vehículos",
                delete: "Eliminar Vehículo",
                total: "Vehículos totales"
            },
            time: {
                title: "Velocidad de Simulación",
                time: "Tiempo"
            },
            info: {
                position: "Posición"
            }
        },
        common: {
            back: "Atrás",
            save: "Guardar",
            cancel: "Cancelar",
            confirm: "Confirmar"
        }
    }
};

// Funzione helper per ottenere la traduzione
function t(key, lang = null) {
    const language = lang || localStorage.getItem('language') || 'it';
    const keys = key.split('.');
    let value = i18n[language] || i18n.it;
    
    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
            // Fallback all'italiano
            value = i18n.it;
            for (const k2 of keys) {
                value = value?.[k2];
            }
            break;
        }
    }
    
    return value || key;
}

