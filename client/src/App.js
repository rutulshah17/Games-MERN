import React from 'react';
import axios from 'axios';
import GameList from './components/GameList.components';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      console: '',
      createdBy: ''
    }
  }

  changeName = event => {
    this.setState({name: event.target.value});
  };

  changeConsole = event => {
    this.setState({console: event.target.value});
  };

  changeCreatedBy = event => {
    this.setState({createdBy: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    const receivedGame = {
      name: this.state.name,
      console: this.state.console,
      createdBy: this.state.createdBy
    }

    axios.post('http://localhost:4000/app/create', receivedGame)
      .then( res => console.log(res) )
      .catch( error => console.log(error) );

    this.setState({
      name: '',
      console: '',
      createdBy: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='name' onChange={this.changeName} />
        <input type='text' placeholder='console' onChange={this.changeConsole} />
        <input type='text' placeholder='createdBy' onChange={this.changeCreatedBy} />
        <GameList />
        <button type='submit'> Submit </button>
      </form>
    )
  }

}

export default App;