let movies = [
    {
        id: 0,
        name:"HyunSeok0",
        score: 2
    },
    {
        id: 1,
        name:"HyunSeok1",
        score: 5
    },
    {
        id: 2,
        name:"HyunSeok2",
        score: 10
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if (movies.length > cleanedMovies.length){
        movie = cleanedMovies;
        return true;
    } else {
        return false;
    }
};
