import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import Menu from "../Menu/Menu";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
//Neste utilizand o axios que é um componente para fazer o consumo de serviço
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => setPokemons(response.data.results));
  }, []);

  return (
    <div>
      <DataTable value={pokemons}>
        <Column field="name" header="Name"></Column>
        <Column
          field="url"
          header="Details"
          body={(rowData) => (
            <a href={`/pokemon/${parseInt(rowData.url.split("/")[6])}`} 
            target="_self" rel="noreferrer">
              Details
            </a>
          )}
        ></Column>
      </DataTable>
    </div>
  );
};

export default PokemonList;