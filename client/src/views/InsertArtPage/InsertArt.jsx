import Dropzone from '../../components/Dropzone/Dropzone';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { update } from '../../_reducers/artSlice';
import './InsertArt.scss';

const InsertArt = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const base64img = useSelector(state => state.art.base64img);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const artInfo = {
            location: e.target[0].value,
            name: e.target[1].value,
            date: e.target[1].value,
            note: e.target[2].value,
            base64img
        }

        console.log(artInfo);
        if(artInfo.note === '' || artInfo.location === '' || artInfo.date === '') return;

        axios.post("http://localhost:5174/api/insert", artInfo)
        .then(res => {
            console.debug(res);
            if(res.data.success) {
                dispatch(update({
                    name: artInfo.name,
                    location: artInfo.location,
                    note: artInfo.note,
                }))
                navigate(0);
            }
        })
    }
    return (
        <>
            <div className="insert-art-wrapper hidden">
                <div className={"insert-art-view"}>
                    <div className="insert-art-zone">
                        <Dropzone />
                    </div>
                    <form className="insert-art-form" onSubmit={onSubmitHandler}>
                        <label htmlFor="location">Location 📍</label>
                        <input type="text" name='location' placeholder='Where did I draw this?' />

                        <label htmlFor='date'>Date</label>
                        <input type="text" name='date' placeholder='YYYY.MM.DD'/>

                        <label htmlFor='date'>Note</label>
                        <input type="text" name='note' placeholder='What Am I Wearing?'/>

                        <div className="buttons">
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InsertArt;