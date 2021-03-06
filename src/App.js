import './App.css';
import {BrowserRouter as Router,useLocation, Routes, Route} from 'react-router-dom';
import CreateRoom from './components/CreateRoom';
import Header from './components/Header'
import Room from './components/Room';
import { useState } from 'react';
import { AnimatePresence } from "framer-motion"

function App() {
  let location = useLocation();

  const [rooms, setRooms] = useState([])
  const [airCons, setAirCons] = useState([''])
  const [heaters, setHeaters] = useState([''])
  const [lights, setLights] = useState([''])
  const [stereos, setStereos] = useState([''])

  const createroom = (name,type,color) => {

    if (rooms.length != 0) {
      setRooms([...rooms,
        {
          name:name,
          index:rooms.length,
          type:type,
          color:color,
          items:0
        }
        ])
    }
    else {
      setRooms([
        {
          name:name,
          index:rooms.length,
          type:type,
          color:color,
          items:0
        }
        ])
    }
  }

  const updateRoomItems = (roomIndex) => {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].index == roomIndex) {
        rooms[i].items += 1;
        break;
      }
    }
  }

  const productPush = (productArray,roomIndex) => {
    productArray.push({
      index:productArray.length,
      roomIndex:roomIndex,
      status:false
    })
  }

  const addProducts = (roomIndex, product) => {
    if (product == 'ac') {
      airConPush(roomIndex)
    }
    else if (product == 'heater') {
      heaterPush(roomIndex)
    }
    else if (product == 'light') {
      lightPush(roomIndex)
    }
    else if (product == 'stereo') {
      stereoPush(roomIndex)
    }
    updateRoomItems(roomIndex)
  }
  
  const airConPush = (roomIndex) => {
    productPush(airCons,roomIndex);
    setAirCons([...airCons])
  }

  const heaterPush = (roomIndex)=> {
    productPush(heaters,roomIndex)
    setHeaters([...heaters])
  }

  const stereoPush = (roomIndex)=> {
    productPush(stereos,roomIndex)
    setStereos([...stereos])
  }

  const lightPush = (roomIndex)=> {
    productPush(lights,roomIndex)
    setLights([...lights])
  }

  const productPower = (productIndex,productArray) => {
    productArray.forEach((product) => {
      if (product.index == productIndex) {
        product.status = !product.status
      }
    })
  }

  const airConPower = (airConIndex) => {
    productPower(airConIndex,airCons)
    setAirCons(airCons)
  }

  const heaterPower = (heaterIndex) => {
    productPower(heaterIndex,heaters)
    setHeaters(heaters)
  }

  const lightPower = (lightIndex) => {
    productPower(lightIndex,lights)
    setLights(lights)
  }
  
  const stereoPower = (stereoIndex) => {
    productPower(stereoIndex,stereos)
    setStereos(stereos)
  }

  const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return textColorSet([ r, g, b ])
  }

  const textColorSet = (roomColor) => {
    const brightness = ((roomColor[0] * 299) + (roomColor[1] * 587) + (roomColor[2] * 114)) / 1000;
    return (brightness > 155) ? 'black':'white';
  }

  return (
    <div className="App">
      <div style={{height:'100vh'}}>
        <Header rooms={rooms} visible={true}/>

        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path='/' element={<h2>Welcome To Your Smart Home <br /><br /> Press + To Begin</h2>} />
          <Route exact path='/CreateRoom' element={<CreateRoom createRoomFunc={createroom}/>} />
          {rooms.map((room) => {
            return <Route exact path={'/'+room.type+'/'+room.name+'-'+room.index} element={
              <Room 
                roomName={room.name}
                roomIndex={room.index}
                roomType={room.type}
                roomColor={room.color}
                fontColor={hex2rgb(room.color)}
                roomItems={room.items}
                airCons={airCons}
                heaters={heaters}
                lights={lights}
                stereos={stereos}
                addProductsFunc={addProducts}
                stereoPower={stereoPower}
                lightPower={lightPower}
                heaterPower={heaterPower}
                airConPower={airConPower}
              />
            } />
          })}
        </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
