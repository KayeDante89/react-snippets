import Definition from "../definition/Definition";
import './DefinitionsCard.css';

function DefinitionsCard({ result }) {

  return (
    <div id="definitions-card">
      <h2>{result.word}</h2>
      <p>{result.phonetic}</p>
      {result.meanings?.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.partOfSpeech}</p>
            <ol>
              <Definition definition={value.definitions}/>
            </ol>
            
          </div>
        );
      })}
    </div>
  );
}

export default DefinitionsCard;
