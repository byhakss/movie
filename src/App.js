import React from 'react';
//import PropTypes from 'prop-types';
import axios from "axios";
import { async } from 'q';

class App extends React.Component {
  state = {
    count : 0,
    isLoading : true
  }

  plus = () => {
    this.setState(current => ({count : current.count + 1}));
    console.log("plus");
  }
    

  minus = () => {
    this.setState(current => ({count : current.count - 1}));
    console.log("minus");
  }

  getMovies = async() => {
    const movieLists = await axios.get("https://yts.lt/api/v2/list_movies.json");
  }

  componentDidMount() {
    this.getMovies();
    
    setTimeout(()=>{
      this.setState({isLoading:false})
      }, 5000
    );

  }

  render() {
    const {isLoading} = this.state;

    return (
        <div>
          {isLoading ? "Loading" : "Ready"}
          <h1>test {this.state.count}</h1>
          <button onClick={this.plus}>plus</button>
          <button onClick={this.minus}>minus</button>
          
        </div>
      );
  }
}

export default App;