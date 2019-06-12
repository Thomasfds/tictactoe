import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import Garage from './Garage';
import Game from './Game';

import * as serviceWorker from './serviceWorker';

const myelement = (<p>Coucou voilà mon html {54684654654-56489464646465}</p>);

//Sans synthaxe JSX 
const  myeselent2 = React.createElement('p', {}, 'coucou ici lol');



ReactDOM.render(<Game />, document.getElementById('root'));
//ReactDOM.render(<Garage />, document.getElementById('popo'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
