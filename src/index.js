import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*function CoolComponent({adjective}) {
    //return React.createElement('p', {}, 'Youpi c'est trop cool !')
    return <p>Youpi c'est trop {adjective} !!!</p> // syntaxe JSX
}*/

ReactDOM.render(
    //React.createElement(CoolComponent),
    /*<CoolComponent adjective='awesome' />, //Syntaxe JSX*/

  //<React.StrictMode>
    <App />,
  //</React.StrictMode>,*/
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
