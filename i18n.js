// Sistema di traduzione i18n
const i18n = {
    it: {
        // Index.html
        index: {
            title: "TRASPORTI",
            subtitle: "Gestisci la tua rete metropolitana",
            play: "Gioca",
            settings: "Impostazioni",
            maps: "Mappe Community",
            downloads: "Download",
            mods: "Mods"
        },
        // Maps.html
        maps: {
            title: "Gestione Mappe",
            localTab: "📂 Le Mie Mappe",
            communityTab: "🌐 Community Maps",
            import: "Importa Mappa",
            importDesc: "Supporta file: .tranmap, .txt, .json",
            export: "Esporta",
            exportOptions: "⚙️ Opzioni Export:",
            format: "Formato:",
            localTitle: "Le tue Mappe Salvate",
            communityTitle: "🌐 Mappe della Community",
            communityDesc: "Queste mappe sono condivise da tutti. Puoi scaricarle e giocarci.",
            delete: "🗑️ Elimina",
            download: "⬇️ Scarica",
            empty: "Nessuna mappa trovata.",
            errorLocal: "Errore caricamento mappe locali.",
            errorCommunity: "Impossibile caricare il catalogo community (Offline?)."
        },
        // Mods.html
        mods: {
            title: "Gestione Mod",
            desc: "Le mod estendono le funzionalità del gioco con nuove stazioni, reti e logica personalizzata.",
            folderInfo: "📁 Le mod vengono caricate dalla cartella community/mods/",
            active: "✅ Attiva",
            disabled: "❌ Disabilitata",
            enabledLabel: "Mod Abilitate",
            disabledLabel: "Mod Disponibili",
            noMods: "Nessuna mod trovata nella cartella."
        },
        // Downloads.html
        downloads: {
            title: "📥 Download",
            currentTitle: "Versione Corrente",
            currentDesc: "L'ultima versione stabile del gioco.",
            betaTitle: "🗄️ Archivio Versioni",
            betaDesc: "Scarica le versioni precedenti (Beta).",
            back: "⬅️ Torna alla Home"
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
                modLoad: "Stazioni caricate da mod",
                modLoadDesc: "Le stazioni reali vengono caricate tramite mod (es. \"real_stations\")",
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
            settings: "Settings",
            maps: "Community Maps",
            downloads: "Downloads",
            mods: "Mods"
        },
        maps: {
            title: "Map Management",
            localTab: "📂 My Maps",
            communityTab: "🌐 Community Maps",
            import: "Import Map",
            importDesc: "Supports files: .tranmap, .txt, .json",
            export: "Export",
            exportOptions: "⚙️ Export Options:",
            format: "Format:",
            localTitle: "Your Saved Maps",
            communityTitle: "🌐 Community Maps",
            communityDesc: "These maps are shared by everyone. You can download and play them.",
            delete: "🗑️ Delete",
            download: "⬇️ Download",
            empty: "No maps found.",
            errorLocal: "Error loading local maps.",
            errorCommunity: "Unable to load community catalog (Offline?)."
        },
        mods: {
            title: "Mod Management",
            desc: "Mods extend game functionality with new stations, networks, and custom logic.",
            folderInfo: "📁 Mods are loaded from the community/mods/ folder",
            active: "✅ Active",
            disabled: "❌ Disabled",
            enabledLabel: "Enabled Mods",
            disabledLabel: "Available Mods",
            noMods: "No mods found in the folder."
        },
        downloads: {
            title: "📥 Downloads",
            currentTitle: "Current Version",
            currentDesc: "The latest stable version of the game.",
            betaTitle: "🗄️ Version Archive",
            betaDesc: "Download previous versions (Beta).",
            back: "⬅️ Back to Home"
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
                modLoad: "Stations loaded from mods",
                modLoadDesc: "Real stations are loaded via mods (e.g., \"real_stations\")",
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
            settings: "Configuración",
            maps: "Mapas de la Comunidad",
            downloads: "Descargas",
            mods: "Mods"
        },
        maps: {
            title: "Gestión de Mapas",
            localTab: "📂 Mis Mapas",
            communityTab: "🌐 Mapas de la Comunidad",
            import: "Importar Mapa",
            importDesc: "Soportado: .tranmap, .txt, .json",
            export: "Exportar",
            exportOptions: "⚙️ Opciones de Exportación:",
            format: "Formato:",
            localTitle: "Tus Mapas Guardados",
            communityTitle: "🌐 Mapas de la Comunidad",
            communityDesc: "Estos mapas son compartidos por todos. Puedes descargarlos y jugarlos.",
            delete: "🗑️ Eliminar",
            download: "⬇️ Descargar",
            empty: "No se encontraron mapas.",
            errorLocal: "Error al cargar mapas locales.",
            errorCommunity: "No se pudo cargar el catálogo de la comunidad (¿Sin conexión?)."
        },
        mods: {
            title: "Gestión de Mods",
            desc: "Los mods extienden la funcionalidad del juego con nuevas estaciones, redes y lógica personalizada.",
            folderInfo: "📁 Los mods se cargan desde la carpeta community/mods/",
            active: "✅ Activo",
            disabled: "❌ Deshabilitado",
            enabledLabel: "Mods Habilitados",
            disabledLabel: "Mods Disponibles",
            noMods: "No se encontraron mods en la carpeta."
        },
        downloads: {
            title: "📥 Descargas",
            currentTitle: "Versión Actual",
            currentDesc: "La última versión estable del juego.",
            betaTitle: "🗄️ Archivo de Versiones",
            betaDesc: "Descargar versiones anteriores (Beta).",
            back: "⬅️ Volver al Inicio"
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
                modLoad: "Estaciones cargadas por mods",
                modLoadDesc: "Las estaciones reales se cargan mediante mods (ej. \"real_stations\")",
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
    },
    fr: {
        index: {
            title: "TRANSPORT",
            subtitle: "Gérez votre réseau de métro",
            play: "Jouer",
            settings: "Paramètres",
            maps: "Cartes de la communauté",
            downloads: "Téléchargements",
            mods: "Mods"
        },
        maps: {
            title: "Gestion des cartes",
            localTab: "📂 Mes cartes",
            communityTab: "🌐 Cartes de la communauté",
            import: "Importer une carte",
            importDesc: "Fichiers supportés : .tranmap, .txt, .json",
            export: "Exporter",
            exportOptions: "⚙️ Options d'exportation :",
            format: "Format :",
            localTitle: "Vos cartes enregistrées",
            communityTitle: "🌐 Cartes de la communauté",
            communityDesc: "Ces cartes sont partagées par tous. Vous pouvez les télécharger et y jouer.",
            delete: "🗑️ Supprimer",
            download: "⬇️ Télécharger",
            empty: "Aucune carte trouvée.",
            errorLocal: "Erreur lors du chargement des cartes locales.",
            errorCommunity: "Impossible de charger le catalogue de la communauté (Hors ligne ?)."
        },
        mods: {
            title: "Gestion des mods",
            desc: "Les mods étendent les fonctionnalités du jeu avec de nouvelles stations, réseaux et logique personnalisée.",
            folderInfo: "📁 Les mods sont chargés à partir du dossier community/mods/",
            active: "✅ Actif",
            disabled: "❌ Désactivé",
            enabledLabel: "Mods activés",
            disabledLabel: "Mods disponibles",
            noMods: "Aucun mod trouvé dans le dossier."
        },
        downloads: {
            title: "📥 Téléchargements",
            currentTitle: "Version actuelle",
            currentDesc: "La dernière version stable du jeu.",
            betaTitle: "🗄️ Archive des versions",
            betaDesc: "Télécharger les versions précédentes (Bêta).",
            back: "⬅️ Retour à l'accueil"
        },
        settings: {
            title: "Paramètres",
            language: "Langue",
            saved: "Paramètres enregistrés !"
        },
        game: {
            title: "Jeu",
            save: "Sauvegarder",
            back: "Menu",
            stations: {
                title: "Stations et Réseaux",
                autoLoad: "Chargement automatique actif",
                autoLoadDesc: "Les stations, routes et voies se chargent automatiquement",
                reloadStations: "Recharger les stations",
                reloadRoads: "Recharger les routes et voies",
                loaded: "Stations chargées",
                modLoad: "Stations chargées par mod",
                modLoadDesc: "Les stations réelles sont chargées via des mods (ex. \"real_stations\")",
                train: "Train/Métro",
                bus: "Bus",
                tram: "Tramway"
            },
            tracks: {
                title: "Construction de voies",
                create: "Créer des voies",
                finish: "Terminer la voie",
                cancel: "Annuler",
                clickToAdd: "Cliquez sur la carte pour ajouter des points à la voie"
            },
            customStations: {
                title: "Stations personnalisées",
                add: "Ajouter une station",
                clickToPlace: "Cliquez sur la carte pour placer la station"
            },
            lines: {
                title: "Lignes de transport",
                create: "Créer une ligne",
                confirm: "Confirmer",
                cancel: "Annuler",
                clickStations: "Cliquez sur les stations pour créer la ligne"
            },
            pathfinding: {
                title: "Recherche d'itinéraire",
                find: "Trouver un itinéraire",
                clickStart: "Cliquez sur une station de départ"
            },
            vehicles: {
                title: "Véhicules",
                add: "Ajouter un véhicule",
                start: "Démarrer les véhicules",
                stop: "Arrêter les véhicules",
                delete: "Supprimer le véhicule",
                total: "Total des véhicules"
            },
            time: {
                title: "Vitesse de simulation",
                time: "Temps"
            },
            info: {
                position: "Position"
            }
        },
        common: {
            back: "Retour",
            save: "Enregistrer",
            cancel: "Annuler",
            confirm: "Confirmer"
        }
    },
    de: {
        index: {
            title: "TRANSPORT",
            subtitle: "Verwalten Sie Ihr Metronetz",
            play: "Spielen",
            settings: "Einstellungen",
            maps: "Community-Karten",
            downloads: "Downloads",
            mods: "Mods"
        },
        maps: {
            title: "Kartenverwaltung",
            localTab: "📂 Meine Karten",
            communityTab: "🌐 Community-Karten",
            import: "Karte importieren",
            importDesc: "Unterstützte Dateien: .tranmap, .txt, .json",
            export: "Exportieren",
            exportOptions: "⚙️ Export-Optionen:",
            format: "Format:",
            localTitle: "Ihre gespeicherten Karten",
            communityTitle: "🌐 Community-Karten",
            communityDesc: "Diese Karten werden von allen geteilt. Du kannst sie herunterladen und spielen.",
            delete: "🗑️ Löschen",
            download: "⬇️ Herunterladen",
            empty: "Keine Karten gefunden.",
            errorLocal: "Fehler beim Laden lokaler Karten.",
            errorCommunity: "Community-Katalog konnte nicht geladen werden (Offline?)."
        },
        mods: {
            title: "Mod-Verwaltung",
            desc: "Mods erweitern die Spielfunktionalität um neue Stationen, Netzwerke und benutzerdefinierte Logik.",
            folderInfo: "📁 Mods werden aus dem Ordner community/mods/ geladen",
            active: "✅ Aktiv",
            disabled: "❌ Deaktiviert",
            enabledLabel: "Aktivierte Mods",
            disabledLabel: "Verfügbare Mods",
            noMods: "Keine Mods im Ordner gefunden."
        },
        downloads: {
            title: "📥 Downloads",
            currentTitle: "Aktuelle Version",
            currentDesc: "Die neueste stabile Version des Spiels.",
            betaTitle: "🗄️ Versionsarchiv",
            betaDesc: "Frühere Versionen herunterladen (Beta).",
            back: "⬅️ Zurück zum Start"
        },
        settings: {
            title: "Einstellungen",
            language: "Sprache",
            saved: "Einstellungen gespeichert!"
        },
        game: {
            title: "Spiel",
            save: "Speichern",
            back: "Menü",
            stations: {
                title: "Stationen und Netzwerke",
                autoLoad: "Automatisches Laden aktiv",
                autoLoadDesc: "Stationen, Straßen und Gleise werden automatisch geladen",
                reloadStations: "Stationen neu laden",
                reloadRoads: "Straßen und Gleise neu laden",
                loaded: "Stationen geladen",
                modLoad: "Stationen von Mods geladen",
                modLoadDesc: "Echte Stationen werden über Mods geladen (z. B. „real_stations“)",
                train: "Zug/U-Bahn",
                bus: "Bus",
                tram: "Straßenbahn"
            },
            tracks: {
                title: "Gleisbau",
                create: "Gleise erstellen",
                finish: "Gleis fertigstellen",
                cancel: "Abbrechen",
                clickToAdd: "Klicken Sie auf die Karte, um Gleispunkte hinzuzufügen"
            },
            customStations: {
                title: "Eigene Stationen",
                add: "Station hinzufügen",
                clickToPlace: "Klicken Sie auf die Karte, um die Station zu platzieren"
            },
            lines: {
                title: "Transportlinien",
                create: "Linie erstellen",
                confirm: "Bestätigen",
                cancel: "Abbrechen",
                clickStations: "Klicken Sie auf Stationen, um die Linie zu erstellen"
            },
            pathfinding: {
                title: "Wegfindung",
                find: "Weg finden",
                clickStart: "Klicken Sie auf eine Startstation"
            },
            vehicles: {
                title: "Fahrzeuge",
                add: "Fahrzeug hinzufügen",
                start: "Fahrzeuge starten",
                stop: "Fahrzeuge stoppen",
                delete: "Fahrzeug löschen",
                total: "Fahrzeuge insgesamt"
            },
            time: {
                title: "Simulationsgeschwindigkeit",
                time: "Zeit"
            },
            info: {
                position: "Position"
            }
        },
        common: {
            back: "Zurück",
            save: "Speichern",
            cancel: "Abbrechen",
            confirm: "Bestätigen"
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

