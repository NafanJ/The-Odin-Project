import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PackingList from './ConditionalRendering.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>React Rendering Techniques</h1>
    <div className='techniqueHolder'>
    <App />
    <PackingList />
    </div>
  </React.StrictMode>,
)
