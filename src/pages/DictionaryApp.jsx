import { useState } from "react";
import DefinitionsCard from "../components/dictionary-app/DefinitionsCard";

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
        const data = await response.json();
        setResult(data[0]);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Something went wrong. Try again.</div>;
  }

  return (
    <main id="dictionary-content">
      <h1>Dictionary App</h1>
      <form onSubmit={search}>
        <input
          onChange={handleChange}
          type="search"
          autoFocus="on"
          placeholder="type a word .."
        />
      </form>
      <DefinitionsCard result={result}/>
    </main>
  );
}

export default DictionaryApp;
