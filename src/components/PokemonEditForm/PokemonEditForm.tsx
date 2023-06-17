import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Card } from 'primereact/card';
import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const PokemonEditForm = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams<{id: string}>();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response: any) => {
        setName(response.data.name);
        setImageUrl(response.data.sprites.front_default);
      });
  }, [id]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .put(`https://pokeapi.co/api/v2/pokemon/${id}`, { name, imageUrl })
      .then(() => history.push(`/pokemon/${id}`));
  };

  const handleDelete = () => {
    axios.delete(`https://pokeapi.co/api/v2/pokemon/${id}`).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <Card title="Edit Pokemon">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <InputText
              id="name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL:</label>
            <InputText
              id="imageUrl"
              value={imageUrl}
              onChange={(e: any) => setImageUrl(e.target.value)}
            />
          </div>
          <Button label="Save" icon="pi pi-check" className="p-button-success" />
          <Button
            label="Delete"
            icon="pi pi-trash"
            className="p-button-danger"
            onClick={handleDelete}
          />
        </form>
      </Card>
    </div>
  );
};

export default PokemonEditForm;
