import './App.css'

function ListItem(props){
  return <li>{props.animal}</li>
}


function List(props){
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal}/>;
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
      <h1>Rendering Techniques</h1>

      <h2>Map Through an Array</h2>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
      
      <h2>Mapped to a variable</h2>
      <ul>
        {animalsList}
      </ul>
      <h2>Mapped through React Functions</h2>
      <List animals={animals} />
    </>
  )
}

export default App
