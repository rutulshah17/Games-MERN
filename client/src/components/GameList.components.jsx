import React from 'react';
import axios from 'axios';
import {Game} from './GameList/Game/Game.component';

class GameList extends React.Component {

    constructor() {
        super();
        this.state = {
            games:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/app/')
            .then(response => {
                this.setState({games: response.data});
            })
            .catch((error) => { console.log(error) });
        }
    

    render() {

        const { games } = this.state;

        return(
            <div>
            {
                games.length
                ? games.map( 
                    (game) => <Game key={game._id} gameProps={game} /> 
                )
                : <span className='empty-message'> Your Cart is Empty </span>
            }
            </div>
        );
    }

}

export default GameList