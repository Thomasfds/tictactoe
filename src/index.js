import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import Garage from './Garage';
import Game from './Game';
import Tick from './Tick';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Liste from './Liste';

import * as serviceWorker from './serviceWorker';


// function Tick2(){
//     const element = (
//         <div>
//             <h1>Heure local</h1>
//             <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('popo2'));

// }

// setInterval(Tick2, 1000);


const myelement = (<p>Coucou voilà mon html {54684654654-56489464646465}</p>);

//Sans synthaxe JSX 
const  myeselent2 = React.createElement('p', {}, 'coucou ici lol');


ReactDOM.render(<LoginControl />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('popo'));
ReactDOM.render(<Toggle />, document.getElementById('popo2'));

const numbers =['5','4','3','2','1'];

ReactDOM.render(<Liste numbers={numbers} />, document.getElementById('popo3'));

const message =['COUCOU CA FARTE', 'CA FARTE ET TOI', 'JAI FAIM'];

ReactDOM.render(<Mailbox  messagesnonlus={message}/>, document.getElementById('root3'));

//ReactDOM.render(<Garage />, document.getElementById('popo'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

