# Real Stations Mod

Questa mod JavaScript carica le stazioni reali da OpenStreetMap nell'area visibile della mappa.

## Funzionalità

- Carica stazioni ferroviarie, fermate bus e tram da OpenStreetMap
- Usa l'API Overpass per ottenere dati in tempo reale
- Carica stazioni in un raggio di 5km dal centro della mappa
- Completamente in JavaScript (nessuna dipendenza da Python/Pyodide)

## Installazione

1. Vai su "Mods & Playsets" dal menu principale
2. Inserisci `real_stations` come nome della cartella playset
3. Clicca "Salva"
4. Avvia il gioco

## Struttura File

```
mods/real_stations/
└── mod.js          # File principale della mod
```

## Note

- Il caricamento può richiedere alcuni secondi
- Le stazioni vengono caricate solo all'avvio del gioco
- Per ricaricare, riavvia il gioco
- Controlla la console del browser per i log di caricamento

## Sviluppo

La mod usa l'API `MOD_API` fornita dal gioco per registrare le stazioni. Puoi creare mod personalizzate usando le seguenti funzioni:

- `MOD_API.registerStation(stationData)` - Registra una singola stazione
- `MOD_API.registerStations(stationsArray)` - Registra multiple stazioni
- `MOD_API.registerTrack(trackData)` - Registra binari/strade
- `MOD_API.log(message)` - Log nella console
- `MOD_API.getMapCenter()` - Ottieni il centro della mappa
- `MOD_API.getMapZoom()` - Ottieni il livello di zoom
