import React, { useState, useEffect, memo } from 'react';
import './App.css'
import Picture from './components/Picture/Picture'

const dates = [
  {
    name: '2023.02.13',
  },
  {
    name: '2023.02.12',
  },
  {
    name: '2023.02.11',
  },
  {
    name: '2023.02.09',
  },
  {
    name: '2023.02.08',
  },
  {
    name: '2023.02.07',
  },
  {
    name: '2023.02.06',
  },
  {
    name: '2023.02.04',
  },
  {
    name: '2023.02.03',
  },
  {
    name: '2023.02.02',
  },
  {
    name: '2023.02.01',
  },
  {
    name: '2022.12.08',
  },
  {
    name: '2022.12.09',
  },
  {
    name: '2022.12.10',
  },
  {
    name: '2022.12.11',
  },
  {
    name: '2022.12.12',
  },
  {
    name: '2022.12.13',
  },
  {
    name: '2022.12.14',
  },
  {
    name: '2022.12.15',
  },
  {
    name: '2022.12.16',
  },
  {
    name: '2022.12.17',
  },
  {
    name: '2022.12.18',
  },
  {
    name: '2022.12.19',
  },
  {
    name: '2022.12.20',
  },
  {
    name: '2022.12.21',
  },
  {
    name: '2022.12.22',
  },
  {
    name: '2022.12.23',
  },
  {
    name: '2022.12.24',
  },
  {
    name: '2022.12.25',
  },
  {
    name: '2022.12.26',
  },
  {
    name: '2022.12.27',
  },
  {
    name: '2022.12.28',
  },
]

const App = memo(() => {
  const [imageName, setImageName] = useState('');
  const [dateIndex, setDateIndex] = useState(0);

  useEffect(() => {
    console.log("App Component useEffect");
    const x = document.querySelector(`li[name="${dates[dateIndex].name}"]`);
    x.classList.add('active');
    x.scrollIntoView();
    // setImageName(dates[dateIndex].name + '.png');
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
      if(dateIndex === dates.length - 1) return;
      index += 1;
      x.classList.remove('active');
    }
    
    x = document.querySelector(`li[name="${dates[index].name}"]`);
    x.classList.add('active');
    setDateIndex(index);
  }

  const onTransitionEndHandler = (e) => {
    console.log(e);
    setImageName(dates[dateIndex].name + '.png');
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
      <Picture imageName={imageName}/>
    </main>
    <aside className="aside-right" onWheel={onWheelHandler} onTransitionEnd={onTransitionEndHandler}>
      <ul>
        {dates.map((image, i) => (
          <li key={image + i} name={image.name}>{image.name}</li>
        ))}
      </ul>
    </aside>
   </div>
   </>
  )
});
App.displayName = 'App';

export default App
