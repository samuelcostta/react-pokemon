
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonEditForm from "./components/PokemonEditForm/PokemonEditForm";
import Menu from "./components/Menu/Menu";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
          <Route path="/add" component={PokemonEditForm} />
          <Route path="/edit/:id" component={PokemonEditForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
