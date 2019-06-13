import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    }

    //Event.target correspond au champ de texte que l'on rempli
    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Ton nom est '+ this.state.value)
        //A mettre en react au lieux du return que l'ont mettrait en Javascript
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name :
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type="submit" value="Submit">Submit</button>
            </form>
        ); 
    }
}

export default NameForm;