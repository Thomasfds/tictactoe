import React from 'react';

class Square extends React.Component{

    constructor(props){
        super(props);
        this.state={
            valeur:null,

        }
    }

//A la définition dans constuctor lors d'une surclass et qu'on surcharge le constructor on utilise super(props)

    render(){
        return (
            <button className="square" /*onClick={function(){alert('click');}}*/ onClick={() => this.props.onClick()}>
                {this.props.valeur}
            </button>
        );
    }
    
}

export default Square;