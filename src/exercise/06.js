// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const usernameEl = React.useRef()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input ref={usernameEl} id="username" type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault() // previne o recarregamento do formulário  
    //const username = document.querySelector('#username').value

    //const username = usernameEl.current.value;
    const {value: username} = usernameEl.current;
    onSubmitUsername(username)  
  }  
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
