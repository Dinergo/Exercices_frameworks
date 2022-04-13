import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



class Bouton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
                  value: props.valeur,
                  event: props.event
                  };
  }
  render() {
      return (<button onClick = {this.state.event} > {this.state.value} </button>)
  }
  
}



class MainBoard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ecran : '',
        operation : '',
        buffer : '',
        isBufferOn : false
      }

      this.select = this.select.bind(this);
      this.operation = this.operation.bind(this);
  }

  select(valeur) {

    if(!this.state.isBufferOn) {
      this.setState((state) => ({
        ecran : state.ecran + String(valeur)
      }))
    }
    else {
      this.setState((state) => ({
        buffer : state.buffer + String(valeur)
      }))
    }
    
  };

  virgule() {
    if(!this.state.isBufferOn) {
      
      // recherche de la virgule dans l'écran de base. Si absence, on l'ajoute, sinon rien
      if(!this.state.ecran.includes('.')) {
        this.select('.');
      }

    }
    else {
      // recherche de la virgule dans le buffer. Si absence, on l'ajoute, sinon rien
      if(!this.state.buffer.includes('.')) {
        this.select('.');
      }
    }
  }

  operation(symbole) {
    //change l'opération actuelle pour celle envoyée
    // addition, soustraction, multiplication pour le moment
    this.setState((state) => ({
      operation : symbole,
      isBufferOn : true
    }))
  };

  nettoyage() {
    this.setState((state) => ({
      ecran : '',
      operation : '',
      buffer: '',
      isBufferOn : false
    }))
  };

  resultat() {
    
    switch (this.state.operation) {
      case '+' : 
      this.setState((state) => ({ 
        ecran : parseFloat(state.ecran)  + parseFloat(state.buffer),
        buffer: '',
        operation : '' 
      }));
      break;

      case '-' : 
      this.setState((state) => ({ 
        ecran : parseFloat(state.ecran)  - parseFloat(state.buffer),
        buffer: '',
        operation : '' 
      }));
      break;

      case 'x' : 
      this.setState((state) => ({ 
        ecran : parseFloat(state.ecran)  * parseFloat(state.buffer),
        buffer: '',
        operation : '' 
      }));
      break;
      
      case '%' : 
      if(this.state.buffer != 0) {
        this.setState((state) => ({ 
          ecran : parseFloat(state.ecran)  / parseFloat(state.buffer),
          buffer: '',
          operation : '' 
        }));
      }
      else {
        console.log("DIVISION PAR ZERO !!!");
      } 
      break;


      default:
      console.log("symbole absent ou non reconnu");
    }
    
  }

  render () {
      return( 
          <div>

            <div>
              <Bouton valeur = '0' event = { () =>this.select(0)}/>
              <Bouton valeur = '1' event = { () =>this.select(1)}/>
              <Bouton valeur = '2' event = { () =>this.select(2)}/>
              <Bouton valeur = '3' event = { () =>this.select(3)}/>
              <Bouton valeur = '4' event = { () =>this.select(4)}/>
              <Bouton valeur = '5' event = { () =>this.select(5)}/>
              <Bouton valeur = '6' event = { () =>this.select(6)}/>
              <Bouton valeur = '7' event = { () =>this.select(7)}/>
              <Bouton valeur = '8' event = { () =>this.select(8)}/>
              <Bouton valeur = '9' event = { () =>this.select(9)}/>
              </div>
              <div>
              <Bouton valeur = '+' event = { () => this.operation('+') }  />
              <Bouton valeur = '-' event = { () => this.operation('-') }  />
              <Bouton valeur = 'x' event = { () => this.operation('x') }  />
              <Bouton valeur = '%' event = { () => this.operation('%') }  />
              
              <Bouton valeur = '.' event = { () => this.virgule() }  />
              
              <Bouton valeur = '=' event = { () => this.resultat()}/>
              <Bouton valeur = 'clear' event = {() => this.nettoyage()} />

              </div>
              
              <div>
              {this.state.ecran}  {this.state.operation}  {this.state.isBufferOn ? this.state.buffer : ''}
            </div>

          </div>
          )

  }
  
}
ReactDOM.render(
  <React.StrictMode>
    
    <MainBoard />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
