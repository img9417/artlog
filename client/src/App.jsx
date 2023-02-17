import React, { useState, useEffect, memo } from 'react';
import './App.css'
import Picture from './components/Picture/Picture'

// assume these are in the DB
const arts = [
  {
    date: '2023.02.16',
    location: 'Hiratsuka, Oshima',
    note: 'LUCKY CHARM Turtleneck Sweater | 🤔 Regular Fit Pants'
  },
  {
    date: '2023.02.13',
    location: 'Hiratsuka, Oshima',
    note: 'MUJI 撥水 ジャケット | SHEIN Striped Half-Zip Pullover | 🤔 Regular Fit Pants'
  },
  {
    date: '2023.02.12',
    cupless: {
      name: '2023.02.12-cupless',
      visible: false,
    },
    location: 'Hiratsuka, Kanagawa',
    note: 'KOGARASHI Check Pattern Trench Coat | 🤔 Button-up Long-sleeve | 🤔 Slim Fit Straight Jean'
  },
  {
    date: '2023.02.11',
    cupless: {
      name: '2023.02.11-cupless',
      visible: false,
    },
    location: 'Hiratsuka, Oshima',
    note: 'ドン・キホーテ Roundneck Jacket | LUCKY CHARM Turtleneck Sweater | 🤔 Regular Fit Pants'
  },
  {
    date: '2023.02.09',
    location: 'Hiratsuka, Oshima',
    note: 'SHEIN Corduroy Jacket | DAZY Roundneck Tshirt | 🤔 Regular Fit Jean'
  },
  {
    date: '2023.02.08',
    location: 'Hiratsuka, Oshima',
    note: 'MUJI 撥水 ジャケット | Asayake Tshirt | 🤔 Regular Fit Jean'
  },
  {
    date: '2023.02.07',
    location: 'Hiratsuka, Oshima',
    note: 'SHEIN Graphic Pullover | SHEIN Drawstring Pants'
  },
  {
    date: '2023.02.06',
    location: 'Hiratsuka, Oshima',
    note: "ユナイテッドアスレ Men's Hoodie | DAZY Roundneck Tshirt | 🤔 Regular Fit Pants"
  },
  {
    date: '2023.02.04',
    location: 'Hiratsuka, Oshima',
    note: "Corduroy Jacket | Asayake Sweatshirt | 🤔 Regular Fit Jean"
  },
  {
    date: '2023.02.03',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Graphic Pullover | UNIQLO Airism Tshirt | 🤔 Regular Fit Pants"
  },
  {
    date: '2023.02.02',
    location: 'Hiratsuka, Oshima',
    note: "ドン・キホーテ Roundneck Jacket | ユナイテッドアスレ Men's Hoodie | 🤔  Regular Fit Pants"
  },
  {
    date: '2023.02.01',
    location: 'Hiratsuka, Oshima',
    note: "ドン・キホーテ Roundneck Jacket | Asayake Tshirt | DEMON HUNTER Stretch Jean"
  },
  {
    date: '2022.12.05',
    location: 'Hiratsuka, Oshima',
    note: "🤔 Drop Shoulder Sweatshirt | 🤔 Roundneck Tshirt | SHEIN Corduroy Pants"
  },
  {
    date: '2022.12.06',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Roundneck pullover | SHEIN Striped Half-Zip Pullover | 🤔 Regular Fit Jean"
  },
  {
    date: '2022.12.07',
    location: 'Hiratsuka, Oshima',
    note: "🤔 Leon Character Roundneck Sweatshirt | LUCKY CHARM Turtleneck Sweater | Asayake Tshirt | SHEIN Corduroy Pants"
  },
  {
    date: '2022.12.08',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Roundneck Pullover | 🤔 Polo Shirt | UNIQLO Slim Fit Pants"
  },
  {
    date: '2022.12.09',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Roundneck Pullover | 🤔 Button Down Shirt | 🤔 Slim Fit Straight Jean"
  },
  {
    date: '2022.12.10',
    location: 'Hiratsuka Starbucks',
    note: "SHEIN Roundneck Pullover | SHEIN Long-sleeve Shirt | SHEIN Drawstring Pants"
  },
  {
    date: '2022.12.11',
    location: 'Hiratsuka, Oshima',
    note: "GAGUO FASHION🤔 Long-sleeve Button Up | DEMON HUNTER Stretch Jean"
  },
  {
    date: '2022.12.12',
    location: 'Minatomirai Starbucks',
    note: "Roundneck Sweatshirt | DAZY Tshirt | 🤔 Straight Jean"
  },
  {
    date: '2022.12.13',
    location: 'Hiratsuka, Oshima',
    note: "LUCKY CHARM Turtleneck Sweater | SHEIN Roundneck Pullover | SHEIN Straight Pants"
  },
  {
    date: '2022.12.14',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Roundneck Sweatshirt | SHEIN Stripe Sweatshirt | SHEIN Drawstring Pants"
  },
  {
    date: '2022.12.15',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Corduroy Jacket | 🤔 Long-sleeve Button Up | 🤔 Regular Fit Jean"
  },
  {
    date: '2022.12.16',
    location: 'Hiratsuka, Oshima',
    note: "KOGARASHI Check Pattern Trench Coat | 🤔 Long-sleeve Button Up | 🤔 Straight Jean"
  },
  {
    date: '2022.12.17',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Corduroy Jacket | LUCKY CHARM Turtleneck Sweater | DAZY Tshirt | SHEIN Drawstring Pants" 
  },
  {
    date: '2022.12.18',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Graphic Pullover | UNIQLO U Heattech Turtleneck | 🤔 Slim Fit Straight Jean"
  },
  {
    date: '2022.12.19',
    location: 'Hiratsuka, Oshima',
    note: "MUJI Waterproof Jacket | 🤔 Button Up Shirt | 🤔 Straight Jean"
  },
  {
    date: '2022.12.20',
    location: 'Hiratsuka, Oshima',
    note: "UNIQLO U Heattech Long-sleeve | BACK & FORTH Sweater | 🤔 Button Up Shirt | 🤔 Slim Fit Jean"
  },
  {
    date: '2022.12.21',
    location: 'Hiratsuka, Oshima',
    note: "UNIQLO U Heattech Long-sleeve | SHEIN Roundneck Sweatshirt | DEMON HUNTER Stretch Jean"
  },
  {
    date: '2022.12.22',
    location: 'Hiratsuka, Oshima',
    note: "MUJI Highneck Long-sleeve | SHEIN Drawstring Pants"
  },
  {
    date: '2022.12.23',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Corduroy Jacket | MUJI Highneck Long-sleeve | SHEIN Corduroy Pants"
  },
  {
    date: '2022.12.24',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Corduroy Jacket | MUJI Highneck Long-sleeve | 🤔 Regular Fit Jean"
  },
  {
    date: '2022.12.25',
    location: 'Hiratsuka, Oshima',
    note: "SHEIN Roundneck Pullover | DAZY Roundneck Tshirt | 🤔 Slim Fit Jean"
  },
  {
    date: '2022.12.26',
    location: 'Toyohashi',
    note: "SHEIN Corduroy Jacket | DAZY Roundneck Tshirt | 🤔 Regular Fit Jean"
  },
  {
    date: '2022.12.27',
    location: 'Toyohashi',
    note: "UCSD Hoodie | MUJI Highneck Long-sleeve | UNIQLO Slim Fit Straight Jean"
  },
  {
    date: '2022.12.28',
    location: 'Toyohashi',
    note: "DAZY Roundneck Tshirt | MUJI Turtleneck Long-sleeve | MUJI 撥水 ジャケット | SHEIN Drawstring Pants"
  },
].sort((a,b) => {
  if(a.date < b.date) return 1;
  else return -1;
})

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const App = memo(() => {
  const [imageName, setImageName] = useState('2023.02.13.png');
  const [imageLocation, setImageLocation] = useState(''); 
  const [imageNote, setImageNote] = useState(''); 
  const [artIndex, setDateIndex] = useState(0);

  useEffect(() => {
    console.debug('use effect');

    const x = document.querySelector(`li[name="${arts[artIndex].date}"]`);
    x.classList.add('active');
    setImageName(arts[artIndex].date + '.png');
    setImageNote(arts[artIndex].note);
    setImageLocation(arts[artIndex].location);
    x.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
  });

    return () => {};
  }, [artIndex])

  const onWheelHandler = (event) => {
    let e = window.event || event;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    let index = artIndex;
    let x = document.querySelector(`li[name="${arts[index].date}"]`);
    
    setTimeout(() => {
      if(delta > 0) {
        if(index === 0) return;
        index -= 1;
        x.classList.remove('active');
      } else {
        if(index === arts.length - 1) return;
        index += 1;
        x.classList.remove('active');
      }
  
      x = document.querySelector(`li[name="${arts[index].date}"]`);
      x.classList.add('active');
      setDateIndex(index);
    }, 75);
  }

  const onClickHandler = (e) => {
    const i = parseInt(e.currentTarget.dataset.index);
    if(artIndex === i) return;
    
    document.querySelector(`li[name="${arts[artIndex].date}"]`).classList.remove('active');
    setDateIndex(i);
  }

  const onClickPictureHandler = () => {
    if(arts[artIndex].cupless) {
      let visible = arts[artIndex].cupless.visible;
      let name = arts[artIndex].date+ '.png';
      if(!visible) {
        name = arts[artIndex].cupless.name + '.png';
      }
      arts[artIndex].cupless.visible = !visible;
      setImageName(name);
    }
  }

  const getDays = () => {
    if (arts[artIndex].day) {
      return arts[artIndex].day;
    } else {
      arts[artIndex]['day'] = days[new Date(arts[artIndex].date).getDay()];
      return arts[artIndex].day;
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
    </aside>
    <main className="main-frame">
      <Picture imageName={imageName} imageLocation={imageLocation} imageNote={imageNote} onClick={onClickPictureHandler}/>
    </main>
    <aside className="aside-right" onWheel={onWheelHandler}>
      <ul>
        {arts.map((art, i) => (
          <li key={art + i} name={art.date} data-index={i} onClick={onClickHandler}>
            <span className="location">📍{arts[artIndex].location}</span>
            <span className="day">{getDays()}</span>
            {art.date}
          </li>
        ))}
      </ul>
    </aside>
   </div>
   </>
  )
});
App.displayName = 'App';

export default App
