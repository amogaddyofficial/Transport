// Real Stations Mod - Carica stazioni reali da OpenStreetMap
(async function () {
    MOD_API.log("Real Stations Mod: Starting to load stations...");

    try {
        // Ottieni il centro della mappa
        const center = MOD_API.getMapCenter();
        const lat = center.lat;
        const lng = center.lng;

        MOD_API.log(`Real Stations Mod: Loading stations around ${lat}, ${lng}`);

        // Query Overpass per stazioni
        const query = `
            [out:json][timeout:25];
            (
              node["railway"="station"](around:5000,${lat},${lng});
              node["railway"="halt"](around:5000,${lat},${lng});
              node["public_transport"="stop_position"](around:5000,${lat},${lng});
              node["highway"="bus_stop"](around:5000,${lat},${lng});
              node["railway"="tram_stop"](around:5000,${lat},${lng});
            );
            out body;
        `;

        // Fetch da Overpass API
        const response = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            body: query
        });

        if (!response.ok) {
            throw new Error(`Overpass API returned status ${response.status}`);
        }

        const data = await response.json();

        // Processa le stazioni
        const stations = [];
        for (const element of data.elements) {
            const tags = element.tags || {};
            const stationType = determineStationType(tags);

            const station = {
                id: `osm_${element.id}`,
                lat: element.lat,
                lng: element.lon,
                name: tags.name || 'Stazione Senza Nome',
                type: stationType,
                tags: tags
            };

            stations.push(station);
        }

        // Registra le stazioni tramite API
        MOD_API.registerStations(stations);
        MOD_API.log(`Real Stations Mod: Successfully loaded ${stations.length} stations`);

        // Mostra notifica all'utente
        if (stations.length > 0) {
            setTimeout(() => {
                alert(`✅ Mod "Real Stations" caricata!\n\n📍 Caricate ${stations.length} stazioni reali da OpenStreetMap`);
            }, 500);
        }

    } catch (error) {
        MOD_API.log(`Real Stations Mod ERROR: ${error.message}`);
        console.error("Real Stations Mod Error:", error);
        alert(`⚠️ Errore nel caricamento della mod "Real Stations":\n${error.message}\n\nIl gioco continuerà senza stazioni reali.`);
    }

    function determineStationType(tags) {
        // Determina il tipo di stazione dai tag OSM
        if (tags.railway === 'station' || tags.railway === 'halt') {
            return 'train';
        } else if (tags.highway === 'bus_stop') {
            return 'bus';
        } else if (tags.railway === 'tram_stop') {
            return 'tram';
        } else if (tags.public_transport === 'stop_position') {
            // Determina dal tipo di trasporto
            if (tags.train === 'yes' || tags.subway === 'yes') return 'train';
            if (tags.bus === 'yes') return 'bus';
            if (tags.tram === 'yes') return 'tram';
        }
        return 'train'; // Default
    }
})();
