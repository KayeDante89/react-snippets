import './Definition.css';

function Definition({definition}) {

  return (
    definition.slice(0, 3).map((value, index) => {
      return (
          <li key={index}>{value.definition}</li>
      )
    })
    
  )
};

export default Definition;