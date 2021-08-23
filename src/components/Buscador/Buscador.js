import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies} from '../../actions/index'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div className='container-search'>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {
           this.props.moviesLoaded && this.props.moviesLoaded.map(movie => (
             <div key={movie.imdbID} className='movies-container'>
               <div className='img-container'>
                 <img src={movie.Poster} alt='' className='image'/>
               </div>

               <div className='movie-title'>
                <Link to={`/movie/${movie.imdbID}`} className='link'>
                {movie.Title}
                </Link>
               </div>

               <button onClick={() => this.props.addMovieFavorite({id:movie.imdbID, title: movie.Title})} className='fav-button'> + Favorites </button>

             </div>
           ))
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
