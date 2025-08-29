import React from "react";

function Artists({ artists, handleArtistClick }) {
  return (
    <section className="p-6 text-center">
      <h3 className="mb-6 text-2xl font-bold">Artistas Populares</h3>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 justify-items-center">
        {artists.map((artist) => (
          <div
            key={artist.nombre}
            onClick={() => handleArtistClick(artist.nombre)}
            className="relative p-4 text-center transition rounded-lg shadow-lg cursor-pointer bg-zinc-900 hover:bg-zinc-800 group"
          >
            <img
              src={artist.img}
              alt={artist.nombre}
              className="object-cover w-24 h-24 mx-auto mb-3 rounded-full"
            />
            <p className="text-sm font-semibold">{artist.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Artists;