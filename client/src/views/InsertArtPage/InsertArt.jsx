import Dropzone from '../../components/Dropzone/Dropzone';
import './InsertArt.scss';

const InsertArt = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
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