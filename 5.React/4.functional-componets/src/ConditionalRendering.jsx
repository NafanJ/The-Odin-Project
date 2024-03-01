function Item({ name, isPacked}){
    
  /*if (isPacked){
        return <li className="item">{name} ✔</li>
    } return <li className="item">{name}</li>*/

    // Return no element
    //} return null

    // Ternary Expression
    return (
      <li className="item">
        {isPacked ? name + ' ✔' : name}
      </li>
    );
}

export default function PackingList() {
    return (
      <section>
        <h2>Conditional Rendering</h2>
        <h3>Conditional Return</h3>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={false} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={true} 
            name="Photo of Tam" 
          />
          <Item 
            isPacked={false} 
            name="The unbreakable sword"
          />
        </ul>
      </section>
    );
  }