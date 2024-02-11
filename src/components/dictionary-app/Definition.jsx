function Definition({definition}) {
  // console.log(definition)
  return (
    definition.map((value, index) => {
      return (
        <div key={`definition-${index}`}>
          <p>{value.definition}</p>
        </div>
      )
    })
    
  )
};

export default Definition;