import React, {useState} from 'react';
import Picture from './components/Picture/Picture';
import DateList from './components/DateList/DateList';
import UilPlusCircle from '@iconscout/react-unicons/icons/uil-plus-circle';
import UilMinusCircle from '@iconscout/react-unicons/icons/uil-minus-circle';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilEditAlt from '@iconscout/react-unicons/icons/uil-edit-alt';
import ArtForm from './views/ArtFormPage/ArtForm';
import './App.scss';

const App = () => {
  const [addToggle, setAddToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [operationType, setOperationType] = useState('');

  const onClickHandler = (e) => {
    const operation = e.currentTarget.attributes.name.value;

    if(operation === "add") {
      setEditToggle(false);
      setAddToggle(!addToggle);
      if(!addToggle) {
        document.querySelector('.art-form-wrapper').classList.remove('hidden');
      } else {
        document.querySelector('.art-form-wrapper').classList.add('hidden');
      }
      setOperationType("add");
    } else if (operation === "edit") {
      setAddToggle(false);
      setEditToggle(!editToggle);
      if(editToggle) {
        document.querySelector('.art-form-wrapper').classList.remove('hidden');
      } else {
        document.querySelector('.art-form-wrapper').classList.add('hidden');
      }
      document.querySelector('.art-form-wrapper').classList.toggle('hidden');
      setOperationType("edit");
    }
  }

  return (
   <>
    <div className="wrapper">
      <span className='border'></span>
      <aside className='aside-left'>
        <p>
          <a href="https://github.com/rolemadelen">@rolemadelen</a>
        </p>
        <div className="buttons">

        <div className="add-button" name="add" onClick={onClickHandler}>
          {addToggle && (
            <UilMinusCircle size="30" />
            )}
          {!addToggle && (
            <UilPlusCircle size="30" />
            )}
        </div>
        <div className="edit-button" name="edit" onClick={onClickHandler}>
          {editToggle && (
              <UilEditAlt size="30" />
            )}
          {!editToggle && (
              <UilEdit size="30" />
            )}
        </div>
      </div>
      </aside>
      <main className="main-frame">
        <Picture/>
        <ArtForm operationType={operationType}/>
      </main>
      <DateList/>
    </div>
   </>
  )
}
App.displayName = 'App';

export default React.memo(App)
