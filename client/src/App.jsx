import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from './_reducers/artSlice';
import { 
  UilPlusCircle, 
  UilMinusCircle, 
  UilEdit, 
  UilEditAlt, 
  UilTrashAlt 
} from '@iconscout/react-unicons/';
import Picture from './components/Picture/Picture';
import DateList from './components/DateList/DateList';
import ArtForm from './views/ArtFormPage/ArtForm';
import './App.scss';
import axios from 'axios';

const App = () => {
  const [addToggle, setAddToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [operationType, setOperationType] = useState('');
  const [arts, setArts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5174/artslist").then(res => {
      // dispatch(saveListOfArts({arts: res.data}))
      setArts(res.data);
    });
  }, [])

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
      if(!editToggle) {
        document.querySelector('.art-form-wrapper').classList.remove('hidden');
      } else {
        document.querySelector('.art-form-wrapper').classList.add('hidden');
      }
      setOperationType("edit");
    } else {
      setAddToggle(false);
      setEditToggle(false);
      document.querySelector('.art-form-wrapper').classList.remove('hidden');
      setOperationType("delete");
    }
  }
  
  const onUpdateArtsHandler = (artInfo, id) => {
    setAddToggle(false);
    setEditToggle(false);
    if(operationType === "add") {
      let temp = [{...artInfo, _id: id}, ...arts].sort((a, b) => {
        if(a.date < b.date) return 1;
        else return -1;
      })
      setArts(temp);
      document.querySelector(".art-form-wrapper button[type='reset']").click();
      dispatch(update({...artInfo, _id: id}));
    } else if(operationType === "edit") {
      let temp = [];
      Object.assign(temp, arts);
      let target = temp.findIndex(x => x.base64img === artInfo.base64img);
      temp[target] = {...artInfo, _id: id};
      setArts(temp);
    } else {
      let temp = [];
      Object.assign(temp, arts);
      let target = temp.findIndex(x => x._id === id);
      if(target === arts.length - 1) {
        temp.pop();
      } else {
        temp = [...temp.slice(0,target), ...temp.slice(target+1)];
      }
      setArts(temp);
      document.querySelector('.art-form-wrapper').classList.add('hidden');
    }
    document.querySelector('.art-form-wrapper').classList.add('hidden');
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
          <div className="delete-button" name="delete" onClick={onClickHandler}>
            <UilTrashAlt size="30"/>
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
