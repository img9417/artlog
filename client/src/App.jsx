import React, { useState, useEffect, memo } from 'react';
import './App.css'
import Picture from './components/Picture/Picture'

const dates = [
  {
    name: '2023.02.13',
    detail: 'Hiratsuka, Kanagawa',
  },
  {
    name: '2023.02.12',
    detail: 'Hiratsuka, Kanagawa',
  },
  {
    name: '2023.02.11',
    detail: 'Hiratsuka Starbucks',
  },
  {
    name: '2023.02.09',
    detail: 'Oshima',
  },
  {
    name: '2023.02.08',
    detail: '히라츠카',
  },
  {
    name: '2023.02.07',
    detail: '카나가와',
  },
  {
    name: '2023.02.06',
    detail: 'Hiratsuka',
  },
  {
    name: '2023.02.04',
    detail: 'Starbucks',
  },
  {
    name: '2023.02.03',
    detail: '스타벅스',
  },
  {
    name: '2023.02.02',
    detail: 'Kanagawa',
  },
  {
    name: '2023.02.01',
    detail: 'Minatomirai',
  },
  {
    name: '2022.12.08',
    detail: 'Oshima',
  },
  {
    name: '2022.12.09',
    detail: 'Village House',
  },
  {
    name: '2022.12.10',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.11',
    detail: 'Lorep Ipsum',
  },
  {
    name: '2022.12.12',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.13',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.14',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.15',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.16',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.17',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.18',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.19',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.20',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.21',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.22',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.23',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.24',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.25',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.26',
    detail: 'Hiratsuka',
  },
  {
    name: '2022.12.27',
    detail: 'Starbucks',
  },
  {
    name: '2022.12.28',
    detail: 'Oshima',
  },
]

const App = memo(() => {
  const [imageName, setImageName] = useState('2023.02.13.png');
  const [imageDetail, setImageDetail] = useState(''); 
  const [dateIndex, setDateIndex] = useState(0);
  
  useEffect(() => {
    console.debug('use effect');

    const x = document.querySelector(`li[name="${dates[dateIndex].name}"]`);
    x.classList.add('active');
    setImageName(dates[dateIndex].name + '.png');
    setImageDetail(dates[dateIndex].detail);
    x.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
  });

    return () => {};
  }, [dateIndex])

  const onWheelHandler = (event) => {
    let e = window.event || event;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    let index = dateIndex;
    let x = document.querySelector(`li[name="${dates[index].name}"]`);
    
    if(delta > 0) {
      if(index === 0) return;
      index -= 1;
      x.classList.remove('active');
    } else {
      if(index === dates.length - 1) return;
      index += 1;
      x.classList.remove('active');
    }
    
    console.debug(`onWheel dateIndex: `, dateIndex);
    console.debug(`onWheel index: `, index);
    console.debug(`onWheel x: `, x);

    x = document.querySelector(`li[name="${dates[index].name}"]`);
    x.classList.add('active');
    setDateIndex(index);
  }

  const onClickHandler = (e) => {
    const i = parseInt(e.currentTarget.dataset.index);
    if(dateIndex === i) return;
    
    document.querySelector(`li[name="${dates[dateIndex].name}"]`).classList.remove('active');
    setDateIndex(i);
  }

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
      <Picture imageName={imageName} imageDetail={imageDetail}/>
    </main>
    <aside className="aside-right" onWheel={onWheelHandler}>
      <ul>
        {dates.map((image, i) => (
          <li key={image + i} name={image.name} data-index={i} onClick={onClickHandler}>{image.name}</li>
        ))}
      </ul>
    </aside>
   </div>
   </>
  )
});
App.displayName = 'App';

export default App
