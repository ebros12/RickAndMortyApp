
const toggleFavoritesEpisodies = ( id:number ) => {
    let favoriteEpisodies: number[] = JSON.parse(localStorage.getItem('favoriteEpisodies') || '[]');

    
    if(favoriteEpisodies.includes(id)){
        favoriteEpisodies = favoriteEpisodies.filter(ram => ram !== id);
    }else{
        favoriteEpisodies.push(id);
    }
    localStorage.setItem('favoriteEpisodies',JSON.stringify(favoriteEpisodies))
}

const existRamFavorites = (id:number):boolean => {
    if(typeof window === 'undefined') return false;
    const favorites: number[] = JSON.parse(localStorage.getItem('favoriteEpisodies') || '[]');
    return favorites.includes(id);
}

const rickAndMortyEpisode = (): number[] => {
    return JSON.parse(localStorage.getItem('favoriteEpisodies') || '[]');
}



export default {
    toggleFavoritesEpisodies,
    existRamFavorites,
    rickAndMortyEpisode
}