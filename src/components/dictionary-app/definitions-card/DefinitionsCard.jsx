import React from "react";
import Definition from "../definition/Definition";
import "./DefinitionsCard.css";
import { ThreeDots } from "react-loader-spinner";

function DefinitionsCard({ result, isLoading }) {
  return (
    <div id="definitions-card">
      {isLoading ? (
        <ThreeDots height={"60"} width={"60"} visible={true} color={"black"} />
      ) : (
        <>
          <h2>{result.word}</h2>
          <p>{result.phonetic}</p>
          {result.meanings?.map((value, index) => {
            return (
              <div key={index}>
                <p className="pos-text">{value.partOfSpeech}</p>
                <ol className="definition-list">
                  <Definition definition={value.definitions} />
                </ol>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default DefinitionsCard;
