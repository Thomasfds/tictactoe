import React from 'react';

//Lorsque que j'appuis sur le bouton Toggle il y un like du commentaire, sinon c'est un dislike

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            like: false,
        }
        // Nous allons lier la fonction handleclick avec le 'this' pour ne pas avoir à le répéter sans cesse... technique bonne à savoir
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(
            state => ({like: !state.like})
        );
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.like ? 'Like :)' : 'Dislike :('}
            </button>
        )
    }
}

export default Toggle;