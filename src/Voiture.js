import React from 'react';

// Création d'une classe voiture
// On hérite de la classe Componant définie dans React
class Voiture extends React.Component{

    //Attributs


    //Méthodes
    constructor(){
        // var vie=5;
        super(); // il prend le comportement du composant parent, execution du constructor qui est defini dans React.Compenent
        // Initialisation avec state
        // this.state={color:"rouge", vie};
    }

    render(){
        return <h2>Je suis une voiture {this.props.brands}, de couleur  {this.props.color}, appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
    }
}

export default Voiture;