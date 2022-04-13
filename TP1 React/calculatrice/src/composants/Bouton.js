import React from 'react';
import ReactDOM from 'react-dom';

class Bouton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    value: props.valeur
                    };
    }
    render() {
        return (<button> {this.state.value}</button>)
    }
}

export default Bouton;
