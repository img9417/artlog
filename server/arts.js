const arts = [
    {
      name: '2023.02.18',
      location: 'Hiratsuka, Oshima',
      note: 'SHEIN Roundneck Graphic Pullover | UNIQLO Airism Tshirt | DEMON HUNTER Stretch Jean'
    },
    {
      name: '2023.02.16',
      location: 'Hiratsuka, Oshima',
      note: 'LUCKY CHARM Turtleneck Sweater | 🤔 Regular Fit Pants'
    },
    {
      name: '2023.02.13',
      location: 'Hiratsuka, Oshima',
      note: 'MUJI 撥水 ジャケット | SHEIN Striped Half-Zip Pullover | 🤔 Regular Fit Pants'
    },
    {
      name: '2023.02.12',
      cupless: {
        name: '2023.02.12-cupless',
      },
      location: 'Hiratsuka, Kanagawa',
      note: 'KOGARASHI Check Pattern Trench Coat | 🤔 Button-up Long-sleeve | 🤔 Slim Fit Straight Jean'
    },
    {
      name: '2023.02.11',
      cupless: {
        name: '2023.02.11-cupless',
      },
      location: 'Hiratsuka, Oshima',
      note: 'ドン・キホーテ Roundneck Jacket | LUCKY CHARM Turtleneck Sweater | 🤔 Regular Fit Pants'
    },
    {
      name: '2023.02.09',
      location: 'Hiratsuka, Oshima',
      note: 'SHEIN Corduroy Jacket | DAZY Roundneck Tshirt | 🤔 Regular Fit Jean'
    },
    {
      name: '2023.02.08',
      location: 'Hiratsuka, Oshima',
      note: 'MUJI 撥水 ジャケット | Asayake Tshirt | 🤔 Regular Fit Jean'
    },
    {
      name: '2023.02.07',
      location: 'Hiratsuka, Oshima',
      note: 'SHEIN Graphic Pullover | SHEIN Drawstring Pants'
    },
    {
      name: '2023.02.06',
      location: 'Hiratsuka, Oshima',
      note: "ユナイテッドアスレ Men's Hoodie | DAZY Roundneck Tshirt | 🤔 Regular Fit Pants"
    },
    {
      name: '2023.02.04',
      location: 'Hiratsuka, Oshima',
      note: "Corduroy Jacket | Asayake Sweatshirt | 🤔 Regular Fit Jean"
    },
    {
      name: '2023.02.03',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Graphic Pullover | UNIQLO Airism Tshirt | 🤔 Regular Fit Pants"
    },
    {
      name: '2023.02.02',
      location: 'Hiratsuka, Oshima',
      note: "ドン・キホーテ Roundneck Jacket | ユナイテッドアスレ Men's Hoodie | 🤔  Regular Fit Pants"
    },
    {
      name: '2023.02.01',
      location: 'Hiratsuka, Oshima',
      note: "ドン・キホーテ Roundneck Jacket | Asayake Tshirt | DEMON HUNTER Stretch Jean"
    },
    {
      name: '2022.12.05',
      location: 'Hiratsuka, Oshima',
      note: "🤔 Drop Shoulder Sweatshirt | 🤔 Roundneck Tshirt | SHEIN Corduroy Pants"
    },
    {
      name: '2022.12.06',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Roundneck pullover | SHEIN Striped Half-Zip Pullover | 🤔 Regular Fit Jean"
    },
    {
      name: '2022.12.07',
      location: 'Hiratsuka, Oshima',
      note: "🤔 Leon Character Roundneck Sweatshirt | LUCKY CHARM Turtleneck Sweater | Asayake Tshirt | SHEIN Corduroy Pants"
    },
    {
      name: '2022.12.08',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Roundneck Pullover | 🤔 Polo Shirt | UNIQLO Slim Fit Pants"
    },
    {
      name: '2022.12.09',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Roundneck Pullover | 🤔 Button Down Shirt | 🤔 Slim Fit Straight Jean"
    },
    {
      name: '2022.12.10',
      location: 'Hiratsuka Starbucks',
      note: "SHEIN Roundneck Pullover | SHEIN Long-sleeve Shirt | SHEIN Drawstring Pants"
    },
    {
      name: '2022.12.11',
      location: 'Hiratsuka, Oshima',
      note: "GAGUO FASHION🤔 Long-sleeve Button Up | DEMON HUNTER Stretch Jean"
    },
    {
      name: '2022.12.12',
      location: 'Minatomirai Starbucks',
      note: "Roundneck Sweatshirt | DAZY Tshirt | 🤔 Straight Jean"
    },
    {
      name: '2022.12.13',
      location: 'Hiratsuka, Oshima',
      note: "LUCKY CHARM Turtleneck Sweater | SHEIN Roundneck Pullover | SHEIN Straight Pants"
    },
    {
      name: '2022.12.14',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Roundneck Pullover | SHEIN Stripe Sweatshirt | SHEIN Drawstring Pants"
    },
    {
      name: '2022.12.15',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Corduroy Jacket | 🤔 Long-sleeve Button Up | 🤔 Regular Fit Jean"
    },
    {
      name: '2022.12.16',
      location: 'Hiratsuka, Oshima',
      note: "KOGARASHI Check Pattern Trench Coat | 🤔 Long-sleeve Button Up | 🤔 Slim Fit Straight Jean"
    },
    {
      name: '2022.12.17',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Corduroy Jacket | LUCKY CHARM Turtleneck Sweater | DAZY Tshirt | SHEIN Drawstring Pants" 
    },
    {
      name: '2022.12.18',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Graphic Pullover | UNIQLO U Heattech Turtleneck | 🤔 Slim Fit Straight Jean"
    },
    {
      name: '2022.12.19',
      location: 'Hiratsuka, Oshima',
      note: "MUJI Waterproof Jacket | DAZY Roundneck Tshirt | 🤔 Regular Fit Jean"
    },
    {
      name: '2022.12.20',
      location: 'Hiratsuka, Oshima',
      note: "UNIQLO U Heattech Long-sleeve | BACK & FORTH Sweater | 🤔 Button Up Shirt | 🤔 Slim Fit Jean"
    },
    {
      name: '2022.12.21',
      location: 'Hiratsuka, Oshima',
      note: "UNIQLO U Heattech Long-sleeve | SHEIN Roundneck Sweatshirt | DEMON HUNTER Stretch Jean"
    },
    {
      name: '2022.12.22',
      location: 'Hiratsuka, Oshima',
      note: "MUJI Highneck Long-sleeve | SHEIN Drawstring Pants"
    },
    {
      name: '2022.12.23',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Corduroy Jacket | MUJI Highneck Long-sleeve | SHEIN Corduroy Pants"
    },
    {
      name: '2022.12.24',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Corduroy Jacket | MUJI Highneck Long-sleeve | 🤔 Regular Fit Jean"
    },
    {
      name: '2022.12.25',
      location: 'Hiratsuka, Oshima',
      note: "SHEIN Roundneck Pullover | DAZY Roundneck Tshirt | 🤔 Slim Fit Jean"
    },
    {
      name: '2022.12.26',
      location: 'Toyohashi',
      note: "SHEIN Corduroy Jacket | DAZY Roundneck Tshirt | 🤔 Regular Fit Jean"
    },
    {
      name: '2022.12.27',
      location: 'Toyohashi',
      note: "UCSD Hoodie | MUJI Highneck Long-sleeve | UNIQLO Slim Fit Straight Jean"
    },
    {
      name: '2022.12.28',
      location: 'Toyohashi',
      note: "DAZY Roundneck Tshirt | MUJI Turtleneck Long-sleeve | MUJI 撥水 ジャケット | SHEIN Drawstring Pants"
    },
]