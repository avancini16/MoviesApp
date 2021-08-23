import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div className="container">
                <div className='images'>
                    <img src={this.props.movie.Poster} alt=''/>
                </div>
                <div className = 'detail'>
                    <h1>{this.props.movie.Title}</h1> 
                    <h3>Genres: {this.props.movie.Genre}</h3>
                    <h4>Year: {this.props.movie.Year}</h4>
                    <h4>Runtime: {this.props.movie.Runtime}</h4>
                    <p>{this.props.movie.Plot}</p>
                    <h4>Director: {this.props.movie.Director}</h4>
                    <h4>Writer: {this.props.movie.Writer}</h4>
                    <h4>Actors: {this.props.movie.Actors}</h4>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);