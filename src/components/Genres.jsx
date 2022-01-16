export function Genres(genres) {
console.log(genres);
  return (
    <div className="content">
      {genres.genres.map((genre) => {
        return <i>{genre} </i>;
      })}
    </div>
  );
}
