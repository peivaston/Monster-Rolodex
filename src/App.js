import './App.css';
import { Component } from 'react';
import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ProsessPilot: [],
      searchField: ''
  };


}

 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ProsessPilot: users}));
}
onSearchChange = (e) => {
  this.setState({ searchField: e.target.value});

}
 
  render() {
    const { ProsessPilot, searchField  } = this.state;
    const filteredPilots = ProsessPilot.filter(pilot =>
      pilot.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className='App'>
        <h1>  Monster Rolodex </h1>
        <SearchBox 
        placeholder='Search Pilots'
        onSearchChange={this.onSearchChange}  />
        <CardList  ProsessPilot={filteredPilots} />
          
        
      </div>
    )
  }

}


export default App;
