// Styling
// http://localhost:3000/isolated/exercise/05.js

//import { italic } from 'chalk'
//import { Color } from 'chalk'
import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
/*
const smallBox = <div className="box box--small" style={{backgroundColor: "lightblue", fontStyle: "italic"}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{backgroundColor: "pink", fontStyle: "italic"}}></div>
const largeBox = <div className="box box--large" style={{backgroundColor: "orange", fontStyle: "italic"}}>large orange box</div>
*/

function Box({color = 'red', style = {}, size = 'medium', ...props}) {
  const className = "box box--" + size
  return <div className={className} style={{fontStyle: "italic", backgroundColor: color, ...style}} {...props}></div>
}

function App() {
  return (
    <div>
      {/* Atributos de estilo passados em camelCase como objetos */}
      <div style={ {marginTop: '20px', backgroundColor: 'blue'} }>Teste</div>
      <Box color = 'lightblue' size = 'small'>small lightblue boxx</Box>
      <Box color = 'pink'>medium pink boxx</Box>
      <Box color = 'orange' size = 'large'>large orange boxx</Box>
      <Box>Box teste</Box>
    </div>
  )
}

export default App