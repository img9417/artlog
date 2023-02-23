import React, {useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../_reducers/artSlice';
import './DateList.scss';
import { Art } from '../../interface';

interface Props {
  arts: Array<Art>;
}

const DateList = (props: Props) => {
    const dispatch = useDispatch();
    const [arts, setArts] = useState<Array<Art>>([]);
    let artIndex = useRef<number>(0);
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    useEffect(() => {
      setArts(props.arts);
    }, [props.arts])
    
    useEffect(() => {
      const list: HTMLElement | null = document.querySelector(`li[data-index="${artIndex.current}"]`);
      if(!list) return;

      list.classList.add("active");
      dispatch(update(arts[artIndex.current]));
    }, [arts])

    const onWheelHandler = (event): void => {
        let e = window.event || event;
        const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if(artIndex.current === arts.length) {
          artIndex.current = artIndex.current - 1;
        }
        let index = artIndex.current;
        
        if(delta > 0) {
          if(index === 0) return;
          index -= 1;
        } else {
          if(index === arts.length - 1) return;
          index += 1;
        }
        
        setTimeout(() => {
            toggleDate(index, "auto");
            dispatch(update(arts[artIndex.current]));
          }, 50);
      }

      const onClickListHandler = (e): void => {
        let listIndex = parseInt(e.currentTarget.dataset.index);
        if(artIndex.current === listIndex) return;

        if(artIndex.current === arts.length) {
          artIndex.current = listIndex;
        }

        toggleDate(listIndex, "smooth");
        dispatch(update(arts[artIndex.current]));
      }
    
      const toggleDate = (index: number, behavior: ScrollBehavior): void => {
        let list = document.querySelector(`li[data-index="${artIndex.current}"]`);
        list?.classList.remove('active');

        list = document.querySelector(`li[data-index="${index}"]`);
        list?.classList.add('active');
        list?.scrollIntoView({
          behavior,
          block: 'center',
          inline: 'center'
        })
        
        artIndex.current = index;
      }

    return (
        <>
          {console.debug("Render DateList")}
          <aside className="aside-right" onWheel={onWheelHandler}>
          <ul>
              {arts.map((art, i) => (
                <li key={art.base64img + i} data-name={art.name} data-index={i} onClick={onClickListHandler}>
                    <span className="location">📍{art.location}</span>
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