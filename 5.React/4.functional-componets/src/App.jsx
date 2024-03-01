function ListItem(props) {
  return <li>{props.animal}</li>
}


function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
        // Ternary Operator
        //  return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
        // && Operator
        //  return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  )
}


function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)


  return (
    <>
      <div>
        <h2>Rendering Lists</h2>

        <h3>Map through an Array</h3>
        <ul>
          {animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>

        <h3>Mapped to a Var</h3>
        <ul>
          {animalsList}
        </ul>
        <h3>Mapped through Prop & Function</h3>
        <List animals={animals} />
      </div>
    </>
  )
}

export default App
