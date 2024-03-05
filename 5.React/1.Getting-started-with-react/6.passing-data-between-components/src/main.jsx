import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Image from './Image.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='ImageHolder'>
    <Image url='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg'/>
    <Image url='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'/>
    </div>
  </React.StrictMode>,
)
