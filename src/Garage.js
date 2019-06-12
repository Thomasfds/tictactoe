import React from 'react';
import Voiture from './Voiture';

class Garage extends React.Component {

    //attributs


    // methods
    render(){
        const def="grise";
        const voit = {color:"grise", brand:"Peugot", owner:"None", id:"7684354"};
        // on ouvre les parenthèses pour injecter l'html via l'anotation JSX - Javascript xml
        // c'est ici que l'ont défini me contenu html à l'appel de la balise <Garage/> dans index.js
        return (

            <div>
                <h1>
                    Quelles sont les voitures que j'ai dans mon garage ?
                </h1>
                <h1><Voiture color="vert" brand="Mustang" owner="Sylvain" id="8654565"/></h1>
                <Voiture color="vert" brand="Mustang" owner="Sylvain" id="8654565"/>
                <Voiture color="rouge" brand="Licile" owner="Sylvain" id="4894646546"/>
                <Voiture color={voit.color} brand={voit.brand} />

            </div>
        );
    }

}

export default Garage;