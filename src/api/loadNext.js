export async function loadNext(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=61be3a4c68c246ddbff6a44b2d0469f8&language=en-US&page=${page}`
  );

  const data = await response.json();

  return data;
};
