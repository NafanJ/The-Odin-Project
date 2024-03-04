import { useState } from 'react'
import {TodoList, MonthList} from './Keys'

import './App.css'

function App() {

  return (
    <>
      <h1>ToDo:</h1>
      <TodoList />
      <h1>Months</h1>
      <MonthList />
    </>
  )
}

export default App
