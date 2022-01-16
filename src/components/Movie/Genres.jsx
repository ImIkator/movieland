export function Genres(genres) {
  return (
    <div className="content">
      {genres.genres.map((genre) => {
        return <i key={genre} className="genre">{genre} </i>;
      })}
    </div>
  );
}
