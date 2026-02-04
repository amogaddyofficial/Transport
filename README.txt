# Trasporti - Gestione Rete Metropolitana

Un'applicazione web interattiva per creare mappe e gestire una rete metropolitana. L'applicazione permette di disegnare mappe con strade, edifici, parchi e fiumi, e poi di costruire su di esse una rete di trasporti con binari e stazioni.

## Struttura del Progetto

### File Principali

#### `index.html`
**Menu principale** dell'applicazione. È la pagina di ingresso che offre due opzioni principali:
- **Mappa**: Accede all'editor di mappe per creare o modificare mappe
- **Gioca**: Accede al menu del gioco per iniziare una nuova partita o continuare una esistente

#### `map_editor.html`
**Editor di mappe** completo. Permette di creare e modificare mappe con diversi elementi:
- **Strade**: Disegna strade dritte o curve per creare la rete viaria
- **Edifici**: Aggiungi edifici poligonali sulla mappa
- **Parchi**: Disegna aree verdi (parchi) sulla mappa
- **Fiumi**: Aggiungi fiumi con larghezza personalizzabile
- **Binari**: Opzionalmente, puoi aggiungere binari anche nell'editor
- **Livelli**: Supporta diversi livelli di profondità (-1, 0, 1) per organizzare gli elementi
- **Salvataggio**: Salva le mappe nella cartella "my maps" in formato JSON

#### `game_menu.html`
**Menu del gioco** che appare quando si seleziona "Gioca" dal menu principale. Offre due opzioni:
- **Nuova partita**: Avvia una nuova partita selezionando una mappa esistente
- **Seleziona partita esistente**: Carica un gameplay salvato in precedenza

#### `map_selector.html`
**Selettore di mappe** per iniziare una nuova partita. Permette di:
- Visualizzare tutte le mappe salvate nella cartella "my maps"
- Vedere informazioni su ogni mappa (dimensioni, numero di strade, edifici, parchi, fiumi, binari)
- Selezionare una mappa per iniziare una nuova partita
- Aggiornare la lista delle mappe disponibili

#### `gameplay_selector.html`
**Selettore di gameplay** per continuare una partita esistente. Permette di:
- Visualizzare tutti i gameplay salvati nella cartella "gameplays"
- Vedere informazioni su ogni gameplay (mappa associata, numero di binari, stazioni, date di inizio e ultimo salvataggio)
- Selezionare un gameplay per continuare a giocare
- Aggiornare la lista dei gameplay disponibili

#### `game.html`
**Schermata di gioco principale** dove si costruisce la rete metropolitana. Funzionalità:
- **Caricamento mappe**: Carica automaticamente la mappa selezionata o il gameplay salvato
- **Strumenti di costruzione**:
  - **Binari**: Disegna binari curvi (con 3 click: punto iniziale, punto di controllo, punto finale) sulla mappa
  - **Stazioni**: Posiziona stazioni di tre tipi:
    - **Sotterranea** (livello -1): Stazioni nel sottosuolo
    - **Livello 0**: Stazioni a livello del suolo
    - **Sopraelevata** (livello 1): Stazioni elevate
  - **Rotazione stazioni**: Ruota le stazioni prima di posizionarle
- **Sistema di livelli**: Cambia tra livelli -1, 0, 1 per organizzare binari e stazioni
- **Collisioni**: Il sistema previene il posizionamento di binari su edifici/parchi e stazioni in posizioni non valide
- **Salvataggio**: Salva automaticamente il gameplay nella cartella "gameplays" con tutte le modifiche

### Cartelle

#### `gameplays/`
Cartella dove vengono salvati tutti i gameplay (partite in corso o completate). Ogni gameplay è salvato come file JSON contenente:
- Dati della mappa di base
- Binari aggiunti durante il gioco
- Stazioni posizionate
- Timestamp di inizio e ultimo salvataggio
- Dimensioni del canvas

#### `my maps/`
Cartella dove vengono salvate tutte le mappe create con l'editor. Ogni mappa è salvata come file JSON contenente:
- Nome della mappa
- Dimensioni (larghezza e altezza)
- Strade, edifici, parchi, fiumi
- Eventuali binari predefiniti
- Timestamp di creazione/modifica

## Come Usare l'Applicazione

### Creare una Mappa
1. Apri `index.html` nel browser
2. Clicca su "Mappa"
3. Usa gli strumenti nell'editor per disegnare:
   - Strade, edifici, parchi, fiumi
4. Clicca su "Salva" per salvare la mappa nella cartella "my maps"

### Iniziare una Nuova Partita
1. Dal menu principale, clicca su "Gioca"
2. Seleziona "Nuova partita"
3. Scegli una mappa dalla lista
4. Inizia a costruire la tua rete metropolitana con binari e stazioni

### Continuare una Partita Esistente
1. Dal menu principale, clicca su "Gioca"
2. Seleziona "Seleziona partita esistente"
3. Scegli un gameplay dalla lista
4. Continua a costruire la tua rete metropolitana

### Durante il Gioco
- **Binari**: Clicca 3 volte per creare un binario curvo (punto iniziale, punto di controllo, punto finale)
- **Stazioni**: Seleziona il tipo di stazione, ruotala se necessario, poi clicca per posizionarla
- **Livelli**: Usa i pulsanti +/- per cambiare livello e organizzare la rete
- **Salvataggio**: Clicca su "Salva" per salvare il progresso

## Tecnologie Utilizzate

- **HTML5**: Struttura delle pagine
- **CSS3**: Styling con effetti glassmorphism e animazioni
- **JavaScript**: Logica dell'applicazione e interazione con File System Access API
- **Canvas API**: Disegno di mappe, binari e stazioni
- **File System Access API**: Salvataggio e caricamento di file locali

## Requisiti del Browser

L'applicazione richiede un browser moderno che supporti:
- File System Access API (Chrome, Edge, Opera)
- Canvas API
- ES6+ JavaScript

**Nota**: Per il salvataggio e caricamento dei file, è necessario concedere i permessi di accesso alle cartelle quando richiesto dal browser.

## Struttura dei Dati

### Formato Mappa (JSON)
```json
{
  "name": "Nome della mappa",
  "width": 800,
  "height": 600,
  "roads": [...],
  "buildings": [...],
  "parks": [...],
  "rivers": [...],
  "tracks": [...],
  "timestamp": "..."
}
```

### Formato Gameplay (JSON)
```json
{
  "mapFile": "nome_mappa.json",
  "mapData": {...},
  "gameTracks": [...],
  "gameStations": [...],
  "startTime": "...",
  "lastSaveTime": "...",
  "canvasWidth": 800,
  "canvasHeight": 600
}
```






questa versione non funziona ma se la aggiusti faremo la 1.0 fixed


