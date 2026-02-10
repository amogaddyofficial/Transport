// Real Stations Mod - Abilita l'integrazione con OpenStreetMap
(function () {
    MOD_API.log("Real Stations Mod: Attivando funzionalità OSM...");

    // Create UI Controls
    const controlsHtml = `
        <div id="real-stations-controls" style="margin-bottom: 15px;">
            <div style="padding: 10px; background: rgba(33, 150, 243, 0.3); border-radius: 8px; margin-bottom: 10px; font-size: 0.85em; color: rgba(44, 62, 80, 0.8);">
                🧩 <span data-i18n="game.stations.modLoad">Stazioni Reali (Mod)</span><br>
                <small data-i18n="game.stations.modLoadDesc">Carica stazioni da OpenStreetMap</small>
            </div>

            <button class="tool-button" id="load-stations-button">
                📥 <span data-i18n="game.stations.reloadStations">Carica Stazioni</span>
            </button>
            <button class="tool-button" id="load-roads-button">
                🛣️ <span data-i18n="game.stations.reloadRoads">Carica Strade e Binari</span>
            </button>

            <div style="margin-top: 10px; display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" id="auto-load-toggle" checked>
                <label for="auto-load-toggle" style="font-size: 0.85em; cursor: pointer;">
                    🔄 <span data-i18n="game.stations.autoLoad">Caricamento automatico</span>
                </label>
            </div>
        </div>
    `;

    // Inject controls into the sidebar if they don't exist
    // We need to find where to insert. The "Stazioni e Reti" header seems appropriate.
    // game.html structure: h3 game.stations.title -> div#real-stations-controls (old) -> div#stations-info
    // We will assume the old controls are removed and we insert before stations-info

    const stationsInfo = document.getElementById('stations-info');
    if (stationsInfo && !document.getElementById('real-stations-controls')) {
        const div = document.createElement('div');
        div.innerHTML = controlsHtml;
        stationsInfo.parentNode.insertBefore(div, stationsInfo);

        // Add event listeners
        document.getElementById('load-stations-button').addEventListener('click', loadRealStations);
        document.getElementById('load-roads-button').addEventListener('click', loadRoadsAndTracks);
        document.getElementById('auto-load-toggle').addEventListener('change', (e) => toggleAutoLoad(e.target.checked));
    }


    // --- Logic ported from game.html ---

    async function loadRealStations() {
        // NOTE: We don't check for 'enabled_mods' here because if this script is running, the mod IS enabled.

        const bounds = map.getBounds();
        const south = bounds.getSouth();
        const west = bounds.getWest();
        const north = bounds.getNorth();
        const east = bounds.getEast();

        // Query Overpass per stazioni ferroviarie, metro, bus e tram
        const query = `
            [out:json][timeout:25];
            (
                node["railway"="station"](${south},${west},${north},${east});
                node["railway"="subway_entrance"](${south},${west},${north},${east});
                node["public_transport"="station"](${south},${west},${north},${east});
                node["station"="subway"](${south},${west},${north},${east});
                node["highway"="bus_stop"](${south},${west},${north},${east});
                node["public_transport"="platform"]["bus"="yes"](${south},${west},${north},${east});
                node["railway"="tram_stop"](${south},${west},${north},${east});
                node["public_transport"="platform"]["tram"="yes"](${south},${west},${north},${east});
            );
            out body;
        `;

        try {
            const button = document.getElementById('load-stations-button');
            if (button) {
                button.textContent = '⏳ Caricamento...';
                button.disabled = true;
            }

            const response = await fetch('https://overpass-api.de/api/interpreter', {
                method: 'POST',
                body: query
            });

            const data = await response.json();

            // Rimuovi stazioni esistenti (Assuming we can access globals 'stationMarkers' and 'stations' and 'map')
            // If strict isolation is needed, MOD_API should expose methods to clear. 
            // For now, assuming direct access as per previous game.html logic which was global.
            if (typeof stationMarkers !== 'undefined') {
                stationMarkers.forEach(marker => map.removeLayer(marker));
            }
            // We need to reset the global stations array. 
            // Ideally MOD_API should handle this, but for this refactor we'll try to modify the global if accessible.
            // In a better system, `stations` would be managed by the game core API.
            // We will clear the array in place if possible.
            if (typeof stations !== 'undefined') {
                stations.length = 0; // Clear array
            }
            if (typeof stationMarkers !== 'undefined') {
                stationMarkers.length = 0;
            }

            // Aggiungi nuove stazioni
            const stationsToAdd = [];
            data.elements.forEach(element => {
                if (element.type === 'node' && element.lat && element.lon) {
                    let stationType = 'train';
                    const tags = element.tags || {};

                    if (tags.highway === 'bus_stop' || (tags.public_transport === 'platform' && tags.bus === 'yes') || tags.amenity === 'bus_station') {
                        stationType = 'bus';
                    } else if (tags.railway === 'tram_stop' || (tags.public_transport === 'platform' && tags.tram === 'yes')) {
                        stationType = 'tram';
                    } else if (tags.railway === 'station' || tags.railway === 'subway_entrance' || tags.public_transport === 'station' || tags.station === 'subway') {
                        stationType = 'train';
                    }

                    stationsToAdd.push({
                        id: element.id,
                        lat: element.lat,
                        lng: element.lon,
                        name: tags.name || `Stazione ${element.id}`,
                        type: stationType,
                        tags: tags
                    });
                }
            });

            // Use MOD_API to register stations (safest way)
            if (stationsToAdd.length > 0) {
                MOD_API.registerStations(stationsToAdd);
                alert(`✅ Caricate ${stationsToAdd.length} stazioni reali!`);
            } else {
                alert('Nessuna stazione trovata in quest\'area.');
            }

        } catch (e) {
            console.error('Errore nel caricamento delle stazioni:', e);
            alert('❌ Errore nel caricamento delle stazioni: ' + e);
        } finally {
            const button = document.getElementById('load-stations-button');
            if (button) {
                button.textContent = '📥 Carica Stazioni';
                button.disabled = false;
            }
        }
    }

    async function loadRoadsAndTracks() {
        const bounds = map.getBounds();
        const south = bounds.getSouth();
        const west = bounds.getWest();
        const north = bounds.getNorth();
        const east = bounds.getEast();

        const query = `
            [out:json][timeout:30];
            (
                way["highway"]["highway"!="footway"]["highway"!="path"]["highway"!="cycleway"]["highway"!="steps"](${south},${west},${north},${east});
                way["railway"="tram"](${south},${west},${north},${east});
                way["railway"="rail"](${south},${west},${north},${east});
                way["railway"="subway"](${south},${west},${north},${east});
                way["railway"="light_rail"](${south},${west},${north},${east});
            );
            (._;>;);
            out body;
        `;

        try {
            const response = await fetch('https://overpass-api.de/api/interpreter', {
                method: 'POST',
                body: query
            });

            const data = await response.json();

            // We need to clear existing tracks. 
            // Accessing globals directly again as a quick refactor
            if (typeof roadNetwork !== 'undefined') roadNetwork.length = 0;
            if (typeof tramTracks !== 'undefined') tramTracks.length = 0;
            if (typeof trainTracks !== 'undefined') trainTracks.length = 0;
            if (typeof metroTracks !== 'undefined') metroTracks.length = 0;

            const nodeMap = new Map();
            data.elements.forEach(element => {
                if (element.type === 'node') {
                    nodeMap.set(element.id, { lat: element.lat, lng: element.lon });
                }
            });

            const tracksToAdd = [];

            data.elements.forEach(element => {
                if (element.type === 'way' && element.nodes) {
                    const points = element.nodes
                        .map(nodeId => nodeMap.get(nodeId))
                        .filter(p => p !== undefined);

                    if (points.length < 2) return;

                    const tags = element.tags || {};
                    let type = null;

                    if (tags.highway && tags.highway !== 'footway' && tags.highway !== 'path') {
                        type = 'road';
                    }
                    if (tags.railway === 'tram') type = 'tram';
                    if (tags.railway === 'rail') type = 'train';
                    if (tags.railway === 'subway' || tags.railway === 'light_rail') type = 'metro';

                    if (type) {
                        tracksToAdd.push({
                            id: element.id,
                            type: type,
                            points: points
                        });
                    }
                }
            });

            if (tracksToAdd.length > 0) {
                const ids = MOD_API.registerTracks(tracksToAdd);
                alert(`✅ Caricati ${ids.length} segmenti stradali/ferroviari!`);
            } else {
                alert('Nessuna strada/binario trovato.');
            }

        } catch (e) {
            console.error("Error loading roads/tracks:", e);
            alert("Errore nel caricamento strade/binari: " + e);
        }
    }

    // Auto-load logic
    let autoLoadInterval = null;
    function toggleAutoLoad(enabled) {
        if (enabled) {
            // Setup listeners on map move if not already global?
            // The global game.html has logic that calls loadRealStations on moveend if autoLoadStationsInterval is set.
            // We might just piggyback on that or implement our own.
            // Since we removed the logic from game.html, we must implement it here.

            if (!autoLoadInterval) {
                // We use map events instead of interval for better performance
                map.on('moveend', handleMapMove);
                autoLoadInterval = true; // flag
                handleMapMove(); // Load immediately
            }
        } else {
            if (autoLoadInterval) {
                map.off('moveend', handleMapMove);
                autoLoadInterval = null;
            }
        }
    }

    function handleMapMove() {
        if (autoLoadInterval) {
            console.log("Auto-loading stations...");
            loadRealStations();
            loadRoadsAndTracks();
        }
    }

    // Trigger initial load if needed
    // toggleAutoLoad(true); 

})();
