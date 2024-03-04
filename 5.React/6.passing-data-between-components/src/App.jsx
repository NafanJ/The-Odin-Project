import './App.css'

// Passing in props
// function Button(props) {
// Prop Destructing - Rather than passing in props, breakdown individual props for readability
// DefaultProps and Destructuring can be combined
function Button({ text = "Click me!", color = "blue", fontSize = 1 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'rem'
  };

  return (
    <button style={buttonStyle}>{text}</button>
  )
}

// To avoid repetition we can declare defaultProps
/*Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 1
};*/


function App() {

  return (
    <>
      <Button />
      <Button text="Don't Click Me!" color="red" fontSize={3} />
      <Button />
    </>
  )
}

export default App
