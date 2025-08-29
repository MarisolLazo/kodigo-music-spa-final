// Componente para la página de la Librería de Canciones
function Library({ songs, selectedArtist }) {
  // Función para obtener las canciones a mostrar
  const songsToShow = selectedArtist ? songs[selectedArtist] : Object.values(songs).flat();

  return (
    <section className="p-6 text-center">
      <h3 className="mb-6 text-2xl font-bold">
        {selectedArtist ? `Canciones de ${selectedArtist}` : "Toda la Librería"}
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {songsToShow.length > 0 ? (
          songsToShow.map((song, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between w-full max-w-sm p-4 transition rounded-lg shadow-lg bg-zinc-900 hover:bg-zinc-800 group"
            >
              <p className="flex-grow text-left">{song}</p>
              <button
                onClick={() => console.log("Reproduciendo canción:", song)}
                className="px-3 py-1 text-black transition bg-green-500 rounded-full opacity-0 group-hover:opacity-100"
              >
                ▶
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No hay canciones disponibles para este artista.</p>
        )}
      </div>
    </section>
  );
}

export default Library;