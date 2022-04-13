import React from 'react';
import ReactDOM from 'react-dom';
import Bouton from './Bouton';

class MainBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return( 

            <div>
                <Bouton valeur = '0' />
                <Bouton valeur = '1' />
                <Bouton valeur = '2' />
                <Bouton valeur = '3' />
                <Bouton valeur = '4' />
                <Bouton valeur = '5' />
                <Bouton valeur = '6' />
                <Bouton valeur = '7' />
                <Bouton valeur = '8' />
                <Bouton valeur = '9' />
            </div>
            )

    }
    
}

export default MainBoard;