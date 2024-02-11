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
            <p className="pos-text">{value.partOfSpeech}</p>
            <ol className="definition-list">
              <Definition definition={value.definitions}/>
            </ol>
            
          </div>
        );
      })}
    </div>
  );
}

export default DefinitionsCard;
