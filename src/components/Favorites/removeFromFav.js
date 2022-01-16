export async function removeFromFav(favorite) {

  try {

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];


    const newFavorites = savedFavorites.filter(
      savedFavorite => savedFavorite.id !== favorite.id
    );
    
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  
    console.log('removed'); 
    console.log(savedFavorites);
    console.log(newFavorites);
    console.log(favorite);

  } catch (error) {
    
    return;
  }

};
