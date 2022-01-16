export function Genres(genres) {
  return (
    <div className="content">
      {genres.genres.map((genre) => {
        return <i key={genre}>{genre} </i>;
      })}
    </div>
  );
}
