export interface RickAndMortyListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallRM[];
    
}

export interface SmallRM {

    results:string[];
    name: string;
    url:  string;
    id:   number;
    image: string;
    origin: {name:string};
    episode: [];
    species: string;
    status: string;
 
    location: {name:string}
    info:{pages:number};
    type:string;
    gender:string;
}


export interface SmallEpisodies {
    name: string;
    air_date: string;
    created:  string;
    id:   number;
    episode: string;
    url: string;
    results:[];
    info:{pages:number};
}
