import { useState } from "react";
import DefinitionsCard from "../../components/dictionary-app/definitions-card/DefinitionsCard";

import "./DictionaryApp.css";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function DictionaryApp() {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function search(e) {
    e.preventDefault();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}${inputValue}`);
        if (!response.ok) {
          setError(err);
        }
        const data = await response.json();
        setResult(data[0]);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };

    fetchData();
  }

  if (error) {
    return (
      <div className="dictionary-app">
        <div className="dict-container">
          <h1>Oops!</h1>
          <p>
            The word you typed may not exist or there was an issue fetching the
            data.
          </p>
          <p>Please refresh and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="dictionary-app">
      <div className="dict-container">
        <h1>Dictionary App</h1>
        <form onSubmit={search}>
          <input
            className="search-input"
            type="search"
            autoFocus="on"
            placeholder="Lookup a word .."
            onChange={handleChange}
          />
        </form>
        {isLoading ? <p>Loading..</p> : <DefinitionsCard result={result} />}
      </div>
    </main>
  );
}

export default DictionaryApp;
