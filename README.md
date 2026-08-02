# TV Companion

MVP di un tracker per serie TV — ricerca via TVMaze (nessuna registrazione o API key richiesta), libreria personale (da vedere / in corso / completate), tracking episodi visti, calendario prossime uscite.

Nota: TVMaze copre solo serie TV, non i film. Se in futuro arriva l'accesso a TMDB si può reintrodurre il supporto ai film.

## File
- `index.html` — tutta l'app (markup, stile, logica)
- `manifest.json` — configurazione PWA (per installarla su home screen)
- `sw.js` — service worker per lo shell offline
- `icon-192.png`, `icon-512.png` — icone app

## Deploy su GitHub Pages (da iPhone)
1. Crea un nuovo repository su GitHub (es. `tv-companion`)
2. Con "Add file → Create new file" carica ognuno di questi 5 file nella root del repo
3. Vai su **Settings → Pages**, imposta la sorgente su branch `main`, cartella `/ (root)`
4. Apri l'URL generato (tipo `tuonome.github.io/tv-companion/`) da Safari — funziona subito, nessuna configurazione richiesta

## Come usare
- **Cerca**: cerca un titolo, tocca il poster, scegli lo stato (da vedere / in corso / completata)
- **Libreria**: qui trovi tutto diviso per stato, con episodi da segnare come visti
- **Calendario**: mostra automaticamente il prossimo episodio/uscita di tutto ciò che è "in corso"

## Prossimi step possibili (fase 2+)
- Notifiche push quando esce un nuovo episodio (richiede PWA installata, iOS 16.4+)
- Statistiche (episodi visti, ore totali)
- Sync multi-dispositivo (richiederebbe un layer tipo Firebase, non solo GitHub Pages)
