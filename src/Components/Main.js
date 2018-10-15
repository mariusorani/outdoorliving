import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import  Home  from './Home';
import  Lamellendach  from './Lamellendach';
import  Aufbau  from './Aufbau';
import  Optionen  from './Optionen';
import  Technik  from './Technik';
import  Referenzen  from './Referenzen';
import  Team  from './Team';
import  Kontakt  from './Kontakt';
 
const Main = () => (
    <main className='main'>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/lamellendach' component={Lamellendach}/>
            <Route path='/optionen' component={Optionen}/>
            <Route path='/aufbau' component={Aufbau}/>
            <Route path='/technik' component={Technik}/>
            <Route path='/referenzen' component={Referenzen}/>
            <Route path='/team' component={Team}/>
            <Route path='/kontakt' component={Kontakt}/>
        </Switch>
    </main>
)

export default Main;



