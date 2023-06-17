import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import axios from "axios";
import { PokemonModel } from "../../model/pokemon-model";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<PokemonModel>();
  const { id } = useParams<{id: string}>();

  const [loading, setLoading] = useState(false);

  const buttonRef = useRef(null);
  const history = useHistory();


  const load = () => {
      setLoading(true);

      setTimeout(() => {
          setLoading(false);
      }, 2000);
  };


  function loadPage(){
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setPokemon(response.data));
  }

  
  function cliquei(){
    load();
    //history.push(`/edit/${id}`)
    //window.location.href=`/edit/${id}`;
    window.location.replace(`/edit/${id}`);
  }

  useEffect(() => {
    loadPage()
  },[]);

  if (!pokemon) return null;

  return (
    <div>
      <Card title={pokemon.name}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-mr-2 p-button-success"
            ref={buttonRef}
            loading={loading}
            onClick={cliquei} 
            
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            className="p-button-danger"
          />
        </div>
      </Card>
    </div>
  );
};

export default PokemonDetails;

