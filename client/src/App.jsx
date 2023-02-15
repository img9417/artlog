import React, { useState } from 'react';
import './App.css'
import Picture from './components/Picture/Picture'

const dates = [
  {
    name: '2023.02.13',
  },
  {
    name: '2023.02.12',
  },
  {
    name: '2023.02.11',
  },
  {
    name: '2023.02.09',
  },
  {
    name: '2023.02.08',
  },
  {
    name: '2023.02.07',
  },
  {
    name: '2023.02.06',
  },
  {
    name: '2023.02.04',
  },
  {
    name: '2023.02.03',
  },
  {
    name: '2023.02.02',
  },
  {
    name: '2023.02.01',
  },
]

const App = (e) => {
  const [imageName, setImageName] = useState('');

  const onMouseOverHandler = (e) => {
    setImageName(e.target.innerText + '.png');
  }

  return (
   <>
   <div className="wrapper">
    <span className='border'></span>
    <aside className='aside-left'>
      <p>
        © 2022 rolemadelen
      </p>
    </aside>
    <main className="main-frame">
      <Picture imageName={imageName}/>
    </main>
    <aside className="aside-right">
      <ul>
        {dates.map((image, i) => (
          <li key={image + i} onMouseOver={onMouseOverHandler}>{image.name}</li>
        ))}
      </ul>
    </aside>
   </div>
   </>
  )
}

export default App
