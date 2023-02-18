import React from 'react';
import './App.scss'
import Picture from './components/Picture/Picture'
import DateList from './components/DateList/DateList';

const App = () => {
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
      <Picture/>
    </main>
    <DateList/>
   </div>
   </>
  )
}
App.displayName = 'App';

export default React.memo(App)
