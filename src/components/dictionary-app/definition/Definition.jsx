import './Definition.css';

function Definition({definition}) {

  return (
    definition.slice(0, 3).map((value, index) => {
      return (
        <div key={`definition-${index}`}>
          <p>{index + 1}. {value.definition}</p>
        </div>
      )
    })
    
  )
};

export default Definition;