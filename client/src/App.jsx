import React, { useState, useEffect, memo } from 'react';
import './App.css'
import Picture from './components/Picture/Picture'
import DateList from './components/DateList/DateList';

const App = () => {
  const [imageName, setImageName] = useState('2023.02.16.png');
  const [imageNote, setImageNote] = useState('Lorem Ipsum'); 

  return (
   <>
   <div className="wrapper">
    <span className='border'></span>
    <aside className='aside-left'>
      <p>
        <a href="https://github.com/rolemadelen">@rolemadelen</a>
      </p>
    </aside>
    <main className="main-frame">
      <Picture imageName={imageName} imageNote={imageNote}/>
    </main>
    <DateList/>
   </div>
   </>
  )
}
App.displayName = 'App';

export default React.memo(App)
