// @ts-nocheck
import React, { useState } from "react";

import "./PokemonSearchApp.css";

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

function PokemonSearchApp() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function search(e) {
    e.preventDefault();

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${POKEMON_URL}${inputValue}`);

        if (!response.ok) {
          return alert("Sorry! That's not a pokemon. Refresh and try again.");
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    fetchData();
    setInputValue("");
  }

  return (
    <div className="page-margin">
      <h1>Pokemon Search App</h1>
      <div id="project-body">
        <form onSubmit={search}>
          <input
            value={inputValue}
            type="search"
            id="pokemon-name"
            autoFocus={false}
            placeholder="Enter pokemon name"
            onChange={handleChange}
          />
        </form>
        {loading ? <p>Loading..</p> : <></>}
        {data ? (
          <div className="pokemon-card-style">
            <div id="pokemon-detail">
              <img
                src={data.sprites.front_default}
                alt="pokemon sprite"
                id="pokemon-sprite"
              />
              <div id="pokemon-detail-text">
                <p id="pokemon-id">#{data.id}</p>
                <p id="pokemon-title">{data.name}</p>
                <p id="pokemon-type">
                  {data.types
                    .map((value) => {
                      return value.type.name;
                    })
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default PokemonSearchApp;
