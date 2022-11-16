
const toggleFavorites = ( id:number ) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if(favorites.includes(id)){
        favorites = favorites.filter(ram => ram !== id);
    }else{
        favorites.push(id);
    }
    localStorage.setItem('favorites',JSON.stringify(favorites))
}

const existRamFavorites = (id:number):boolean => {
    if(typeof window === 'undefined') return false;
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const rickAndMorty = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    toggleFavorites,
    existRamFavorites,
    rickAndMorty
}