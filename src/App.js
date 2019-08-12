import React from 'react';
//import PropTypes from 'prop-types';
import axios from "axios";
import Movies from "./Movie";
import "./App.css"

class App extends React.Component {
  state = {
    movies : [],
    isLoading : true
  }

  getMovies = async() => {
    const {data: {data:{movies}} } = await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies:movies, isLoading : false})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;

    return (
        <section className="container">
          {isLoading ? (
              <div className="loader">
                <span className="loader-test"> Loading...</span>
              </div>
            ): movies.map(movie=>(
                <Movies 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                  large_cover_image={movie.large_cover_image}
                />
              )
            )
          }
        </section>
      );
  }
}

export default App;