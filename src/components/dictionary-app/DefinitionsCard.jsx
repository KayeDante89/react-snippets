import Definition from "./Definition";

function DefinitionsCard({ result }) {
  console.log(result)
  return (
    <div>
      <h2>{result.word}</h2>
      {result.meanings?.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.partOfSpeech}</p>
            <Definition definition={value.definitions}/>
          </div>
        );
      })}
    </div>
  );
}

export default DefinitionsCard;
