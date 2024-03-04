import { useState } from 'react'
import {TodoList, MonthList, NameList} from './Keys'

import './App.css'

function App() {

  return (
    <>
      <h1>ToDo:</h1>
      <TodoList />
      <h1>Months</h1>
      <MonthList />
      <h1>Names</h1>
      <NameList/>
    </>
  )
}

export default App
