import SongCard from "../components/SongCard";

export default function Favorites({ listFavorites, changeFavorites }) {
  return (
    <div>
      <h2>My Favorites</h2>
      {listFavorites.length === 0 && <p>No favorites yet!</p>}
      <div className="song-list">
        {listFavorites.map(song => (
          <SongCard
            key={song.id}
            song={song}
            listFavorites={listFavorites}
            changeFavorites={changeFavorites}
          />
        ))}
      </div>
    </div>
  );
}
