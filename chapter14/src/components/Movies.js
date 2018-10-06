import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import connect from 'react-redux';
const movies = require('../movies.json')
const styles = require('/movies.css')

class Movies extends React.Component {
    componentWillMount() {
        this.props.fetchMovies(movies)
    }

    render() {
        const {
            children,
            movies = [],
            params = {}
        } = this.props

        return (
            <div className={styles.movies}>
                <div className={params.id ? styles.listHidden : styles.list}>
                    {movies.map((movie, index) => (
                        <NavLink
                            key={index}
                            to={`/movies/${index + 1}`}>
                            <div
                                className={styles.movie}
                                style={{ backgroundImage: `url(${movie.cover})` }} />
                        </NavLink>
                    ))}
                </div>
                {children}
            </div>
        )
    }
}

export default Movies;