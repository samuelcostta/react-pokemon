import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const PokemonForm = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams<{id: string}>();
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (id) {
      axios
        .put(`https://pokeapi.co/api/v2/pokemon/${id}`, { name, imageUrl })
        .then(() => history.push(`/pokemon/${id}`));
    } else {
      axios
        .post(`https://pokeapi.co/api/v2/pokemon/`, { name, imageUrl })
        .then((response) => history.push(`/pokemon/${response.data.id}`));
    }
  };

  const handleDelete = () => {
    axios.delete(`https://pokeapi.co/api/v2/pokemon/${id}`).then(() => {
      history.push("/");
    });
  };
}

export default PokemonForm;