export function addMovieFavorite(payload) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload 
    };
}

export function removeMovieFavourite(id){
    return {
        type: "REMOVE_MOVIE_FAVOURITE",
        payload: id 
    };
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail(id){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type: 'GET_MOVIE_DETAILS', payload: json});
        });
    }

}