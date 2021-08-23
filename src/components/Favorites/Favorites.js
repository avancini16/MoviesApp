import React, { Component } from "react";
import { connect } from "react-redux";
import {removeMovieFavourite} from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => (
              <div key={movie.id} className='movie-container'>

                <div className='movies-title'>
                  <Link to={`/movie/${movie.id}`} className='link'>
                    {movie.title}
                  </Link>
                </div>
                <div className='x-div'>

                <button onClick={() => this.props.removeMovieFavourite(movie.id)} className='x-button'> X </button>
                </div>

              </div>

            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavourite: id => dispatch(removeMovieFavourite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

// export default (ConnectedList);
