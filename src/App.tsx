import './App.css'

const movies = ['Terminator 2', 'Scream', 'Fight Club']

function App() {
    return (
        <>
            <h1>Mein Movie-Tracker</h1>
            <ul>
                {movies.map(movie =>
                    <li key={movie}>{movie}</li>

                )}
            </ul>
        </>
    )
}

export default App
