const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action){
      switch(action.type){
          case 'GET_MOVIES':
              return {
                  ...state,
                  moviesLoaded: action.payload.Search
              }
          case 'ADD_MOVIE_FAVORITE':
              return {
                    ...state,
                    moviesFavourites: state.moviesFavourites.concat(action.payload)
              }
          case 'REMOVE_MOVIE_FAVOURITE':
              return {
                  ...state,
                  moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
              } 
          case 'GET_MOVIE_DETAILS':
              return {
                  ...state,
                  movieDetail: action.payload
              }
              default:
                return state;              
      }
  }

  export default rootReducer;