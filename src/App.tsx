// CSS-Datei importieren (Styling der App)
import './App.css'
// useState aus React importieren (für reaktive Daten)
import { useState } from 'react'

// TypeScript-Typ: beschreibt die Form eines Film-Objekts
// Jeder Film hat eine eindeutige id (Zahl) und einen Titel (Text)
type Movie = {
    id: number
    title: string
 }

function App() {
    // State für die Filmliste
    // movies = aktuelles Array, setMovies = Funktion zum Ändern
    // Startwert: drei Filme als Objekte
    const [movies, setMovies] = useState <Movie[]>([
        { id: 1, title: 'Terminator 2' },
        { id: 2, title: 'Scream' },
        { id: 3, title: 'Fight Club' }
    ])

    // State für das Eingabefeld
    // inputValue = aktueller Text im Feld, setInputValue = Funktion zum Ändern
    // Startwert: leerer String (leeres Feld)
    const [inputValue, setInputValue] = useState('')

    // Handler-Funktion: wird aufgerufen wenn der Button geklickt wird
    function handleAdd() {
        // Abbruch wenn das Eingabefeld leer ist (trim() entfernt Leerzeichen)
        if (inputValue.trim() === '') return

        // Neues Film-Objekt erstellen
        // id = aktuelle Länge des Arrays + 1 (einfache Lösung für eindeutige ids)
        // title = was der Nutzer eingegeben hat
        const newMovie: Movie = {
            id: movies.length + 1,
            title: inputValue
        }

        // State aktualisieren: neues Array mit allen alten Filmen + dem neuen
        // ...movies = "spread operator", kopiert alle bestehenden Filme
        // Niemals direkt movies.push() - immer ein neues Array erzeugen!
        setMovies([...movies, newMovie])

        // Eingabefeld leeren nach dem Hinzufügen
        setInputValue('')
    }

    return (
        <div className="container">
        {/* Überschrift*/}
            <h1 className='title'>Mein Movie-Tracker</h1>

            {/* Filmliste */}
            <ul className='movie-list'>
                {movies.map(movie =>
                    <li key={movie.id} className='movie-item'>
                        {movie.id}
                    </li>
                )}
            </ul>
        
        {/* Eingabebereich */}
        <div className='add-form'>
                <input 
                    className='movie-input'
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='filmtitel eingeben...'
                />
                <button className='add-button' onClick={handleAdd}>
                    Hinzufügen
                </button>
        </div>

        </div>
        
    )
}

// Komponente exportieren damit sie in main.tsx verwendet werden kann
export default App
