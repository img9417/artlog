import React, {useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../_reducers/artSlice';
import './DateList.scss';

const DateList = (props) => {
    const dispatch = useDispatch();
    const [arts, setArts] = useState([]);
    let artIndex = useRef(0);
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    useEffect(() => {
      setArts(props.arts);
    }, [props.arts])
    
    useEffect(() => {
      const list = document.querySelector(`li[data-index="${artIndex.current}"]`);
      if(list) {
        list.classList.add("active");
        dispatch(update(arts[artIndex.current]));
      }
    }, [arts])

    const onWheelHandler = (event) => {
        let e = window.event || event;
        const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if(artIndex.current === arts.length) {
          artIndex.current = artIndex.current - 1;
        }
        let index = artIndex.current;
        // grab current active list - showing art
        let list = document.querySelector(`li[data-index="${artIndex.current}"]`);
        
        if(delta > 0) {
            if(index === 0) return;
            index -= 1;
        } else {
            if(index === arts.length - 1) return;
            index += 1;
        }

        setTimeout(() => {
            list.classList.remove('active');
            // grab the new list (index updated)
            list = document.querySelector(`li[name="${arts[index].date}"]`);
            list.classList.add('active');
            list.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
            artIndex.current = index;
            dispatch(update(arts[artIndex.current]));
          }, 50);
      }

      const onClickListHandler = (e) => {
        let listIndex = parseInt(e.currentTarget.dataset.index);
        if(artIndex.current === listIndex) return;

        if(artIndex.current === arts.length) {
          artIndex.current = listIndex;
        }
        
        document.querySelector(`li[data-index="${artIndex.current}"]`).classList.remove('active');
        let list = document.querySelector(`li[data-index="${listIndex}"]`);
        console.log(list);
        list.classList.add('active');
        list.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        })
        
        artIndex.current = listIndex;
        dispatch(update(arts[artIndex.current]));
      }
    
    return (
        <>
          {console.debug("Render DateList")}
          <aside className="aside-right" onWheel={onWheelHandler}>
          <ul>
              {arts.map((art, i) => (
                <li key={art + i} name={art.name} data-index={i} onClick={onClickListHandler}>
                    <span className="location">📍{art.location}</span>
                    <span className="day">{art.day}</span>
                    <span className="day">{days[new Date(art.date).getDay()]}</span>
                    {art.date}
                </li>
              ))}
          </ul>
          </aside>
        </>
    )
}

DateList.displayName = 'DateList';

export default React.memo(DateList);