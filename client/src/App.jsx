import React, {useState} from 'react';
import Picture from './components/Picture/Picture';
import DateList from './components/DateList/DateList';
import UilPlusCircle from '@iconscout/react-unicons/icons/uil-plus-circle';
import UilMinusCircle from '@iconscout/react-unicons/icons/uil-minus-circle';
import InsertArt from './views/InsertArtPage/InsertArt';
import './App.scss';

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const onClickAddButtonHandler = () => {
    setInsertToggle(!insertToggle);
    document.querySelector('.insert-art-wrapper').classList.toggle('hidden');
  }

  return (
   <>
    <div className="wrapper">
      <span className='border'></span>
      <aside className='aside-left'>
        <p>
          <a href="https://github.com/rolemadelen">@rolemadelen</a>
        </p>
        <div className="add-button" onClick={onClickAddButtonHandler}>
          {insertToggle && (
            <UilMinusCircle size="30" />
          )}
          {!insertToggle && (
            <UilPlusCircle size="30" />
          )}
        </div>
      </aside>
      <main className="main-frame">
        <Picture/>
        <InsertArt />
      </main>
      <DateList/>
    </div>
   </>
  )
}
App.displayName = 'App';

export default React.memo(App)
