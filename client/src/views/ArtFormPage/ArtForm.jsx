import Dropzone from '../../components/Dropzone/Dropzone';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../_reducers/artSlice';
import './ArtForm.scss';
import { useEffect, useState, memo } from 'react';

const ArtForm = memo((props) => {
    const dispatch = useDispatch();
    const { date, note, location, base64img, _id } = useSelector(state => state.art);
    const [imageDate, setImageDate] = useState();
    const [imageNote, setImageNote] = useState('');
    const [imageLocation, setImageLocation] = useState('');
    
    useEffect(() => {
        setImageDate(date);
        setImageNote(note);
        setImageLocation(location);
    }, [date, note, location]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(props.operationType === "delete") {
            axios.post("http://localhost:5174/api/delete", {_id: _id})
            .then(res => {
                if(res.data.success) {
                    props.onUpdateArts(null, _id);
                }
            })
            return;
        }

        const artInfo = {
            location: e.target[0].value,
            name: e.target[1].value,
            date: e.target[1].value,
            note: e.target[2].value,
            base64img
        }

        if(artInfo.note === '' || artInfo.location === '' || artInfo.date === '') return;

        if(props.operationType === "add") {
            axios.post("http://localhost:5174/api/insert", artInfo)
            .then(res => {
                if(res.data.success) {
                    dispatch(update({...artInfo, _id: `ObjectId("${res.data.id}")`}));
                    props.onUpdateArts(artInfo, res.data.id);
                }
            })
        } else if(props.operationType === "edit") {
            axios.post("http://localhost:5174/api/edit", {...artInfo, _id: _id})
            .then(res => {
                if(res.data.success) {
                    props.onUpdateArts(artInfo, res.data.id);
                }
            })
        }
    }

    const onChangeHandler = (e) => {
        switch(e.currentTarget.attributes.name.value) {
            case "location": {
                setImageLocation(e.currentTarget.value);
                break;
            }
            case "date": {
                setImageDate(e.currentTarget.value);
                break;
            }
            case "note": {
                setImageNote(e.currentTarget.value);
                break;
            }
        }
    }
    return (
        <>
            <div className="art-form-wrapper hidden">
                <div className={`art-form-view ${props.operationType}`}>
                    {props.operationType !== "delete" && (
                        <div className="art-form-zone">
                            <Dropzone />
                        </div>
                    )}
                    {props.operationType === "add" && (
                        <form className="art-form-form" name="insertForm" onSubmit={onSubmitHandler}>
                            <label htmlFor="location">Location 📍</label>
                            <input type="text" name='location' placeholder='Where did I draw this?' />

                            <label htmlFor='date'>Date</label>
                            <input type="text" name='date' placeholder='YYYY.MM.DD'/>

                            <label htmlFor='date'>Note</label>
                            <input type="text" name='note' placeholder='What Am I Wearing?'/>

                            <div className="buttons">
                                <button type='submit'>Submit</button>
                                <button type='reset'>Reset</button>
                            </div>
                        </form>
                    )}
                    {props.operationType === "edit" && (
                        <form className="art-form-form" name="editForm" onSubmit={onSubmitHandler}>
                            <label htmlFor="location">Location 📍</label>
                            <input type="text" name='location' placeholder='Where did I draw this?' value={imageLocation} onChange={onChangeHandler}/>

                            <label htmlFor='date'>Date</label>
                            <input type="text" name='date' placeholder='YYYY.MM.DD' value={imageDate} onChange={onChangeHandler}/>

                            <label htmlFor='date'>Note</label>
                            <input type="text" name='note' placeholder='What Am I Wearing?' value={imageNote} onChange={onChangeHandler}/>

                            <div className="buttons">
                                <button type='submit'>Edit</button>
                            </div>
                        </form>
                    )}
                    {props.operationType === "delete" && (
                        <form className="art-form-form" name="deleteForm" onSubmit={onSubmitHandler}>
                            <div className="buttons">
                                <button type='submit'>Delete</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    )
})

ArtForm.displayName = "ArtForm";

export default ArtForm;