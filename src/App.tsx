import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UilPlusCircle from '@iconscout/react-unicons/icons/uil-plus-circle';
import UilMinusCircle from '@iconscout/react-unicons/icons/uil-minus-circle';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilEditAlt from '@iconscout/react-unicons/icons/uil-edit-alt';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';

import Picture from './components/Picture/Picture';
import DateList from './components/DateList/DateList';
import ArtForm from './views/ArtFormPage/ArtForm';

import { Art } from './interface';

import './App.scss';

export interface Toggle {
  add: boolean;
  edit: boolean;
  delete: boolean;
};

const App = () => {
  const [toggle, setToggle] = useState<Toggle>({
    add: false,
    edit: false,
    delete: false
  });
  const [operationType, setOperationType] = useState<string>('');
  const [arts, setArts] = useState<Array<Art>>([]);

  useEffect((): void => {
    axios.post("/api/artslist").then(res => {
      setArts(res.data.arts);
    });
  }, [])

  const onClickHandler = (e): void => {
    const artFormWrapper: HTMLElement | null = document.querySelector('.art-form-wrapper');
    if(artFormWrapper === null) return;
    
    const operation: string = e.currentTarget.dataset.name;
    const afwClassList: DOMTokenList = artFormWrapper.classList;
    afwClassList.add('hidden');

    let tggl: Toggle = {
      add: false,
      edit: false,
      delete: false
    };

    tggl[operation] = !toggle[operation];

    if(tggl.add || tggl.edit || tggl.delete) {
      afwClassList.remove('hidden');
    }

    setOperationType(operation);
    setToggle({...tggl});
  }
  
  const onUpdateArtsHandler = (artInfo: Art, id: string): void => {
    setToggle({
      add: false,
      edit: false,
      delete: false
    });

    const artFormWrapper: HTMLElement | null = document.querySelector('.art-form-wrapper');
    if(artFormWrapper === null) return;

    let temp: Array<Art> = [...arts];

    switch(operationType) {
      case "add": {
        temp = [{...artInfo, _id: id}, ...temp];
        const resetButton: HTMLElement | null = document.querySelector(".art-form-wrapper button[type='reset']");
        resetButton?.click();

        break;
      }
      case "edit": {
        const index = temp.findIndex(art => art._id === id);
        temp[index] = {...artInfo, _id: id};

        break;
      }
      case "delete": {
        const index = temp.findIndex(art => art._id === id);
        temp = [...temp.slice(0, index), ...temp.slice(index + 1)];

        break;
      }
    }
    
    temp.sort((a: Art, b: Art) => {
      if(a.date < b.date) return 1;
      else return -1;
    })
    setArts(temp);

    artFormWrapper.classList.add('hidden');
  }

  const displayIcon = (iconType: string): JSX.Element => {
    if(iconType === "add") {
      return toggle.add ? <UilMinusCircle size="30" /> : <UilPlusCircle size="30" />;
    }
    else if(iconType === "edit") {
      return toggle.edit ? <UilEditAlt size="30" /> : <UilEdit size="30" />;
    }
    else {
      // iconType === "delete"
      return <UilTrashAlt size="30" />;
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
          <div className="add-button" data-name="add" onClick={onClickHandler}>
            {displayIcon("add")}
          </div>
          <div className="edit-button" data-name="edit" onClick={onClickHandler}>
            {displayIcon("edit")}
          </div>
          <div className="delete-button" data-name="delete" onClick={onClickHandler}>
            {displayIcon("delete")}
          </div>
        </div>
      </aside>
      <main className="main-frame">
        <Picture/>
        <ArtForm operationType={operationType} onUpdateArts={onUpdateArtsHandler}/>
      </main>
      <DateList arts={arts}/>
    </div>
   </>
  )
}
App.displayName = 'App';

export default React.memo(App)
