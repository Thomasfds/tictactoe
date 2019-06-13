import React from 'react';

class Clock extends React.Component{
    //Première fonction qui s'éxecute pour créer le composant --> c'est celle qui le construit
    constructor(props){
        super(props);
        this.state={
            date : new Date()
        };
    }

    // La fonction qui affiche l'HTML sur l'écran TO render -> Affiché
    render(){
        return(
        <div>
            <h1>Heure local (sans interval)</h1>
            <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
        </div>
        );
    }
    // Une fois l'affichage render à lieu, la fonction suivante s'execute directement
    //ComponentDidMount = Le composant vient de se mettre en place  
    componentDidMount(){
        this.timerID = setInterval(()=>this.tictac(), 1000)
    }

    // Voici une fonction qui permet de mettre à jour la date dans l'état
    // Att : qui dit mise à jour de l'état dit : setState

tictac(){
    this.setState({
        date : new Date()
    });
}

// Juste avant de finir le lifecycle et de quitter le composant, nous effaçon le contenu de l'intervalle
componentWillUnmount(){
    clearInterval(this.timerID);
}

}



export default Clock;