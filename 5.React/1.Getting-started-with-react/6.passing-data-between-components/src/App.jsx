import './App.css'

// Passing in props - usual
// function Button(props) {

// Prop Destructing - Rather than passing in props, breakdown individual props for readability
// DefaultProps and Destructuring can be combined
function Button({ text = "Click me!", color = "blue", fontSize = 1, handleClick = () =>
  console.log('Click')
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'rem'
  };

  return (
    <button
      // Pass in Button Function
      onClick={handleClick}
      // Pass in Button Styling
      style={buttonStyle}>{text}
    </button>
  )
}

// To avoid repetition we can declare defaultProps
/*Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 1
};*/


export default function App() {
  const handleButtonClick = () => {
    window.location.href = "http://www.google.com";
  };

  return (
    <>
      <Button />
      <Button handleClick={handleButtonClick} text="Don't Click Me!" color="red" fontSize={3} />
      <Button />
    </>
  )
}
