const WelcomePage = ({ userName, handleNavigation, likedSongs }) => {
  return (
    <section className="min-h-screen px-4 py-12 text-center bg-gray-900">
      <div className="max-w-md p-8 mx-auto text-white bg-gray-800 rounded-lg shadow-xl">
        <h3 className="mb-4 text-3xl font-bold">¡Bienvenido, {userName}! 🎉</h3>
        <p className="mb-6 text-gray-400">
          {/* Ahora puedes disfrutar de tu música favorita y guardar tus canciones. */}
        </p>
        <div className="space-y-4 text-left">
          <h4 className="text-xl font-bold">Canciones que te gustan:</h4>
          {likedSongs.length > 0 ? (
            <ul className="list-disc list-inside">
              {likedSongs.map((song, index) => (
                <li key={index} className="text-gray-300">{song}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Aún no has dado "me gusta" a ninguna canción. Ve a la Librería para empezar.</p>
          )}
        </div>
        <button
          onClick={() => handleNavigation("library")}
          className="w-full py-3 mt-6 font-bold text-black transition-colors bg-green-500 rounded-lg hover:bg-green-600"
        >
          Ir a la Librería
        </button>
      </div>
    </section>
  );
};

export default WelcomePage;